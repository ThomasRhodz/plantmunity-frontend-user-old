import React from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Avatar, Typography, IconButton, Tooltip } from '@mui/material'
import { useSelector } from 'react-redux'
const ActivityCard = ({user, date, comment, image, UID}) => {
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    const userID = useSelector((state)=> state.user.id)
    const time_stamp = new Date(date)
    
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        
        return date.toLocaleString('en-US', { month: 'long' });
    }

    const datePosted = ((getMonthName(time_stamp.getMonth()+1))+" "+ time_stamp.getDate() + ", "+time_stamp.getFullYear())
  return (
    <Grid container direction='row' sx={{ width:'100%', height:'100%' }}>
        <Grid item sx={{ width:'10%' }}>
            <Avatar alt="Remy Sharp" src={image} sx={{ color:'white' }} />
        </Grid>
        <Grid item sx={{ paddingLeft:2, width:'89%' }}>
            <Stack direction='column'>
                <Stack direction='row' alignItems={'center'} >
                    <Typography variant={mobile ? 'caption' : 'body2'}  sx={{fontFamily:'Arvo', fontWeight: 'bold'}}>
                        {user} |
                    </Typography>
                    <Grid sx={{ width:10 }} />
                    <Typography variant={mobile ? 'caption' : 'body2'}  sx={{fontFamily:'Raleway', flexGrow:1}}>
                        {datePosted}
                    </Typography>
                    <Tooltip title={'Delete your comment'}>
                        <IconButton sx={{ display: userID === UID ? 'flex' : 'none' }}>
                            <DeleteRoundedIcon sx={{ fontSize:18 }} />
                        </IconButton>
                    </Tooltip>
                </Stack>
                <Grid container sx={{ width: '100%', height: '100%', borderRadius:1, backgroundColor:'white', padding:1 }}>
                    <Typography align='justify' variant={mobile ? 'caption' : 'body2'}  style={{fontFamily:'Raleway',}}>
                        {comment}
                    </Typography>
                </Grid>
            </Stack>
        </Grid>

    </Grid>
  )
}

export default ActivityCard