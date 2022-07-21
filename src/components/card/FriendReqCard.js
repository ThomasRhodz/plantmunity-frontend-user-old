import { Avatar, Grid, Typography, Stack, Button } from '@mui/material'
import React from 'react'

const FriendReqCard = () => {
  return (
    <Grid container direction='row' >
        <Grid item sx={{ paddingRight:2 }}>
            <Avatar alt="Profile" sx={{width:55, height:55}} src='https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-1/134413510_3564518083630903_8730801754340197184_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHU_A2mtt_yKZ9aL7GXNgr4Dmu2sS_rRJwOa7axL-tEnL9aaxKX1Mq9e3lq8jdaGO95tJ_XbOMi7R33FeG2YjMx&_nc_ohc=_e1YFC9CytkAX8t1Mom&tn=NG8G1JopL1e6n6Ef&_nc_ht=scontent-hkt1-1.xx&oh=00_AT8cU7Q0VLRAmcfJIHgBFPx4Mfuf1vE-f2RSAbORHlcc3A&oe=62FECA71'/>
        </Grid>
        <Grid item>
            <Stack direction='column'>
                <Typography sx={{ fontFamily:'apple-systems', fontSize:18 }}>
                    Roxene Mae Lee
                </Typography>
                <Typography variant='subtitle1' sx={{ fontFamily:'apple-systems', marginTop: '-2px', color: '#9eaba6' }}>
                    @RoxLee
                </Typography>
                <Stack direction='row' spacing={1} sx={{ paddingTop:1 }}>
                    <Button variant='contained' sx={{paddingLeft:4, paddingRight:4, textTransform:'none', fontFamily:'apple-systems', color:'green', border:'1px solid green', backgroundColor:'transparent', borderRadius:5 }}>
                        Accept
                    </Button>
                    <Button variant='contained' sx={{paddingLeft:3, paddingRight:3, textTransform:'none', fontFamily:'apple-systems', color:'red', border:'1px solid red', backgroundColor:'transparent', borderRadius:5  }}>
                        Delete
                    </Button>
                </Stack>
            </Stack>
        </Grid>
    </Grid>
  )
}

export default FriendReqCard