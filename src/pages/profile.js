import React from 'react'
import PageNavBar from '../components/navigation/PageNavBar';
import BottomNavBar from '../components/navigation/BottomNavBar';
import ProfileFeed from '../components/body/ProfileFeed';
import Grid from '@mui/material/Grid'


const profile = () => {
  return (
    <React.Fragment>
        {/* <ReduxTrial /> */}
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <PageNavBar title={'Profile'} />
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