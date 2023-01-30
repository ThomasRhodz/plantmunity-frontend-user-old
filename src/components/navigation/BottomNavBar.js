//MUI Components
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

 //Icons
import ExploreIcon from '@mui/icons-material/Explore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';


//MUI Styling
import '../../css/pageStyles.css';

//Actual Components
 const BottomAppBar = ({iconID, handleChange}) => {

    // //Variables
    // Array of navigating pages
    const page = [
        {
            id: 0,
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
            location: '/market',
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

     return (
        <AppBar position="fixed" style={{backgroundColor: '#5C6D63', color: '#6da58a', }} sx={{ top: 'auto', bottom: 0, display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                    {page.map(({id, name, icon}) => (
                        <React.Fragment key={id} >
                            <Tooltip title={name} role='link' >
                                <IconButton color="inherit" aria-label="open drawer" size='large' onClick={()=>handleChange(id)}>
                                    {icon}
                                </IconButton>
                            </Tooltip>
                            <div style={{width:20}} />
                        </React.Fragment>
                    ))}
                <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
      </AppBar>
     )
 }
 
 
export default BottomAppBar