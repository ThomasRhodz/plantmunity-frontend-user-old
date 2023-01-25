import React from 'react'
import { Grid, Paper, Stack, Typography , Avatar } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import {AiFillGithub} from 'react-icons/ai';

const TeamCard = ({name, title, email, phone, github, address, coverImage, userImage}) => {
  const styles = {
    paperContainer: {
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        
    }
  }
  return (
    <Grid container direction='column' alignItems='center' sx={{ width:300, height:400, backgroundColor:'white', borderRadius:2, overflow: 'hidden', boxShadow:' 2px 4px #888888' }}>
      <Paper style={styles.paperContainer} elevation={0} sx={{width: '100%', height: 100, borderRadius: 0}}>
      </Paper>
      <Grid item sx={{ marginTop: '-65px' }}>
        <Avatar  sx={{border:'5px solid white', width: 130, height: 130}} alt="member" src={userImage} />
      </Grid>
      <Grid sx={{height:10}}/>
      <Grid item >
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'apple-system', color:'#7C8470'}}>
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="subtitle1" component="div" style={{ marginTop:'-10px', fontFamily:'apple-system', color:'#7C8470' }}>
          {title}
        </Typography>
      </Grid>
      <Grid sx={{height:20}}/>
      <Grid item>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <Stack direction='row' spacing={1}>
              <EmailRoundedIcon fontSize='small' spacing={2} sx={{color: '#5C6D63' }}/>
              <Typography variant="body2" style={{fontFamily:'apple-system', color:'#5C6D63'}}>
                {email}
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction='row' spacing={1}>
              <PhoneEnabledIcon fontSize='small' sx={{color: '#5C6D63' }}/>
              <Typography variant="body2" style={{fontFamily:'apple-system', color:'#5C6D63'}}>
                {phone}
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction='row' spacing={1}>
              <AiFillGithub  style={{color: '#5C6D63', fontSize:20 }}/>
              <Typography variant="body2" style={{fontFamily:'apple-system', color:'#5C6D63'}}>
                {github}
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction='row' spacing={1}>
              <LocationOnRoundedIcon fontSize='small' sx={{color: '#5C6D63' }}/>
              <Typography variant="body2" style={{fontFamily:'apple-system', color:'#5C6D63'}}>
                {address}
              </Typography>
            </Stack>
          </Grid>

        </Grid>
      </Grid>
        
    </Grid>
  )
}

export default TeamCard