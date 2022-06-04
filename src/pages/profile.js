import React from 'react'
import NavBar from '../components/navigation/NavBar';
import BottomNavBar from '../components/navigation/BottomNavBar';
import ProfileFeed from '../components/main/ProfileFeed';
import Grid from '@mui/material/Grid'


const profile = () => {
  return (
    <React.Fragment>
        {/* <ReduxTrial /> */}
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item>
            <ProfileFeed />
          </Grid>
          <Grid item>
            <BottomNavBar />
          </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default profile