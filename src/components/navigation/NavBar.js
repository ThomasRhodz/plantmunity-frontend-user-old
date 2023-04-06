//MUI Components
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Box, Grid, Stack, Dialog} from '@mui/material';
import { useSelector } from 'react-redux';
import {navigate} from 'gatsby';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import useAuth from '../../app/hooks/useAuth';

 //Icons
 import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
 import Avatar from '@mui/material/Avatar';
 import NotificationsIcon from '@mui/icons-material/Notifications';
 import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
 import Logo from '../../images/PlantmunityAlt2.png';

 import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
 import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';
 import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
 import { FaStore, FaShoppingBag } from 'react-icons/fa';
 import {BsFillPeopleFill} from 'react-icons/bs'; 
//MUI Styling
import '../../css/pageStyles.css';
import { SearchField } from '../basic/StyledComponents';
import ViewUserSearchDialog from '../dialogs/ViewUserSearchDialog';

const drawerWidth = 230;


//Actual Components
 const NavBar = ({title, handleChange, iconID, popUpId, handlePopChange}) => {

    const {logout} = useAuth()
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const desktop = useMediaQuery(theme.breakpoints.down(1000));
    
    const firstname = useSelector((state) => state.user.first_name);
    const middlename = useSelector((state) => state.user.middle_name);
    const lastname = useSelector((state) => state.user.last_name);
    const fullname = firstname + " " + (middlename === "" ? "" : middlename === null ? "" : middlename) + " " + lastname
    const image = useSelector((state) => state.user.image) ;

    const menu = [
        {
            id: 4,
            type:'component',
            tab: 4,
            name: 'My Shop'
        },
        {
            id: 8,
            type:'dialog',
            tab: 8,
            name: 'My Orders'
        },
        {
            id: 5,
            type:'component',
            tab: 5,
            name: 'Affiliates'
        },
        {
            id: 6,
            type:'dialog',
            tab: 9,
            name: 'Terms and Policy'

        },
        {
            id: 7,
            type:'dialog',
            tab: 10,
            name: 'Give Feedbacks'
        },
        {
            id: 3,
            type:'dialog',
            tab: 0,
            location: 'bye',
            name: 'Logout'

        },


    ];

    const page = [
        {
            id: 0,
            tab: 8,
            location: '',
            name: 'My Orders',
            icon: <FaShoppingBag style={{fontSize: 25, color: '#707F77'}}/>

        },

        {
            id: 1,
            tab: 6,
            location: '',
            name: 'Messages',
            icon: <EmailRoundedIcon style={{fontSize: 28, color: '#707F77'}}/>

        },

        {
            id: 2,
            tab: 7,
            location: '',
            name: 'Notifications ',
            icon: <NotificationsIcon  style={{fontSize: 28, color: '#707F77'}}/>

        },

    ];
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResult, setSearchResult] = React.useState(false);

    const openSearch = () => {
        setSearchResult(true);
    };

    const closeSearch = () => {
        setSearchResult(false);
    };

    const iconChanger = (iconText) => {
        if(iconText === "My Shop"){
            return <FaStore  style={{ marginRight:15, marginLeft:5, fontSize:18, color:"#5c6d63" }} />
        }
        else if (iconText === "My Orders"){
            return <FaShoppingBag style={{ marginRight:15, marginLeft:5, fontSize:18, color:"#5c6d63" }}/>
        }else if (iconText === "Affiliates"){
            return <BsFillPeopleFill style={{ marginRight:15, marginLeft:5, fontSize:18, color:"#5c6d63" }}/>
        }else if (iconText === "Terms and Policy"){
            return <PolicyRoundedIcon style={{ marginRight:15, marginLeft:3, fontSize:18, color:"#5c6d63" }}/>
        }else if (iconText === "Give Feedbacks"){
            return <FeedbackRoundedIcon style={{ marginRight:15, marginLeft:3, fontSize:18, color:"#5c6d63" }}/>
        }else{
            return <LogoutRoundedIcon style={{ marginRight:15, marginLeft:3, fontSize:18, color:"red" }}/>
        }
    }

     return (
        <AppBar 
            position="fixed"
            sx={{ 
                width: {xs: '100%', sm: '100%', md:`calc(100% - ${drawerWidth}px)`}, 
                height:60, ml: `${drawerWidth}px`, 
                backgroundColor:{xs: '#5C6D63', sm: '#5C6D63', md:'#F3F4F8'}
            }}
            elevation={0}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Grid container direction="row" alignItems="center" sx={{ width: '100%'}} >
                        <Grid item sx={{flexGrow:1, pt:1, display: { xs: 'flex', sm: 'flex', md: 'none' }}}>
                            <Stack direction='column' alignItems={'center'} >
                                <Grid >
                                    <img
                                        src= {Logo}
                                        style={{width:90, height:30}}
                                        alt='logo'
                                    />
                                </Grid> 
                            </Stack>
                        </Grid>
                        <Grid item sx={{flexGrow:1, display: { xs: 'none', sm: 'none', md: 'flex' }}}>
                            <Typography 
                                variant={'h5'}
                                sx={{
                                    fontFamily:'Arvo', 
                                    minWidth:200,
                                    color:'#5C6D63'
                                }}
                            >
                                {title}
                            </Typography>
                        </Grid>

                        {/* For search Bar */}  
                        <Grid item sx={{flexGrow:1, display: { xs: 'none', sm: 'flex', md: 'flex'}}}>
                            <Stack 
                                direction='row' 
                                alignItems={'center'}
                                sx={{
                                    backgroundColor:'white', 
                                    width:250, 
                                    borderRadius:10,  
                                    border:'1px solid #E7E9EB',
                                }} 
                            >
                                <IconButton onClick={()=>openSearch()}>
                                    <SearchRoundedIcon sx={{ color:'#5C6D63' }} />
                                </IconButton>

                                <SearchField
                                    variant='outlined'
                                    inputProps={{ style: { fontFamily: 'Arvo',}}}
                                    placeholder={"Search Plantmunity"}
                                    value={ searchTerm } 
                                    onChange={(event)=> setSearchTerm(event.target.value)}
                                    size='small'
                                />
                                
                            </Stack>
                        </Grid>

                        <Grid item sx={{display: { xs: 'flex', sm: 'none', md: 'none'}, mr:1}}>
                            <IconButton onClick={()=>openSearch()} sx={{ bgcolor:'#BFCBA5', width:35, height:35 }}>
                                <SearchRoundedIcon sx={{ color:'white' }} />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <Stack direction='row' alignItems={'center'} sx={{minWidth:{xs:35, sm:35, md: desktop? 30:180}}}>
                                {page.map(({id, location, name, icon, tab}) => (
                                    <Box key={id} sx={{ display: { xs: 'none', sm: 'none', md: desktop? 'none' :'flex' } }}>
                                        <Tooltip  title={name} role='link' sx={{mb:2}} >
                                            <IconButton  
                                                onClick={()=>{
                                                    id === 1 ? handleChange(tab) : handlePopChange(tab) 
                                                }} 
                                                color="inherit" 
                                                aria-label="open drawer" 
                                                size='large' 
                                                sx={{p:1, marginRight:'3px'
                                            }}>
                                                {icon}
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                   
                                ))} 
                                <Box >
                                    <Tooltip title="Open menu">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                                            <Avatar sx={{ width:35, height:35}} alt={firstname} src={image}/>
                                        </IconButton>
                                    </Tooltip> 
                                </Box>
                               

                                {/*Menu for User Account */}
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <menuItem role='link' onClick={() =>navigate("/profile")} sx={{ width:200, }}>
                                        <Stack direction='row' alignItems='center'sx={{ m:2, mt:1, p:1, pl:3, pr:3, border:'1px solid #EFEFF4', borderRadius: 3, boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)' }}>
                                            <Avatar src={image} sx={{ width: 35, height:35}} />
                                            <Typography variant='body2' sx={{ ml:2, fontFamily:'Arvo', color: "5c6d63"  }}>
                                                {fullname}
                                            </Typography>        
                                        </Stack>
                                    </menuItem>
                                    {menu.map(({id, name, tab, type}) => (
                                        <MenuItem 
                                            key={id} 
                                            role='link' 
                                            onClick={()=>{
                                                name === 'Logout' ? logout() :
                                                type === 'dialog' ? handlePopChange(tab) :  handleChange(tab) 
                                            }}
                                            sx={{ mt:1 }}
                                        >
                                            {iconChanger(name)}
                                            <Typography textAlign="left" variant='body2' sx={{ fontFamily:'Arvo', minWidth:80, color: name === "Logout" ? "red" : "#5c6d63" }}>{name}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Stack>
                        </Grid>      
                    </Grid>
                </Toolbar>

                <Dialog
                    maxWidth={false}
                    fullScreen={mobile}
                    scroll="body"
                    open={searchResult}
                    onClose={closeSearch}
                >
                    <ViewUserSearchDialog
                        searchTerm={searchTerm}
                        handleClose={() => closeSearch()}
                    />
                </Dialog>
            </Container>
        </AppBar>
    )
 }
 
 
export default NavBar