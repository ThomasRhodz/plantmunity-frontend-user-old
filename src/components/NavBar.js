//MUI Components
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

 //Icons
 import ExploreIcon from '@mui/icons-material/Explore';
 import StorefrontIcon from '@mui/icons-material/Storefront';
 import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
 import NotificationsIcon from '@mui/icons-material/Notifications';
 import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

//MUI Styling
import '../css/pageStyles.css';
import { makeStyles } from "@material-ui/core/styles";
import { width } from '@mui/system';
//import { useTheme } from '@mui/material/styles';
//import useMediaQuery from '@mui/material/useMediaQuery';

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
        width: '12ch',
        '&:focus': {
          width: '18ch',
        },
      },
    },
  }));


//Actual Components
 const NavBar = () => {

    //Variables
    const classes = useStyles();

    const pages = [
        {
            id: 1,
            icon: HomeRoundedIcon,
            title: 'Home'

        },

        {
            id: 2,
            icon: 'ExploreIcon',
            title: 'Discover'

        }
    ];
    const settings = ['Profile', 'Account', 'Logout'];


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

     return (
        <AppBar position="static" style={{backgroundColor: 'white', color: 'black'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >

                    <Grid container direction="row" alignItems="center" style={{ width: '380px'}} sx={{display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                        {/* For Iogo without flex for desktop view*/}
                        <Grid item justify='center' display={{xs: 'none', md: 'flex'}}>
                                <div>
                                    <div style={{width: '120px', marginRight: 'auto', marginLeft: 'auto'}}>
                                        <img
                                            src='https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.15752-9/207912649_3025017804402687_6625310251926066918_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEfsmMCyWqQP5RqlU-rPEeSmMpJYnJXYMuYyklicldgyzoOl5D1_SssUFWV0JmEOBnauKuiCPIIYIY8DMbZ6zbH&_nc_ohc=TR56u-JEp0EAX_kpJD_&_nc_ht=scontent.fmnl8-1.fna&oh=03_AVLYmxzF4YkkyFqL59ScbX-x2Pjwzf2um-M-rbOjfTcTNA&oe=61FF2C0B'
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
                                    src='https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.15752-9/207912649_3025017804402687_6625310251926066918_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEfsmMCyWqQP5RqlU-rPEeSmMpJYnJXYMuYyklicldgyzoOl5D1_SssUFWV0JmEOBnauKuiCPIIYIY8DMbZ6zbH&_nc_ohc=TR56u-JEp0EAX_kpJD_&_nc_ht=scontent.fmnl8-1.fna&oh=03_AVLYmxzF4YkkyFqL59ScbX-x2Pjwzf2um-M-rbOjfTcTNA&oe=61FF2C0B'
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
                        <Tooltip title="Home">
                            <IconButton color="inherit" aria-label="open drawer" size='large' >
                                <HomeRoundedIcon fontSize='large' style={{color: '#D5AB82'}}/>
                            </IconButton>
                        </Tooltip>
                        <div style={{width:20}} />
                        <Tooltip title="Discover">
                            <IconButton color="inherit" aria-label="open drawer" size='large'>
                                <ExploreIcon fontSize='large' />
                            </IconButton>
                        </Tooltip>
                        <div style={{width:20}} />
                        <Tooltip title="Marketplace">
                            <IconButton color="inherit" aria-label="open drawer" size='large'>
                                <StorefrontIcon fontSize='large' />
                            </IconButton>
                        </Tooltip>
                        <div style={{width:20}} />
                        <Tooltip title="Messages">
                            <IconButton color="inherit" aria-label="open drawer" size='large'>
                                <EmailRoundedIcon  fontSize='large' />
                            </IconButton>
                        </Tooltip>
                        <div style={{width:20}} />
                        <Tooltip title="Notification">
                            <IconButton color="inherit" aria-label="open drawer" size='large'>
                                <NotificationsIcon  fontSize='large' />
                            </IconButton>
                        </Tooltip>
                    </Box>

                    

                    {/* Box that pushes avatar icon to make the serach bar center (For tablets) */} 
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'none' }}} />

                    {/* For Icon Button for mobile devices */}   
                    <IconButton color="inherit" aria-label="open drawer" size='large' sx={{display: { xs: 'flex', sm: 'none', md: 'none' } }} >
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
                                    <Avatar alt="Remy Sharp" src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/271135828_2963978013854662_5952441335434695660_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEYKAFQcpYr4FgGfC17IChAXZAfI2OPF-BdkB8jY48X4P3CDHocuKoJ40Z-gGXg8b_celYHQb6iF5YYXiLKoD_R&_nc_ohc=CNJr4T9QjzgAX_epx4s&tn=1EZ9Z5HQcW3uJjd0&_nc_ht=scontent.fcrk4-1.fna&oh=00_AT8duqeNdjTPt62AjMQ5SgbYvHsMrrbEJjhTzJMvpqXT6g&oe=61EC26CD" />
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
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
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