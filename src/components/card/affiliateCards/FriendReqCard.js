import * as React from 'react';
import {Grid, Button, Box, Stack, Card, CardContent, Typography, Avatar} from '@mui/material/';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useUpdateUnfollowMutation, useAcceptFollowRequestMutation } from '../../../app/services/associateApi';

const FriendReqCard = ({associateID, userID, userName, user, userProfilePic, bio}) => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(1200));
  const mobile = useMediaQuery(theme.breakpoints.down(700));

  const [removeRequest] = useUpdateUnfollowMutation()
  const [acceptRequest] = useAcceptFollowRequestMutation()
  return (
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
      <Grid container direction="row" alignItems={'center'}>
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
          sx={{ width: { xs: "85%", sm: "55%", md: tablet ? "40%" : "60%" } }}
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
              sx={{
                fontSize: { xs: 11, sm: 11, md: 12 },
                fontFamily: "Arvo",
                mt: "3px",
              }}
            >
              {bio}
            </Typography>
          </CardContent>{" "}
          {/* end of CardContents */}
        </Grid>
        {/* end of 2nd Grid */}

        <Grid
          item
          sx={{ width: { xs: "100%", sm: "30%", md: tablet? "45%": "30%" }}}
        >
          <Stack direction="row" sx={{ width: "100%" }}>
           
            <Button
              onClick={() => removeRequest(associateID)}
              variant="contained"
              sx={{
                fontSize: mobile ? 9 : tablet ? 11 : 14,
                fontFamily: "Arvo",
                textTransform: "none",
                height: mobile ? 30 : tablet ? 45 : 50,
                width: mobile ? "48%" : "48%",
                border: "1px solid red",
                bgcolor: "white",
                color: "red",
                borderRadius: 7,
                "&:hover": {
                  color: "white",
                  bgcolor: "red",
                },
              }}
            >
              {"Reject"}
            </Button>

            <Button
              onClick={() => acceptRequest(associateID)}
              variant="contained"
              sx={{
                ml:1,
                fontSize: mobile ? 9 : tablet ? 11 : 14,
                fontFamily: "Arvo",
                textTransform: "none",
                height: mobile ? 30 : tablet ? 45 : 50,
                width: mobile ? "48%" : "48%",
                border: "1px solid #5C6D63",
                bgcolor: "#5C6D63",
                color: "white",
                borderRadius: 7,
                "&:hover": {
                  color: "white",
                  bgcolor: "green",
                },
              }}
            >
              {"Accept"}
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {/* End of container grid */}
    </Card> //end of card
  );
}

export default FriendReqCard