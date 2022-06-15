import React from 'react'
import { Grid, Paper } from '@mui/material'
import LandingNavBar from '../components/navigation/LandingNavBar'
import SignUpForm from '../components/body/SignUpForm'
import Background from '../images/Background.png'

const signup = () => {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            
        }
      };
  return (
    <Paper  style={styles.paperContainer} elevation={0} sx={{width: '100%', height: '100%'}}>
        <Grid container direction='column' alignItems='center' sx={{width: "100%"}}>
            <Grid item sx={{width: "100%"}}>
                <LandingNavBar activePage={5}/>
            </Grid>
            <Grid item sx={{width: "100%"}}>
                <SignUpForm/>
            </Grid>
            <Grid sx={{height:{xs:60, sm:60, md:35}}} />
        </Grid>
    </Paper>
  )
}

export default signup