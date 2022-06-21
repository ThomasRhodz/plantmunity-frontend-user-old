import React from 'react'
import { Grid, Paper } from '@mui/material'
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Background from '../../images/AboutIntroImage.jpg'
import MissionStatement from '../parts/MissionStatement';
import VisionStatement from '../parts/VisionStatement';
import CoreValueCard from '../card/CoreValueCard';


const About = () => {
  const coreValues = [
    {
      ID: 2,
      title: 'To be Bold and Visionary' ,

    },
    {
      ID: 3,
      title: 'To Be Open Minded',
    },
    {
      ID: 4,
      title: 'Move Fast, Fix Fast',

    },
    {
      ID: 5,
      title: 'Secure and Trackable',
    },
    {
      ID: 6,
      title: 'Build Social Values',

    },
    {
      ID: 1 ,
      title: 'To be Informative',
    },
  ];

  const renderCoreValues = coreValues.map(({ID, title})=> {
    return (
      <Grid item key={ID}>
        <CoreValueCard image={ID} title={title}/>
      </Grid>
    )
  });

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        
    }
  };
  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '100%'}}>
        <Grid item sx={{ width: '100%', height: 250, backgroundColor:'white'}}>
          <Paper  style={styles.paperContainer} elevation={0} sx={{width: '100%', height: {sm: 300, md: 250}, borderRadius: 0, padding:8}}>
            <Grid container direction='column' alignItems='center' sx={{ width: '100'}}>
              <Grid item >
                <Typography
                  variant='h6'
                  style={{fontFamily:'"Segoe UI"', color:'white', letterSpacing:8}}
                  gutterBottom
                >
                    KNOW MORE    
                </Typography>
              </Grid>
              <Grid item sx={{ marginTop:'-20px' }}>
                <Typography
                  variant='h1'
                  style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'white'}}
                  gutterBottom
                >
                  About Us   
                </Typography>
                
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/** Details container*/}
        <Grid item sx={{ width: '100%', height: '100%' }}>
          {/** Detail holder in column */}
          <Grid container direction='column' alignItems='center' sx={{ width: '100%', backgroundColor:'white', padding: 5 }}>
            
            <Grid item>
              <Typography
                variant='h4'
                style={{fontFamily:'"Segoe UI"', color:'#2b332e', fontWeight: 'bold', letterSpacing:5}}
                gutterBottom
              >
                  WHO WE ARE    
              </Typography>
            </Grid>
            <Grid sx={{height:10}}/>
            <Grid item sx={{ width:1150, paddingBottom:3 }}>
              <Typography
                variant='h6'
                align='center'
                style={{fontFamily:'-apple-systems', color:'#2b332e'}}
                gutterBottom
              >
                  To be launched in late 2022, PlantMunity is a Progressive Web Application that started as a capstone project initiated by Team Rorona and created to lead an online networking platform for all plant enthusiasts here in Davao City. Any plant enthusiast may create their account for free to share and discover incredible knowledge in plant care. They can also gain meaningful exposure, identify the plants in their garden, start their virtual store for plant selling or even buy any plant or plant-related products posted by other users.   
              </Typography>

            </Grid>

            <Grid item sx={{width:1200}}>
              <Divider variant='fullWidth' sx={{ height: 5 }} />
            </Grid>

            <Grid item sx={{ paddingTop:3 }}>
              {/** Mission-Vision */}
              <Grid container direction='row'>
                <Grid item >
                  <MissionStatement />
                </Grid>
                <Grid sx={{ width:80 }}/>
                <Grid item >
                  <VisionStatement />
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        <Grid item sx={{ width: '100%', height: 550, padding: 3 }}>
          <Grid container direction='column' alignItems='center' sx={{ width:'100%' }}>
            <Grid item>
              <Typography
                  variant='h6'
                  style={{fontFamily:'"Segoe UI"', color:'white', letterSpacing:4}}
                  gutterBottom
                >
                    OUR COMPANY'S  
                </Typography>
            </Grid>
            <Grid item sx={{ marginTop: '-20px' }}>
              <Typography
                  variant='h2'
                  style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'white'}}
                  gutterBottom
                >
                  Core Values  
                </Typography>
            </Grid>
            <Grid item sx={{height:30}}/>
            <Grid item>
              <Grid container direction='row' alignItems='center' spacing={3}>
                {renderCoreValues}
              </Grid>
            </Grid>
          </Grid>

        </Grid>

    </Grid>
  )
}

export default About