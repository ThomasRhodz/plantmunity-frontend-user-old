import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from '@mui/material/AvatarGroup';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const faces = [
    {
      id: '1',
      image:"http://i.pravatar.cc/300?img=1"
    },
    {
      id: '2',
      image:"http://i.pravatar.cc/300?img=2"
    },
    {
      id: '3',
      image:"http://i.pravatar.cc/300?img=3"
    },
    {
      id: '5',
      image:"http://i.pravatar.cc/300?img=4"
    }
  ];
  

const ForumCard = ({coverImage, question, author, interaction, id, avatars}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const matches2 = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Card  key={id} variant='outlined' sx={{border: 3, boxShadow: '5px 10px #888888'}}>
      <CardMedia
                height={matches2?'200px':''}
                component="img"
                image={coverImage}
                alt="post"
            />

        <CardContent>
          <Typography
              variant={matches?"h6":'h5'}
              style={{fontFamily:'apple-system'}}
              gutterBottom
          >
            {question}    
          </Typography>
          <Typography variant={matches?"caption":'subtitle1'}  style={{fontFamily:'apple-system'}}>
              Posted by: {author} | Replies: {interaction}
          </Typography>
          <Divider light />
          <div style={{height:10}} /> 
          <Grid container alignItems='center'>
            <AvatarGroup max={3}>
              {faces.map(face => (
                    <Avatar key={face.id} src={face.image} />
              ))}
            </AvatarGroup>
          </Grid>
        </CardContent>
    </Card>
  )
}

export default ForumCard