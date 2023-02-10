import React from "react";
import { Grid } from "@mui/material";
import FriendReqCard from '../card/affiliateCards/FriendReqCard';
import { useGetFollowRequestsQuery } from '../../app/services/associateApi';

const FollowRequestList = () => {
  const { data: followReq = [] } = useGetFollowRequestsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const renderFollowReq = followReq.map((associate) => {
    return (
      <Grid item key={associate.AID} sx={{ width: "100%" }}>
        <FriendReqCard
          associateID={associate.AID}
          userID={associate.id}
          userName={associate.username}
          user={associate.first_name + " " + associate.last_name}
          userProfilePic={associate.profile_picture}
          bio={associate.bio_note}
        />
        <Grid sx={{ height: 10 }} />
      </Grid>
    );
  });

  return (
    <Grid
      container
      direction="column"
      alignItems={"center"}
      sx={{ width: "100%", p: 2 }}
    >
      {followReq ? renderFollowReq : "No Sent Request"}
    </Grid>
  );
};

export default FollowRequestList;
