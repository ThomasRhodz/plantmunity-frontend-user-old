import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import FriendReqList from '../parts/FriendReqList';
import TopSearch from './TopSearch';
import BirthdayViewer from './BirthdayViewer';

const AdsTimeline = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down(1300));
  return (
    <Grid container direction='column' alignItems='center' sx={matches?{display:'none'}:{ borderRadius:2, backgroundColor: 'transparent', width:'100%', display: 'flex'}}>
      <div style={{ height: 10 }}/>
      <Grid item  sx={{boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)',}}>
        <TopSearch />
      </Grid>
      <div style={{ height: 10 }}/>
      <Grid item sx={{boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)',}} >
        <FriendReqList />
      </Grid>
      <div style={{ height: 10 }}/>
      <Grid item sx={{boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)',}} >
        <BirthdayViewer />
      </Grid>
    </Grid>
  )
}

export default AdsTimeline