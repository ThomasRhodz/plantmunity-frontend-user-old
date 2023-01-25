import { Grid } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MyProductCard from '../../card/shopCards/MyProductCard';

const ProductList = ({selectedValue}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  const sampleProducts = [
    {
      id:1,
      product_name:'Phelodendron',
      product_image:"https://www.allaboutgardening.com/wp-content/uploads/2022/06/Long-Life-of-Philodendron-in-Pot-1200x667.jpg"
    },
    {
      id:2,
      product_name:'Snake Plant',
      product_image:"https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg"
    },
    {
      id:3,
      product_name:'Aglonema',
      product_image:"https://www.cleanipedia.com/images/5h1w0177knh8/ZSxqnAaznoMpxb7jPtYNR/4ea02ddf210f1a6dfe4623029332491a/MDguX0NsZWFuaXBlZGlhX01laV8yMDIyX0hlYWRlci5qcGc/990w-660h/08.-cleanipedia-mei-2022-header.jpg"
    }
  
  ]
  return (
   
    <Grid
        container
        direction={mobile?'column':'row'}
        sx={{ width:'100%', mt:1, display: selectedValue === 1? 'none' : 'flex'  }}
    >
       {
          sampleProducts.map(({id, product_name, product_image})=>{
            return(
              <MyProductCard id={id} productName={product_name} productImage={product_image} />
            )
          })
        }
  
    </Grid>
  )
}

export default ProductList