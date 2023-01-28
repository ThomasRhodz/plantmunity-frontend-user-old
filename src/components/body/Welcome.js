import { Button, Grid, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import useUser from '../../app/hooks/useUser';
import { navigate } from 'gatsby';
import { DotLoader } from 'react-spinners';
import Logo from '../../images/Plantmunity.png'

const Welcome = () => {
    const [loading, setLoading] = useState(false);
    const { setUser, isSuccess } = useUser();

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
            setUser();
          
            if(isSuccess){
                setLoading(false);
                navigate('/home')
            }
        }, 3000);
    }, [isSuccess]);

  return (
        <Grid 
            container 
            direction='column' 
            alignItems='center'
            sx={{
                width:900,
                //backgroundColor:'red',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>

            <Grid item sx={{mb:2}}>
                <img src={Logo} alt='AppLogo' style={{width:300, height: 180}}/>
            </Grid>

            <Grid item sx={{mt:'-20px', mb:5}}>
                <Typography align='center' sx={{fontSize: 20, fontFamily:'raleway', fontWeight:'bold', width:500, mt:1}}>
                    Welcome to Plantmunity! Here, we build our own plantly community.
                </Typography>
            </Grid>

            <Grid item>
                <DotLoader color="#36d7b7" loading={loading} />
            </Grid>

            {/* <Grid item sx={{mb:5}}>
                <Typography align='center' sx={{fontSize: 10, fontFamily:'Arvo', width:500, mt:1}}>
                    Loading...
                </Typography>
            </Grid> */}

            
        </Grid>
        
    )
}

export default Welcome