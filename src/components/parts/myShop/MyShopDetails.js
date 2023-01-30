import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Rating, Stack, Typography } from '@mui/material'

import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const MyShopDetails = () => {
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    //const mobile = useMediaQuery(theme.breakpoints.down(700));
  return (
    <Grid
      container
      direction={tablet ? "column" : "row"}
      alignItems={"center"}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Grid item sx={{ width: { md: tablet ? 300 : "25%" }, height: 200 }}>
        <Stack
          direction="column"
          alignItems="center"
          sx={{ width: "100%", height: "100%" }}
        >
          <img
            src={
              "https://images-platform.99static.com//5bJtEaPw4JVjNVJlprXQPzm5pLk=/137x135:1362x1361/fit-in/500x500/99designs-contests-attachments/129/129927/attachment_129927926"
            }
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
          width: { md: tablet ? 500 : "45%" },
          height: { sm: "100", md: tablet ? 200 : 150 },
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
            sx={{ fontFamily: "Arvo" }}
          >
            Palimtintin Hand Garden
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
                  {"J.Rodis.477524@umindanao.edu.ph"}
                </Typography>
              </Stack>

              <Stack direction="row" sx={{ mt: tablet ? "5px" : 0 }}>
                <SmartphoneRoundedIcon sx={{ fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Arvo",
                    ml: mobile ? "6px" : "3px",
                    mr: tablet ? 0 : 2,
                  }}
                >
                  {"+6394 6680 1637"}
                </Typography>
              </Stack>

              <Stack direction="row" sx={{ mt: tablet ? "5px" : 0 }}>
                <LocalPhoneRoundedIcon sx={{ fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Arvo",
                    ml: mobile ? "6px" : "3px",
                    mr: tablet ? 0 : 2,
                  }}
                >
                  {"082 77536"}
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
                {
                  "Purok 5, Kalambuan Village, Talomo, Davao City, Davao del Sur"
                }
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        sx={{
          mb: { xs: 1, sm: 2, md: tablet ? 2 : 0 },
          pr: { xs: 0, sm: 0, md: tablet ? 0 : 5 },
          mt: { xs: 2, sm: 3, md: tablet ? 2 : 0 },
          width: { xs: "80%", sm: "60%", md: tablet ? 300 : "30%" },
          height: { xs: "100%", sm: 150, md: 135 },
        }}
      >
        <Stack direction="column">
          <Button
            variant="contained"
            size="regular"
            sx={compStyle["shop-botton"]}
          >
            Add Product
          </Button>

          <Button
            variant="contained"
            size="regular"
            sx={compStyle["shop-botton"]}
          >
            Edit Shop Details
          </Button>

          <Button
            variant="contained"
            size="regular"
            sx={compStyle["close-shop-botton"]}
          >
            Close Shop
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default MyShopDetails


const compStyle ={
   
  'shop-botton':{ 
      mt:1,
      width:'100%',
      height:40,
      textTransform:'none',
      fontFamily:'Arvo',
      borderRadius:25,
      border:'2px #5C6D63 solid',
      bgcolor:'white',
      color:'#5C6D63',
      '&:hover':{
          bgcolor:'#5C6D63',
          color:'white',
      }
  },
  'close-shop-botton':{
      mt:1, 
      width:'100%',
      height:40,
      textTransform:'none',
      fontFamily:'Arvo',
      borderRadius:25,
      border:'2px #c74224 solid',
      bgcolor:'white',
      color:'#c74224',
      '&:hover':{
          bgcolor:'#c74224',
          color:'white',
      }
  }
}
