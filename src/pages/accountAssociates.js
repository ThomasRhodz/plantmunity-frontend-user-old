import React from 'react'
import NavBar from '../components/navigation/NavBar';
import AssociateTab from '../components/main/AssociateTab';
import BottomNavBar from '../components/navigation/BottomNavBar';
import Grid from '@mui/material/Grid';
const accountAssociates = () => {

    return (
        <Grid container direction='column' alignItems='center' sx={{width:'100%'}}>
            <Grid item>
                <NavBar/>
            </Grid>
            <Grid sx={{height:{xs:70, sm:70, md:100}}} />
            <Grid item sx={{width:'100%'}}>
                <AssociateTab/>
            </Grid>
            <Grid item>
                <BottomNavBar/>
            </Grid>
        </Grid>
    )
}

export default accountAssociates