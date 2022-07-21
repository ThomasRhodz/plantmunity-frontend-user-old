import React from 'react';
import {navigate} from 'gatsby';
import { Grid, Paper, Button } from '@mui/material';
import Typography from "@material-ui/core/Typography";
import Background from '../../images/Background.png'
import LandingImage from '../../images/LandingImage.png'
import FeatureCard from '../card/FeatureCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Landing = () => {
    const theme = useTheme();
    const belowMedium = useMediaQuery(theme.breakpoints.down('md'));
    const extraSmall = useMediaQuery(theme.breakpoints.down(600));
    
    const styles = {
        paperContainer: {
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            
        }
      };

    const features = [
        {
            id: 1,
            title: 'Plant Identification',
            description: 'Our application provide an image processing feature that would identify a plant using the photo you can provide using a URL or by uploading a photo.',
            image: '../../images/icons/photo.png'
        },
        {
            id: 2,
            title: 'Social Platform',
            description: 'Our application also provides a social platform where it allows you to share your plantly stories and engage with other plant enthusiasts',
            image: 2
        },
        {
            id: 3,
            title: 'Buy & Sell',
            description: 'It also provides a platform that allows users to create their own virtual plant shop and engage in marketpalce to buy plant related products.',
            image: 3
        },
        {
            id: 4,
            title: 'Delivery Service',
            description: 'The developer also integrate a delivery API, provided by Borzo or also known as Mr. Speedy, which allows vendor to use a delivery service for order delivery.',
            image: 4
        },
    ];

    const renderFeatures = features.map(({id, title, description, image}) => {
        return(
            <Grid item key={id}>
                 <FeatureCard title={title} description={description} image={image} />
                {console.log(image)}
            </Grid>
        )
    });

    return (
        <Grid container direction='column' alignItems='center' sx={{width:'100%', height: '100%'}}>
            
            {/**Landing Intro */}
            <Grid item sx={{width:'100%'}}>
                <Paper  style={styles.paperContainer} elevation={0} sx={{width: '100%', height: {sm: 1000, md:'100%'}, paddingLeft:{xs: 2, sm:5, md:5}, paddingRight: {xs: 2, sm:5, md:5}, paddingBottom: {xs: 2, sm:5, md:5}, paddingTop:{xs: 0, sm:0, md:5}}}>
                    <Grid  container direction={belowMedium? 'column' : 'row'} alignItems='center' sx={{width:'100%', height: '100%'}} >
                        <Grid item sx={{flexGrow:{sm:0, md:1}, height: {sm:500, md:480}, padding: {xs:1, sm: 5, md:5}, paddingTop: {xs:5, sm: 5, md:5}, width: {sm:'100%',md: 700}}}>
                            <Grid container direction='column' alignItems={belowMedium? 'center': ''} sx={{ width:'100%'  }}>
                                <Grid item>
                                    <Typography
                                    variant='h6'
                                    align={belowMedium? 'center': 'justify'}
                                    style={{fontFamily:'"Segoe UI"', color:'white'}}
                                    gutterBottom
                                    >
                                        Social-Ecommerce    
                                    </Typography>
                                </Grid>
                                <Grid item sx={{width: {sm:500, md:500}}}>
                                    <Typography
                                    variant={extraSmall ? 'h3' : 'h2'}
                                    align={belowMedium? 'center': 'left'}
                                    style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'white'}}
                                    gutterBottom
                                    >
                                    { "BUY, SELL & SHARE PLANTLY CONTENTS "}   
                                    </Typography>
                                </Grid>
                                <Grid item sx={{width:{sm:500, md:600}}}>
                                    <Typography
                                        variant={extraSmall ? 'subtitle1' : 'h6'}
                                        align={belowMedium? 'center': 'justify'}
                                        style={{fontFamily:'-apple-system', color:'#63543a'}}
                                        gutterBottom
                                    >
                                    Here you're welcome to share your plantly stories, sell any plant related products and find the best plants for your household.
                                    </Typography>
                                </Grid>
                                <Grid sx={{height:10}}/>
                                <Grid item sx={{width:{xs: 280, sm:400, md:600}}}>
                                    <Grid container direction= 'row' alignItems='center' >
                                        <Grid item>
                                            <Button
                                                onClick={()=>{navigate('/signup')}}
                                                variant="contained"
                                                sx={{ width:{xs: 130, sm:150, md:150}, height:{xs: 40, sm:45, md:45}, borderRadius:5, backgroundColor:'#7C8470', color: 'white', display: 'block', fontFamily: '-apple-systems', fontSize: {xs: 16, sm:20, md:20}, fontWeight: 'bold' }}
                                            >
                                                Sign Up
                                            </Button>
                                        </Grid>
                                        <Grid sx={{ width:{xs:20, sm:10, md:10}} }/>
                                        <Grid item sx={{ display:{sm: 'flex', md:'none'} }}>
                                            <Button
                                                onClick={()=>{navigate('/login')}}
                                                variant="contained"
                                                sx={{ width:{xs: 130, sm:150, md:150}, height:{xs: 40, sm:45, md:45}, borderRadius:5, backgroundColor:'#7C8470', color: 'white', display: 'block', fontFamily: '-apple-systems', fontSize: {xs: 16, sm:20, md:20}, fontWeight: 'bold' }}
                                            >
                                                Login
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    
                                </Grid>
                            </Grid>
                        </Grid>
                       
                        <Grid item sx={{flexGrow:{xs:0, sm:0, md:1}, height: {xs:'100%', sm:450, md:450}}}>
                            <Grid container direction='column' alignItems='center' sx={{ display: {xs: 'none', sm: 'flex', md:'flex'} }}>
                                <img src={LandingImage} width={500} height={500} alt='Intro' />
                            </Grid>

                            <Grid container direction='column' alignItems='center' sx={{ display: {xs: 'flex', sm: 'none', md:'none'} }}>
                                <img src={LandingImage} width={300} height={300} alt='Intro' />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{height:50}}/>
                </Paper>
            </Grid> {/** End of Landing Intro */}

            {/**Services and Features */}
            <Grid item sx={{width: '100%', height:{sm:'100%', md:"100%"}, backgroundColor: 'white', paddingTop:5, paddingBottom:5}}>
                <Grid container direction='column' alignItems='center' sx={{width: '100%'}}>
                    <Grid item>
                        <Typography
                            variant='h3'
                            style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'#2b332e'}}
                            gutterBottom
                        >
                            { "Our Services"}     
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='h5'
                            style={{fontFamily:'"-apple-systems"', color:'#5C6D63'}}
                            gutterBottom
                        >
                            { "Your needs are our purpose."}     
                        </Typography>
                    </Grid>
                    <Grid item sx={{width:{xs:300, sm:600, md:600}}}>
                        <Typography
                            variant='body1'
                            align='center'
                            style={{fontFamily:'"-apple-systems"', color:'#2b332e'}}
                            gutterBottom
                        >
                            { "Our development team are doing their best to provide a great and secure features. For inquiries or suggestion you may go to our contact page and use the concern form to let us know how we can make our service better." }     
                        </Typography>
                    </Grid>
                    <Grid sx={{height:40}}/>
                    <Grid item>
                       <Grid container direction={belowMedium ? 'column': 'row'} spacing={5} alignItems='center'>
                            {renderFeatures}
                       </Grid>
                    </Grid>
                </Grid>
            </Grid>{/**Ending ofServices and Features */}
        </Grid>
    )
   
}

export default Landing;