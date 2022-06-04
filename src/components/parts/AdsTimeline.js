import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

const AdsTimeline = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(1400));
  return (
    <Grid container sx={matches?{display:'none'}:{ borderRadius:2, marginLeft:20, backgroundColor: 'white', width:{sm: '350px' , md: '350px'}, height:{sm: '537px' , md: '630px'},display: 'flex'}}>
    </Grid>
  )
}

export default AdsTimeline