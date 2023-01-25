import { Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import SignUpProgress from '../parts/SignUpProgress';
import Logo from '../../images/PlantmunityLogo3.png'
import { Link } from 'gatsby';

const SignUp = () => {
  return (
    <Grid container direction='column' alignItems='center' sx={{
        width:{xs:'100%', sm:500, md:500},
        height:570,
        backgroundColor:{xs:'transparent', sm:'white', md:'white'},
        borderRadius:4,
        position: 'absolute',
        p:2,
        pt:3,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // border: '3px #7CB2B1 solid',
        boxShadow:{xs:'', sm:'2.0px 6.0px 6.0px hsl(0deg 0% 0% / 0.38)', md:'2.0px 6.0px 6.0px hsl(0deg 0% 0% / 0.38)'},
        overflow: 'hidden'
    }}>
        <Grid item sx={{marginTop:'-10px'}}>
            <img src={Logo} alt='AppLogo' style={{width:150, height: 80, backgroundSize:'cover'}}/>
        </Grid>

        <Grid item sx={{marginTop:'-20px'}}>
           <Stack direction='column'>
            <Typography align='center' sx={{fontSize: 15,fontFamily:'Fredoka One'}}>
                Get started with your account.
            </Typography>
           </Stack>
        </Grid>

        <Grid item sx={{width:'100%', marginTop:'-15px'}}>
            <SignUpProgress />
        </Grid>
        
        <Stack direction='row'>
            <Typography align='center' sx={{ fontFamily:'raleway', fontSize:12,  color: '#0F3E47'}}>
                Already have an account?
            </Typography>
            <Grid sx={{width:5}} />

            <Link to={'/login'} style={{ textDecoration: 'none' }}>
            <Typography align='center' sx={{ fontFamily:'raleway', fontSize:12, fontWeight:'bold',  color: '#0F3E47'}}>
                Sign in here!
            </Typography>
            </Link>
        </Stack>
       
    </Grid>
  )
}

export default SignUp 