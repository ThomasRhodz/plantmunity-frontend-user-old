import { Box, Button, Divider, Grid, IconButton, Stack, Tab, Tabs, Tooltip, Typography, Rating, Toolbar } from '@mui/material'
import React from 'react'

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { useGetUserShopQuery } from '../../app/services/shopApi';
import ShopProductList from '../parts/marketplace/ShopProductList';

//Icons
import Logo from '../../images/PlantmunityAlt2.png';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
const ViewShop = ({handleClose, shopId}) => {
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(700));

    const {data} = useGetUserShopQuery(shopId, {refetchOnMountOrArgChange: true})
    
    const shopData = data ? data[0] : [];
    const products = shopData?.products
    console.log(products)


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
            <Stack direction='row' alignItems='center' sx={{ height:65, p:2,pl:1 }}>
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
                        style={{width:90, height:30}}
                        alt='logo'
                    />
                </Box>
            </Stack>
        </Grid>

        <Grid item sx={{ width:'100%', mt:2}}>
            <Grid container direction={mobile ? 'column' : 'row'} sx={{ width:'100%', p:2 }}>
                
                <Grid item sx={{ width:mobile ? '100%' : tablet? '35%' : '30%', height: mobile ? '100%' :'85vh', bgcolor:'white', mr:2, borderRadius:3, p:2, boxShadow:'2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.38)' }}>
                    <Stack direction='column' alignItems={'center'} sx={{ width:'100%', pt:1 }}>
                       
                       <img
                            src={shopData?.shop_logo }
                            alt="shop_logo"
                            style={{
                            width: 180,
                            height: 180,
                            borderRadius: "50%",
                            objectFit: "cover",
                            }}
                        />
        
                        <Typography variant={ tablet ? 'h6' : 'h5'} align={'center'} sx={{ fontFamily:'Arvo', mt:2 }}>
                            {shopData?.shop_name}
                        </Typography>
                        <Stack direction='row' alignItems='center' >
                            
                            <Typography variant={tablet ? 'body2' : 'h6'} sx={{ fontFamily:'Arvo', ml:'3px', mr:1}}>
                                Rating:
                            </Typography>
                            <Rating size='small' sx={{ fontSize:{xs:15, sm:17, md:20} }} defaultValue={2} readOnly/>
                        </Stack>

                        <Stack direction={'column'} alignItems={'left'} sx={{ mt: 2, mb:1,  width: mobile ? '70%' : tablet ? '60%' : '70%' }}>
                            
                            <Stack direction='row' sx={{ mt:1 }}>
                                <AccessTimeRoundedIcon sx={{fontSize:19}}/>
                                <Typography  align='justify' sx={{ overflow:'hidden',maxWidth: tablet ? 200 : 300,  fontSize: mobile ? 12 :tablet ? 12:13, fontFamily:'Arvo', ml:tablet ? '8px' : 2, mr: tablet ? 0:2}}>
                                    {"08:00am - 05:00pm"}
                                </Typography>
                            </Stack>
                            <Stack direction='row' sx={{ mt:1}}>
                                <EmailOutlinedIcon sx={{fontSize:20}}/>
                                <Typography  align='justify' sx={{ overflow:'hidden',maxWidth: tablet ? 200 : 300,  fontSize: mobile ? 12 :tablet ? 12:13, fontFamily:'Arvo', ml:tablet ? '8px' : 2, mr: tablet ? 0:2}}>
                                    {shopData?.email}
                                </Typography>
                            </Stack>

                            <Stack direction='row' sx={{ mt:1 }}>
                                <SmartphoneRoundedIcon sx={{fontSize:20}}/>
                                <Typography  align='justify' sx={{ overflow:'hidden',maxWidth: tablet ? 200 : 300,  fontSize: mobile ? 12 :tablet ? 12:13, fontFamily:'Arvo', ml:tablet ? '8px' : 2, mr: tablet ? 0:2}}>
                                    {shopData?.mobile}
                                </Typography>
                            </Stack>

                            <Stack direction='row' sx={{ mt:1 }}>
                                <LocalPhoneOutlinedIcon sx={{fontSize:20}}/>
                                <Typography  align='justify' sx={{ overflow:'hidden',maxWidth: tablet ? 200 : 300,  fontSize: mobile ? 12 :tablet ? 12:13, fontFamily:'Arvo', ml:tablet ? '8px' : 2, mr: tablet ? 0:2}}>
                                    {shopData?.telephone}
                                </Typography>
                            </Stack>
                           

                            <Stack direction='row' sx={{ mt: 1  }}>
                                <LocationOnOutlinedIcon sx={{fontSize:20}}/>
                                <Typography  align='justify' sx={{maxWidth: tablet ? 200 : 300,  fontSize: mobile ? 12 :tablet ? 12:13, fontFamily:'Arvo', ml:tablet ? '8px' : 2,mr: tablet ? 0:2, }}>
                                    {shopData?.address}
                                </Typography>
                            </Stack>
                            
                        </Stack>

                        <Stack direction="column" sx={{ width:'70%', mt:2, mb:2 }}>
                            <Button
                                variant="contained"
                                size="regular"
                                sx={compStyle["shop-botton"]}
                            >
                                View Owner Detail
                            </Button>

                            <Button
                                variant="contained"
                                size="regular"
                                sx={compStyle["shop-botton"]}
                            >
                                Follow Shop Now!
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item sx={{p:2, width: mobile ? '100%' : tablet ? '62%' : '68%', height: mobile ? '100%' : '85vh', bgcolor:'white', borderRadius:3, boxShadow:'2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.38)', mt: mobile? 2:0 }}>
                    
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
                    <ShopProductList shopProducts={products}/>
                </Grid>
            </Grid>
        </Grid>
        <Toolbar/>
    </Grid>
  )
}

export default ViewShop



const compStyle ={
   
    'shop-botton':{ 
        mt:1,
        width:'100%',
        height:40,
        textTransform:'none',
        fontFamily:'Arvo',
        borderRadius:25,
        border:'2px #5C6D63 solid',
        bgcolor:'white',
        color:'#5C6D63',
        '&:hover':{
            bgcolor:'#5C6D63',
            color:'white',
        }
    },
  }
  