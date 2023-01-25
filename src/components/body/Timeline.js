import React from 'react'
import CreatePost from '../parts/CreatePost';
import { Grid, Stack} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PostCard from '../card/timelineCards/PostCard';
import AdsTimeline from '../parts/AdsTimeline'

const Timeline = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(1400));
    //Array of sample data of posts
    const posts = [
        {
          postID: '1',
          user: 'John Eliezar' ,
          userProfilePic: 'https://www.looper.com/img/gallery/jujutsu-kaisen-season-2-release-date-cast-and-plot-what-we-know-so-far/intro-1619789496.jpg',
          imageLink: 'https://www.worldatlas.com/r/w1200/upload/89/99/3b/shutterstock-1263201358.jpg',
          likes: '10',
          comments: '20',
          shares: '3',
          liked: true,
          timePosted: 'Mar. 21, 2021',
          caption: 'Let there be plants! AHAHAHAHA'
          
        },
        {
          postID: '2',
          user: 'Roxene Mae Lee' ,
          userProfilePic: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/04/a.jpeg?q=50&fit=crop&w=740&h=416&dpr=1.5',
          imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rnG1YYjGO9PtZmGFeqd4hfRkesZh7BTVRw&usqp=CAU',
          likes: '15',
          comments: '02',
          shares: '5',
          liked: true,
          timePosted: 'Mar. 22, 2021',
          caption: 'our intuitive powers increase when you are with plants because your mind is silenced and you become more aware in the present moment.'
          
        },
        {
          postID: '3',
          user: 'Anna Novicio' , 
          userProfilePic: 'https://otakukart.com/wp-content/uploads/2022/01/Nobara-Kugisaki3.jpg',
          imageLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aloe-vera-plant-1522874831.jpg',
          likes: '34',
          comments: '10',
          shares: '13',
          liked: false,
          timePosted: 'Mar. 23, 2021',
          caption: 'By plucking her petals, you do not gather the beauty of the flower. :)'
          
        }
      ];
    
      //passing the data to the PostCard component
      const renderPosts = posts.map(post => {
        return(
            <Grid item key={post.postID}>
              <PostCard user={post.user} imageLink={post.imageLink} likes={post.likes} comments={post.comments} shares={post.shares} liked={post.liked} timePosted={post.timePosted}  caption={post.caption}  userProfilePic={post.userProfilePic} />
            </Grid>
        )
      })
  return (
      // Grid container (Parent) : the intention of having a column as direction is to center the following children component
      <Grid  container direction={matches ? 'column' :'row'} alignItems={matches ? 'center' :'left'}  sx={{width:'100%', mt:3}}>
              <Grid item sx={{width:'65%' }}>
                  <Stack  direction='column' alignItems='center'>
                      <CreatePost />
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