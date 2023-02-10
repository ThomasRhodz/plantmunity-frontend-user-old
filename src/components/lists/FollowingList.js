import React from "react";
import { Grid } from "@mui/material";
import Following from "../card/affiliateCards/FollowingCard";
import { useGetFollowingQuery } from "../../app/services/associateApi";

const FollowingList = () => {
  const { data: following = [] } = useGetFollowingQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const renderFollowings = following.map((following) => {
    return (
      <Grid item key={following.AID} sx={{ width: "100%" }}>
        <Following
          associateID={following.AID}
          userID={following.id}
          userName={following.username}
          user={following.first_name + " " + following.last_name}
          userProfilePic={following.profile_picture}
          bio={following.bio_note}
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
      {following ? renderFollowings : "You are not following anyone."}
    </Grid>
  );
};

export default FollowingList;
