import * as React from 'react';
import { Box, Grid} from '@mui/material/';
import { Masonry } from '@mui/lab';
import DiscoverCard from '../card/discoverPageCards/DiscoverCard';

//Array of data for post sample
const itemData = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      id: 10,
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      id: 12,
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      id: 13,
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];

  const renderExplore = itemData.map(({id, img, title}) => {
     return (
        <Grid key={id}>
          <DiscoverCard image={img} altText={title}/>
        </Grid>
      );
  });
   

  
const  Explore = () => {
  return (
    <Box sx={{ width: {xs:350, sm:800, md:1050}, height: {xs:'100%', sm:400, md:550}, overflowY: {xs: 'hidden', sm: 'scroll', md: 'scroll'} }}>
      <Masonry sx={{display:{xs:'flex',sm:'flex', md:'flex'}}} columns={3} spacing={2}>
        {renderExplore}
      </Masonry>
    </Box>
  );
}

export default Explore
