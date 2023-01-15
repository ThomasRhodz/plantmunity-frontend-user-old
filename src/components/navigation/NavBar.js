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
import {Box, Grid, Stack} from '@mui/material';

import {navigate} from 'gatsby';


 //Icons
 import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
 import Avatar from '@mui/material/Avatar';
 import ExploreIcon from '@mui/icons-material/Explore';
 import NotificationsIcon from '@mui/icons-material/Notifications';
 import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
 import Logo from '../../images/PlantmunityLogo2.png';
//MUI Styling
import '../../css/pageStyles.css';
import { SearchField } from '../basic/StyledComponents';

const drawerWidth = 230;

//Actual Components
 const NavBar = ({title, iconID}) => {

    const menu = [
        {
            id: 1,
            location: '/profile',
            name: 'Profile'

        },

        {
            id: 2,
            location: '/settings',
            name: 'Account'

        },

        {
            id: 3,
            location: '/login',
            name: 'Logout'

        },

    ];

    const page = [
        {
            id: 0,
            location: '/discover',
            name: 'Discover',
            icon: <ExploreIcon style={{fontSize: 28, color: '#707F77'}}/>

        },

        {
            id: 1,
            location: '/messages',
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

     return (
        <AppBar 
            position="fixed"
            sx={{ 
                width: {xs: '100%', sm: '100%', md:`calc(100% - ${drawerWidth}px)`}, 
                height:65, ml: `${drawerWidth}px`, 
                backgroundColor:{xs: '#5C6D63', sm: '#5C6D63', md:'#F3F4F8'}
            }}
            elevation={0}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Grid container direction="row" alignItems="center" style={{ width: '100%'}} >
                        <Grid item sx={{flexGrow:1, display: { xs: 'flex', sm: 'flex', md: 'none' }}}>
                            <Stack direction='column' alignItems={'center'} >
                                <Grid >
                                    <img
                                        src= {Logo}
                                        style={{width:130, height:60}}
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
                                <IconButton>
                                    <SearchRoundedIcon sx={{ color:'#5C6D63' }} />
                                </IconButton>

                                <SearchField
                                    variant='outlined'
                                    inputProps={{ style: { fontFamily: 'Arvo',}}}
                                    placeholder={"Search Plantmunity"}
                                    // value={ search } 
                                    // onChange={handleSearchChange}
                                    size='small'
                                />
                                
                            </Stack>
                        </Grid>

                        <Grid item >
                            <Stack direction='row' alignItems={'center'} sx={{minWidth:{xs:50, sm:50, md:200}}}>
                                {page.map(({id, location, name, icon}) => (
                                    <Box key={id} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                                        <Tooltip  title={name} role='link' sx={{mb:2}} onClick={()=>{navigate(location)}}>
                                            <IconButton color="inherit" aria-label="open drawer" size='large' sx={{p:1, mr:1}}>
                                                {icon}
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                   
                                ))} 
                                <Box >
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                                            <Avatar sx={{   width:35, height:35}} alt="Remy Sharp" src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/316676504_3212779305641197_1050176977558317665_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=1QHMPCZzvX8AX-NK3_a&tn=rNDVmRy3DV9Pe2vC&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfB1h6f_ojh6lIzBpoXhftRaVAmBFqG2C4xTPQ6IDTulIg&oe=63C849F5" />
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
                                        <MenuItem key={id} role='link' onClick={()=>{navigate(location)}}>
                                            <Typography textAlign="center">{name}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Stack>
                        </Grid>      
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
 }
 
 
export default NavBar