//React Components
import React from 'react';
import {Avatar, Box, Drawer, Divider, Grid, Stack, Typography} from '@mui/material/';
import {CssBaseline, Toolbar, List, ListItem, ListItemButton, ListItemIcon,ListItemText } from '@mui/material/';
import { useSelector } from 'react-redux';

//Icons
import {BsFillPeopleFill} from 'react-icons/bs';
import {FaUser, FaStore } from 'react-icons/fa';
import ExploreIcon from '@mui/icons-material/Explore';
import StoreIcon from '@mui/icons-material/Store';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Logo from '../../images/PlantmunityAlt2.png';

//For notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Navigation
import { navigate } from 'gatsby';
import NavBar from './NavBar';
import BottomAppBar from './BottomNavBar';

import Timeline from '../body/Timeline';
import MyShop from '../body/MyShop';
import MarketPlace from '../body/MarketPlace';
import AssociateTab from '../body/AssociateTab';

// //Hooks abd API Calls
// import useAuth from '../../app/hooks/useAuth';
// import {useSelector } from 'react-redux';

//Menu List
const mainMenu = [
    {
        id: 0,
        name: 'Home',
        destination: '',
    },
    {
        id: 1,
        name: 'Profile',
        destination: '/profile',
    },
    {
        id: 4,
        name: 'My Shop',
        destination: '',
    },
    {
        id: 2,
        name: 'Discover',
        destination: '/discover',
    },
    {
        id: 3,
        name: 'Marketplace',
        destination: '',
    },
    {
        id: 5,
        name: 'Affiliates',
        destination: '',
    },
];

const drawerWidth = 230;


//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

const HomeNavBar = () => {

    //initializing a tost as a function that will be dynamic depending on the action done by the user.
    const notify = (message) => toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

   // const {logout, resetAccount } = useAuth(); //Using logout() from useAuth under Hook folder


    //Redux Static Values (User details -> userSlice.js)
    const firstname = useSelector((state) => state.user.first_name);
    const image = useSelector((state) => state.user.image) ;
    const lastname = useSelector((state) => state.user.last_name);
    const username = useSelector((state) => state.user.username);

    const fullName = firstname+' '+lastname;

    //States
    const [selectedMenu, setSelectedMenu] = React.useState(0)
    const [menuName, setMenuName] = React.useState('Home')
    const userFullName = (firstname !== undefined ? fullName : 'User Name');
    const userName = (username !== undefined ? username : '#UserTag');
    

    // for opening menu
    const handleBottomNavChange = (target) => {
      setSelectedMenu(target);
    };

 
    // function that will help the menu item to set ther icon base on the menu title.
    const iconChanger = (menuName) => {
        if (menuName === 'Home') {
            return <HomeRoundedIcon sx={{fontSize:25, color: selectedMenu === 0 ? '#BFCBA5' : 'white'}}/>;
        }else if (menuName === 'Profile') {
          return <FaUser style={{fontSize:22, color: selectedMenu === 1 ? '#BFCBA5' : 'white'}}/>;
        }else if (menuName === 'Marketplace') {
          return <StoreIcon sx={{fontSize:25, color: selectedMenu === 3 ? '#BFCBA5' : 'white'}}/>;
        }else if (menuName === 'Discover') {
          return <ExploreIcon sx={{fontSize:22, color: selectedMenu === 2 ? '#BFCBA5' : 'white'}}/>;
        }else if (menuName === 'My Shop') {
          return <FaStore style={{fontSize:20, color: selectedMenu === 4 ? '#BFCBA5' : 'white'}}/>;
        }else{
            return <BsFillPeopleFill style={{fontSize:20, color: selectedMenu === 5 ? '#BFCBA5' : 'white'}}/>;
        }   
    };

    const handleChangeMenu = (id, name) => {
      setSelectedMenu(id)   
      setMenuName(name)
    }

  return (
    <Box sx={{ display: {xs:'block', sm:'block', md:'flex'}, height:'100%' }}>
      {/* Component that contain the notification as toas when action is done. */}
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <CssBaseline />

      {/* Top Bar */}
      <NavBar title={menuName} handleChange={(target)=> handleBottomNavChange(target)}/>

      {/* Side Bar | Side Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid white',
            backgroundColor:'#5C6D63',
            display: { xs: 'none', sm: 'none', md: 'flex' }
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* User's avatar, name and username */}
        <Stack direction='column' alignItems={'center'} sx={{width:'100%', mt:1 }}>
           <Grid display={{xs: 'none', md: 'flex'}}>
                <img
                    src= {Logo}
                    style={{width:120, height:50}}
                    alt='logo'
                />
            </Grid> 
            <Divider variant='middle' style={{ background: 'white', width:160, height:1, marginTop:8 }}/>
        </Stack>
       
        

        <Grid container direction='column' alignItems='center' sx={{width:'100%',pt:2, pb:1}}>
           
            <Stack direction='column' alignItems='center'>
                <Avatar 
                    sx={{width:90, height:90, mb:1}} 
                    src={image}
                />
                <Typography sx={{fontFamily:'arvo', fontSize:13, fontWeight:'bold', color: 'white'}}>
                    {userFullName} 
                </Typography>
                <Typography sx={{fontFamily:'Raleway', fontSize:10, fontWeight:'bold',color: 'white'}}>
                    {userName}
                </Typography>
            </Stack>
           
        </Grid>
       

       {/* Side menu that shows a differencet menu based  on user's type */}
        <List sx={{mt:1}}>
          {mainMenu.map(({id, name, destination}) => (
            <ListItem key={id} disablePadding sx={{pl:2, pb:1,}}>
              <ListItemButton onClick={() => 
                  {
                        destination === '' ? handleChangeMenu(id, name) : navigate(destination)
                  } 
                } 
                sx={{backgroundColor:selectedMenu === id ? '#F3F4F8' : '', borderRadius:'20px 0px 0px 20px'}}
              >
                <ListItemIcon sx={{ml:3}}>
                  {iconChanger(name)}
                </ListItemIcon>
                <ListItemText 
                    primary={
                        <Typography sx={{fontSize:13, marginLeft:'-10px',     fontFamily:'Arvo', color: selectedMenu === id ? '#BFCBA5' : 'white'}}>
                            {name}
                        </Typography>
                    } 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* End of side drawer */}

        
      
        {/* Box that holds the nmain contents */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: {xs:1, sm:2, md:2}, height:'100%'}}
      >
        <Toolbar />
        <Stack sx={{width:'100%', marginTop:'-15px'}}>
            <Divider sx={{bgcolor:'#f3f4f8', width:'100%', height:2 }}/>
        </Stack>

        <Grid sx={{width:'100%', display: selectedMenu === 0 ? 'flex' : 'none',}}>
          <Timeline />
        </Grid>

        <Grid sx={{width:'100%', display: selectedMenu === 4 ? 'flex' : 'none',}}>
          <MyShop />
        </Grid>

        <Grid sx={{width:'100%', display: selectedMenu === 3 ? 'flex' : 'none',}}>
          <MarketPlace />
        </Grid>

        <Grid sx={{width:'100%', display: selectedMenu === 5 ? 'flex' : 'none',}}>
          <AssociateTab />
        </Grid>

      </Box>
      
      <BottomAppBar handleChange={(value)=>handleBottomNavChange(value)}/>
    </Box>
  );
}


export default HomeNavBar
