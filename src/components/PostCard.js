
//MUI Components
import * as React from 'react';
import propType from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import {FaRegComments} from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';


const PostCard = ({user,imageLink,likes,comments,shares,liked,timePosted, caption, userProfilePic}) => {
    
  return (
    <Card sx={{ maxWidth:{ xs: '370px', sm: '537px' , md: '600px' }, marginTop: '10px'}}>
            <CardContent>
                <Grid container direction='row' alignItems='center'>
                    <Grid item>
                        <IconButton sx={{ p: 0, border: "1px solid #58a776", }} size='small'>
                            <Avatar size='small' alt={user} src={userProfilePic} />
                        </IconButton>
                    </Grid>
                    <div style={{width:10}} /> 
                    <Grid item>
                        <Typography variant="subtitle1"  fontFamily='apple-system'>
                           {user} | {timePosted}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardMedia
                sx={{width:{xs:'370px', sm:'537px', md: '600px'}}}
                component="img"
                height="400"
                image={imageLink}
                alt="post"
            />
            <CardActions>
                <Tooltip title="Like">
                    <IconButton color="inherit" aria-label="open drawer" size='medium' >
                        {liked ? <FavoriteIcon fontSize='medium' style={{color: 'red'}}/> : <FavoriteBorderIcon fontSize='medium' style={{color: 'black'}}/>}
                    </IconButton>
                </Tooltip>
                <Tooltip title="Comment">
                    <IconButton color="inherit" aria-label="open drawer" size='medium' style={{marginLeft: '-3px'}}>
                        <FaRegComments />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Share To">
                    <IconButton color="inherit" aria-label="open drawer" size='medium' style={{marginLeft: '-3px'}}>
                        <AiOutlineSend />
                    </IconButton>
                </Tooltip>
            </CardActions>
            <CardContent sx={{marginTop: '-20px'}}>
                <Typography variant="body2" color="text.secondary" fontFamily='apple-system'>
                    {likes} Likes | {comments} comments | {shares} shares
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div" fontFamily='apple-system'>
                    {user}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontFamily='apple-system'>
                    {caption}
                </Typography>
            </CardContent>
    </Card>
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
