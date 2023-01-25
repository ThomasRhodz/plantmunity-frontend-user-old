import { Box, Divider, Grid, IconButton, Stack, Tab, Tabs, Tooltip, Typography, Rating, Toolbar } from '@mui/material'
import React from 'react'

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';


import ShopProductList from '../parts/marketplace/ShopProductList';

//Icons
import Logo from '../../images/PlantmunityLogo2.png';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
const ViewShop = ({handleClose}) => {
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(700));

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue)
    };
  return (
    <Grid 
        container
        direction={'column'}
        sx={{ width:'100% ', bgcolor:'#F3F4F8'}}
    >
        <Grid item sx={{ width:'100%', height:65, bgcolor:"#5C6D63" }}>
            <Stack direction='row' alignItems='center'>
                <Tooltip title={'Go back'}>
                    <IconButton onClick={() => handleClose()}>
                        <ArrowBackIosNewRoundedIcon sx={{ color: "white" }} />
                    </IconButton>
                </Tooltip>

                <Typography variant='h6' sx={{ ml: 1, fontFamily:'arvo', color:'white', flexGrow:1 }}>
                    Shop
                </Typography>

                <Box >
                    <img
                        src= {Logo}
                        style={{width:130, height:60}}
                        alt='logo'
                    />
                </Box>
            </Stack>
        </Grid>

        <Grid item sx={{ width:'100%', mt:2}}>
            <Grid container direction={mobile ? 'column' : 'row'} sx={{ width:'100%', p:2 }}>
                
                <Grid item sx={{ width:mobile ? '100%' : tablet? '35%' : '30%', height: mobile ? '100%' :'80vh', bgcolor:'white', mr:2, borderRadius:3, p:2, boxShadow:'2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.38)' }}>
                    <Stack direction='column' alignItems={'center'} sx={{ width:'100%', pt:1 }}>
                       <img
                            src={
                            "https://images-platform.99static.com//5bJtEaPw4JVjNVJlprXQPzm5pLk=/137x135:1362x1361/fit-in/500x500/99designs-contests-attachments/129/129927/attachment_129927926"
                            }
                            alt="shop_logo"
                            style={{
                            width: 200,
                            height: 200,
                            borderRadius: "50%",
                            objectFit: "cover",
                            }}
                        />
        
                        <Typography variant={ tablet ? 'h6' : 'h4'} align={'center'} sx={{ fontFamily:'Arvo', mt:2 }}>
                            Palimtintin Hand Garden
                        </Typography>
                        <Stack direction='row' alignItems='center' >
                            
                            <Typography variant={tablet ? 'body2' : 'h6'} sx={{ fontFamily:'Arvo', ml:'3px', mr:1}}>
                                Rating:
                            </Typography>
                            <Rating size='small' sx={{ fontSize:{xs:15, sm:17, md:20} }} defaultValue={2} readOnly/>
                        </Stack>

                        <Stack direction={'column'} alignItems={'left'} sx={{ mt: 2, mb:1,  width: mobile ? '70%' : tablet ? '60%' : '70%' }}>
                            

                            <Stack direction='row' sx={{ mt:1 }}>
                                <SmartphoneRoundedIcon sx={{fontSize:18}}/>
                                <Typography variant='caption' align='justify' sx={{ overflow:'hidden',maxWidth: tablet ? 200 : 300,  fontSize: mobile ? 12 :tablet ? 12:16, fontFamily:'Arvo', ml:tablet ? '8px' : 2, mr: tablet ? 0:2}}>
                                    {"+6394 6680 1637"}
                                </Typography>
                            </Stack>

                            <Stack direction='row' sx={{ mt:1 }}>
                                <LocalPhoneRoundedIcon sx={{fontSize:18}}/>
                                <Typography variant='caption' align='justify' sx={{ overflow:'hidden',maxWidth: tablet ? 200 : 300,  fontSize: mobile ? 12 :tablet ? 12:16, fontFamily:'Arvo', ml:tablet ? '8px' : 2, mr: tablet ? 0:2}}>
                                    {"082 77536"}
                                </Typography>
                            </Stack>
                           
                            <Stack direction='row' sx={{ mt:1}}>
                                <EmailRoundedIcon sx={{fontSize:18}}/>
                                <Typography variant='caption' align='justify' sx={{ overflow:'hidden',maxWidth: tablet ? 200 : 300,  fontSize: mobile ? 12 :tablet ? 12:16, fontFamily:'Arvo', ml:tablet ? '8px' : 2, mr: tablet ? 0:2}}>
                                    {"J.Rodis.477524@umindanao.edu.ph"}
                                </Typography>
                            </Stack>

                            <Stack direction='row' sx={{ mt: 1  }}>
                                <LocationOnRoundedIcon sx={{fontSize:18}}/>
                                <Typography variant='caption' align='justify' sx={{maxWidth: tablet ? 200 : 300,  fontSize: mobile ? 12 :tablet ? 12:16, fontFamily:'Arvo', ml:tablet ? '8px' : 2,mr: tablet ? 0:2, }}>
                                    {"Purok 5, Kalambuan Village, Talomo, Davao City, Davao del Sur"}
                                </Typography>
                            </Stack>
                            
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item sx={{p:2, width: mobile ? '100%' : tablet ? '62%' : '68%', height: mobile ? '100%' : '80vh', bgcolor:'white', borderRadius:3, boxShadow:'2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.38)', mt: mobile? 2:0 }}>
                    
                <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        TabIndicatorProps={{
                            sx: { height: 4, borderRadius:5 } 
                        }}
                    >
                        <Tab value= {0} label={
                            <Typography 
                                variant={mobile ? 'body2' : 'h6' }
                                sx={{
                                    fontFamily:'raleway', 
                                    fontWeight:'bold', 
                                    textTransform: 'none', 
                                    color: value === 0 ? '#5C6D64' : '#8e896b'  
                                }}
                            >
                                Products
                            </Typography>} 
                        />
                        <Tab value= {1} label={
                            <Typography 
                                variant={mobile ? 'body2' : 'h6' }
                                sx={{
                                    fontFamily:'raleway', 
                                    fontWeight:'bold', 
                                    textTransform: 'none', 
                                    color: value === 1 ? '#5C6D63' : '#8e896b'  
                                }}
                            >
                                Feedback
                            </Typography>} 

                        />
                    </Tabs>
                    <Divider  variant='fullWidth' />
                    <ShopProductList />
                </Grid>
            </Grid>
        </Grid>
        <Toolbar/>
    </Grid>
  )
}

export default ViewShop