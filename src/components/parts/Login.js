import React from 'react';
import propType from 'prop-types'
import Button from '../basic/Button';
import { useForm } from 'react-hook-form';
import { useSelector} from 'react-redux';


import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import Logo from '../../images/PlantmunityLogo.png';


const useStyles = makeStyles((theme) =>
  ({

    logInHolder: {
        borderRadius: '0px 25px 25px 0px',
        backgroundColor: 'white',
        padding: '30px',
        width: '400px',
        height: '490px', 
        [theme.breakpoints.down('md')]: {
            width: '350px',
        },

        [theme.breakpoints.down('sm')]: {
            borderRadius: '25px 25px 25px 25px',
        },
    },

    logInImageHolder:{
        
        borderRadius: '30px',
        width:'400px',
        height: '490px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },

        [theme.breakpoints.down('xs')]: {
            width: '360px',
        },
    },

    logInImage: {
        borderRadius: '25px 0px 0px 25px',
        // border: "1px solid #58a776",
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
    const {user} = useSelector((state) => state.user)
    const {register, handleSubmit} = useForm({criteriaMode: "all"});

    const onSubmit = (data) => {
        console.log(data)
        console.log(user.userName)
        console.log(user.email)
        console.log(user.password)

        if((data.userNameEmail===user.userName || data.userNameEmail===user.email) && data.password === user.password){
            goToTimeline()
        }
        else{
            console.log('invalid input')
        }
        
    }
    const classes = useStyles();
    return (
        <Grid container direction='column' alignItems='center' className={classes.logInContainer}>
            <Grid sx={{height:{xs:60, sm:60, md:100}}} />
            <Grid item>
                <Grid container direction='row' alignItems='center'>

                    <Grid item className={classes.logInImageHolder}>
                        <img
                            src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623959191-medium-plant-dieffenbachia-white-pot_2048x.jpg'
                            alt='Plant'
                            className={classes.logInImage}
                        /> 
                    </Grid>
                    <Grid item className={classes.logInHolder}>
                        <Grid container direction='column' alignItems='center' sx={{width: '100%'}}>
                            <Grid item>
                                <img
                                    src={Logo}
                                    width={300}
                                    alt='logo'
                                />
                            </Grid>
                            <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
                            <Grid item sx={{width: '100%'}}>
                                    <TextField 
                                        id='username'
                                        style={{width: '100%'}} 
                                        type={'text'} 
                                        label={'Username or Email'} 
                                        variant={'outlined'} 
                                        size={'regular'} 
                                        {...register('userNameEmail', {
                                            required: "Required", 
                                         })}
                                        />
                                        
                                </Grid>
                                <div style={{height:20}} />

                                <Grid item sx={{width: '100%'}}>
                                    <TextField 
                                        style={{width: '100%'}} 
                                        type={'password'} 
                                        label={'Password'} 
                                        variant={'outlined'} 
                                        size={'regular'} 
                                        {...register('password', {
                                            required: 'Required', 
                                            })}/>       
                                </Grid>
                                <div style={{height:5}} />
                                <Grid item sx={{width: '100%'}}>
                                    <Button variant='text' btnSize='small' color='white' text='Forgot your password?'  textSize='13px' textColor='#58a776'/>
                                </Grid>
                                <div style={{height:20}}  />
                                <Grid item sx={{width: '100%'}}>
                                    <Button type={'submit'} variant='contained' color='#58a776' text='Log In' textColor='white' btnWidth='100%' btnSize='large'/>
                                </Grid>
                            </form>
                            
                            <div style={{height:15}} />
                            <Grid item>
                                <Grid container direction='row' alignItems='center'>
                                    <Grid item>
                                        <Typography
                                            variant='caption'
                                            style={{fontFamily:'apple-system',}}
                                            gutterBottom
                                        >
                                            Don't have an Account?   
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='text' btnSize='small' color='none' text='Signup now!'  textSize='13px' textColor='#58a776' clickHandler={() => goToSignUp()}/>
                                    </Grid>
                                </Grid> 
                            </Grid>  
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ) 
}

Login.propType = {
    toSignUp: propType.func,
    goToTimeline: propType.func
}

export default Login
