import React from 'react'
import { Grid } from '@mui/material'
import LandingNavBar from '../components/navigation/LandingNavBar'
import Contact from '../components/body/Contact'

const contact = () => {
  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '100%' }}>
        <Grid item sx={{ width: '100%' }}>
            <LandingNavBar activePage={3} />
        </Grid>
        <Grid item sx={{ width: '100%' }}>
            <Contact />  
        </Grid>
    </Grid>
  )
}

export default contact