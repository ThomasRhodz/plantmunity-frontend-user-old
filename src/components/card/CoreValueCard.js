import React from 'react'
import { Grid } from '@mui/material'
import Typography from "@material-ui/core/Typography";
import Fast from '../../images/icons/fast.png'
import BeBold from '../../images/icons/BeBold.png'
import Social from '../../images/icons/BuildSocialValues.png'
import OpenMinded from '../../images/icons/openminded.png'
import Secure from '../../images/icons/Secure.png'
import Information from '../../images/icons/growth.png'

const CoreValueCard = ({image, title}) => {
    const iconSwitcher = () => {
        switch(image) {
            case 2:
                return (<img src={BeBold} alt="Logo" width="70px" height="70px"/>);
                break;
            case 3:
                return (<img src={OpenMinded} alt="Logo" width="70px" height="70px"/>);
                break;
            case 4:
                return (<img src={Fast} alt="Logo" width="70px" height="70px"/>);
                break;
            case 5:
                return (<img src={Secure} alt="Logo" width="70px" height="70px"/>);
                break;
            case 6:
                return (<img src={Social} alt="Logo" width="70px" height="70px"/>);
                break;
            default: return (<img src={Information} alt="70px" width="70px" height="70px"/>);
              
          }
    }
  return (
    <Grid container direction='column' alignItems='center' sx={{ width: 200, height:190, borderRadius: 5, backgroundColor: 'white', padding:2 }}>
        <Grid item>
            {iconSwitcher()}
        </Grid>
        <Grid item>
            <Typography
            variant='h5'
            align='center'
            style={{fontFamily:'-apple-system', color:'#7C8470'}}
            gutterBottom
            >
               {title} 
            </Typography>

        </Grid>

    </Grid>
  )
}

export default CoreValueCard