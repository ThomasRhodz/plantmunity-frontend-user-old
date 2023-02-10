import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import {FaBirthdayCake} from 'react-icons/fa';


const BirthdayViewer = () => {
  return (
    <Grid container direction='column' sx={{ padding:2, width: '100%', borderRadius:1, backgroundColor: 'white' }}>
        <Grid item>
            <Stack direction='row'>
                <Typography variant='h6' sx={{ flexGrow: 1, fontFamily:'apple-systems', fontWeight:'bold' }}>
                    Birthdays
                </Typography>
                <Button sx={{ fontFamily:'apple-systems', textTransform:'none' }}>
                    Show More Celebrant
                </Button>
            </Stack>
            
        </Grid>
        <Grid item sx={{ padding:2 }}>
                <Typography variant='h6' sx={{ fontFamily:'apple-systems' }}>
                    <FaBirthdayCake /> It's Roxene Mae Lee's birthday today
                </Typography>
           
        </Grid>
    </Grid>
  )
}

export default BirthdayViewer