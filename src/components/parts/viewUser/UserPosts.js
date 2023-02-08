import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import PostCard from '../../card/timelineCards/PostCard'

const UserPosts = ({postData, fullname, image, username, uid}) => {
  return postData ? (
    <Grid container direction="column" alignItems={"center"}>
      {postData
        ? postData.map((post) => {
            return (
              <Grid item key={post.postID}>
                <PostCard
                  uid={uid}
                  pid={post.id}
                  user={fullname}
                  username={username}
                  imageLink={post.post_image}
                  likes={post.likes_count}
                  comments={post.comments_count}
                  timePosted={post.created_at}
                  caption={post.caption}
                  userProfilePic={image}
                />
              </Grid>
            );
          })
        : []}
    </Grid>
  ) : (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ width: "100%", height: 150 }}
    >
      <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "raleway", fontWeight: "bold", color: "#DCD7C3" }}
        >
          No Post
        </Typography>
      </Stack>
    </Stack>
  );
}

export default UserPosts