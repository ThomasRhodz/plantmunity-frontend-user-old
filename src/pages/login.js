import React from 'react'
import { Grid } from '@mui/material'
import LandingNavBar from '../components/navigation/LandingNavBar'
import Login from '../components/body/Login'


const login = () => {
   
  return (
    
    <Grid container direction='column' alignItems='center' sx={{width: "100%"}}>
        <Grid item sx={{width: "100%", display: {xs:'flex', sm:'flex', md: 'flex'}}}>
            <LandingNavBar activePage={5}/>
        </Grid>
        <Grid item sx={{ width:'100%' }}>
            <Login/>
        </Grid>
        <Grid sx={{height:{xs:60, sm:60, md:35}}} />
    </Grid>
        
   
  )
}

export default login