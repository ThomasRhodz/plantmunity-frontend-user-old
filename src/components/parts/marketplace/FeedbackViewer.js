import React from 'react'
import FeedbackList from './FeedbackList'
import { Grid, Toolbar, Typography } from '@mui/material'
const FeedbackViewer = ({id}) => {
  return (
    <Grid container direction='column' sx={{ width:'100%', mt:3}}>
        <Grid item>
            <Typography variant='body1' sx={{ fontFamily:'arvo', width:'100%' }}>
                {"Feedbacks"}
            </Typography>
        </Grid>
        <Grid item sx={{ width:'100%',mt:1 }}>
            <FeedbackList productID={id} />
        </Grid>
        <Toolbar/>
    </Grid>

  )
}

export default FeedbackViewer