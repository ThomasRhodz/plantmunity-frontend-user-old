
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
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

//Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {FaRegComments} from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';


const PostCard = ({user,imageLink,likes,comments,shares,liked,timePosted, caption, userProfilePic}) => {
    
  return (
      // start of the card
    <Card sx={{ maxWidth:{ xs: '350px', sm: '500px' , md: '600px' }, marginTop: '10px'}}>
        {/* Card Content (upper): user details */}
        <CardContent>
            {/* Grid container: allows the separated user details to be allign in horizontal direction*/}
            <Grid container direction='row' alignItems='center'>

                {/* User Icon*/}
                <Grid item>
                    <IconButton sx={{ p: 0, border: "1px solid #58a776", }} size='small'>
                        <Avatar size='small' alt={user} src={userProfilePic} />
                    </IconButton>
                </Grid>

                <div style={{width:10}} /> 

                {/* User Name and time since posted*/}
                <Grid item>
                    <Typography variant="subtitle1"  fontFamily='apple-system'>
                        {user} | {timePosted}
                    </Typography>
                </Grid>
            </Grid>{/* End of Grid container */}
        </CardContent> {/* End of upper card content */}
        
        {/* Card Media: Image of the post*/}
        <CardMedia
            sx={{width:{xs:'370px', sm:'537px', md: '600px'}, height:{xs:'350px', sm:'400px', md: '400px'}}}
            component="img"
            image={imageLink}
            alt="post"
        />

        {/*Card Action: contains 3 icon button, whcih are the like, commengts and share button.*/}
        <CardActions>

            {/* The following are the 3 buttons, tooltip allows desktop user to see the title of the icon when hovered to the icon*/}
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
        </CardActions>{/* End of card action*/}

        {/* Card Content (lower): displays the post details*/}
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
        </CardContent>{/* end of lower card content*/}
    </Card> //End of card
    
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
