import React from 'react';
import {Box, Grid, Stack, Typography, IconButton, Button, Paper } from '@mui/material';
import { SearchField } from '../basic/StyledComponents';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Background from '../../images/AboutIntroImage.jpg'; 

const compStyle = {
    'main-container':{
        backgroundColor:'white',
        width:'100%',
        height:'100vh',
        mt:8,
        
    },
    'paper-container': {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        width: '100%', 
        height: {xs: '100%', sm: 300, md: 280}, 
        borderRadius: 0, 
        padding:{xs:4, sm:8, md:8}
        
    },
    'market-container':{
        backgroundColor:'white',
        width:'100%',
        height:280,
        mt:8,
        
    },
}

const MarketPlace = () => {
    const [search, setSearch] = React.useState('')
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    };
  return (
    <Grid container direction='column' alignitems='center' sx={compStyle['main-container']} >
        {/* title */}
        <Grid item>
            <Paper  sx={compStyle['paper-container']} elevation={0}>

                <Stack direction='column' alignItems='center'>
                    <Typography variant='h6' sx={{ fontFamily:'raleway', letterSpacing:2, fontWeight:'bold',  color:'gold', }}>
                        WELCOME TO THE
                    </Typography>
                    <Typography variant='h2' sx={{ color:'white', fontFamily:'Arvo', fontWeight:'bold', mt:'-10px' }}>
                        Market Place
                    </Typography>
                    <Grid sx={{mt:4}}>
                        <Stack direction='row' alignItems='center' sx={{backgroundColor:'#F0F2F5', width:600, p:2, pt: 0, pb:0, borderRadius:10,  border:'1px solid #E7E9EB',}} >
                            <SearchField
                                variant='outlined'
                                inputProps={{ style: { fontFamily: 'raleway',}}}
                                placeholder={"Search by user's name, email or username"}
                                value={ search } 
                                onChange={handleSearchChange}
                                size='small'
                            />
                            <IconButton color="secondary">
                                <SearchRoundedIcon sx={{ color:'gray' }} />
                            </IconButton>
                        </Stack>
                    </Grid>

                </Stack>
            </Paper>

        </Grid>

        <Grid item sx={compStyle['market-container']}>

        </Grid>

    </Grid>
  )
}

export default MarketPlace