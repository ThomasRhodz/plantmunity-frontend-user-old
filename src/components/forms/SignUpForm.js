import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import _ from "lodash/fp";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user';
import { navigate } from 'gatsby';
import { useAddUserMutation } from '../../services/userApi'

import Button from '../basic/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from "@material-ui/core/Typography"; 
import Btn from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import '../../css/style.css';
import { makeStyles } from "@material-ui/core/styles";
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import Logo from '../../images/PlantmunityLogo.png';
import Check from '../../images/leafCheckIcon.png';

const useStyles = makeStyles ((theme) => ({

    signUpHeading: {

        fontFamily: "Georgia, serif",
        color: "#83c2a4",
        fontSize: '21px',
    },
    signUpHolder: {
        borderRadius: '0px 0px 0px 0px',
        backgroundColor: 'white',
        padding: '30px',
        width: '400px',
        height: '490px',
        overflowY: 'scroll', 
        [theme.breakpoints.down('md')]: {
            width: '330px',
        },

        [theme.breakpoints.down('sm')]: {
            borderRadius: '25px 25px 25px 25px',
            height: '100%',
            overflowY:'hidden'
        },
    },

    signUpImageHolder:{
        
        borderRadius: '30px',
        width:'400px',
        height: '490px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },

    signUpImage: {
        borderRadius: '25px 0px 0px 25px',
        width:'400px',
        height: '490px',
        objectFit: 'cover',
    },

    signUpContainer:{
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '20px'
        },
    },
}));

