import { Grid } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MyProductCard from '../../card/shopCards/MyProductCard';
import { useGetProductsQuery } from '../../../app/services/shopApi';
import { useSelector } from 'react-redux';

const ProductList = ({selectedValue, toast}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const ID = useSelector((state) => state.shop.id);
  const {data} = useGetProductsQuery(ID, {refetchOnMountOrArgChange: true})
  console.log(data)
  const products = data ? data.products : [];
  const ProductArray = (Object.values(products)).reverse()
  return (
   
    <Grid
        container
        direction={mobile?'column':'row'}
        sx={{ width:'100%', mt:1, display: selectedValue === 1? 'none' : 'flex'  }}
    >
       {
          ProductArray.map(({id, product_name, product_image, product_description})=>{
            return(
              <Grid
                key={id}
                item
                sx={{
                  mt: 2,
                  width: mobile? '100%' : "47%",
                  height: mobile? 200:300,
                  ml: { xs: 0, sm: 2, md: 2 },
                  borderRadius: 5,
                  overflow: "hidden",
                }}
              >

                <MyProductCard key={id} id={id} toast={(stringMessage)=>toast(stringMessage)} productName={product_name} productImage={product_image} productDescription={product_description} />
              </Grid>
            )
          })
        }
  
    </Grid>
  )
}

export default ProductList