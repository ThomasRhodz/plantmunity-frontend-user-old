import React from 'react'
import { Grid } from '@mui/material';
import Follower from '../card/affiliateCards/FollowerCard';
import { useGetFollowersQuery } from '../../app/services/associateApi';


const FollowerList = () => {
    
    const { data: followers = [], isFetching } = useGetFollowersQuery(
      undefined,
      { refetchOnMountOrArgChange: true }
    );

    const renderFollowers = followers.map(associate => {
        return(
            <Grid item key={associate.id} sx={{ width:'100%' }}>
              <Follower AID={associate.id} UID={associate.user?.id} userName={associate.user?.username} user={associate.user?.first_name + ' ' + associate.user?.last_name} userProfilePic={associate.user?.profile_picture} bio={associate.user?.bio_note} />
              <Grid sx={{height:10}}/>
            </Grid>
        )
      })

  return (
    <Grid
      container
      direction="column"
      alignItems={"center"}
      sx={{ width: "100%", p: 2 }}
    >
      {followers ? renderFollowers : "No Followers Yet."}
    </Grid>
  );
}

export default FollowerList