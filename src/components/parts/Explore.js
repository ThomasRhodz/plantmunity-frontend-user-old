import * as React from 'react';
import { Box, Grid} from '@mui/material/';
import { Masonry } from '@mui/lab';
import DiscoverCard from '../card/discoverPageCards/DiscoverCard';
import { useGetExplorePostQuery } from '../../app/services/postApi';  

  
const  Explore = () => {

  const {data, isFetching} = useGetExplorePostQuery(undefined, {refetchOnMountOrArgChange: true})
  const posts = data? data[0] : [];
  
  console.log(posts) 
  
  const renderExplore = posts.map(({id,caption, post_image, user, created_at}) => {
    return (
       <Grid key={id}>
         <DiscoverCard image={post_image} altText={id}/>
       </Grid>
     );
 });
  return (
    <Box sx={{ width: {xs:350, sm:800, md:1050}, height: {xs:'100%', sm:400, md:550}, overflowY: {xs: 'hidden', sm: 'scroll', md: 'scroll'} }}>
      <Masonry sx={{display:{xs:'flex',sm:'flex', md:'flex'}}} columns={3} spacing={2}>
        {renderExplore}
      </Masonry>
    </Box>
  );
}

export default Explore
