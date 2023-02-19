import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import ViewForumDialog from "../../dialogs/ViewForumDialog";

const ForumCard = ({
  coverImage,
  description,
  question,
  author,
  visibility,
  interaction,
  id,
  uid
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(1200));
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  return (
    <React.Fragment>
      <Card
        key={id}
        variant="outlined"
        sx={{ boxShadow: "2.0px 6.0px 6.0px hsl(0deg 0% 0% / 0.38)" }}
      >
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            height={mobile ? "200px" : ""}
            component="img"
            image={coverImage}
            alt="post"
          />

          <CardContent>
            <Typography
              variant={tablet ? "body1" : "h6"}
              style={{
                fontFamily: "Raleway",
                fontWeight: "bold",
                color: "#5C6D63",
              }}
            >
              {question}
            </Typography>
            <Typography
              variant={tablet ? "caption" : "body2"}
              style={{ fontFamily: "Raleway" }}
            >
              Posted by: {author} | Replies: {interaction}
            </Typography>
            <Divider light />
            <div style={{ height: 10 }} />
            <Grid container alignItems="center">
              {/* <AvatarGroup max={3}>
                  {faces.map(face => (
                        <Avatar key={face.id} src={face.image} />
                  ))}
                </AvatarGroup> */}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog 
        open={open} 
        fullScreen={mobile}
        onClose={handleClose} 
        maxWidth={false} 
        scroll={"body"}
      >
        <ViewForumDialog
          description={description}
          title={question}
          author={author}
          id={id}
          uid={uid}
          visibility={visibility}
          coverImage={coverImage}
          handleClose={() => handleClose()}
        />
      </Dialog>

      
    </React.Fragment>
  );
};

export default ForumCard;
