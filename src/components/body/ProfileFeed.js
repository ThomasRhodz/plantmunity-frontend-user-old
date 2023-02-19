import React from 'react'
import {Grid, Avatar, Typography, Stack, Skeleton} from '@mui/material/'
import { useSelector } from 'react-redux';
import Tbs from '@mui/material/Tabs';
import Tb from '@mui/material/Tab';

import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import Btn from '../basic/Button';
import CreatePost from '../parts/CreatePost';
import PostCard from '../card/timelineCards/PostCard';
import {BsImages, BsFillFilePostFill, BsInfoSquare} from 'react-icons/bs';
import UserAccount from '../parts/account/UserAccount';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useGetMyPostsQuery } from '../../app/services/postApi';
import DefaultCover from '../../images/Background.png'
import UserPostSkeleton from '../skeletons/UserPostSkeleton';

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
  const coverPhoto = useSelector((state) => state.user.profile_cover) ;
  const firstname = useSelector((state) => state.user.first_name);
  const middlename = useSelector((state) => state.user.middle_name);
  const lastname = useSelector((state) => state.user.last_name);
  const username = useSelector((state) => state.user.username);
  const fullname =(firstname + ' ' + (middlename === null ? ' ' : middlename === '' ? ' ' : middlename) + ' ' + lastname)
  const {data, isFetching} = useGetMyPostsQuery(undefined, {refetchOnMountOrArgChange: true})
  

  console.log(data)
  
  const myPosts = data ? data[0] : [];
  const PostArray = (Object.values(myPosts)).reverse()
  
  const renderPosts = PostArray.map(post => {
    return(
        <Grid item key={post.postID}>
          <PostCard pid={post.id} user={fullname} username={username} imageLink={post.post_image} likes={post.likes_count} comments={post.comments_count} timePosted={post.created_at}  caption={post.caption}  userProfilePic={image} />
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
        <Grid container direction='column' alignItems='center' sx={{backgroundColor:'white', width:{xs:370, sm:550, md:800}, minHeight:1000, boxShadow:'2.0px 6.0px 6.0px hsl(0deg 0% 0% / 0.38)',}}>

          {/* Profile cover */}
          <Grid item sx={{ width:'100%', height:{xs:250, sm:300, md:300}}}>
            {
               coverPhoto === undefined ? <Skeleton animation="wave" variant="rectangular" width={'100%'} height={'100%'} sx={{mt:1}} /> :
              <img
                src={coverPhoto === null ? DefaultCover : coverPhoto}
                alt='cover_photo'
                className={classes.logInImage}
              />
            }
          </Grid>

         

          <Grid item sx={{width:'100%', marginTop:'-100px', pr:{xs: 3, sm:1, md:10}, pl:{xs: 3, sm:1, md:10}}}>
             <Stack direction='row' alignItems='center' sx={{ width:'100%' }}>
                <Stack direction='column' alignItems='center'>
                  {
                    isFetching ? <Skeleton animation="wave" variant="rectangular" width={100} height={40}/> :
                    <Btn btnWidth={100} color='#58a776' text={10} textColor='white' textSize={matches?18:22}/>
                  }
                  <Btn btnWidth={'100%'} size='large' color='transparent' text={'Followers'} textColor='white' textSize={matches?16:25} />
                </Stack>
                <div style={{ flexGrow:1 }}/>
                <Stack direction='column' alignItems='center'>
                  {
                    isFetching ? <Skeleton animation="wave" variant="rectangular" width={100} height={40}/> :
                    <Btn btnWidth={100} color='#58a776' text={10} textColor='white' textSize={matches?18:22}/>
                  }
                  <Btn btnWidth={'100%'} size='large' color='transparent' text={'Followers'} textColor='white' textSize={matches?16:25} />
                </Stack>
             </Stack>
          </Grid>


          {/* profile picture */}
          <Grid item sx={{width:'100%', marginTop:{xs: '-30px', sm:'-90px', md:'-90px'}}}>
            <Grid container direction='column' alignItems='center' sx={{width:'100%', height:'100%'}}>
              <Grid item sx={{width:{xs: 100, sm:180, md:180}, height:{xs: 100, sm:180, md:180}}}>
                <Avatar sx={{  border:' 5px solid white', width: {xs: 98, sm:178, md:178}, height: {xs: 98, sm:178, md:178} }}  alt='Tanjiro' src={image}/>
              </Grid> 
            </Grid>
          </Grid> {/* end of profile picture */}

          {/* start of profile name and username */}
          <Grid item sx={{width:'100%', mt:2}}>
            <Grid container direction='column' alignItems='center' sx={{width:'100%', height:'100%'}}>
              <Grid item >
                {
                   username === undefined ? <Skeleton animation="wave" variant="rectangular" width={350} height={30} sx={{mt:1, borderRadius:5}} /> :
                  <Typography variant={matches?'h6':'h4'} fontFamily='Arvo' >
                    {firstname + ' ' + (middlename === null ? ' ' : middlename === '' ? ' ' : middlename) + ' ' + lastname}
                  </Typography>
                }
              </Grid>
              <Grid item>
                {
                  username === undefined ? <Skeleton animation="wave" variant="rectangular" width={250} height={20} sx={{mt:1, borderRadius:5}} /> :
                  <Typography variant={matches?'body1':'h6'}  fontFamily='raleway' >
                    @{username}
                  </Typography>
                }
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
              <CreatePost profile={image}/>
              <div style={{height:10}} />
              { isFetching ? <UserPostSkeleton /> : renderPosts}
              <div style={{height:50}} />
            </Grid>
          </Grid>

          <Grid item sx={value===1?{display:'flex', backgroundColor: '#f6f7f6', width:'100%'} : {display:'none'}}>
            <UserAccount/>
          </Grid>
          

        </Grid>
    </React.Fragment>
  )
  
}
export default ProfileFeed