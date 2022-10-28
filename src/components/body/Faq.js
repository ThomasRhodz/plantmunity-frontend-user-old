import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import Background from '../../images/AboutIntroImage.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FaqCard from '../card/FaqCard'

const FAQs = [
    {
      id: 1,
      question: 'Is it free to create an account?',
      answer:'Yes, any plant enthusiasts can use this web application to create their own account for free.'
    },
    {
      id: 2,
      question: 'Does the virtual marketplace utilize any E-payment transactions?',
      answer: ' In fact, yes, the development team of this application have integrated a paymaya API, which allows users to pay using their paymaya accounts'
    },
    {
      id: 3,
      question:'Is free to create your own Virtual Store?',
      answer: 'Each users have the ability to decide to create their own store without any further cost.'
    },
    {
      id: 4,
      question:' Can we post non-related plant products or post with in the application?',
      answer: 'During the actual posting, yes user can post non-related products. However, the platform is strictly use for plant related contents to avoid overloading the feed with non related posts or products. Therefore, the Planmunity have content moderators taht filters  non plant related posts.'
    },
    {
      id: 5,
      question: 'What happened happened to the posted products that contains wrong information such us price?',
      answer: "Plantmunity have admins called Content Moderators, who's have the right knowledge in plant pricing and other stuff who will filter and remove all non-plant related content and posts with false information."
    },
  ];
  
  const renderFAQs = FAQs.map(({id, question, answer}) => {
    return (
      <Grid sx={{ width:'100%', paddingBottom:2 }} key={id}>
        <FaqCard question={question} answer={answer} />
      </Grid>
  
    );
  });

const About = () => {
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down(600));

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        
    }
  };

  return (
    <Grid container direction='column' alignItems='center' sx={{ width: '100%'}}>
        <Grid item sx={{ width: '100%',height: {xs: '100%', sm: 300, md: 250}, backgroundColor:'white'}}>
          <Paper  style={styles.paperContainer} elevation={0} sx={{width: '100%', height: {xs: '100%', sm: 300, md: 250}, borderRadius: 0, padding:{xs:4, sm:8, md:8}}}>
            <Grid container direction='column' alignItems='center' sx={{ width: '100%'}}>
              <Grid item >
                <Typography
                    align='center'
                  variant={extraSmall ? 'subtitle1' : 'h6'}
                  style={{fontFamily:'"Segoe UI"', color:'white', letterSpacing:{xs:4, sm:8, md:8}}}
                  gutterBottom
                >
                    FIND THE ANSWERS TO   
                </Typography>
              </Grid>
              <Grid item sx={{ marginTop:{xs:'-10px', sm:'-20px', md:'-20px'} }}>
                <Typography
                  variant={extraSmall ? 'h4' : 'h2'}
                  align='center'
                  style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'white',}}
                  gutterBottom
                >
                  Frequenly Asked Questions   
                </Typography>
                
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item sx={{ padding:5, paddingLeft:{xs:2, sm:5, md:20}, paddingRight:{xs:2, sm:5, md:20}, width:'100%' }}>
            {renderFAQs}
        </Grid>
       
    </Grid>
  )
}

export default About