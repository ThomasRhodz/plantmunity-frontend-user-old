import React from 'react'
import {Grid, Avatar, Typography} from '@mui/material/'
import { useSelector } from 'react-redux';
import Tbs from '@mui/material/Tabs';
import Tb from '@mui/material/Tab';

import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import Btn from '../basic/Button';
import CreatePost from '../parts/CreatePost';
import PostCard from '../card/timelineCards/PostCard';
import {BsImages, BsFillFilePostFill, BsInfoSquare} from 'react-icons/bs';
import EditUserForm from '../forms/EditUserForm';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles((theme) =>
  ({
    logInImage: {
        width:'100%',
        height: '100%',
        objectFit: 'cover',
        display:'block',
        padding:0,
        
    },
  }));

const ProfileFeed = () => {

  const image = useSelector((state) => state.user.image) ;
  const firstname = useSelector((state) => state.user.first_name);
  const middlename = useSelector((state) => state.user.middle_name);
  const lastname = useSelector((state) => state.user.last_name);
  const username = useSelector((state) => state.user.username);

  const samplePosts = [
    {
      postID: '1',
      user: 'Rorona Virus' ,
      userProfilePic: 'https://preview.redd.it/k809t2b7zca51.jpg?width=640&crop=smart&auto=webp&s=90c9b0cb15c510b5fb0643954cbb27fd51ff7ecd',
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
      user: 'Rorona Virus' ,
      userProfilePic: 'https://preview.redd.it/k809t2b7zca51.jpg?width=640&crop=smart&auto=webp&s=90c9b0cb15c510b5fb0643954cbb27fd51ff7ecd',
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
      user: 'Rorona Virus' , 
      userProfilePic: 'https://preview.redd.it/k809t2b7zca51.jpg?width=640&crop=smart&auto=webp&s=90c9b0cb15c510b5fb0643954cbb27fd51ff7ecd',
      imageLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aloe-vera-plant-1522874831.jpg',
      likes: '34',
      comments: '10',
      shares: '13',
      liked: false,
      timePosted: 'Mar. 23, 2021',
      caption: 'By plucking her petals, you do not gather the beauty of the flower. :)'
      
    }
  ];

  const renderPosts = samplePosts.map(post => {
    return(
        <Grid item key={post.postID}>
          <PostCard user={post.user} imageLink={post.imageLink} likes={post.likes} comments={post.comments} shares={post.shares} liked={post.liked} timePosted={post.timePosted}  caption={post.caption}  userProfilePic={post.userProfilePic} />
        </Grid>
    )
  })
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const StyledTab = styled(Tb)(() => ({
    root: {
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: "18px",
      marginRight: theme.spacing(1),
    },
  }));
      

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue)
  };

  return (
    <React.Fragment>
        <Grid container direction='column' alignItems='center' sx={{backgroundColor:'white', width:{xs:370, sm:800, md:800}, minHeight:1000, boxShadow:'2.0px 6.0px 6.0px hsl(0deg 0% 0% / 0.38)',}}>

          {/* Profile cover */}
          <Grid item sx={{ width:'100%', height:{xs:250, sm:300, md:300}}}>
            <img
              src='https://i.pinimg.com/originals/9d/bd/aa/9dbdaa44c34cfdaaa226e3921b5f9510.jpg'
              alt='cover_photo'
              className={classes.logInImage}
            />
          </Grid>

          {/*following & follower counter and button */}
          <Grid item sx={{width:'100%', marginTop:'-110px'}}>

            <Grid container direction='column' alignItems='center'>
              <Grid item>
                <Grid container direction='row' alignItems='center' sx={{width:'100%', height:'100%'}}>
                  <Grid item sx={{width:{xs:100, sm:140, md:140}, height:100, backgroundColor:'transparent'}}>
                    <Btn btnWidth={'100%'} color='#58a776' text={10} textColor='white' textSize={matches?18:22}/>
                    <Btn btnWidth={'100%'} size='large' color='transparent' text={'Followers'} textColor='white' textSize={matches?21:25} />
                  </Grid>

                  {/* Space between the two counters */}
                  <Grid sx={{width:{xs:140, sm:340, md:340}}} />

                  <Grid item sx={{width:{xs:100, sm:140, md:140}, height:100, backgroundColor:'transparent'}}>
                    <Btn btnWidth={'100%'} color='#58a776' text={10} textColor='white' textSize={matches?18:22}/>
                    <Btn btnWidth={'100%'} size='large' color='transparent' text={'Following'} textColor='white' textSize={matches?21:25} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid> {/* end of counter */}

          {/* profile picture */}
          <Grid item sx={{width:'100%', marginTop:{xs: '-40px', sm:'-80px', md:'-80px'}}}>
            <Grid container direction='column' alignItems='center' sx={{width:'100%', height:'100%'}}>
              <Grid item sx={{width:{xs: 100, sm:180, md:180}, height:{xs: 100, sm:180, md:180}}}>
                <Avatar sx={{  border:' 5px solid white', width: {xs: 98, sm:178, md:178}, height: {xs: 98, sm:178, md:178} }}  alt='Tanjiro' src={image}/>
              </Grid>
            </Grid>
          </Grid> {/* end of profile picture */}

          {/* start of profile name and username */}
          <Grid item sx={{width:'100%'}}>
            <Grid container direction='column' alignItems='center' sx={{width:'100%', height:'100%'}}>
              <Grid item >
                <Typography variant={matches?'h6':'h4'} fontFamily='Arvo' >
                  {firstname + ' ' + (middlename === null ? ' ' : middlename === '' ? ' ' : middlename) + ' ' + lastname}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant={matches?'body1':'h6'}  fontFamily='raleway' >
                  @{username}
                </Typography>
              </Grid>
            </Grid>
          </Grid>{/* end of profile name and username */}

          {/* Space between the two counters */}
          <Grid sx={{height:50}} />

          {/* start of tab */}
          <Grid item sx={{width:'100%'}}>
            <Tbs variant='fullWidth' TabIndicatorProps={{style: {background:'#6da58a'}}} orientation='horizontal' value={value} onChange={handleChange} sx={{ height:{xm:55, sm:55, md:55}, borderRight: {xs:0, sm:0, md:1}, borderBottom:{xs:2, sm:2, md:2}, width: '100%'}} style={{borderColor: '#dddfdc', marginTop:'-20px'}}>
                <StyledTab 
                    icon={<BsFillFilePostFill style={value===0?{ color: '#6da58a' }:{ color: '' } }/>} 
                    iconPosition="start" 
                    label={<span style={value===0?{ color: '#6da58a' }:{ color: '' } }>Posts</span>} 
                    sx={{fontFamily: 'arvo', fontSize: {xs:12, sm:15, md:15}}}
                />
                <StyledTab 
                    icon={<BsInfoSquare style={value===1?{ color: '#6da58a' }:{ color: '' } }/>} 
                    iconPosition="start" 
                    label={<span style={value===1?{ color: '#6da58a' }:{ color: '' } }>About</span>} 
                    sx={{fontFamily: 'arvo', fontSize: {xs:12, sm:15, md:15}}}
                />
                <StyledTab 
                    icon={<BsImages style={value===2?{ color: '#6da58a' }:{ color: '' } }/>} 
                    iconPosition="start" 
                    label={<span style={value===2?{ color: '#6da58a' }:{ color: '' } }>Media</span>}  
                    sx={{fontFamily: 'arvo', fontSize: {xs:12, sm:15, md:15}}}
                />
              </Tbs>
          </Grid> {/* end of tab */}

          <Grid item sx={value===0?{display:'flex', backgroundColor: '#f6f7f6', width:'100%'} : {display:'none'}}>
            <Grid container direction='column' alignItems={'center'}>
              <div style={{height:10}} />
              <CreatePost />
              <div style={{height:10}} />
              {renderPosts}
              <div style={{height:50}} />
            </Grid>
          </Grid>

          <Grid item sx={value===1?{display:'flex', backgroundColor: '#f6f7f6', width:'100%'} : {display:'none'}}>
            <EditUserForm/>
          </Grid>
          

        </Grid>
    </React.Fragment>
  )
  
}
export default ProfileFeed