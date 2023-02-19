import * as React from 'react';
import { Box, Grid} from '@mui/material/';
import { Masonry } from '@mui/lab';
import DiscoverCard from '../card/discoverPageCards/DiscoverCard';
import { useGetExplorePostQuery } from '../../app/services/postApi';  
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ExploreListSkeleton from '../skeletons/ExploreListSkeleton';
  
const  Explore = () => {

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  const {data, isFetching} = useGetExplorePostQuery(undefined, {refetchOnMountOrArgChange: true})
  const posts = data? data[0] : [];
  
  console.log(posts) 
  
  const renderExplore = posts.map(post => {
    const fullname =(post.user.first_name + ' ' + (post.user.middle_name === null ? ' ' : post.user.middle_name === '' ? ' ' : post.user.middle_name) + ' ' + post.user.last_name)
    return (
       <Grid key={post.id}>
         <DiscoverCard pid={post.id} uid={post.user.id} user={fullname} username={post.user.username} imageLink={post.post_image} likes={post.likes_count} comments={post.comments_count} timePosted={post.created_at}  caption={post.caption}  userProfilePic={post.user.profile_picture}/>
       </Grid>
     );
 });
  return (
    <Box sx={{ width: {xs:350, sm:800, md:1050}, height: {xs:'100%', sm:400, md:550}, overflowY: {xs: 'hidden', sm: 'scroll', md: 'scroll'} }}>
      {
        isFetching ? <ExploreListSkeleton/> :
        <Masonry sx={{display:{xs:'flex',sm:'flex', md:'flex'}}} columns={3} spacing={mobile ? 1 :2}>
          {renderExplore}
        </Masonry>
      }
    </Box>
  );
}

export default Explore
