import * as React from 'react';
import { Grid } from '@mui/material';
import Landing from '../components/body/Landing';
import LandingNavbar from '../components/navigation/LandingNavBar';
import '../../src/css/pageStyles.css'


export default function index() {
  

  return (
      <Grid container direction='column' alignItems='center' sx={{width:'100%'}}>
        <Grid item sx={{width:'100%'}}>
          <LandingNavbar activePage={1}/>
        </Grid>
        <Grid item sx={{width:'100%'}}>
          <Landing/>
        </Grid>
      </Grid>
  );
}
