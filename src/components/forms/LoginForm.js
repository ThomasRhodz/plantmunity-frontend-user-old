//MUI Components
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { navigate, Link } from 'gatsby'
import React, {useLayoutEffect, useState} from 'react'
import Logo from '../../images/Plantmunity.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
    email: yup.string().email('email is required'),
    password: yup.string().required('password is required'),
  });
 
//---------------------------------------------------------------------------------------------------------------------------

const LoginForm = () => {

    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(900));
    
    const [loginUser] = useLoginUserMutation();
    const { isLoggedIn, auth } = useAuth();
    const dispatch = useDispatch();

    const [warning, setWarning] = useState('');

    //For react hook form
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
        loginUser(data)
        .unwrap()
        .then((res) => {
            console.log(res.message);
            dispatch(setCredentials(res));
             
        })
        .catch((err) => {
            //setWarning(err)
            console.log(err)
        }); 
    }

    useLayoutEffect(() => {
        //console.log("Logged In:", isLoggedIn);
        if (isLoggedIn) {
            navigate('/welcome')
        }

      }, [isLoggedIn, auth]);

  return (
    <Grid item sx={{
        width: tablet ? '100%' : '50%',
        height:'100%',
        p:4,
    }}>
        <Stack direction='column' alignItems={'center'} sx={{ width:'100%' }}>
            <Grid sx={{ width:'100%', height:100, mt:2 }}>
                <img 
                    alt={'login_pic'}
                    style={{ 
                        width:'100%',
                        height:  tablet ? 120 : 100,
                        objectFit:'cover'
                    }}
                    src={Logo}
                />
            </Grid>
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
                    {...register("email")} 
                    type='text'
                    label="Email" 
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
                <Button type='submit'  variant='contained' sx={{width:'100%', backgroundColor:'#ACBCA4', fontFamily: 'Arvo', textTransform:'none', borderRadius: 5, color:'white'}}>
                    Login
                </Button>
                
            </Grid>
            </form>

            <Stack direction='row' sx={{mt:5}}>

              <Typography align='center' sx={{ fontFamily:'raleway', fontSize:12,  color: '#0F3E47', pb:2}}>
                Don't have an account?
              </Typography>
              <Grid sx={{width:5}} />

              <Link to={'/signup'} style={{ textDecoration: 'none' }}>
                <Typography align='center' sx={{ fontFamily:'raleway', fontSize:12,  color: '#ACBCA4', pb:2}}>
                  Sign up now!
                </Typography>
              </Link>

            </Stack>

        </Stack>
    </Grid>
  )
}

export default LoginForm