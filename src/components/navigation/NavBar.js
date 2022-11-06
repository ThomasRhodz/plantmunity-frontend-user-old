//MUI Components
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import Logo from '../../images/PlantmunityLogo2.png';

import {navigate} from 'gatsby';


 //Icons
 import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
 import SearchIcon from '@mui/icons-material/Search';
 import Avatar from '@mui/material/Avatar';
 import ExploreIcon from '@mui/icons-material/Explore';
 import StorefrontIcon from '@mui/icons-material/Storefront';
 import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
 import NotificationsIcon from '@mui/icons-material/Notifications';
 import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

//MUI Styling
import '../../css/pageStyles.css';
import { makeStyles } from "@material-ui/core/styles";


//styling
const useStyles = makeStyles((theme) => ({
    Bar: {
        backgroundColor: 'white',
        color: 'black',
    },

    searchBar: {
        display: 'flex',
        [theme.breakpoints.between('sm','md')]: {
            display: 'none',
        },
    },

    searchIcon: {
        display: 'none',
        [theme.breakpoints.between('sm', 'md')]: {
            display: 'flex',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:'#efeff4',
    '&:hover': {
        border: "1px solid #58a776",

    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '15ch',
        '&:focus': {
          width: '21ch',
        },
      },
    },
  }));


//Actual Components
 const NavBar = ({iconID}) => {

    //Variables
    const classes = useStyles();

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
            id: 1,
            location: '/home',
            name: 'Home',
            icon: <HomeRoundedIcon fontSize='large' style={iconID === 1 ?{color: 'white'}:{color: '#BFCBA5'}}/>

        },

        {
            id: 2,
            location: '/discover',
            name: 'Discover',
            icon: <ExploreIcon fontSize='large' style={iconID === 2 ?{color: 'white'}:{color: '#BFCBA5'}}/>

        },

        {
            id: 3,
            location: '/marketPlace',
            name: 'Marketplace',
            icon: <StorefrontIcon fontSize='large' style={iconID === 3 ?{color: 'white'}:{color: 'BFCBA5'}}/>

        },

        {
            id: 4,
            location: '/messages',
            name: 'Messages',
            icon: <EmailRoundedIcon fontSize='large' style={iconID === 4 ?{color: 'white'}:{color: 'BFCBA5'}}/>

        },

        {
            id: 5,
            location: '/notifications',
            name: 'Notifications ',
            icon: <NotificationsIcon fontSize='large' style={iconID === 5 ?{color: 'white'}:{color: 'BFCBA5'}}/>

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
        <AppBar position="fixed" style={{backgroundColor: '#5C6D63', color: 'black'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >

                    <Grid container direction="row" alignItems="center" style={{ width: '380px'}} sx={{display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                        {/* For Iogo without flex for desktop view*/}
                        <Grid item justify='center' display={{xs: 'none', md: 'flex'}}>
                                <div>
                                    <div style={{width: '120px', marginRight: 'auto', marginLeft: 'auto'}}>
                                        <img
                                            src= {Logo}
                                            width={120}
                                            alt='logo'
                                        />
                                    </div>
                                </div>
                        </Grid>

                        {/* For search Bar */}  
                        <Grid item className={classes.searchBar}>
                            <Search sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }} >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Grid>
                              
                    </Grid>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' }}} />
                    
                    {/* For logo with flex that stays on the left side of the header for tablet and mobile devices*/}
                    <Grid item justify='center' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <div>
                            <div style={{width: '130px', marginRight: 'auto', marginLeft: 'auto'}}>
                                <img
                                    src={Logo}
                                    width={130}
                                    alt='logo'
                                />
                            </div>
                        </div>
                    </Grid>
                    

                    <Search sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }} >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                    </Search>
                    {/* For nav option or pages */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }}>

                        {page.map(({id, location, name, icon}) => (
                            <React.Fragment key={id} >
                                <Tooltip title={name} role='link' onClick={()=>{navigate(location)}}>
                                    <IconButton color="inherit" aria-label="open drawer" size='large' >
                                        {icon}
                                    </IconButton>
                                </Tooltip>
                                <div style={{width:20}} />
                            </React.Fragment>
                        ))}
                    </Box>

                    

                    {/* Box that pushes avatar icon to make the serach bar center (For tablets) */} 
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'none' }}} />

                    {/* For Icon Button for mobile devices */}   
                    <IconButton color="inherit" aria-label="open drawer" size='large' sx={iconID===2?{ display: 'none'}:{display: { xs: 'flex', sm: 'none', md: 'none' } }} >
                        <SearchRoundedIcon fontSize='large' style={{ color: '#6da58a'}}/>
                    </IconButton>

                    {/* For Account Menu*/}
                    <Grid container direction='row' alignItems='center' sx={{ flexGrow: 0, width: {xs: '40px', sm: '130px', md:'400px'}}}>
                       <Grid item sx={{flexGrow: 1}} />
                       <Grid item className={classes.searchIcon} >
                            {/* For Icon Button for mobile devices */}   
                            <IconButton color="inherit" aria-label="open drawer" size='large'> 
                                <SearchRoundedIcon fontSize='large' style={{ color: '#6da58a'}}/>
                            </IconButton>
                        </Grid> 
                       <Grid item>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="https://preview.redd.it/k809t2b7zca51.jpg?width=640&crop=smart&auto=webp&s=90c9b0cb15c510b5fb0643954cbb27fd51ff7ecd" />
                                </IconButton>
                            </Tooltip>
                       </Grid>
                        

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
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
 }
 
 
export default NavBar