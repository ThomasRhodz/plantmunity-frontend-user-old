import * as React from 'react';
import {Grid, Card, CardContent, Typography, Avatar} from '@mui/material/';
import Button from '../basic/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const FollowingCard = ({userName, user, userProfilePic, bio, followBackStatus}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const status = followBackStatus;
  return (
    //Start of the outer component (card)
    <Card sx={{ display: 'flex', padding:1, paddingLeft:2, paddingRight:2, width: {xs: 350, sm:700, md:800} }}>
      
      {/* The grid that allows the insde components to have a horizontal direction*/}
      <Grid container direction='row' alignItems='center' >
        
        {/* First component, the user icon */}
        <Grid item>
          <Avatar sx={{width: {xs: 65, sm:75, md:75}, height: {xs: 65, sm:75, md:75} }} alt='Tanjiro' src={userProfilePic} />
        </Grid>

        {/* 2nd component, card content such as user's name, username and bio */}
        <Grid item sx={{maxWidth:{xs:220, sm:420, md:420}}}>

          <CardContent>  {/*by default it will have a vertical direction */}
             {/* user's name */}
            <Typography component="div" variant="subtitle1" fontFamily='apple-system' sx={{fontWeight:'bold'}}>
              {user}
            </Typography>

             {/* grid that allows a horizontal direction of the two components */}
            <Grid container spacing={1} direction='row' alignItems='center' >
                {/* username */}
                <Grid item>
                    <Typography component="div" variant="subtitle2" fontFamily='apple-system'>
                        @{userName}
                    </Typography>
                </Grid>

                {/* a text ('Follows you') or badge that shows if the this user follows the account*/}
                <Grid item>
                    <Typography component="div" variant="caption" fontFamily='apple-system' sx={status===1?{display:'flex', fontWeight:'bold', backgroundColor:'#f6f7f6', width:82, padding:1, borderRadius:15, paddingTop:0.5, paddingBottom:0.5} : {display:'none'}}>
                        Follows you
                    </Typography>
                </Grid>

            </Grid>{/* end of horizontal direction */}

            {/* user's bio' */}
            <Typography component="div" variant={matches?'caption':"subtitle1"} fontFamily='apple-system'>
              {bio}
            </Typography>

          </CardContent> {/* end of card content */}
        </Grid>{/* end of grid for 2nd component */}

        <Grid sx={{flexGrow: 1}} /> {/* pushes the 3rd component to the right side of the card */}

        {/* 3rd component, the unfollow button */}
        <Grid container direction='row' justifyContent="flex-end" sx={{marginTop:{xs:0, sm:'-130px', md:'-130px'}}}>
          <Grid item>
            <Button variant='text' btnSize='large' btnWidth={120} color='white' text='Unfollow'  textSize='15px' textColor='red' borderRad={20} borderStyle='1px solid red' />
          </Grid> {/* end of 3rd component */}
        </Grid>

      </Grid>{/* end of grid with horizontal direction for all of the components */}

    </Card>// end of card
  )
}

export default FollowingCard