const SignUpForm = ({goToLogin}) => {
    // const {user} = useSelector((state) => state.user)

    const [addUser] = useAddUserMutation();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleProceed = () => {
        navigate('/login')
    };

    const dispatch = useDispatch();
    const classes = useStyles();
    const {register, handleSubmit,  formState: { errors }} = useForm({criteriaMode: "all"});
    const onSubmit = (data) => {
       
        dispatch(setUser({
            fname: data.firstName,
            lname: data.lastName,
            userName: data.userName,
            password: data.password,
            email:data.email
        }));

        const user = {
            'first_name': data.firstName,
            'last_name': data.lastName,
            'username': data.userName,
            'email': data.email,
            'password': data.password
        };

        // addUser(user)
        // console.log(user)
        
        handleClickOpen()
    }
    return (
        <Grid container direction='column' alignItems='center' className={classes.signUpContainer}>
            <Grid sx={{height:{xs:30, sm:30, md:50}}} />
            <Grid item>
                <Grid container direction='row' alignItems='center'>

                    <Grid item className={classes.signUpImageHolder}>
                        <img
                            src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623959191-medium-plant-dieffenbachia-white-pot_2048x.jpg'
                            alt='Plant'
                            className={classes.signUpImage}
                        /> 
                    </Grid>
                    <Grid item className={classes.signUpHolder}>
                        <Grid container direction='column' alignItems='center' sx={{width: '100%'}}>
                            <Grid item>
                                <img
                                    src={Logo}
                                    width={280}
                                    alt='logo'
                                />
                            </Grid>

                            <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit)}>
                                <Grid item sx={{width: '100%'}}>
                                    <p className={classes.signUpHeading}>Personal Details</p>
                                </Grid>
                                <Grid item sx={{width: '100%'}}>
                                    <TextField style={{width: '100%'}} type={'text'} label={'First name'} variant={'outlined'} size={'regular'}  {...register('firstName', {required: 'Required'})} />
                                </Grid>

                                <ErrorMessage
                                    errors={errors}
                                    name="firstName"
                                    render={({ message }) => (
                                        <Grid container direction='row' alignItems='center'>
                                        <Grid item>
                                            <WarningAmberRoundedIcon sx={{fontSize:"18px", color:'#e9be16'}}/>
                                        </Grid>
                                        <div style={{width:4}} />
                                        <Grid item>
                                            <Typography
                                                variant='subtitle1'
                                                style={{fontFamily:'apple-system', color:'#e9be16'}}
                                                gutterBottom
                                            >
                                                {message} 
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    )}
                                />
                                <div style={{height:20}} /> 
                                <Grid item sx={{width: '100%'}}>
                                    <TextField style={{width: '100%'}} type={'text'} label={'Last name'} variant={'outlined'} size={'regular'} {...register('lastName', {required: 'Required'})} />
                                </Grid>
                                <ErrorMessage
                                    errors={errors}
                                    name="lastName"
                                    render={({ message }) => (
                                        <Grid container direction='row' alignItems='center'>
                                        <Grid item>
                                            <WarningAmberRoundedIcon sx={{fontSize:"18px", color:'#e9be16'}}/>
                                        </Grid>
                                        <div style={{width:4}} />
                                        <Grid item>
                                            <Typography
                                                variant='subtitle1'
                                                style={{fontFamily:'apple-system', color:'#e9be16'}}
                                                gutterBottom
                                            >
                                                {message} 
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    )}
                                />
                                <div style={{height:20}}  />

                                <Grid item sx={{width: '100%'}}>
                                    <p className={classes.signUpHeading}>Account Details</p>
                                </Grid>
                                <Grid item sx={{width: '100%'}}>
                                    <TextField 
                                        id='username'
                                        style={{width: '100%'}} 
                                        type={'text'} 
                                        label={'Username'} 
                                        variant={'outlined'} 
                                        size={'regular'} 
                                        {...register('userName', {
                                            required: "Required", 
                                            maxLength: { value: 15, message: "Only 15 characters are allowed"},
                                            minLength: { value: 3, message: "It should atleast contain 3 characters"},
                                         })}
                                        />
                                        
                                </Grid>
                                <ErrorMessage
                                    errors={errors}
                                    name="userName"
                                    render={({ messages }) => {
                                    return messages
                                        ? _.entries(messages).map(([type, message]) => (
                                            <Grid container direction='row' alignItems='center' key={type}>
                                                <Grid item>
                                                    <WarningAmberRoundedIcon sx={{fontSize:"18px", color:'#e9be16'}}/>
                                                </Grid>
                                                <div style={{width:4}} />
                                                <Grid item>
                                                    <Typography
                                                        variant='subtitle1'
                                                        style={{fontFamily:'apple-system', color:'#e9be16'}}
                                                        gutterBottom
                                                    >
                                                        {message} 
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            
                                        ))
                                        : null;
                                    }}
                                />
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
                                            maxLength: { value: 15, message: "Only 15 characters are allowed"},
                                            minLength: { value: 8, message: "It should atleast contain 8 characters"},
                                            pattern: {
                                                value: /^[a-zA-Z0-9]{1}[a-zA-Z./!@#$%^&*\d]{7,15}$/,
                                                message:'Must have and start with a letter or number'
                                            }
                                            })}/>       
                                </Grid>
                                <ErrorMessage
                                    errors={errors}
                                    name="password"
                                    render={({ messages }) => {
                                    return messages
                                        ? _.entries(messages).map(([type, message]) => (
                                            <Grid container direction='row' alignItems='center' key={type}>
                                                <Grid item>
                                                    <WarningAmberRoundedIcon sx={{fontSize:"18px", color:'#e9be16'}}/>
                                                </Grid>
                                                <div style={{width:4}} />
                                                <Grid item>
                                                    <Typography
                                                        variant='subtitle1'
                                                        style={{fontFamily:'apple-system', color:'#e9be16'}}
                                                        gutterBottom
                                                    >
                                                        {message} 
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            
                                        ))
                                        : null;
                                    }}
                                />
                                <div style={{height:20}} />
                                <Grid item sx={{width: '100%'}}>
                                    <TextField 
                                        style={{width: '100%'}} 
                                        type={'email'} 
                                        label={'Email'} 
                                        variant={'outlined'} 
                                        size={'regular'} 
                                        {...register('email', {required: 'Required'})} />
                                </Grid>
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
                                    render={({ message }) => (
                                        <Grid container direction='row' alignItems='center'>
                                        <Grid item>
                                            <WarningAmberRoundedIcon sx={{fontSize:"18px", color:'#e9be16'}}/>
                                        </Grid>
                                        <div style={{width:4}} />
                                        <Grid item>
                                            <Typography
                                                variant='subtitle1'
                                                style={{fontFamily:'apple-system', color:'#e9be16'}}
                                                gutterBottom
                                            >
                                                {message} 
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    )}
                                />
                                <div style={{height:40}} />
                                <Grid item sx={{width: '100%'}}>
                                <Button type={'submit'} variant='contained' color='#58a776' text='Sign Up' textColor='white' btnWidth='100%' btnSize='large'/>
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
                                            Already have an Account?   
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='text' btnSize='small' color='none' text='Login here'  textSize='13px' textColor='#58a776' clickHandler={() => navigate('/login')}/>
                                    </Grid>
                                </Grid> 
                            </Grid>  
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Dialog
                open={open}
                onClose={handleProceed}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                
                <DialogContent>
                    <Grid container direction='column' alignItems={'center'} sx={{width:'100%'}}>
                        
                        <Grid item sx={{ height: 100}}>
                            <img
                                src={Check}
                                width={100}
                                height={100}
                                alt='logo'
                            />
                        </Grid>
                        <Grid item sx={{ height: 100}}>
                            <DialogTitle id="alert-dialog-title">
                                {"Registration Successful"}
                            </DialogTitle>
                        </Grid>
                        <Grid item sx={{marginTop:'-40px'}}>
                            <DialogContentText id="alert-dialog-description" sx={{textAlign:'center'}}>
                                Congratulations, your account has been successfully created. 
                                Initial login is required, please login to proceed
                            </DialogContentText>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                <Btn onClick={handleProceed}>
                    Continue
                </Btn>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default SignUpForm