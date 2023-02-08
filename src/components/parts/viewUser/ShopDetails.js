import React, {useState, useEffect} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid, Rating, Stack, Typography } from '@mui/material'

import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import {FaStore} from 'react-icons/fa';

const ShopDetails = ({shopData}) => {

    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(600));
     
    const handleTime = (businessHour) => {
      var time = ''+businessHour

      time = time.split(':'); // convert to array

      // fetch
      var hours = Number(time[0]);
      var minutes = Number(time[1]);

      // calculate
      var timeValue;

      if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
      } else if (hours > 12) {
        timeValue= "" + (hours - 12);
      } else if (hours === 0) {
        timeValue= "12";
      }
      
      timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
      timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

      return timeValue;
    }

  return shopData === null ? (
    <Stack direction='row' alignItems='center' sx={{ width:'100%', height:150}}>
      <Stack direction='column' alignItems='center' sx={{ width:'100%'}}>
        <Typography variant='h5' sx={{ fontFamily:'raleway', fontWeight:'bold', color:'#DCD7C3' }}>
          Shop does not exist.
        </Typography>
      </Stack>
    </Stack>
  ) : (
    <Grid
      container
      direction={tablet ? "column" : "row"}
      alignItems={"center"}
      sx={{
        width: "100%",
        height: "100%",
        mt: 2,
      }}
    >
      <Grid
        item
        sx={{
          width: { md: tablet ? 300 : "35%" },
          height: 200,
          display: shopData?.shop_logo === null ? "none" : "display",
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          sx={{ width: "100%", height: "100%" }}
        >
          <img
            src={shopData?.shop_logo}
            alt="shop_logo"
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Stack>
      </Grid>

      <Grid
        item
        sx={{
          ml: { xs: 0, sm: 0, md: 5 },
          mr: { xs: 0, sm: 0, md: 5 },
          width: 200,
          height: 200,
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #5C6D63",
          display: shopData?.shop_logo === null ? "display" : "none",
        }}
      >
        <Stack direction="row" alignItems={"center"} sx={{ height: "100%" }}>
          <Stack
            direction="column"
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <FaStore style={{ fontSize: 100, color: "#5C6D63" }} />
          </Stack>
        </Stack>
      </Grid>

      <Grid
        item
        sx={{
          width: { md: tablet ? 500 : "45%" },
        }}
      >
        <Stack
          direction="column"
          alignItems={tablet ? "center" : "left"}
          sx={{ width: "100%", pt: 1 }}
        >
          <Typography
            variant={mobile ? "h5" : "h4"}
            align={tablet ? "center" : "left"}
            sx={{ fontFamily: "Arvo", width: { xs: "100%", sm: 500, md: 450 } }}
          >
            {shopData?.shop_name}
          </Typography>

          <Stack direction="row" alignItems="center">
            <Typography
              variant={mobile ? "body2" : "body1"}
              sx={{ fontFamily: "Arvo", ml: "3px", mr: 1 }}
            >
              Rating:
            </Typography>
            <Rating size="small" defaultValue={2} readOnly />
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ marginTop: "1px" }}>
            <Typography
              variant={mobile ? "caption" : "body2"}
              sx={{ fontFamily: "Arvo", ml: "3px" }}
            >
              {handleTime(shopData?.time_open)}
            </Typography>
            <Typography
              variant={mobile ? "caption" : "body2"}
              sx={{ fontFamily: "Arvo" }}
            >
              {"- " + handleTime(shopData?.time_close)}
            </Typography>
          </Stack>

          <Stack
            direction={"column"}
            alignItems={"left"}
            sx={{ mt: tablet ? 0 : 1 }}
          >
            <Stack
              direction={tablet ? "column" : "row"}
              alignItems={tablet ? "left" : "center"}
              sx={{ mt: 1 }}
            >
              <Stack direction="row" sx={{ mt: tablet ? "5px" : 0 }}>
                <EmailRoundedIcon sx={{ fontSize: 20 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Arvo",
                    ml: mobile ? "6px" : "3px",
                    mr: tablet ? 0 : 2,
                  }}
                >
                  {shopData?.email}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{
                  mt: tablet ? "5px" : 0,
                  display: shopData?.contact === null ? "none" : "flex",
                }}
              >
                <SmartphoneRoundedIcon sx={{ fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Arvo",
                    ml: mobile ? "6px" : "3px",
                    mr: tablet ? 0 : 2,
                  }}
                >
                  {shopData?.mobile}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{
                  mt: tablet ? "5px" : 0,
                  display: shopData?.telephone === null ? "none" : "flex",
                }}
              >
                <LocalPhoneRoundedIcon sx={{ fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Arvo",
                    ml: mobile ? "6px" : "3px",
                    mr: tablet ? 0 : 2,
                  }}
                >
                  {shopData?.telephone}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" sx={{ mt: tablet ? "5px" : 1 }}>
              <LocationOnRoundedIcon sx={{ fontSize: 18 }} />
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "Arvo",
                  ml: mobile ? "6px" : "3px",
                  mr: tablet ? 0 : 2,
                  maxWidth: tablet ? 250 : 500,
                }}
              >
                {shopData?.address}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ mt: 2, maxWidth: { xs: "90%", sm: 500, md: 450 } }}
          >
            <Typography
              align="justify"
              variant={"caption"}
              sx={{ fontFamily: "raleway", ml: "3px" }}
            >
              {shopData?.bio_note}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ShopDetails
