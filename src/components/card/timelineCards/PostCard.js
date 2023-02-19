
//MUI Components
import React, {useState, useEffect} from 'react';
import propType from 'prop-types';
import {Card, CardContent, CardMedia, CardActions, Dialog, Tooltip, Grid, Typography, Avatar, IconButton} from '@mui/material/';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ViewPostCard from './ViewPostCard';

//Icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {FaRegComments} from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { navigate, Link } from 'gatsby';

//Like API
import { useAddLikeMutation,useUpdateUnlikeMutation, useLazyGetIsLikedQuery } from '../../../app/services/postApi';

const PostCard = ({pid, uid, user, username, imageLink, likes, comments, timePosted, caption, userProfilePic}) => {
    
    const [isLiked, result] = useLazyGetIsLikedQuery()
    const [likedClick, setLikedClick] = useState(0)
    const [likeCount, setLikeCount] = useState(likes)

    useEffect(() => {
        isLiked(pid)
    }, [likedClick]);
    
    const postLiked = result?.data?.isLiked
    const likeID = result?.data?.id

    const [addLike] = useAddLikeMutation();
    const [unlike] = useUpdateUnlikeMutation();

    const handleLikeButton = () => {
        if(postLiked === 1){
            unlike(likeID)
            setLikedClick(1)
            setLikeCount(likeCount-1)
        }else{
            addLike(pid)
            setLikedClick(2)
            setLikeCount(likeCount+1)
        }
    }

    const userID = useSelector(state => state.user.id)

    const linksState = {
        'uid': uid
    }
    
    const handleAvatarClick = () => {
        if (uid === userID) {
           return(
            <IconButton onClick={()=>navigate('/profile')} sx={{ p: 0, border: "1px solid #58a776", }} size='small'>
                <Avatar size='small' alt={user} src={userProfilePic} />
            </IconButton>
           )
        }
        else{
            return(
                <Link id="label" style={{textDecoration:'none', color:'white'}} to="/viewProfile" state={linksState}>
                    <IconButton sx={{ p: 0, border: "1px solid #58a776", }} size='small'>
                        <Avatar size='small' alt={user} src={userProfilePic} />
                    </IconButton>
                </Link>   
            )
        }
    }
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    const [view, setView] = useState(false)

    const openView = () => {
        setView(true)
    }

    const closeView = () => {
        setView(false)
    }

    const time_stamp = new Date(timePosted)
    
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        
        return date.toLocaleString('en-US', { month: 'long' });
    }
    const date = ((getMonthName(time_stamp.getMonth()+1))+" "+ time_stamp.getDate() + ", "+time_stamp.getFullYear())
  return (
    <React.Fragment>
        <Card sx={{ maxWidth:{ xs: '350px', sm: '500px' , md: '650px' }, marginTop: '10px'}}>
            {/* Card Content (upper): user details */}
            <CardContent>
                {/* Grid container: allows the separated user details to be allign in horizontal direction*/}
                <Grid container direction='row' alignItems='center'>

                    {/* User Icon*/}
                    <Grid item>
                        {handleAvatarClick()}
                    </Grid>

                    <div style={{width:10}} /> 

                    {/* User Name and time since posted*/}
                    <Grid item sx={{ flexGrow:1 }}>
                        <Typography variant="body2"  fontFamily='Arvo'>
                            {'@'+username} | {date}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <IconButton>
                            <MoreHorizIcon/>
                        </IconButton>
                    </Grid>
                </Grid>{/* End of Grid container */}
            </CardContent> {/* End of upper card content */}
            
            {/* Card Media: Image of the post*/}
            <CardMedia
                sx={{width:{xs:'370px', sm:'537px', md: '650px'}, height:{xs:'350px', sm:'400px', md: '470px'}}}
                component="img"
                image={imageLink}
                alt="post"
                onClick={()=>openView()}
            />

            {/*Card Action: contains 3 icon button, whcih are the like, commengts and share button.*/}
            <CardActions>

                {/* The following are the 3 buttons, tooltip allows desktop user to see the title of the icon when hovered to the icon*/}
                {/*  */}
                <Tooltip title="Like">
                    <IconButton onClick={()=>handleLikeButton()}  color="inherit" aria-label="open drawer" size='medium' >
                        {postLiked === 1 ? <FavoriteIcon fontSize='medium' style={{color: 'red'}}/> : <FavoriteBorderIcon fontSize='medium' style={{color: 'black'}}/>}
                    </IconButton>
                </Tooltip>
                <Tooltip title="Comment">
                    <IconButton onClick={()=>openView()} color="inherit" aria-label="open drawer" size='medium' style={{marginLeft: '-3px'}}>
                        <FaRegComments />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Share To">
                    <IconButton color="inherit" aria-label="open drawer" size='medium' style={{marginLeft: '-3px'}}>
                        <AiOutlineSend />
                    </IconButton>
                </Tooltip>
            </CardActions>{/* End of card action*/}

            {/* Card Content (lower): displays the post details*/}
            <CardContent sx={{marginTop: '-20px'}}>
                <Typography variant="body2" color="text.secondary" fontFamily='Raleway'>
                    {likeCount + (likeCount <= 1 ? " Like | " : " Likes | ") +comments+(comments <= 1 ? " Comment" : " Comments") }
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div" fontFamily='Arvo'>
                    {user}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontFamily='Raleway'>
                    {caption}
                </Typography>
            </CardContent>{/* end of lower card content*/}
        </Card> 
        <Dialog
            maxWidth={false}
            fullScreen={mobile}
            scroll="body"
            open={view}
            onClose={closeView}
        >
            <ViewPostCard
                likes={likeCount}
                caption={caption}
                username={username}
                name={user}
                image={imageLink}
                profile={userProfilePic}
                id={pid}
                date={date}
                handleClose={()=>closeView()}
            />
        </Dialog>
</React.Fragment>
    
  );
};

PostCard.defaultProps = {
    user: 'User_Name',
    imageLink: "https://cdn.naturettl.com/wp-content/uploads/2019/10/07151037/how-to-photograph-plants-6-900x600.jpg",
    likes: '0',
    comments: '0',
    shares: '0',
    liked: false,
    timePosted: '---',
    caption: 'Post_Caption',
    userProfilePic: "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png",
}

PostCard.propType = {

    user: propType.string,
    imageLink: propType.string,
    likes: propType.string,
    comments: propType.string,
    shares: propType.string,
    liked: propType.bool,
    timePosted: propType.string,
    caption: propType.string,
    userProfilePic: propType.string,
}

export default PostCard;
