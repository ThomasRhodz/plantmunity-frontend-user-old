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
 import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
 import NotificationsIcon from '@mui/icons-material/Notifications';
 import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
 import Logo from '../../images/PlantmunityAlt2.png';
//MUI Styling
import '../../css/pageStyles.css';
import { SearchField } from '../basic/StyledComponents';
import ViewUserSearchDialog from '../dialogs/ViewUserSearchDialog';

const drawerWidth = 230;

//Actual Components
 const NavBar = ({title, handleChange, iconID}) => {

    const {logout} = useAuth()
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const desktop = useMediaQuery(theme.breakpoints.down(1000));
    const firstname = useSelector((state) => state.user.first_name);
    const image = useSelector((state) => state.user.image) ;

    const menu = [
        {
            id: 1,
            tab: 0,
            location: '/profile',
            name: 'Profile'

        },
        {
            id: 4,
            tab: 0,
            location: '',
            name: 'My Shop'

        },
        {
            id: 5,
            tab: 0,
            location: '',
            name: 'Affiliates'

        },

        {
            id: 3,
            tab: 0,
            location: 'bye',
            name: 'Logout'

        },

    ];

    const page = [
        {
            id: 0,
            tab: 0,
            location: '/myCart',
            name: 'My Cart',
            icon: <ShoppingCartRoundedIcon style={{fontSize: 28, color: '#707F77'}}/>

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
            location: '/notifications',
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

                        <Grid item >
                            <Stack direction='row' alignItems={'center'} sx={{minWidth:{xs:50, sm:50, md: desktop? 30:200}}}>
                                {page.map(({id, location, name, icon, tab}) => (
                                    <Box key={id} sx={{ display: { xs: 'none', sm: 'none', md: desktop? 'none' :'flex' } }}>
                                        <Tooltip  title={name} role='link' sx={{mb:2}} >
                                            <IconButton  
                                                onClick={()=>{
                                                    location === '' ? handleChange(tab) :
                                                    navigate(location)
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
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                                            <Avatar sx={{   width:35, height:35}} alt={firstname} src={image}/>
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
                                    {menu.map(({id, location, name}) => (
                                        <MenuItem 
                                            key={id} 
                                            role='link' 
                                            onClick={()=>{
                                                location === 'bye' ? logout() :
                                                location === '' ? handleChange(id) :
                                                navigate(location)
                                            }}
                                        >
                                            <Typography textAlign="left" sx={{ fontFamily:'Arvo', minWidth:80 }}>{name}</Typography>
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