//MUI Components
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { navigate } from 'gatsby'
import React, {useLayoutEffect, useState} from 'react'

//Data fetching
import { useDispatch,useSelector } from 'react-redux';
import { setCredentials } from '../../app/persist/authentication/authSlice';
import { useLoginUserMutation } from '../../app/services/authApi';
import useAuth from '../../app/hooks/useAuth'

//Form and Data Handling
import {useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Schema: Rules for inputs
const schema = yup.object({
    username: yup.string().required('username is required'),
    password: yup.string().required('password is required'),
  });
 
//---------------------------------------------------------------------------------------------------------------------------

const LoginForm = () => {
    
    const [loginUser] = useLoginUserMutation();
    const { isLoggedIn, auth } = useAuth();
    const dispatch = useDispatch();

    const [warning, setWarning] = useState('');

    //For react hook form
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        
        loginUser(data)
        .unwrap()
        .then((res) => {
            console.log("Result", res);
            // dispatch(setCredentials(res));
             
        })
        .catch((err) => {
            setWarning(err.data.message)
            //console.log('error')
        }); 
    }

    // useLayoutEffect(() => {
    //     console.log("Logged In:", isLoggedIn);
    //     if (isLoggedIn) {
    //         navigate('/welcome')
    //     }

    //   }, [isLoggedIn, auth]);

  return (
    <Grid item sx={{
        width: '100%',
        height:'100%',
        pt:3,
    }}>
        <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit)}>
        <Grid sx={{pb:2, width:'100%'}}>
            <Stack direction='column' align='center' sx={{width:'100%'}}>
                <Typography variant='caption' align='center' sx={{fontFamily:'raleway', color:'orange'}}>
                    {warning}
                </Typography>  
            </Stack>
            
        </Grid>
        <Grid sx={{pb:2}}>
            <TextField  
                {...register("username")} 
                type='text'
                label="Username" 
                size='small' 
                variant="filled" 
                sx={{width:'100%'}}
            />
        </Grid>

        <Grid sx={{pb:2}}>
            <TextField
                {...register("password")} 
                type='password'
                label="Password" 
                size='small' 
                variant="filled" 
                sx={{width:'100%'}}
            />
        </Grid>

        <Grid sx={{pb:5}}>
            <Typography variant='subtitle2'  align='right' sx={{fontFamily:'Arvo'}}>
              Forgot your password?
            </Typography>
        </Grid>

        <Grid sx={{pb:2}}>
            <Button type='submit'  variant='contained' sx={{width:'100%', backgroundColor:'#7CB2B1', fontFamily: 'Arvo', textTransform:'none', borderRadius: 5, color:'white'}}>
                Login
            </Button>
            
        </Grid>
        </form>
    </Grid>
  )
}

export default LoginForm