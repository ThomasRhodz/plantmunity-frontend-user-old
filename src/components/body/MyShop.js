import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useGetMyShopQuery } from '../../app/services/shopApi';

import CreateShop from '../parts/myShop/CreateShop';
import ProductList from '../parts/myShop/ProductList';
import MyShopDetails from '../parts/myShop/MyShopDetails';

const MyShop = () => {
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(700));
    const [value, setValue] = React.useState(0);

    const {data} = useGetMyShopQuery(undefined, {refetchOnMountOrArgChange: true});

    //console.log(data)
    const myShop = data? data.shop : [];
    const createShop = myShop === null ? true :false
    
    const handleChange = (event, newValue) => {
      setValue(newValue)
    };
  return (
    <Grid 
        container 
        direction='column'
        alignItems={'center'}
        sx={{ 
            width:'100%',
            height:'100%',
            overflowY:'auto',
            mt:3,
         }}
        >
            <Grid 
                item
                sx={{ 
                    width:'100%',
                    height: '80vh',
                    display: createShop ? 'flex' : 'none'
                 }}
            >
                <CreateShop/>
            </Grid>

            <Grid 
                item
                sx={{ 
                    width:'100%',
                    height: {sm:'100%', md: tablet ? '100%' :350},
                    bgcolor: 'white',
                    borderRadius: 5,
                    p:2,
                    pb:5,
                    boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)',
                    display: createShop ? 'none' : 'flex'
                 }}
            >
                <MyShopDetails />
            </Grid>

            <Grid
                item
                sx={{ 
                    mt:2,
                    width:'100%',
                    height: {sm:'100%', md: '100%'},
                    bgcolor: 'white',
                    borderRadius: 5,
                    p:2,
                    boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)',
                    display: createShop ? 'none' : 'flex'
                }}
            >
                <Stack
                    direction='column'
                    alignItems={tablet ? 'center':'left'}
                    sx={{ width:'100%' }}
                >

                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        TabIndicatorProps={{
                            sx: { height: 3, borderRadius:5 } 
                        }}
                    >
                        <Tab value= {0} label={
                            <Typography 
                                variant={mobile ? 'caption' : 'body1' }
                                sx={compStyle['tab-text']}
                            >
                            Products
                            </Typography>} 
                        />
                        <Tab value= {1} label={
                            <Typography 
                                variant={mobile ? 'caption' : 'body1' }
                                sx={compStyle['tab-text']}
                            >
                                Pre-orders
                            </Typography>} 
                        />
                        <Tab value= {2} label={
                            <Typography 
                                variant={mobile ? 'caption' : 'body1' }
                                sx={compStyle['tab-text']}
                            >
                                On Delivery
                            </Typography>} 
                        />
                        <Tab value= {3} label={
                            <Typography 
                                variant={mobile ? 'caption' : 'body1' }
                                sx={compStyle['tab-text']}
                            >
                                Received Orders
                            </Typography>} 
                        />
                    </Tabs>
                    <Divider  variant='middle' style={{ white:'#5C6D63', height:1 }} />

                    <ProductList selectedValue={value}/>  
                </Stack>
                
            </Grid>
            <Toolbar />
    </Grid>
  )
}

export default MyShop

const compStyle ={
   
    'tab-text':{
        fontFamily:'raleway', 
        fontWeight:'bold', 
        textTransform: 'none' 
    },
}
  