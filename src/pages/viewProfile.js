import React from 'react'
import PageNavBar from '../components/navigation/PageNavBar';
import BottomNavBar from '../components/navigation/BottomNavBar';
import Grid from '@mui/material/Grid'
import UserFeed from '../components/body/UserFeed';
const viewProfile = ({location}) => {
    const user_id = location?.state?.uid
  return (
    <React.Fragment>
      {/* <ReduxTrial /> */}
      <Grid container direction="column" alignItems="center" sx={{ width:'100%' }}>
        <Grid item>
          <PageNavBar title={"User Profile"} />
        </Grid>

        <Grid item sx={{ width:'100%'}}>
          <UserFeed id={user_id}/>
        </Grid>

        <Grid item>
          <BottomNavBar />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default viewProfile