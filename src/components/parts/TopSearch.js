import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const topSearch = [
    {
        id:1,
        plant: 'Aloe Vera',
        number_of_search: 1034,
    },
    {
        id:2,
        plant: 'Aglonema',
        number_of_search: 878,
    },
    {
        id:3,
        plant: 'Philodendron',
        number_of_search: 751,
    },
];

const renderTopSearch = topSearch.map(({id, plant, number_of_search}) => {
    return (
        <Grid item key={id}>
            <Stack direction='column' sx={{ padding:1, paddingLeft:2 }}>
                <Typography variant='h6' sx={{ fontFamily:'apple-systems' }}>
                    {plant}
                </Typography>
                <Typography variant='subtitle1' sx={{ fontFamily:'apple-systems', marginTop: '-2px', color: '#9eaba6' }}>
                    {number_of_search} Search
                </Typography>
            </Stack>
            <Divider />
        </Grid>
    ); 
});
const TopSearch = () => {
  return (
    <Grid container direction='column' sx={{ width: '100%', borderRadius:1, backgroundColor: 'white' }}>
        <Grid item sx={{ padding:2 }}>
            <Stack direction='row'>
                <Typography variant='h6' sx={{ flexGrow: 1, fontFamily:'apple-systems', fontWeight:'bold' }}>
                    Top Search Plant
                </Typography>
                <Button sx={{ fontFamily:'apple-systems', textTransform:'none' }}>
                    Show More
                </Button>
            </Stack>
            
        </Grid>
        <Divider />
        <Grid item>
            <Grid container direction='column'>
                {renderTopSearch}
            </Grid>
        </Grid>
    </Grid>
  )
}

export default TopSearch