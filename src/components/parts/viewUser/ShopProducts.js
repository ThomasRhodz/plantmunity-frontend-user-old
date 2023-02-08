import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ProductsCard from '../../card/marketCards/ProductsCard'

const ShopProducts = ({productData}) => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(1450));
  const mobile = useMediaQuery(theme.breakpoints.down(600));
 
  return !(productData )? (
    <Stack direction='row' alignItems='center' sx={{ width:'100%', height:150}}>
      <Stack direction='column' alignItems='center' sx={{ width:'100%'}}>
        <Typography variant='h5' sx={{ fontFamily:'raleway', fontWeight:'bold', color:'#DCD7C3' }}>
          No Products Available
        </Typography>
      </Stack>
    </Stack>
  ) : (
   
    <Grid
        container
        direction={'row'}
        sx={{ width:'100%', mt:1, pl:2 }}
    >
       {  productData ?
          productData.map(({id, product_name, product_image, product_description})=>{
            return(
              <Grid
              key={id}
              item
              sx={{
                width: {
                  xs: "46%",
                  sm: mobile ? "30%" : "31%",
                  md: tablet ? "29%" : "30%",
                },
                height: { xs: 200, sm: 200, md: 250 },
                mr: { xs: 1, sm: 1, md: 2 },
                mb: { xs: 1, sm: 1, md: 2 },
                bgcolor: "blue",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)",}}
              >

                <ProductsCard  id={id} productName={product_name} productImage={product_image} productDescription={product_description} />
              </Grid>
            )
          }) : []
        }
  
    </Grid>
  )
}

export default ShopProducts