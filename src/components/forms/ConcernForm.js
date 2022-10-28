import React from 'react';
import { Grid, TextField, Stack, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SubjectIcon from '@mui/icons-material/Subject';

import Button from '../basic/Button';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAddConcernMutation } from '../../services/concernApi'

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const schema = yup.object({
    firstName: yup.string().required('Firstname is required'), 
    lastName: yup.string().required('Lastname is required'),
    email: yup.string().email('Please enter a valid email format').required('Email is required'),
    phoneNumber: yup.string().required('Phone number is requires').max(20, 'Invalid Phone Number'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required').max(500),

});

const ConcernForm = () => {
    const theme = useTheme();
    const belowMedium = useMediaQuery(theme.breakpoints.down(1300));

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const [addConcern] = useAddConcernMutation();

    const onSubmit = (data) => {
        // console.log(data);

        const concern = {
            'first_name': data.firstName,
            'last_name': data.lastName,
            'email': data.email,
            'mobile_number': data.phoneNumber,
            'subject': data.subject,
            'message': data.message
        };

        // console.log(concern)
        addConcern(concern)
    }

  return (
    <Grid container direction='column' alignItems='center' sx={belowMedium? { width:{xs:350, sm:500, md:430}, height:'100%',  boxShadow: '1px 1px 5px 5px #e0ebe3', borderRadius:2, padding: 5} : { width:500, height:600,  boxShadow: '1px 1px 5px 5px #e0ebe3', borderRadius:2, padding: 5}}>
        <Grid item>
            <Typography
                variant='h4'
                style={{fontFamily:'"Segoe UI"', fontWeight: 'bold', color:'#5C6D63'}}
                gutterBottom
            >
                Concern Form  
            </Typography>
        </Grid>
        <div style={{ height:10 }}/>

        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item>
            <Stack direction='row' spacing={1}>
                <TextField 
                    {...register("firstName")}
                    label="First Name" 
                    variant="outlined" 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleIcon sx={{ color: '#BFCBA5'}} />
                        </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    {...register("lastName")} 
                    label="Last Name" 
                    variant="outlined" 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleIcon sx={{ color: '#BFCBA5'}} />
                        </InputAdornment>
                        ),
                    }}
                />
            </Stack>
        </Grid>

        <div style={{ height:15 }}/>

        <Grid item sx={{ width: '100%' }}>
            
            <TextField 
                {...register("email")}
                label="Email" 
                type='email'
                variant="outlined" 
                sx={{ width: '100%' }}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <MailIcon sx={{ color: '#BFCBA5'}} />
                    </InputAdornment>
                    ),
                }}
            />
        </Grid>

        <div style={{ height:15 }}/>

        <Grid item sx={{ width: '100%' }}>
            <TextField 
                {...register("phoneNumber")}
                label="Phone Number" 
                variant="outlined" 
                style={{ width: '100%' }}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <LocalPhoneIcon sx={{ color: '#BFCBA5'}} />
                    </InputAdornment>
                    ),
                }}
            />
        </Grid>
        <div style={{ height:15 }}/>
        <Grid item sx={{ width: '100%' }}>
            <TextField 
                {...register("subject")}
                label="Subject" 
                variant="outlined" 
                style={{ width: '100%' }}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SubjectIcon sx={{ color: '#BFCBA5'}} />
                    </InputAdornment>
                    ),
                }} 
            />
        </Grid>
        <div style={{ height:10 }}/>
        <Grid item sx={{ width: '100%' }}>
            <TextField
                {...register("message")}
                label="Message"
                multiline
                minRows={4}
                maxRows={10}
                style={{ width: '100%' }}
            />
        </Grid>
        <div style={{ height:10 }}/>
        <Grid item sx={{ width: '100%' }}>
            <Button variant='text' btnSize='small' color='#7C8470' text='Submit'  btnWidth={'100%'} textSize='18px' textColor='white' type={'submit'} />
        </Grid>

        </form>

    </Grid>
  )
}

export default ConcernForm