import React from 'react';
import propType from 'prop-types'
import Button from './Button';
import TextField from './TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../css/style.css';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../images/PlantmunityLogo.png';

const useStyles = makeStyles((theme) =>
  ({

    logInHolder: {
        backgroundColor: 'white',
        padding: '30px',
        width: '400px',
        height: '492px', 
        border: "1px solid #58a776",
        [theme.breakpoints.down('md')]: {
            width: '360px',
        },

        [theme.breakpoints.down('xs')]: {
            border: 'none'
        },
    },
    logInImageHolder:{
      
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },

    logInImage: {
        border: "1px solid #58a776",
        width:'400px',
        height: '490px',
        objectFit: 'cover',
    },

    logInContainer:{
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '20px'
        },
    },
  }));



const Login = ({goToSignUp, goToTimeline}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ flexGrow: 1 }} display='flex' justifyContent='center' alignItems='center' className={classes.logInContainer}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} alignItems='center' className={classes.logInImageHolder}>
                <div>
                    <div style={{width: '400px',  marginLeft: 'auto'}}>
                        <div style={{height:70}} />
                        <img
                            src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623959191-medium-plant-dieffenbachia-white-pot_2048x.jpg'
                            alt='Plant'
                            className={classes.logInImage}
                        />
                    </div>
                </div>
            </Grid>
            <Grid container item xs={12} sm={6} alignItems={matches ?'center':'left'} direction="column" justify='space-between' style={{padding: 0}}>
                <div>
                    <div style={{height:86}} />
                    <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 300}}>
                        <Grid className={classes.logInHolder}>   
                            <Grid item justify='center'>
                                <div>
                                    <div style={{width: '300px', marginRight: 'auto', marginLeft: 'auto'}}>
                                        <img
                                            src={Logo}
                                            width={300}
                                            alt='logo'
                                        />
                                    </div>
                                </div>
                            </Grid>
                            <TextField type='email' label="Email"/>
                            <div style={{height:20}} /> 
                            <TextField type='password' label="Password"/>
                            <div style={{height:5}} />
                            <div>
                                <div style={{width: '152px', marginLeft: 'auto'}}>
                                    <Button variant='text' btnSize='small' color='white' text='Forgot your password?'  textSize='13px' textColor='#58a776'/>
                                </div> 
                            </div>
                            <div style={{height:20}} /> 
                            <Button variant='contained' color='#58a776' text='Log In' textColor='white' btnWidth='100%' btnSize='large' clickHandler={() => goToTimeline()}/>
                            <div style={{height:10}} />

                            <div style={{width: '100%',}}>
                                <div style={{width: '195px', marginRight: 'auto', marginLeft: 'auto'}}>
                                    <Grid container item xs={12} sm={6} alignItems='center' direction="row" justify='center' style={{padding: 10, alignSelf: 'center', justifySelf: 'center'}}>
                                        <div style={{textAlign: 'center', display: 'flex', flexDirection: 'row', maxWidth: 400, minWidth: 300}}>
                                            <p style={{fontSize: '14px', position:'relative', marginTop: '9px'}}>Not a member?</p> 
                                            <Button variant='text' btnSize='small' color='none' text='Signup now!'  textSize='13px' textColor='#58a776' clickHandler={() => goToSignUp()}/>
                                        </div>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </div>
            </Grid>
        </Grid>
    </Box>
        
    ) 
}

Login.propType = {
    toSignUp: propType.func,
    goToTimeline: propType.func
}

export default Login
