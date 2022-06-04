import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '../basic/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const FollowerCard = ({userName, user, userProfilePic, bio, followBackStatus}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const status = followBackStatus;
  return (
    //Starting of follower card (parent component)
    <Card sx={{ display: 'flex', padding:1, paddingLeft:2, paddingRight:2, width: {xs: 350, sm:700, md:800} }}>
      
      {/* Container Grid: Grid that holds the card components that give a horizontal direction*/}
      <Grid container direction='row' alignItems='center' >

        {/*1st Grid: User avatar */}
        <Grid item>
        <Avatar sx={{width: {xs: 65, sm:75, md:75}, height: {xs: 65, sm:75, md:75} }} alt='Tanjiro' src={userProfilePic} />
        </Grid>

        {/* 2nd Grid: Grid that holds CardContent that contains the user details */}
        <Grid item sx={{maxWidth:{xs:220, sm:420, md:420}}}>

          {/* CardContent, vertically arranged by default */}
          <CardContent>
            <Typography component="div" variant="subtitle1" fontFamily='apple-system' sx={{fontWeight:'bold'}}>
              {user}
            </Typography>
            <Typography component="div" variant="subtitle2" fontFamily='apple-system'>
              @{userName}
            </Typography>
            <Typography component="div" variant={matches?'caption':"subtitle1"} fontFamily='apple-system'>
              {bio}
            </Typography>
          </CardContent> {/* end of CardContents */}
        </Grid>{/* end of 2nd Grid */}

        <Grid sx={{flexGrow: 1}} />{/* Invisible Grid that pushes the next grid to the other side of parent component */} 

        {/*3rd Grid: holds the button that allows to unfollow or follow a follower */}
        <Grid container direction='row' justifyContent="flex-end" sx={{marginTop:{xs:0, sm:'-130px', md:'-130px'}}}>
            <Grid item>
            {status===1? <Button variant='text' btnSize='large' btnWidth={120} color='white' text='Unfollow'  textSize='15px' textColor='red' borderRad={20} borderStyle='1px solid red' /> : <Button variant='text' btnSize='large' btnWidth={120} color='white' text='Follow'  textSize='15px' textColor='#58a776' borderRad={20} borderStyle='1px solid #58a776' /> }
            </Grid>
        </Grid>
      </Grid>{/* End of container grid */}
    </Card> //end of card
  )
}

export default FollowerCard