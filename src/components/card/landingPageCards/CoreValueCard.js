import React from 'react'
import { Grid, Typography } from '@mui/material'
import Fast from '../../../images/icons/fast.png'
import BeBold from '../../../images/icons/BeBold.png'
import Social from '../../../images/icons/BuildSocialValues.png'
import OpenMinded from '../../../images/icons/openminded.png'
import Secure from '../../../images/icons/Secure.png'
import Information from '../../../images/icons/growth.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const CoreValueCard = ({image, title}) => {

    const theme = useTheme();
    const extraSmall = useMediaQuery(theme.breakpoints.down(600));

    const iconSwitcher = () => {
        switch(image) {
            case 2:
                return (<img src={BeBold} alt="Logo" width={ extraSmall ? "50px" : "70px"} height={ extraSmall ? "50px" : "70px"}/>);
            case 3:
                return (<img src={OpenMinded} alt="Logo" width={ extraSmall ? "50px" : "70px"} height={ extraSmall ? "50px" : "70px"}/>);
            case 4:
                return (<img src={Fast} alt="Logo" width={ extraSmall ? "50px" : "70px"} height={ extraSmall ? "50px" : "70px"}/>);
            case 5:
                return (<img src={Secure} alt="Logo" width={ extraSmall ? "50px" : "70px"} height={ extraSmall ? "50px" : "70px"}/>);
            case 6:
                return (<img src={Social} alt="Logo" width={ extraSmall ? "50px" : "70px"} height={ extraSmall ? "50px" : "70px"}/>);
            default: return (<img src={Information} alt="Logo" width={ extraSmall ? "50px" : "70px"} height={ extraSmall ? "50px" : "70px"}/>);
              
          }
    }
  return (
    <Grid container direction='column' alignItems='center' sx={{ width: {xs:150, sm:200, md:200}, height:{xs:150, sm:190, md:190}, borderRadius: 5, backgroundColor: 'white', padding:2 }}>
        <Grid item>
            {iconSwitcher()}
        </Grid>
        <Grid item>
            <Typography
            variant={extraSmall? 'subtitle1' :'h5'}
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