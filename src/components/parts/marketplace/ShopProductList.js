import { Grid } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InShopProductCard from '../../card/marketCards/InShopProductCard';

const ShopProductList = ({selectedValue, shopProducts}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  
  return (
   
    <Grid
        container
        direction={mobile?'column':'row'}
        sx={{ width:'100%', mt:1, display: selectedValue === 1? 'none' : 'flex'  }}
    >
       { shopProducts ?
          shopProducts.map(({id, product_name, product_description, product_image})=>{
            return(
              <InShopProductCard id={id} productName={product_name} productDescription={product_description} productImage={product_image} productPrice={200}/>
            )
          }): []
        }
  
    </Grid>
  )
}

export default ShopProductList