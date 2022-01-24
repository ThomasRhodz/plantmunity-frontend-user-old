//MUI Components
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

 //Icons
import ExploreIcon from '@mui/icons-material/Explore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';


//MUI Styling
import '../css/pageStyles.css';
import { makeStyles } from "@material-ui/core/styles";


//styling
const useStyles = makeStyles((theme) => ({

}));

//Actual Components
 const BottomAppBar = () => {

    //Variables
    const classes = useStyles();

     return (
        <AppBar position="fixed" style={{backgroundColor: 'white', color: '#6da58a', }} sx={{ top: 'auto', bottom: 0, display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton color="inherit" aria-label="open drawer" size='large' >
                    <HomeRoundedIcon fontSize='large' style={{color: '#D5AB82'}}/>
                </IconButton>
                <div style={{width:20}} />
                <IconButton color="inherit" aria-label="open drawer" size='large'>
                    <ExploreIcon fontSize='large' />
                </IconButton>
                <div style={{width:20}} />
                <IconButton color="inherit" aria-label="open drawer" size='large'>
                    <StorefrontIcon fontSize='large' />
                </IconButton>
                <div style={{width:20}} />
                <IconButton color="inherit" aria-label="open drawer" size='large'>
                    <EmailRoundedIcon  fontSize='large' />
                </IconButton>
                <div style={{width:20}} />
                <IconButton color="inherit" aria-label="open drawer" size='large'>
                    <NotificationsIcon  fontSize='large' />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
      </AppBar>
     )
 }
 
 
export default BottomAppBar