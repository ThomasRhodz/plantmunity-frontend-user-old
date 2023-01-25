import React from 'react';
import { Grid, Typography } from '@mui/material';
import photo from '../../../images/icons/photo.png'
import store from '../../../images/icons/store.png'
import delivery from '../../../images/icons/delivery.png'
import social from '../../../images/icons/social.png'

const FeatureCard = ({title, image, description}) => {
    const iconSwitcher = () => {
        switch(image) {
            case 2:
                return (<img src={social} alt="Logo" width="60px" height="50px"/>);
            case 3:
                return (<img src={store} alt="Logo" width="60px" height="50px"/>);
            case 4:
                return (<img src={delivery} alt="Logo" width="60px" height="50px"/>);
            default: return (<img src={photo} alt="Logo" width="60px" height="50px"/>);
              
          }
    }
  return (
    <Grid container direction='row' sx={{width: 290, height:200}}>
        <Grid item sx={{paddingTop:2}}>
            {iconSwitcher()}
        </Grid>
        <Grid item>
            <Grid container  direction='column' sx={{padding:1}}>
                <Grid item sx={{width: 200}}>
                    <Typography
                        variant='h6'
                        style={{fontFamily:'"-apple-systems"', fontWeight:'bold', color:'#2b332e'}}
                        gutterBottom
                    >
                        {title}
                    </Typography>
                </Grid>
                <Grid item sx={{paddingLeft: 1, width: 210}}>
                    <Typography
                        variant='body2'
                        style={{fontFamily:'"-apple-systems"', color:'#6f9070'}}
                        gutterBottom
                    >
                        {description}
                    </Typography>

                </Grid>
            </Grid>
            
        </Grid>
    </Grid>
  )
}

export default FeatureCard