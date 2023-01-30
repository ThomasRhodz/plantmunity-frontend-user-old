import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';


import logo from '../../images/PlantmunityAlt.png'
import {navigate} from 'gatsby';


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const LandingNavbar = ({activePage, color}) => {

    const pages = [
      {
        id: 1,
        pageName:'Home',
        location: '/',
        activeColor: activePage === 1 ? true : false
        
      },
      {
        id: 2,
        location: '/aboutUs',
        pageName:'About Us',
        activeColor: activePage === 2 ? true : false
      }, 
      {
        id: 3,
        pageName:'Contact',
        location: '/contact',
        activeColor: activePage === 3 ? true : false
      }, 
      {
        id: 4,
        pageName:'FAQs',
        location: '/faq',
        activeColor: activePage === 4 ? true : false
      }, 
    ];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
 
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  
  
    return (
      <AppBar position="static" elevation={0} sx={color==="transparent" ?{backgroundColor:'transparent', paddingLeft: 5, paddingRight: 5} : {backgroundColor:'#5C6D63', paddingLeft: {xs:0, sm:3, md:5}, paddingRight: {xs:0, sm:3, md:5}}} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/** Logo component  for desktop view*/}
            <Box sx={{display: { xs: 'none', md: 'flex' }, flexGrow:1}}>
               <img src={logo} alt="Logo" width="90px" height="30px"/>
            </Box>
           
            {/** Menu icon for tablet and mobile view  */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color:'white' }}
              >
                <MenuIcon />
              </IconButton>

              {/** Menu, which opens when menu icon id clicked */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/** mapping the array of page as menu item */}
                {pages.map(({id, pageName, location}) => (
                  <MenuItem key={id} onClick={()=>{navigate(location)}}>
                    <Typography textAlign="center" fontFamily={'-apple-system'}>{pageName}</Typography>
                  </MenuItem>
                ))}
              </Menu> {/** end of menu */}
            </Box>
            
            {/** Landing Logo for tablet or mobile devices */}
            <Box  sx={{display: { xs: 'flex', md: 'none' }}}>
               <img src={logo} alt="Logo" width="90px" height="30px"/>
            </Box>
             
            {/** Box component for menu in desktop view*/}
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
              {pages.map(({id, pageName, activeColor, location}) => (
                <Button
                  key={id}
                  onClick={()=>{navigate(location)}}
                  sx={activeColor? { color: '#BFCBA5', display: 'block', fontFamily: 'raleway',  fontSize: 20, fontWeight: 'bold', paddingLeft: 3, paddingRight: 3  } : { color: 'white', display: 'block', fontFamily: 'raleway',   fontSize: 20, fontWeight: 'bold', paddingLeft: 3, paddingRight: 3  }}
                >
                  {pageName}
                </Button>
              ))}
              <Box sx={{width:10}}/>
              <Button
                onClick={()=>{navigate('/login')}}
                variant="contained"
                sx={ activePage === 5 ? {display: 'none'} : {width:150, height:45, borderRadius:5, backgroundColor:'#7C8470', color: 'white', display: 'block', fontFamily: 'Arvo', fontSize: 20, fontWeight: 'bold' }}
              >
                  Log In
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
}

export default LandingNavbar