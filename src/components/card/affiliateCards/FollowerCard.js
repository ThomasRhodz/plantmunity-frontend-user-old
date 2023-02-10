import React, {useState, useEffect} from 'react';
import {Grid, Card, Button, CardContent, Stack, Typography, Avatar, Box} from '@mui/material/';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { RiUserShared2Line, RiUserUnfollowLine } from 'react-icons/ri';

import { useLazyGetIsFollowedQuery, useAddAssociateMutation, useUpdateUnfollowMutation } from '../../../app/services/associateApi';


const FollowerCard = ({AID, UID, userName, user, userProfilePic, bio,}) => {
  const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    const [getIsFollowed, result] = useLazyGetIsFollowedQuery();
    const [associateClick, setAssociateCliCk] = useState(0);
   
    useEffect(() => {
        getIsFollowed(UID)
    }, [associateClick]);

    console.log(result?.data)

    const followed = result?.data?.isFollowed
    const followedID = result?.data?.id
    const followedStatus = result?.data?.status
    
    const handleButtonLabel = () =>{
        if(followedStatus===null){
            return 'Follow back'
        } else if (followedStatus=== 'Pending') {
            return 'Cancel Request'
        }else{
           return 'Unfollow'
        }
    }

    const [follow] = useAddAssociateMutation();
    const [unfollow] = useUpdateUnfollowMutation();

    const handleFollowButton = () => {
        if(followed === 1){
            unfollow(followedID)
            setAssociateCliCk(1)
        }else{
            follow(UID)
            setAssociateCliCk(2)
        }
    }

  return (
    //Starting of follower card (parent component)
    <Card
      sx={{
        display: "flex",
        padding: 2,
        pt: mobile ? 1 : 2,
        mt: 1,
        width: "100%",
        boxShadow: "2.0px 2.0px 2.0px 2.0px hsl(0deg 0% 0% / 0.38)",
      }}
    >
      {/* Container Grid: Grid that holds the card components that give a horizontal direction*/}
      <Grid container direction="row" alignItems={mobile ? "" : "center"}>
        {/*1st Grid: User avatar */}
        <Grid
          item
          sx={{
            width: { xs: "15%", sm: "15%", md: tablet ? "15%" : "8%" },
            mt: mobile ? 2 : 0,
          }}
        >
          <Avatar
            sx={{
              width: { xs: 50, sm: 65, md: 75 },
              height: { xs: 50, sm: 65, md: 75 },
            }}
            alt="Tanjiro"
            src={userProfilePic}
          />
        </Grid>

        {/* 2nd Grid: Grid that holds CardContent that contains the user details */}
        <Grid
          item
          sx={{ width: { xs: "85%", sm: "55%", md: tablet ? "55%" : "65%" } }}
        >
          {/* CardContent, vertically arranged by default */}
          <CardContent>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: 15, sm: 15, md: 16 },
                fontWeight: "bold",
                fontFamily: "Arvo",
              }}
            >
              {user}
            </Typography>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: 13, sm: 13, md: 14 },
                fontFamily: "Raleway",
              }}
            >
              @{userName}
            </Typography>
            <Typography
              align={"justify"}
              component="div"
              sx={{ fontSize: { xs: 11, sm: 11, md: 12 }, fontFamily: "Arvo", mt:'3px' }}
            >
              {bio}
            </Typography>
          </CardContent>{" "}
          {/* end of CardContents */}
        </Grid>
        {/* end of 2nd Grid */}

        <Grid
          item
          sx={{ width: { xs: "100%", sm: "30%", md: tablet ? "30%" : "25%" } }}
        >
          <Stack direction="row" sx={{ width: "100%" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              onClick={() => handleFollowButton()}
              startIcon={
                followedStatus === null ? (
                  <RiUserShared2Line style={{ fontSize: mobile ? 15 : 17 }} />
                ) : (
                  <RiUserUnfollowLine style={{ fontSize: mobile ? 15 : 17 }} />
                )
              }
              variant="contained"
              sx={{
                fontSize: mobile ? 9 : tablet ? 10 : 14,
                fontFamily: "Arvo",
                textTransform: "none",
                height: mobile ? 40 : tablet ? 45 : 50,
                width: mobile ? "45%" : "100%",
                border: "1px solid #5C6D63",
                bgcolor: followedStatus === null ? "#5C6D63" : "white",
                color: followedStatus === null ? "white" : "#5C6D63",
                borderRadius: 7,
                "&:hover": {
                  color: followedStatus === null ? "#5C6D63" : "white",
                  bgcolor: followedStatus === null ? "white" : "#5C6D63",
                },
              }}
            >
              {handleButtonLabel()}
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {/* End of container grid */}
    </Card> //end of card
  );
}

export default FollowerCard
