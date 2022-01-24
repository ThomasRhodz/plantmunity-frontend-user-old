import React from 'react'
//import propType from 'prop-types'
import Button from '../components/Button';
import TextField from '../components/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import '../css/style.css';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles ((theme) => ({

    signUpContainer: {
        padding: '0px',
        width: '100%',
        height: '100%',
    },

    signUpImageHolder: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },

    signUpImage: {
        border: '1px solid #58a776',
        width:'500px',
        height: '568px',
        objectFit: 'cover',
        [theme.breakpoints.down('xs')]: {
            width:'420px',
        },
    },

    formHolder: {
        backgroundColor: 'white',
        padding: '30px',
        overflow: 'scroll',
        overflowX: 'hidden',
        width: '400px',
        height: '570px',
        border: '1px solid #58a776',

        [theme.breakpoints.down('xs')]: {
            border: 'none',
            width: '300px',
            height: '100%',
            overflow: 'auto',
            overflowX: 'hidden',
        },
    },

    formLogoHolder: {
        width: '300px',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '270px',
        },
    },

    formLogo: {
        width: '300px',
        [theme.breakpoints.down('xs')]: {
            width: '250px',
        },
    },

    signUpHeading: {

        fontFamily: "Georgia, serif",
        color: "#83c2a4",
        fontSize: '21px',
    }
}));

const SignUp = ({goToLogin}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ flexGrow: 1 }} display='flex' justifyContent='center' alignItems='center' className={classes.signUpContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} alignItems='center' className={classes.signUpImageHolder}>
                    <Grid>
                        <Grid style={{width: '450px',  marginLeft: 'auto'}}>
                            <div style={{height:56}} />
                            <img
                                src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623959191-medium-plant-dieffenbachia-white-pot_2048x.jpg'
                                alt='Plant'
                                className={classes.signUpImage}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={6} alignItems={matches ?'center':'left'} direction="column" justify='space-between' style={{ padding: 51}}>
                    <div style={{height: 21}} />
                    <Grid style={{display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 300}}>
                        <Grid className={classes.formHolder} >   
                            <Grid item justify='center'>
                                <div>
                                    <div className={classes.formLogoHolder}>
                                        <img
                                            src='https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.15752-9/207912649_3025017804402687_6625310251926066918_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEfsmMCyWqQP5RqlU-rPEeSmMpJYnJXYMuYyklicldgyzoOl5D1_SssUFWV0JmEOBnauKuiCPIIYIY8DMbZ6zbH&_nc_ohc=TR56u-JEp0EAX_kpJD_&_nc_ht=scontent.fmnl8-1.fna&oh=03_AVLYmxzF4YkkyFqL59ScbX-x2Pjwzf2um-M-rbOjfTcTNA&oe=61FF2C0B'
                                            alt='logo'
                                            className={classes.formLogo}
                                        />
                                    </div>
                                </div>
                            </Grid>
                    
                            <p className={classes.signUpHeading}>Personal Details</p>
                            <TextField type='text' label="First name" boxSize='regular'/>
                            <div style={{height:20}} /> 
                            <TextField type='text' label="Last name" boxSize='regular'/>
                            <div style={{height:20}} /> 
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <div style={{height:20}} /> 

                            <p className={classes.signUpHeading}>Account Details</p>
                            <TextField type='text' label="Username" boxSize='regular'/>
                            <div style={{height:20}} /> 
                            <TextField type='password' label="Password" boxSize='regular'/>
                            <div style={{height:20}} /> 
                            <TextField type='email' label="Email" boxSize='regular'/>
                            <div style={{height:40}} /> 
                                        
                            <Button variant='contained' color='#58a776' text='Sign Up' textColor='white' btnWidth='100%' btnSize='large'/>
                            <div style={{height:30}} />
                            <div style={{width: '100%',}}>
                            <div style={{width: '195px', marginRight: 'auto', marginLeft: 'auto'}}>
                                <Grid container item xs={12} sm={6} alignItems='center' direction="row" justify='center' style={{padding: 10, alignSelf: 'center', justifySelf: 'center'}}>
                                    <div style={{textAlign: 'center', display: 'flex', flexDirection: 'row', maxWidth: 400, minWidth: 300}}>
                                        <p style={{fontSize: '14px', position:'relative', marginTop: '9px'}}>Already a member?</p> 
                                        <Button variant='text' btnSize='small' color='none' text='Login here'  textSize='13px' textColor='#58a776' clickHandler={goToLogin}/>
                                    </div>
                                </Grid>
                            </div>
                        </div>
                        </Grid>
                                
                        
                    </Grid>
                    <div style={{height:20}} />  
                </Grid>
            </Grid>
        </Box>
            
    )
}

export default SignUp