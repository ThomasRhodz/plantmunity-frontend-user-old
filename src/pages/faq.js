import React from 'react'
import { Grid } from '@mui/material'
import LandingNavBar from '../components/navigation/LandingNavBar'
import Faq from '../components/body/Faq'

const faq = () => {
  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '100%' }}>
        <Grid item sx={{ width: '100%' }}>
            <LandingNavBar activePage={4} />
        </Grid>
        <Grid item sx={{ width: '100%' }}>
            <Faq />
        </Grid>
    </Grid>
  )
}

export default faq