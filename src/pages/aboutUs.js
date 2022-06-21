import React from 'react'
import { Grid } from '@mui/material'
import LandingNavBar from '../components/navigation/LandingNavBar'
import About from '../components/body/About'

const aboutUs = () => {
  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '100%' }}>
        <Grid item sx={{ width: '100%' }}>
            <LandingNavBar activePage={2} />
        </Grid>
        <Grid item sx={{ width: '100%' }}>
            <About />  
        </Grid>
    </Grid>
  )
}

export default aboutUs