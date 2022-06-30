import React from 'react'
import { Grid } from '@mui/material'
import Typography from "@material-ui/core/Typography";
import Icon from '../../images/icons/vision.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const VisionStatement = () => {
    const theme = useTheme();
    const mvDeterminer = useMediaQuery(theme.breakpoints.down(1450));
  return (
    <Grid container direction='column' alignItems='center' sx={mvDeterminer ? { width:{xs:400, sm:500, md:600}, height: '100%', backgroundColor: 'white' } : { width:500, height: '100%', backgroundColor: 'white' }} >
        <Grid item sx={{ padding:3 }}>
            <img src={Icon} alt="Logo" width="110px" height="90px"/>
        </Grid>
        
        <Grid item>
            <Typography
            variant='h5'
            style={{fontFamily:'"Segoe UI"', color:'#2b332e', fontWeight: 'bold', letterSpacing:1}}
            gutterBottom
            >
                Vision Statement   
            </Typography>
        </Grid>
        
        <Grid item>
            <Typography
            variant='h6'
            align='justify'
            style={{fontFamily:'-apple-system', color:'#63543a'}}
            gutterBottom
            >
                To inspire the community with our innovative application, which enriches their daily transactions and contributes to social prosperity. And to become the best platform for Plantitos, Plantitas or Plant enthusiasts at any age.
            </Typography>

        </Grid>
    </Grid>
  )
}

export default VisionStatement