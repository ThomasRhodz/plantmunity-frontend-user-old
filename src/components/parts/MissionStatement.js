import React from 'react'
import { Grid } from '@mui/material'
import Typography from "@material-ui/core/Typography";
import Icon from '../../images/icons/mission.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const MissionStatement = () => {
    const theme = useTheme();
    const extraSmall = useMediaQuery(theme.breakpoints.down(600));
  return (
    <Grid container direction='column' alignItems='center' sx={{ width:{xs:300, sm:500, md:600}, height: '100%', backgroundColor: 'white' }} >
        <Grid item sx={{ padding:3 }}>
            <img src={Icon} alt="Logo" width={extraSmall ? '90' :"110px"} height={extraSmall ? '70' :"90px"}/>
        </Grid>
           
        <Grid item>
            <Typography
            variant={extraSmall ? 'h6' : 'h5'}
            style={{fontFamily:'"Segoe UI"', color:'#2b332e',fontWeight: 'bold', letterSpacing:1}}
            gutterBottom
            >
                Mission Statement   
            </Typography>
        </Grid>
        
        <Grid item>
            <Typography
            variant={extraSmall ? 'body1' : 'h6'}
            align='justify'
            style={{fontFamily:'-apple-system', color:'#63543a'}}
            gutterBottom
            >
                To give the plant enthusiasts the power to build their community and bring them closer together by socializing and sharing knowledge. And to provide a secure platform that allows them to buy plant products or even start their own plant-related business by creating their virtual stores.   
            </Typography>

        </Grid>  
    </Grid>
  )
}

export default MissionStatement