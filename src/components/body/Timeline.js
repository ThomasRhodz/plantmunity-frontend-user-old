import React from 'react'
import SideBar from '../navigation/ShorcutNavBar';
import PostCard from '../card/PostCard';
import SideAds from '../parts/AdsTimeline';
import CreatePost from '../parts/CreatePost';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
          caption: 'Let there be plants! AHAHAHAHA :)'
          
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
      <Grid  container direction='column' alignItems='center' sx={{overflowX:'hidden',width:'100%'}}>
        
        {/** only one item and serve as the grid that holds everything and which is centered */}
        <Grid item  sx={{ width:{xs:350, sm: 1350, md:1350}}}>
          {/** another grid cointer is created to have a row direction for the following components */}
          <Grid container direction='row'>
              {/**Grid item: calling the SideBar Component or the shortcut menu */}
              <Grid item position='fixed'>
                  <SideBar />
              </Grid>

              {/** Grid item that hold the center interface which contains the CreatePost components and collection of Post */}
              <Grid item>
                  <Grid container direction='column' alignItems='center' position='relative' sx={matches?{marginLeft:{sm:15,md:17}, marginRight:{sm:21,md:52}}:{marginLeft:{sm:21,md:29}} }>
                      <CreatePost />
                      <div style={{height:10}} />
                      {renderPosts}
                  </Grid>
              </Grid>
              {/** Grid item that the right side of the interface where ads and other possible components can be placed */}
              <Grid item position='fixed' sx={{marginLeft:{sm:15,md:105}}}>
                  <SideAds />
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    
    
  )
}

export default Timeline