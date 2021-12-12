import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function index() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img
            src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623959191-medium-plant-dieffenbachia-white-pot_2048x.jpg'
            alt='Plant'
            style={{ width:'100%', height: '700px', objectFit: 'cover'}}
          />
        </Grid>
        <Grid container item xs={12} sm={6} alignItems='center' direction="column" justify='space-between' style={{padding: 10}}>
        <div style={{height:20}} />
          <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 300}}>
            <Grid item justify='center'>
              <img
                src='https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.15752-9/207912649_3025017804402687_6625310251926066918_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEfsmMCyWqQP5RqlU-rPEeSmMpJYnJXYMuYyklicldgyzoOl5D1_SssUFWV0JmEOBnauKuiCPIIYIY8DMbZ6zbH&_nc_ohc=8MV6_EZ2cS8AX-tHUwj&_nc_ht=scontent.fmnl25-2.fna&oh=f6dff977c731361d746d39942bcca13f&oe=61D79F0B'
                width={300}
                alt='logo'
              />
            </Grid>
            <TextField type='email' label="Email" variant="outlined"/>
            <div style={{height:20}} /> 
            <TextField type='password' label="Password" variant="outlined" />
            <div style={{height:20}} /> 
            <Button variant="contained">Login</Button>
          </div>
          <div style={{height:20}} />
        </Grid>
      </Grid>
    </Box>
  );
}
