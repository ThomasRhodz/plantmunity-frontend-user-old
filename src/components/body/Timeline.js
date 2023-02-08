import React from 'react'
import { useSelector } from 'react-redux';
import CreatePost from '../parts/CreatePost';
import { Grid, Stack} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PostCard from '../card/timelineCards/PostCard';
import AdsTimeline from '../parts/AdsTimeline'
import { useGetTimelinePostsQuery } from '../../app/services/postApi';

const Timeline = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(1400));
    const image = useSelector((state) => state.user.image) ;
    
    const {data, isFetching} = useGetTimelinePostsQuery(undefined, {refetchOnMountOrArgChange: true})

    console.log(data)

    const posts = data? data[0] : [];
    
      //passing the data to the PostCard component
    const renderPosts = posts.map(post => {
      const fullname =(post.user.first_name + ' ' + (post.user.middle_name === null ? ' ' : post.user.middle_name === '' ? ' ' : post.user.middle_name) + ' ' + post.user.last_name)
      return(
          <Grid item key={post.id}>
            <PostCard pid={post.id} uid={post.user.id} user={fullname} username={post.user.username} imageLink={post.post_image} likes={post.likes_count} comments={post.comments_count} timePosted={post.created_at}  caption={post.caption}  userProfilePic={post.user.profile_picture} />
          </Grid>
      )
    })
  return (
      // Grid container (Parent) : the intention of having a column as direction is to center the following children component
      <Grid  container direction={matches ? 'column' :'row'} alignItems={matches ? 'center' :'left'}  sx={{width:'100%', mt:3}}>
              <Grid item sx={{width:'65%' }}>
                  <Stack  direction='column' alignItems='center'>
                      <CreatePost profile={image}/>
                      <div style={{height:10}} />
                      {renderPosts}
                  </Stack>
              </Grid>
              {/** Grid item that the right side of the interface where ads and other possible components can be placed */}
              <Grid item sx={{ width:'35%', display: { xs: 'none', sm: 'flex', md: 'flex' }}}>
                <AdsTimeline/>
              </Grid>
      </Grid>
      
    
    
  )
}

export default Timeline