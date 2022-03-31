import * as React from 'react';
import NavBar from '../components/NavBar';
import PostCard from '../components/PostCard';
import BottomAppBar from '../components/BottomAppBar';
import CreatePost from '../components/CreatePost';
import { Grid } from '@mui/material';

export default function timeline () {
  
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
      imageLink: 'https://www.gardenia.net/storage/app/public/images/cropped/90216%20Tulipa%20(1).jpg',
      likes: '34',
      comments: '10',
      shares: '13',
      liked: false,
      timePosted: 'Mar. 23, 2021',
      caption: 'By plucking her petals, you do not gather the beauty of the flower. :)'
      
    }
  ];

  const renderPosts = posts.map(post => {
    return(
      //<Grid container direction='column' alignItems='center'
        <Grid item key={post.postID}>
          <PostCard user={post.user} imageLink={post.imageLink} likes={post.likes} comments={post.comments} shares={post.shares} liked={post.liked} timePosted={post.timePosted}  caption={post.caption}  userProfilePic={post.userProfilePic} />
        </Grid>
        //<div style={{height:10}} />
      //</Grid>
    )
  })

  return (
    <React.Fragment>
      <NavBar iconID={1}/>
      
      <Grid container direction='column' alignItems='center'>
        <div style={{height:80}} /> 
        <Grid item>
          <CreatePost />
        </Grid>
        <div style={{height:10}} />
        {renderPosts}
        <div style={{height:30}} />
        
      </Grid>
      <BottomAppBar iconID={1}/>
    </React.Fragment>
   
  );
}
