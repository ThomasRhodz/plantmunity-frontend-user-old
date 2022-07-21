import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import FriendReqList from '../parts/FriendReqList';
import TopSearch from './TopSearch';
import BirthdayViewer from './BirthdayViewer';

const AdsTimeline = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(1400));
  return (
    <Grid container direction='column' alignItems='center' sx={matches?{display:'none'}:{ borderRadius:2, backgroundColor: 'transparent', width:{sm: '360px' , md: '350px'}, height:700, display: 'flex'}}>
      <div style={{ height: 10 }}/>
      <Grid item >
        <TopSearch />
      </Grid>
      <div style={{ height: 10 }}/>
      <Grid item >
        <FriendReqList />
      </Grid>
      <div style={{ height: 10 }}/>
      <Grid item >
        <BirthdayViewer />
      </Grid>
    </Grid>
  )
}

export default AdsTimeline