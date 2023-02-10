import React from 'react'
import { Grid } from '@mui/material';
import SentRequestCard from '../card/affiliateCards/SentRequestCard';
import { useGetSentRequestsQuery } from '../../app/services/associateApi';

const SentRequestList = () => {
    
  const { data: sentReq = [] } = useGetSentRequestsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const renderSentReq = sentReq.map(following => {
    return(
        <Grid item key={following.AID}  sx={{ width:'100%' }}>
          <SentRequestCard associateID={following.AID} userID={following.id} userName={following.username} user={following.first_name + ' ' + following.last_name} userProfilePic={following.profile_picture} bio={following.bio_note} />
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
      {sentReq ? renderSentReq : "No Sent Request"}
    </Grid>
  );
}

export default SentRequestList