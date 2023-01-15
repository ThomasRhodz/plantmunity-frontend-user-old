//React Components
import React, { useEffect } from 'react';
import {Avatar, Box, Drawer, Divider, Grid,Menu, MenuItem, Stack, IconButton, Tooltip, Typography} from '@mui/material/';
import {CssBaseline, AppBar, Toolbar, List, ListItem, ListItemButton, ListItemIcon,ListItemText } from '@mui/material/';

//Icons
import {BsShop, BsFillCameraFill, BsFillPeopleFill} from 'react-icons/bs';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Logo from '../../images/PlantmunityLogo2.png';

//For notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Navigation
import { navigate } from 'gatsby';
import NavBar from './NavBar';
import BottomAppBar from './BottomNavBar';

import Timeline from '../body/Timeline';

// //Hooks abd API Calls
// import useAuth from '../../app/hooks/useAuth';
// import {useSelector } from 'react-redux';

//Menu List
const mainMenu = [
    {
        id: 0,
        name: 'Home',
    },
    {
        id: 1,
        name: 'Profile',
    },
    {
        id: 2,
        name: 'My Shop',
        custom: true,
    },
    {
        id: 3,
        name: 'My Cart',
    },
    {
        id: 4,
        name: 'My Forum',
    },
    {
        id: 5,
        name: 'Identify',
    },
    {
        id: 6,
        name: 'Affiliates',
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
    const firstname = "John Eliezar"//useSelector((state) => state.user.first_name);
    const image = "https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/316676504_3212779305641197_1050176977558317665_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=1QHMPCZzvX8AX-NK3_a&tn=rNDVmRy3DV9Pe2vC&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfB1h6f_ojh6lIzBpoXhftRaVAmBFqG2C4xTPQ6IDTulIg&oe=63C849F5" //useSelector((state) => state.user.image);
    const lastname = "Rodis" //useSelector((state) => state.user.last_name);
    const username = "ThomasRhodz" //useSelector((state) => state.user.username);

    const fullName = firstname+' '+lastname;

    //States
    const [selectedMenu, setSelectedMenu] = React.useState(0)
    const [menuName, setMenuName] = React.useState('Home')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [userFullName, setFullName] = React.useState(firstname !== undefined ? fullName : 'User Name');
    const [userName, setUserName] = React.useState(username !== undefined ? username : '#UserTag');
    

    // for opening menu
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
 
    // function that will help the menu item to set ther icon base on the menu title.
    const iconChanger = (menuName) => {
        if (menuName === 'Home') {
            return <HomeRoundedIcon sx={{fontSize:22, color: selectedMenu === 0 ? '#BFCBA5' : 'white'}}/>;
        }else if (menuName === 'Profile') {
          return <PersonOutlineRoundedIcon sx={{fontSize:25, color: selectedMenu === 1 ? '#BFCBA5' : 'white'}}/>;
        }else if (menuName === 'My Shop') {
          return <BsShop style={{fontSize:20, color: selectedMenu === 2 ? '#BFCBA5' : 'white'}}/>;
        }else if (menuName === 'My Cart') {
          return <ShoppingCartOutlinedIcon sx={{fontSize:22, color: selectedMenu === 3 ? '#BFCBA5' : 'white'}}/>;
        }else if (menuName === 'My Forum') {
          return <ForumOutlinedIcon style={{fontSize:22, color: selectedMenu === 4 ? '#BFCBA5' : 'white'}}/>;
        }else if (menuName === 'Identify') {
          return <BsFillCameraFill style={{fontSize:20, color: selectedMenu === 5 ? '#BFCBA5' : 'white'}}/>;
        }else{
            return <BsFillPeopleFill style={{fontSize:20, color: selectedMenu === 6 ? '#BFCBA5' : 'white'}}/>;
        }   
    };

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
      <NavBar title={menuName} />

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
        <Stack direction='column' alignItems={'center'} sx={{width:'100%'}}>
           <Grid display={{xs: 'none', md: 'flex'}}>
                <img
                    src= {Logo}
                    style={{width:130, height:70}}
                    alt='logo'
                />
            </Grid> 
            <Divider variant='middle' style={{ background: 'white', width:160, height:1, marginTop:'-5px' }}/>
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
          {mainMenu.map(({id, name}) => (
            <ListItem key={id} disablePadding sx={{pl:2, pb:1,}}>
              <ListItemButton onClick={() => 
                  {
                        setSelectedMenu(id); 
                        setMenuName(name) 
                  } 
                } 
                sx={{backgroundColor:selectedMenu === id ? '#F3F4F8' : '', borderRadius:'20px 0px 0px 20px'}}
              >
                <ListItemIcon sx={{ml:4}}>
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
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, height:'100%'}}
      >
        <Toolbar />
        <Stack sx={{width:'100%', marginTop:'-23px'}}>
            <Divider style={{color:'black', width:'100%', height:2 }}/>
        </Stack>

        <Grid sx={{width:'100%', display: selectedMenu === 0 ? 'flex' : 'none',}}>
         <Timeline />
        </Grid>

      </Box>
      
      <BottomAppBar/>
    </Box>
  );
}


export default HomeNavBar
