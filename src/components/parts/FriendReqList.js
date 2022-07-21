import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FriendReqCard from '../card/FriendReqCard'

const FriendReqList = () => {
  return (
    <Grid container direction='column' sx={{ padding:2, width: 350, borderRadius:1, backgroundColor: 'white' }}>
        <Grid item>
            <Stack direction='row'>
                <Typography variant='h6' sx={{ flexGrow: 1, fontFamily:'apple-systems', fontWeight:'bold' }}>
                    Follow Requests
                </Typography>
                <Button sx={{ fontFamily:'apple-systems', textTransform:'none' }}>
                    See All
                </Button>
            </Stack>
            
        </Grid>
        <Grid item sx={{ padding:2 }}>
            <FriendReqCard />
        </Grid>
    </Grid>
  )
}

export default FriendReqList