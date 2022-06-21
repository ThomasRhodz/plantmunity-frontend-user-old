import React from 'react'
import { Grid } from '@mui/material'
import Typography from "@material-ui/core/Typography";
import Icon from '../../images/icons/mission.png'

const MissionStatement = () => {
  return (
    <Grid container direction='column' alignItems='center' sx={{ width:600, height: '100%', backgroundColor: 'white' }} >
        <Grid item sx={{ padding:3 }}>
            <img src={Icon} alt="Logo" width="110px" height="90px"/>
        </Grid>
           
        <Grid item>
            <Typography
            variant='h5'
            style={{fontFamily:'"Segoe UI"', color:'#2b332e',fontWeight: 'bold', letterSpacing:1}}
            gutterBottom
            >
                Mission Statement   
            </Typography>
        </Grid>
        
        <Grid item>
            <Typography
            variant='h6'
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