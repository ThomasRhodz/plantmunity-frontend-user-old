//MUI Components
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid, Stack, Tooltip} from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {navigate} from 'gatsby';


 //Icons
 import Logo from '../../images/PlantmunityAlt2.png';
//MUI Styling
import '../../css/pageStyles.css';
const drawerWidth = 230;

//Actual Components
 const PageNavBar = ({title}) => {
     return (
        <AppBar 
            position="fixed"
            sx={{ 
                width: '100%', 
                height:60, ml: `${drawerWidth}px`, 
                backgroundColor: '#5C6D63',
            }}
            elevation={0}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Grid container direction="row" alignItems="center" style={{ width: '100%'}} >
                        
                        <Grid item sx={{ mr:1 }}>
                            <Tooltip title={'Go to home'}>
                                <IconButton onClick={()=>navigate('/home')}>
                                    <ArrowBackIosNewRoundedIcon sx={{color:'white'}}/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item sx={{flexGrow:1}}>
                            <Typography 
                                variant={'h6'}
                                sx={{
                                    fontFamily:'Arvo',
                                    color:'white'
                                }}
                            >
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item sx={{display: { xs: 'flex', sm: 'flex', md: 'flex' }}}>
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
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
 }
 
 
export default PageNavBar