import React from 'react'
import {Grid, Stack, Box, TextField, Button, Avatar, AvatarGroup, Card, CardMedia, CardContent, CardActionArea} from "@mui/material/";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ActivityCard from './ActivityCard';

import {MdSubtitles} from 'react-icons/md';
import {CgDetailsMore} from 'react-icons/cg';
import {RiListCheck2} from 'react-icons/ri';




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
  
  const activity = [
    {
      id: '1',
      comment:"Starting a garden is just like real estate it's all about location. Place your garden in a part of your yard where you'll see it regularly (out of sight, out of mind definitely applies to gardening). That way, you'll be much more likely to spend time in it.",
      date: 'Jun 5 at 2022',
      user: ' Ela Eh',
    },
    {
      id: '2',
      comment:"Misjudging sunlight is a common pitfall when you're first learning to garden. Pay attention to how sunlight plays through your yard before choosing a spot for your garden. Most edible plants, including many vegetables, herbs, and fruits, need at least 6 hours of sun in order to thrive.",
      date: 'Jun 5 at 2022',
      user: ' Adrian Valentine',
    },
    {
      id: '3',
      comment:"One of the best gardening tips you'll ever get is to plan your new garden near a water source. Make sure you can run a hose to your garden site, so you don't have to lug water to it each time your plants get thirsty. The best way to tell if plants need watering is to push a finger an inch down into the soil (that's about one knuckle deep). If it's dry, it's time to water.",
      date: 'Jun 5 at 2022',
      user: ' Chen Virtue',
    },
    {
      id: '4',
      comment:"When starting a garden, one of the top pieces of advice is to invest in soil that is nutrient-rich and well-drained. Achieve this just-right blend by mixing 3 inches of Miracle-Gro® All Purpose Garden Soil into the top 6 to 8 inches of existing soil if you're planning to plant in the ground. If you're planting in a raised bed, use Miracle-Gro® Raised Bed Soil, which is the perfect weight and texture for raised bed growing.",
      date: 'Jun 5 at 2022',
      user: ' Andrea Maasin',
    },
    {
      id: '5',
      comment:"When space is at a premium, look to containers. You can grow many plants in pots, including vegetables, herbs, flowers, fruit trees, berries, and shrubs. When gardening in containers, use a pot that's large enough for the plant it's hosting, and fill it with Miracle-Gro® Moisture Control® Potting Mix. Not only is it specially formulated to help plants in pots thrive, but it also helps protect against over- and under-watering.",
      date: 'Jun 5 at 2022',
      user: ' John Cloyd Bajao',
    },

    {
      id: '6',
      comment:"One last word of advice: Stock up on the basic tools you need to make it easier to grow. ",
      date: 'Jun 5 at 2022',
      user: ' Miguel Fern',
    },
    
  ];

  const renderActivities = activity.map(({id, comment, date, user}) => {
    return (
      <Grid key={id} item sx={{ width:'100%', padding:2, paddingTop:0, marginTop:2  }}>
        <ActivityCard user={user} date={date} comment={comment} />
      </Grid>
    );
  });
   

const ForumCard = ({coverImage, question, author, interaction, id, avatars}) => {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const matches2 = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
      <Card  key={id} variant='outlined'>
        <CardActionArea onClick={handleClickOpen}>
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
          </CardActionArea>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'md'}
        scroll={'body'}
      >
        
          <Grid container direction='column' alignItems='center' sx={{ width: 700, height:'100%', backgroundColor:'#EDEDEC'}}>
              <Grid item sx={{ width:'100%', height:{xs:250, sm:200, md:200}}}>
                <img
                  src={coverImage}
                  alt='cover_photo'
                  style={{ width:'100%', height:'100%', objectFit: 'cover', display:'block', padding:0, }}
                />
              </Grid>
              
              <Grid item sx={{ width:'100%', padding:2, }}>
               
                <Grid container direction='row' justifyContent="flex-end" sx={{ marginTop:'-200px' }}>
                  <Grid item>
                    <IconButton
                      sx={{ color: 'white', backgroundColor:'#88847c'}}
                      onClick={handleClose}
                      aria-label="close"
                    >
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item sx={{ width:'100%', padding:2, paddingTop:0, marginTop:'-10px'  }}>
                <Stack direction='row'>
                  <MdSubtitles style={{fontSize:25}}/>
                  <Stack direction='column' sx={{ paddingLeft:2 }}>
                    <Typography variant={matches?"h6":'h4'}  style={{fontFamily:'apple-system'}}>
                      Title: {question} 
                    </Typography>
                    <Typography variant={matches?"caption":'subtitle1'}  style={{fontFamily:'apple-system'}}>
                      Posted by: {author} 
                    </Typography>
                  </Stack>
                </Stack>
                
              </Grid>
              <Grid item sx={{ width:'100%', padding:2, paddingTop:0, marginTop:2  }}>
                <Stack direction='row'>
                  <CgDetailsMore style={{fontSize:25}}/>
                  <Stack direction='column' sx={{ paddingLeft:2, marginTop:'-5px', maxWidth:600 }}>
                    <Typography variant={matches?"caption":'h6'}  style={{fontFamily:'apple-system'}}>
                      Description 
                    </Typography>
                    <Typography variant={'body'}  style={{fontFamily:'apple-system'}}>
                      'It becomes increasingly important that you get used to checking the soil to see if your cacti are thirsty. Generally, the rule of thumb is that during the growing season, a healthy cactus will need to be watered every one to two weeks.' 
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item sx={{ width:'100%', padding:2, paddingTop:0, marginTop:2  }}>
                <Stack direction='row'>
                  <RiListCheck2 style={{fontSize:25}}/>
                  <Box sx={{ paddingLeft:2, marginTop:'-5px'}}>
                    <Typography variant={matches?"caption":'h6'}  style={{fontFamily:'apple-system'}}>
                      Activities 
                    </Typography>
                  </Box>
                </Stack>
              </Grid>

              <Grid item sx={{ width:'100%', padding:2, paddingTop:0, marginTop:2  }}>
                <Stack direction='row'>
                  <Avatar alt="Remy Sharp" />
                  <Box sx={{ paddingLeft:2, flexGrow: 1}}>
                    <TextField multiline minRow={1} maxRow={10} id="filled-basic" label="Add a comment" variant="filled" size='small'  InputProps={{disableUnderline: true }} sx={{width: '100%'}}/>
                  </Box>
                  <Button sx={{ width:50 }}> Add </Button>
                </Stack>
              </Grid>

              {renderActivities}
              
          </Grid>
        
        
      </Dialog>
    </React.Fragment>
  )
}

export default ForumCard