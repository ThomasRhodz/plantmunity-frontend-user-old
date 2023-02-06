import React from 'react'
import { Grid, Stack, Avatar, Typography } from '@mui/material'

const CommentCard = ({user, date, profile, comment}) => {
    const time_stamp = new Date(date)
    
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        
        return date.toLocaleString('en-US', { month: 'long' });
    }

    const datePosted = ((getMonthName(time_stamp.getMonth()+1))+" "+ time_stamp.getDate() + ", "+time_stamp.getFullYear())
  return (
    <Grid container direction='row' sx={{ width:'100%', height:'100%' }}>
        <Grid item>
            <Avatar alt="Remy Sharp" src={profile} sx={{ color:'white' }} />
        </Grid>
        <Grid item sx={{ paddingLeft:2, maxWidth:'90%' }}>
            <Stack direction='column' >
                <Stack direction='row' >
                    <Typography variant={'body2'}  style={{fontFamily:'Arvo', fontWeight: 'bold'}}>
                        {user} |
                    </Typography>
                    <Grid sx={{ width:10 }} />
                    <Typography variant={'body2'}  style={{fontFamily:'Arvo',}}>
                        {datePosted}
                    </Typography>
                </Stack>
                
                <Typography align='justify' variant={'body2'}  sx={{fontFamily:'Raleway', borderRadius:1, backgroundColor:'#f6f7f6', p:1}}>
                    {comment}
                </Typography>
                
            </Stack>
        </Grid>

    </Grid>
  )
}

export default CommentCard