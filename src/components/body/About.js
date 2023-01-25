import React from 'react'
import { Grid, Paper, Typography, Divider } from '@mui/material'
import Masonry from '@mui/lab/Masonry';

import Background from '../../images/AboutIntroImage.jpg'
import MissionStatement from '../parts/MissionStatement';
import VisionStatement from '../parts/VisionStatement';
import CoreValueCard from '../card/landingPageCards/CoreValueCard';
import TeamCard from '../card/landingPageCards/TeamCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const About = () => {
  const theme = useTheme();

  const mvDeterminer = useMediaQuery(theme.breakpoints.down(1450));
  const coreDeterminer = useMediaQuery(theme.breakpoints.down(1400));
  const teamDeterminer = useMediaQuery(theme.breakpoints.down(1100));
  const extraSmall = useMediaQuery(theme.breakpoints.down(600));

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
      <Grid key={ID}>
        <CoreValueCard image={ID} title={title}/>
      </Grid>
    )
  });

  const teamMembers = [
    {
      ID: 1,
      name: 'John Eliezar Rodis',
      title: 'B.S. Information Technology',
      email:'J.Rodis.477534@umindanao.edu.ph',
      phone:'+639466801637',
      github:'ThomasRhodz',
      address:'Talomo, Davao City',
      coverImage:'https://wallpaperaccess.com/full/812553.jpg',
      userImage:'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/117433340_2596671983918602_1870248062843378552_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFdj_SCPbrxByn6uUV32OTreL2rh9V7qhJ4vauH1XuqEv-nnKJWI2129tu7UC-sPmsBG6_g6BEylUMpISq28qLg&_nc_ohc=Po4xak9w0y8AX_RoIvF&_nc_ht=scontent.fmnl4-3.fna&oh=00_AT9f6sgK0W19d88XPUyXkVM63f7KqHXcveFCT8BRflBgzw&oe=62E19B0C',

    },
    {
      ID: 2,
      name: 'Roxene Mae Lee',
      title: 'B.S. Information Technology',
      email:'R.Lee.477477@umindanao.edu.ph',
      phone:'+639263514782',
      github:'RoxeneLee516',
      address:'Bago, Davao City',
      coverImage:'https://wallpaperaccess.com/full/812553.jpg',
      userImage:'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.18169-9/23754939_1493315557417843_498279117897078941_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGb9WaYc-s0cw38K_-WeH2xMtOo1EoK2Dcy06jUSgrYN0V2T6zJrDZ6dUOyGlcX6v6L0utLp6xLddj6o5_e34To&_nc_ohc=hj0uLZkg5F4AX-kpL_0&_nc_ht=scontent.fmnl25-1.fna&oh=00_AT_dJhJVdLgZJ5zniuAe-PzI3D2bR68Zmi4kSq7wjTbUlQ&oe=62E352D4',
    },
    {
      ID: 3,
      name: 'Anna Marie Novicio',
      title: 'B.S. Information Technology',
      email:'A.Novicio.478666@umindanao.edu.ph',
      phone:'+639553627187',
      github:'Yanna22',
      address:'Cabantian, Davao City',
      coverImage:'https://wallpaperaccess.com/full/812553.jpg',
      userImage:'https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/277996966_182226144133860_6047815247127755952_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFYVrud_zH2psKcoZ9A6gwW1ByBJgu-hbvUHIEmC76Fu0x0QIPFiG6ICndsW8OWWGgIPMBo8yQVj2V9gDQVZicH&_nc_ohc=oKtWzTao0WQAX8w1DEv&_nc_ht=scontent-hkt1-2.xx&oh=00_AT_ow72Wfs7w1kYIxtQ9bUjMTeqFSy0d4XDPnstNsp0E4g&oe=62C7819C',

    },
  ];

  const renderTeamMember = teamMembers.map(({ID, name, title, email, phone, github, address, coverImage, userImage})=> {

    return(
        <Grid item key={ID}>
          <TeamCard name={name} title={title} email={email} phone={phone} github={github} address={address} coverImage={coverImage} userImage={userImage} />
        </Grid>
    );
  });

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        
    }
  };
  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '100%', bgcolor:'#BFCBA5'}}>
        <Grid item sx={{ width: '100%',height: {xs: '100%', sm: 300, md: 250}, backgroundColor:'white'}}>
          <Paper  style={styles.paperContainer} elevation={0} sx={{width: '100%', height: {xs: '100%', sm: 300, md: 250}, borderRadius: 0, padding:8}}>
            <Grid container direction='column' alignItems='center' sx={{ width: '100%'}}>
              <Grid item >
                <Typography
                  variant={extraSmall ? 'subtitle1' : 'h6'}
                  style={{fontFamily:'"Segoe UI"', color:'white', letterSpacing:8}}
                  gutterBottom
                >
                    KNOW MORE    
                </Typography>
              </Grid>
              <Grid item sx={{ marginTop:'-20px' }}>
                <Typography
                  variant={extraSmall ? 'h3' : 'h1'}
                  align='center'
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
          <Grid container direction='column' alignItems='center' sx={{ width: '100%', backgroundColor:'white', padding: 5, paddingLeft:{sm:5, md:15}, paddingRight:{sm:5, md:15} }}>
            
            <Grid item>
              <Typography
                variant={extraSmall ? 'h5' : 'h4'}
                style={{fontFamily:'"Segoe UI"', color:'#2b332e', fontWeight: 'bold', letterSpacing:5}}
                gutterBottom
              >
                  WHO WE ARE    
              </Typography>
            </Grid>
            <Grid sx={{height:10}}/>
            <Grid item sx={{ paddingBottom:3 }}>
              <Typography
                variant={extraSmall ? 'body1' : 'h6'}
                align='center'
                style={{fontFamily:'-apple-systems', color:'#2b332e'}}
                gutterBottom
              >
                  To be launched in late 2022, PlantMunity is a Progressive Web Application that started as a capstone project initiated by Team Rorona and created to lead an online networking platform for all plant enthusiasts here in Davao City. Any plant enthusiast may create their account for free to share and discover incredible knowledge in plant care. They can also gain meaningful exposure, identify the plants in their garden, start their virtual store for plant selling or even buy any plant or plant-related products posted by other users.   
              </Typography>

            </Grid>

            <Grid item sx={{width:'100%'}}>
              <Divider variant='fullWidth' style={{ height: 2 }} />
            </Grid>

            <Grid item sx={mvDeterminer ? {width:'100%', paddingTop:3 } : { paddingTop:3 }}>
              {/** Mission-Vision */}
              <Grid container direction={mvDeterminer ? 'column' : 'row'} alignItems= {mvDeterminer ? 'center' : ''}>
                <Grid item sx={{ paddingRight:{sm:0, md:5}, paddingLeft:{sm:0, md:5} }} >
                  <MissionStatement />
                </Grid>

                <Grid item sx={{ paddingRight:{sm:0, md:5}, paddingLeft:{sm:0, md:5} }} >
                  <VisionStatement />
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        {/**Core Values */}
        <Grid item sx={{ width: '100%', height: '100%', padding: 3 }}>
          <Grid container direction='column' alignItems='center' sx={{ width:'100%' }}>
            <Grid item>
              <Typography
                  variant={extraSmall ? 'subtitle1' : 'h6'}
                  style={{fontFamily:'"Segoe UI"', color:'white', letterSpacing:4}}
                  gutterBottom
                >
                    OUR GROUP'S  
                </Typography>
            </Grid>
            <Grid item sx={{ marginTop: {xs:'-15px', sm:'-20px', md:'-20px'} }}>
              <Typography
                  variant={extraSmall ? 'h3' : 'h2'}
                  style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'white'}}
                  gutterBottom
                >
                  Core Values  
                </Typography>
            </Grid>
            <Grid item>
              <Grid container direction='row' alignItems='center' sx={coreDeterminer? {width:{xs:360, sm:450, md:800}}:{width:1500}}>
                <Grid item sx={{width:'100%'}}>
                  <Masonry sx={{width:'100%', display:{xs:'none', sm:'none', md:'flex'}}} columns={coreDeterminer ? 3 :6} spacing={2} >
                    {renderCoreValues}
                  </Masonry>
                  <Masonry sx={{width:'100%', display:{xs:'flex', sm:'flex', md:'none'} }} columns={2} spacing={2}>
                    {renderCoreValues}
                  </Masonry>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx = {{width:'100%', padding: 3, backgroundColor: '#f6f7f6', height: '100%' }} >
          <Grid container direction='column' alignItems='center' sx={{ width:'100%' }}>
            <Grid item>
                <Typography
                    variant={extraSmall ? 'subtitle1' : 'h6'}
                    style={{fontFamily:'"Segoe UI"', color:'#2b332e', letterSpacing:4}}
                    gutterBottom
                  >
                      MEET OUR 
                  </Typography>
              </Grid>
              <Grid item sx={{ marginTop: {xs:'-15px', sm:'-20px', md:'-20px'} }}>
                <Typography
                    align='center'
                    variant={extraSmall ? 'h4' : 'h2'}
                    style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'#2b332e'}}
                    gutterBottom
                  >
                    TEAM MEMBERS  
                  </Typography>
              </Grid>
           
            <Grid item sx={{height:40}}/>
            
            <Grid item>
              <Grid container direction={teamDeterminer ? 'column' : 'row'} alignItems='center' spacing={10}>
                {renderTeamMember}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

    </Grid>
  )
}

export default About