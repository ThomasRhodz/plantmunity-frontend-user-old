import React, { useState } from "react";
import { Grid, Stack, Box, TextField, Button, Avatar, Toolbar, Divider, Tooltip, Dialog } from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ActivityCard from "../card/discoverPageCards/ActivityCard";

import { AiOutlineEdit } from "react-icons/ai";
import { MdSubtitles } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { RiListCheck2 } from "react-icons/ri";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAddReplyMutation, useGetActivitiesQuery } from "../../app/services/forumApi";
import { useSelector } from "react-redux";
import EditForumForm from "../forms/EditingForms/EditForumForm";

const schema = yup.object({
  content: yup.string(),
});

const ViewForumDialog = ({id, uid, title, visibility, description, author, coverImage, handleClose}) => {

  const profile =  useSelector((state)=>state.user.image)
  const accountID =  useSelector((state)=>state.user.id)

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(1200));
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  const { data } = useGetActivitiesQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  console.log(data);

  const activity = data ? data[0] : [];

  console.log(activity)

  const renderActivities = activity.length !== 0 ? activity.map(({ id, content, created_at, user }) => {
    return (
      <Grid
        key={id}
        item
        sx={{ width: "100%", padding: 2, paddingTop: 0, marginTop: 1 }}
      >
        <ActivityCard UID={user?.id} user={user?.first_name} date={created_at} comment={content} image={user?.profile_picture} />
      </Grid>
    )
  }) : (
    <Grid item sx={{ width:'100%' }}>
            <Stack direction='row' alignItems={'center'} sx={{ width:'100%', height:100 }}>
                <Stack direction='column' alignItems={'center'} sx={{ width:'100%' }}>
                    <Typography variant='h6' sx={{ fontFamily:'Arvo', color:'#BFCBA5'}}>
                        There are no activities.
                    </Typography>
                </Stack>
            </Stack>
        </Grid>
  );

  const [content, setContent] = useState("");

  //For react hook form
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const [addReply] = useAddReplyMutation();

  const onSubmit = (data) => {
    const input = {
      id: id,
      data: data,
    };

    console.log(input);

    addReply(input)
      .then((payload) => {
        //toast("Account detail was successfully updated.")
        console.log("fulfilled", payload);
        setContent("");
      })
      .catch((error) => {
        console.error("rejected", error);
        // toast("Error has occured, try again later.")
      });
  };

  //States for dialog
  const [open, setOpen] = React.useState(false); //-> for open and close of dialog

  //function for opening and closing the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  //Function for closing the create forumn dialog
  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ width: { xs:'100%', sm:600, md:700}, backgroundColor: "#EDEDEC" }}
    >
      <Grid item sx={{ width: "100%", height: 200 }}>
        <img
          src={coverImage}
          alt="cover_photo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            padding: 0,
          }}
        />
      </Grid>

      <Grid item sx={{ width: "100%", padding: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          sx={{ marginTop: "-200px" }}
        >
          <Grid item>
            <Stack direction='column'>
              <Tooltip title='Close'>
                <IconButton
                  sx={{ color: "white", backgroundColor: "#88847c", '&:hover':{ bgcolor: '#bfcba5'} }}
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title='Edit Forum' sx={{ display: uid === accountID ? 'flex' : 'none' }}>
                <IconButton
                  sx={{ display: uid === accountID ? 'flex' : 'none', color: "white", backgroundColor: "#88847c", '&:hover':{ bgcolor: '#bfcba5'}, mt:1 }}
                  onClick={()=>handleClickOpen()}
                  aria-label="close"
                >
                  <AiOutlineEdit />
                </IconButton>
              </Tooltip>
            </Stack>

          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          width: "100%",
          padding: 2,
          paddingTop: 0,
          marginTop: "-10px",
        }}
      >
        <Stack direction="row">
          <MdSubtitles style={{ fontSize: mobile ? 32: 40 }} />
          <Stack direction="column" sx={{ paddingLeft: 2 }}>
            <Typography
              variant={tablet ? "h6" : "h4"}
              style={{ fontFamily: "Arvo" }}
            >
              Title: {title}
            </Typography>
            <Typography
              variant={tablet ? "caption" : "subtitle1"}
              style={{ fontFamily: "Raleway" }}
            >
              Posted by: {author}
            </Typography>
            {/* <Button 
              variant='contained' 
              sx={{ 
                textTransform:'none', 
                fontFamily: 'Arvo',
                bgcolor:'transparent',
                color:'#5C6D63',
                border:'2px solid #5C6D63',
                borderRadius:5,   
              }}  
            >
              Edit forum
            </Button> */}
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        sx={{ width: "100%", padding: 2, paddingTop: 0, marginTop: mobile ? 0 :2, display: description === null ? 'none':'flex' }}
      >
        <Stack direction="row">
          <Box sx={{ width:30, height:30 }}>
            <CgDetailsMore style={{ fontSize: 25 }} />
          </Box>
          <Stack
            direction="column"
            sx={{ paddingLeft: 2, marginTop: mobile ? 0 : "-5px", maxWidth: 600 }}
          >
            <Typography
              variant={tablet ? "body1" : "h6"}
              style={{ fontFamily: "Raleway" }}
            >
              Description
            </Typography>
            <Typography variant={mobile ? "caption" :"body2"} align='justify' style={{ fontFamily: "Raleway" }}>
              {description}
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid
        item
        sx={{ width: "100%", padding: 2, paddingTop: 0, marginTop: mobile ? 0 : 2 }}
      >
        <Stack direction="row">
          <RiListCheck2 style={{ fontSize: 25,  }} />
          <Box sx={{ paddingLeft: 2, marginTop: mobile ? 0 : "-5px" }}>
            <Typography
              variant={tablet ? "body1" : "h6"}
              style={{ fontFamily: "Raleway" }}
            >
              Activities
            </Typography>
          </Box>
        </Stack>
      </Grid>

      <Grid item sx={{ width:'100%', mb:1 }}>
        <Divider />
      </Grid>

      <Grid
        item
        sx={{ width: "100%", padding: 2, paddingTop: 0, marginTop: 1 }}
      >
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="row">
            <Avatar src={profile} />
            <Box sx={{ paddingLeft: 2, flexGrow: 1 }}>
              <TextField
                {...register("content")}
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                }}
                required
                multiline
                minRow={1}
                maxRow={10}
                id="filled-basic"
                label="Add a reply"
                variant="filled"
                size="small"
                InputProps={{ disableUnderline: true }}
                sx={{ width: "100%" }}
              />
            </Box>
            <Button type="submit" sx={{ width: 50 }}>
              Add
            </Button>
          </Stack>
        </form>
      </Grid>
      
      <Grid item sx={{ width:'100%', mb:1 }}>
        <Divider />
      </Grid>

      {renderActivities}

      <Toolbar/>

      <Dialog 
        maxWidth={false}
        fullScreen={mobile}
        scroll='body'
        open={open}
        onClose={handleClickClose}
      >
        <EditForumForm 
          forumId ={id}
          forumTitle={title}
          forumDescription={description}
          forumVisibility={visibility}
          forumPhoto={coverImage}
          handleClose={()=> handleClickClose()}
        />
      </Dialog>
    </Grid>
  );
};

export default ViewForumDialog;
