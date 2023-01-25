import { Box, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "../../../css/style.css";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const MyProductCard = ({id, productName, productImage}) => {
const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  return (
    <Grid
    key={id}
      item
      sx={{
        mt: 2,
        width: mobile? '100%' : "47%",
        height: mobile? 200:300,
        ml: { xs: 0, sm: 2, md: 2 },
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        sx={{ width: "100%" }}
        className="grid-item"
      >
        <Box sx={{ width: "100%", height: mobile? 200:300, zIndex: 1 }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt={"product_pic"}
            src={ productImage }
          />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            width: "100%",
            bgcolor: "rgba(92, 109, 99, 0.6)",
            height: mobile? 30:50,
            mt: mobile?"-30px":"-50px",
            pl: 3,
            pr: 1,
            zIndex: 2,
          }}
        >
          <Typography
            variant={mobile? "body1" : "h6"}
            sx={{ fontFamily: "arvo", flexGrow: 1, color: "white" }}
          >
            {productName}
          </Typography>
          <Tooltip title="view details">
            <IconButton sx={{ color: "white" }}>
              <ArrowForwardIosRoundedIcon sx={{  fontSize:{xs:18, sm:20, md:25} }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default MyProductCard