import React, {useState} from "react";
import { Dialog, CardActionArea, CardMedia, Card } from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ViewPostCard from "../timelineCards/ViewPostCard";
const DiscoverCard = ({
  pid,
  user,
  username,
  imageLink,
  likes,
  timePosted,
  caption,
  userProfilePic,
}) => {
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

  const [view, setView] = React.useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const openView = () => {
    setView(true);
  };

  const closeView = () => {
    setView(false);
  };

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(1200));
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  return (
    <React.Fragment>
      <Card sx={{ boxShadow: "1.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)" }}>
        <CardActionArea onClick={() => openView()}>
          <CardMedia component="img" image={imageLink} alt={pid} />
        </CardActionArea>
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
          handleClose={() => closeView()}
        />
      </Dialog>
    </React.Fragment>
  );
};

export default DiscoverCard;
