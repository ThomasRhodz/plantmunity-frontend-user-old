import React from 'react'
import { Grid, Paper, Stack, Typography } from '@mui/material'

import Background from '../../images/AboutIntroImage.jpg'
import ContactIcon from '../../images/icons/contact.png'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import {SiFacebook} from 'react-icons/si';


import ConcernForm from '../forms/ConcernForm';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Contact = () => {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            
        }
      };

      const theme = useTheme();
      const belowMedium = useMediaQuery(theme.breakpoints.down(1300));
      const extraSmall = useMediaQuery(theme.breakpoints.down(600));

  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '100%'}}>
        {/** Page Title */}
        <Grid item sx={{ width: '100%', height: 250, backgroundColor:'white'}}>
            <Paper  style={styles.paperContainer} elevation={0} sx={{width: '100%', height: {sm: 300, md: 250}, borderRadius: 0, padding:8}}>
                <Grid container direction='column' alignItems='center' sx={{ width: '100'}}>
                    <Grid item >
                        <Typography
                        variant={extraSmall ? 'subtitle1' : 'h6'}
                        style={{fontFamily:'"Segoe UI"', color:'white', letterSpacing:8}}
                        gutterBottom
                        >
                            HERE YOU CAN    
                        </Typography>
                    </Grid>
                    <Grid item sx={{ marginTop:'-20px' }}>
                        <Typography
                            variant={extraSmall ? 'h3' : 'h1'}
                            style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'white'}}
                            gutterBottom
                        >
                            Contact Us   
                        </Typography>
                        
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

         {/** Page Title */}
        <Grid item sx={{ width:'100%', height:'100%', backgroundColor: 'white' }}>
            <Grid container direction={extraSmall ? 'column' : 'row'} alignItems={extraSmall ? 'center' : 'left'} sx={{ width:'100%' }}>
                <Grid item sx={belowMedium? {width:{xs:370,sm:600, md:500}, height:'100%', flexGrow:1, padding:{xs:2, sm:10, md:10}, paddingLeft:{xs:2, sm:20, md:20} } :  {width:600, height:'100%', flexGrow:1, padding:10, paddingLeft:20 }}>
                    <Stack directio='column' sx={belowMedium? { maxWidth:{xs:370, sm:600, md: 400}, } :{ maxWidth:{ md: 600}, }}>

                        <img src={ContactIcon} alt={'contact'} style={{ width: 70, height:70 }} />
                        
                        <Typography
                            variant={extraSmall ? 'h5' : 'h4'}
                            style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'#5C6D63'}}
                            gutterBottom
                        >
                            Service Inquiries   
                        </Typography>
                        <Typography
                            variant='body1'
                            align='justify'
                            style={{fontFamily:'-apple-system',  color:'#2b332e', fontSize:18}}
                            gutterBottom
                        >
                            To our valuable users, please be inform that our customer service is open from 8:00 am - 5:00 pm from monday - sunday. For any concern or inquiries you may use the concern form and fill the necessary details to sent us your questions, or you may directly email us in Plantmunity.Official@gmail.com.    
                        </Typography>

                        <div style={{ height:30 }}/>

                        <Typography
                            variant={extraSmall ? 'h6' : 'h5'}
                            style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'#5C6D63'}}
                            gutterBottom
                        >
                            Other Ways to Connect:   
                        </Typography>
                        <div style={{ height:10 }}/>
                        <Grid container direction='column' spacing={2}>
                            <Grid item>
                                <Stack direction='row' spacing={1}>
                                    <PhoneEnabledIcon fontSize='small' sx={{color: '#5C6D63' }}/>
                                    <Typography variant="body2" style={{fontFamily:'apple-system', color:'#5C6D63'}}>
                                        +639466801637
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Stack direction='row' spacing={1}>
                                    <EmailRoundedIcon fontSize='small' spacing={2} sx={{color: '#5C6D63' }}/>
                                    <Typography variant="body2" style={{fontFamily:'apple-system', color:'#5C6D63'}}>
                                        Support@plantmunity@gmail.com
                                    </Typography>
                                </Stack>
                            </Grid>
                            
                            <Grid item>
                                <Stack direction='row' spacing={1}>
                                    <SiFacebook  style={{color: '#5C6D63', fontSize:20 }}/>
                                    <Typography variant="body2" style={{fontFamily:'apple-system', color:'#5C6D63'}}>
                                        https://www.facebook.com/Plantmunity
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Stack direction='row' spacing={1}>
                                    <LocationOnRoundedIcon fontSize='small' sx={{color: '#5C6D63' }}/>
                                    <Typography variant="body2" style={{fontFamily:'apple-system', color:'#5C6D63'}}>
                                        University of Mindanao, Matina, Davao City, Davao Del Sur, Philippines 
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid sx={{ height:'100%', paddingTop:10, display:{xs:'flex', sm:'flex', md:'none'} }}>
                            <ConcernForm /> 
                            <div style={{ height:20 }}/>
                        </Grid>
                    </Stack>

                </Grid>
                <Grid item sx={belowMedium ?{ height:'100%', width: {xs:370, sm: 650, md:450}, paddingTop:10, display:{xs:'none', sm:'none', md:'flex'} } : { height:'100%', width: 650, paddingTop:10, display:{xs:'none', sm:'none', md:'flex'} }}>
                    <ConcernForm /> 
                </Grid>
            </Grid>
            <Grid sx={{ height:30 }}/>
        </Grid>

    </Grid>
  )
}

export default Contact