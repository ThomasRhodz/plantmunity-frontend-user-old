import React from 'react'
import {Divider, Grid, Tab, Tabs, Typography} from '@mui/material/'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FollowRequestList from '../lists/FollowRequestList';
import SentRequestList from '../lists/SentRequestList';
import FollowingList from '../lists/FollowingList';
import FollowerList from '../lists/FollowerList';

const AssociateTab = () => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(1200));
  const mobile = useMediaQuery(theme.breakpoints.down(700));
 
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      // console.log(newValue)
    };

  return (
    <Grid
      container 
      direction={mobile ? 'column' : 'row'}
      sx={{ 
        width:'100%',
        bgcolor:'white',
        height:mobile ? '100%' : "85vh",
        borderRadius:3,
        mt:3,
        //border: '2px solid #5C6D64',
        boxShadow: "2.0px 6.0px 6.0px hsl(0deg 0% 0% / 0.38)",
        overflow:'hidden'
       }}
    >
      <Grid item sx={{ width:mobile ? '100%': tablet? "18%" : "13%", 'height':'100%' , p:2, pr:0}}>
        <Tabs
        centered={tablet? true:false}
          value={value}
          sx={{ width:'100%' }}
          orientation={mobile ? 'horizontal' : 'vertical'}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          TabIndicatorProps={{
              sx: { height: 5, width:5, borderRadius:5 } 
          }}
        >
          <Tab value= {0} label={
            <Typography 
              align='left'
              variant={mobile ? 'body2' : tablet ? 'body1': 'h6' }
              sx={{
                  fontFamily:'raleway', 
                  fontWeight:'bold',
                  width:'100%', 
                  textTransform: 'none', 
                  color: value === 0 ? '#5C6D64' : '#8e896b'  
              }}
            >
                Following
            </Typography>} 
          />
          <Tab value= {1} label={
            <Typography 
              align='left'
              variant={mobile ? 'body2' : tablet ? 'body1':  'h6' }
              sx={{
                  width:'100%',
                  fontFamily:'raleway', 
                  fontWeight:'bold', 
                  textTransform: 'none', 
                  color: value === 1 ? '#5C6D63' : '#8e896b'  
              }}
            >
                Followers
            </Typography>
            } 
          />
          <Tab value= {2} label={
            <Typography 
              align='left'
              variant={mobile ? 'body2'  :tablet ? 'body1': 'h6' }
              sx={{
                  width:'100%',
                  fontFamily:'raleway', 
                  fontWeight:'bold', 
                  textTransform: 'none', 
                  color: value === 2 ? '#5C6D63' : '#8e896b'  
              }}
            >
                Requests
            </Typography>
            } 
          />
          <Tab value= {3} label={
            <Typography 
              align='left'
              variant={mobile ? 'body2'  :tablet ? 'body1': 'h6' }
              sx={{
                  width:'100%',
                  fontFamily:'raleway', 
                  fontWeight:'bold', 
                  textTransform: 'none', 
                  color: value === 3 ? '#5C6D63' : '#8e896b'  
              }}
            >
                Sent Requests
            </Typography>
            } 
          />
        </Tabs>

        
      </Grid>

      <Grid item sx={mobile ? {width:'100%'} : {height:'100%' } }>
       <Divider orientation={mobile ? 'horizontal' : 'vertical'}/>
      </Grid>

      <div style={{ flexGrow:1 }}/>

      <Grid item sx={{ml: mobile? 0:1, width:mobile ? '100%' : tablet ? "78%" : "85%", height:'100%', p:mobile?0:2, overflowY:'auto' }}>
      {value === 0 ? <FollowingList /> : value === 1 ? <FollowerList /> : value === 2 ? <FollowRequestList /> : <SentRequestList /> }
      </Grid>

    </Grid>
  )
}

export default AssociateTab