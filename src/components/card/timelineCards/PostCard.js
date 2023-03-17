//MUI Components
import React, { useState, useEffect } from "react";
import propType from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Dialog,
  Menu,
  MenuItem,
  Tooltip,
  Grid,
  Typography,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material/";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import ViewPostCard from "./ViewPostCard";
import CreateReportPostForm from "../../forms/CreateForms/CreateReportPostForm";
import EditPostForm from "../../forms/EditingForms/EditPostForm";

//Icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import { FaRegComments } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

import { navigate, Link } from "gatsby";

//Like API
import {
  useAddLikeMutation,
  useUpdateUnlikeMutation,
  useGetIsLikedQuery,
  useGetInteractionsQuery
} from "../../../app/services/postApi";
import DeletePostForm from "../../forms/DeleteForms/DeletePostForm";


const PostCard = ({
  pid,
  uid,
  user,
  username,
  imageLink,
  timePosted,
  caption,
  userProfilePic,
}) => {

  const {data: liked} = useGetIsLikedQuery(pid, {refetchOnMountOrArgChange: true});
  const {data: interactions} = useGetInteractionsQuery(pid, {refetchOnMountOrArgChange: true})
  const [loader, setLoader] = useState(3);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState(0);
  const [postLiked, setPostLiked] = useState(0)
  const likeID = liked?.id;
  const [addLike] = useAddLikeMutation();
  const [unlike] = useUpdateUnlikeMutation();

  useEffect(()=>{
    setPostLiked(liked?.isLiked)
    if(loader===3){
      setLikeCount(interactions? interactions.likes_count: 0)
      setComments(interactions? interactions.comments_count : 0)
    }
  }, [liked, interactions])

  console.log(postLiked)

  const handleLikeButton = () => {
    if (postLiked === 1) {
      setLoader(1)
      setPostLiked(0)
      unlike(likeID);
      setLikeCount(likeCount - 1);
    } else {
      setLoader(2)
      setPostLiked(1)
      addLike(pid);
      setLikeCount(likeCount + 1);
    }
  };

  const userID = useSelector((state) => state.user.id);

  const linksState = {
    uid: uid,
  };

  const handleAvatarClick = () => {
    if (uid === userID) {
      return (
        <IconButton
          onClick={() => navigate("/profile")}
          sx={{ p: 0, border: "1px solid #58a776" }}
          size="small"
        >
          <Avatar size="small" alt={user} src={userProfilePic} />
        </IconButton>
      );
    } else {
      return (
        <Link
          id="label"
          style={{ textDecoration: "none", color: "white" }}
          to="/viewProfile"
          state={linksState}
        >
          <IconButton sx={{ p: 0, border: "1px solid #58a776" }} size="small">
            <Avatar size="small" alt={user} src={userProfilePic} />
          </IconButton>
        </Link>
      );
    }
  };
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  const [view, setView] = useState(false);

  const openView = () => {
    setView(true);
  };

  const closeView = () => {
    setView(false);
  };


  const [report, setReport] = useState(false);

  const openReport = () => {
    setReport(true);
  };

  const closeReport = () => {
    setReport(false);
  };

  const [edit, setEdit] = useState(false);

  const openEdit = () => {
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
  };

  const [deletePost, setDeletePost] = useState(false);

  const openDelete = () => {
    setDeletePost(true);
  };

  const closeDelete = () => {
    setDeletePost(false);
  };

  const time_stamp = new Date(timePosted);

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", { month: "long" });
  }
  const date =
    getMonthName(time_stamp.getMonth() + 1) +
    " " +
    time_stamp.getDate() +
    ", " +
    time_stamp.getFullYear();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <Card
        sx={{
          maxWidth: { xs: "350px", sm: "500px", md: "650px" },
          marginTop: "10px",
        }}
      >
        {/* Card Content (upper): user details */}
        <CardContent>
          {/* Grid container: allows the separated user details to be allign in horizontal direction*/}
          <Grid container direction="row" alignItems="center">
            {/* User Icon*/}
            <Grid item>{handleAvatarClick()}</Grid>

            <div style={{ width: 10 }} />

            {/* User Name and time since posted*/}
            <Grid item sx={{ flexGrow: 1 }}>
              <Stack direction='column'>

                <Typography variant="body2" fontFamily="Arvo">
                  {"@" + username} 
                </Typography>
                <Typography variant="caption" fontFamily="Arvo" sx={{ color:'gray' , marginLeft:'3px'}}>
                {date}
                </Typography>
              </Stack>

            </Grid>

            <Grid item>
              <IconButton onClick={handleOpenUserMenu}>
                <MoreHorizIcon />
              </IconButton>
            </Grid>
          </Grid>
          {/* End of Grid container */}
        </CardContent>{" "}
        {/* End of upper card content */}
        {/* Card Media: Image of the post*/}
        <CardMedia
          sx={{
            width: { xs: "370px", sm: "537px", md: "650px" },
            height: { xs: "350px", sm: "400px", md: "470px" },
          }}
          component="img"
          image={imageLink}
          alt="post"
          onClick={() => openView()}
        />
        {/*Card Action: contains 3 icon button, whcih are the like, commengts and share button.*/}
        <CardActions>
          {/* The following are the 3 buttons, tooltip allows desktop user to see the title of the icon when hovered to the icon*/}
          {/*  */}
          <Tooltip title="Like">
            <IconButton
              onClick={() => handleLikeButton()}
              color="inherit"
              aria-label="open drawer"
              size="medium"
            >
              {postLiked === 1 ? (
                <FavoriteIcon fontSize="medium" style={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon
                  fontSize="medium"
                  style={{ color: "black" }}
                />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title="Comment">
            <IconButton
              onClick={() => openView()}
              color="inherit"
              aria-label="open drawer"
              size="medium"
              style={{ marginLeft: "-3px" }}
            >
              <FaRegComments />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share To">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              size="medium"
              style={{ marginLeft: "-3px" }}
            >
              <AiOutlineSend />
            </IconButton>
          </Tooltip>
        </CardActions>
        {/* End of card action*/}
        {/* Card Content (lower): displays the post details*/}
        <CardContent sx={{ marginTop: "-20px" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Raleway"
          >
            {likeCount +
              (likeCount <= 1 ? " Like | " : " Likes | ") +
              comments +
              (comments <= 1 ? " Comment" : " Comments")}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            fontFamily="Arvo"
          >
            {user}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Raleway"
          >
            {caption}
          </Typography>
        </CardContent>
        {/* end of lower card content*/}
      </Card>
      {/*Menu for User Account */}
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
       
          <MenuItem
            role="link"
            sx={{ display: userID === uid ? 'flex':'none' }}
            onClick ={()=>openEdit()}
          >
            <Stack direction='row' alignItems='center'>
                <EditRoundedIcon />
                <Typography
                textAlign="left"
                sx={{ fontFamily: "Arvo", minWidth: 80, ml:2 }}
                >
                    Edit
                </Typography>
            </Stack>
          </MenuItem>
          <MenuItem
            role="link"
            sx={{ display: userID === uid ? 'flex':'none' }}
            onClick ={()=>openDelete()}
          >
            <Stack direction='row' alignItems='center'>
                <DeleteRoundedIcon />
                <Typography
                textAlign="left"
                sx={{ fontFamily: "Arvo", minWidth: 80, ml:2 }}
                >
                Delete
                </Typography>
            </Stack>

          </MenuItem>
          <MenuItem
            role="link"
            sx={{ display: userID === uid ? 'none':'flex' }}
            onClick ={()=>openReport()}
          >
            <Stack direction='row' alignItems='center'>
                <FlagRoundedIcon />
                <Typography
                textAlign="left"
                sx={{ fontFamily: "Arvo", minWidth: 80, ml:2 }}
                >
                    Report
                </Typography>
            </Stack>
          </MenuItem>
      </Menu>
      <Dialog
        maxWidth={false}
        fullScreen={mobile}
        scroll="body"
        open={view}
        onClose={closeView}
      >
        <ViewPostCard
          isLiked={postLiked}
          likes={likeCount}
          caption={caption}
          username={username}
          name={user}
          image={imageLink}
          profile={userProfilePic}
          id={pid}
          date={date}
          handlePostLike={(bool)=>setPostLiked(bool)}
          handleLikes={(count)=>setLikeCount(count)}
          handleComments={(count)=>setComments(comments + count)}
          handleClose={() => closeView()}
        />
      </Dialog>

      <Dialog
        maxWidth={false}
        fullScreen={mobile}
        scroll="body"
        open={report}
        onClose={closeReport}
      >
        <CreateReportPostForm
          PID={pid}
          handleClose={() => closeReport()}
        />
      </Dialog>

      <Dialog
        maxWidth={false}
        fullScreen={mobile}
        scroll="body"
        open={edit}
        onClose={closeEdit}
      >
        <EditPostForm
          postImage={imageLink}
          postCaption={caption}
          postID={pid}
          handleClose={() => closeEdit()}
        />
      </Dialog>

      <Dialog
        maxWidth={false}
        fullScreen={mobile}
        scroll="body"
        open={deletePost}
        onClose={closeDelete}
      >
        <DeletePostForm
          postID={pid}
          handleClose={() => closeDelete()}
        />
      </Dialog>
    </React.Fragment>
  );
};

PostCard.defaultProps = {
  user: "User_Name",
  imageLink:
    "https://cdn.naturettl.com/wp-content/uploads/2019/10/07151037/how-to-photograph-plants-6-900x600.jpg",
  likes: "0",
  comments: "0",
  shares: "0",
  liked: false,
  timePosted: "---",
  caption: "Post_Caption",
  userProfilePic:
    "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png",
};

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
};

export default PostCard;
