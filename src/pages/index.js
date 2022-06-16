import * as React from 'react';
import { Grid } from '@mui/material';
import Landing from '../components/body/Landing';
import LoginForm from '../components/body/LoginForm';
import LandingNavbar from '../components/navigation/LandingNavBar';
import '../../src/css/pageStyles.css'


export default function index() {
  

  return (
      <Grid container direction='column' alignItems='center' sx={{width:'100%'}}>
        <Grid item sx={{width:'100%', display: {xs:'none', sm:'flex', md: 'flex'}}}>
          <LandingNavbar activePage={1}/>
        </Grid>
        <Grid item sx={{width:'100%', display: {xs:'none', sm:'flex', md: 'flex'}}}>
          <Landing/>
        </Grid>
        <Grid item sx={{width:'100%', display: {xs:'flex', sm:'none', md: 'none'}}}>
          <LoginForm/>
        </Grid>
      </Grid>
  );
}
