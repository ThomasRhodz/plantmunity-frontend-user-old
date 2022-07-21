import React from 'react'
import { Grid, Stack, Avatar } from '@mui/material'
import { Typography } from '@material-ui/core'

const ActivityCard = ({user, date, comment}) => {
  return (
    <Grid container direction='row' sx={{ width:650, height:'100%' }}>
        <Grid item>
            <Avatar alt="Remy Sharp" src="" sx={{ color:'white' }} />
        </Grid>
        <Grid item sx={{ paddingLeft:2 }}>
            <Stack direction='column'>
                <Stack direction='row' >
                    <Typography variant={'subtitle1'}  style={{fontFamily:'apple-system', fontWeight: 'bold'}}>
                        {user} |
                    </Typography>
                    <Grid sx={{ width:10 }} />
                    <Typography variant={'subtitle1'}  style={{fontFamily:'apple-system',}}>
                        {date}
                    </Typography>
                </Stack>
                <Grid container sx={{ width: 550, height: '100%', borderRadius:1, backgroundColor:'white', padding:1 }}>
                    <Typography align='justify' variant={'body1'}  style={{fontFamily:'apple-system',}}>
                        {comment}
                    </Typography>
                </Grid>
            </Stack>
        </Grid>

    </Grid>
  )
}

export default ActivityCard