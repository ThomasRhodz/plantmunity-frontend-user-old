import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from '@mui/material/AvatarGroup';
import Card from "@material-ui/core/Card";
import {Grid, Stack, Box, TextField, Button, Typography} from "@mui/material/";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActionArea } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import {  Divider} from "@material-ui/core/";
import CloseIcon from '@mui/icons-material/Close';
import {RiListCheck2} from 'react-icons/ri';
import CommentCard from './CommentCard';
import Tooltip from '@mui/material/Tooltip';

//Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {FaRegComments} from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';

const comments = [
    {
      id: '1',
      comment:"I hope your enthusiasm will not fade and you'll creat a great garden",
      date: 'Jun 5 at 2022',
      user: ' Ela Eh',
    },
    {
      id: '2',
      comment:"You've got a talent in taking care of plats!",
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
      comment:"I like how you catch that perspective!",
      date: 'Jun 5 at 2022',
      user: ' Andrea Maasin',
    },
    {
      id: '5',
      comment:"Wow Grape!",
      date: 'Jun 5 at 2022',
      user: ' John Cloyd Bajao',
    },

    {
      id: '6',
      comment:"nice photo, i really liked it. ",
      date: 'Jun 5 at 2022',
      user: ' Miguel Fern',
    },
    
  ];

  const renderComments = comments.map(({id, comment, date, user}) => {
    return (
      <Grid key={id} item sx={{ width:'100%', padding:2, paddingTop:0, marginTop:2  }}>
        <CommentCard user={user} date={date} comment={comment} />
      </Grid>
    );
  });

const DiscoverCard = ({image, altText}) => {
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
      <Card sx={{border: 3, boxShadow: '5px 10px #888888'}}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
                    height={matches2?'200px':''}
                    component="img"
                    image={image}
                    alt={altText}
                />
          </CardActionArea>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={1000}
        scroll={'body'}
      >
        <Grid container direction='row' sx={{ width:{sm:800, md:1000}, height:620, backgroundColor:'red' }} >
            <Grid item sx={{ minWidth:400, maxWidth:500, height:620, backgroundColor:'#f6f7f6', paddingTop:6, paddingBottom:6, display:{sm:'none', md:'flex'}}}>
                <img
                  src={image}
                  alt='cover_photo'
                  style={{minWidth:400, maxWidth:500, height:520, objectFit: 'cover'}}
                />
            </Grid>
            <Grid item sx={{ minWidth:300, maxWidth:400, height:620, backgroundColor:'#f6f7f6', paddingTop:6, paddingBottom:6, display:{sm:'flex', md:'none'}}}>
                <img
                  src={image}
                  alt='cover_photo'
                  style={{minWidth:300, maxWidth:400, height:520, objectFit: 'cover'}}
                />
            </Grid>


            <Grid item sx={{ flexGrow:1, height:620, backgroundColor:'white'}}>

                <Grid item sx={{ flexGrow:1, padding:2}}>
                    <Stack direction='row'>
                        <Avatar alt="Remy Sharp" src="" sx={{ color:'white' }} />
                        <div style={{ width: 20 }} />
                        <Stack direction='column' sx={{ flexGrow:1 }}>
                            <Stack direction='row'>
                                <Typography variant={'subtitle1'}  style={{fontFamily:'apple-system', fontWeight:'bold'}}>
                                    John Eliezar Rodis | 
                                </Typography>
                                <Button size='small' style={{fontFamily:'apple-system', fontWeight:'bold', textTransform: 'none', fontSize:14}} >
                                    Follow
                                </Button>
                            </Stack>
                            <Typography variant={'caption'}  style={{fontFamily:'apple-system', marginTop: '-5px'}}>
                                @ThomasRhodz
                            </Typography>
                        </Stack>
                        <Box>
                            <IconButton
                                sx={{ color: 'white', backgroundColor:'#e5e9e7'}}
                                onClick={handleClose}
                                aria-label="close"
                                >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        
                    </Stack>
                </Grid>
                <Divider light style={{marginTop:'-10px'}}/>
                <Grid item sx={{ flexGrow:1, height:350, padding:2, overflowY:'auto'}}>
                    <Stack direction='row'>
                        <Avatar alt="Remy Sharp" src="" sx={{ color:'white' }} />
                        <div style={{ width: 20 }} />
                        <Stack direction='column'>
                            
                            <Typography variant={'subtitle1'} align='justify'  sx={{fontFamily:'apple-system',  maxWidth: {sm:300, md:400}}}>
                                <b> John Eliezar Rodis </b> - Our intuitive powers increase when you are with plants because your mind is silenced and you become more aware in the present moment.
                            </Typography>
                        </Stack>
                    </Stack>

                    <Grid container direction='column' sx={{  flexGrow:1, marginTop: 2 }}>
                        <Grid item sx={{ flexGrow: 1,}}>
                            <Stack direction='row'>
                                <RiListCheck2 style={{fontSize:25}}/>
                                <Box sx={{ paddingLeft:2, marginTop:'-5px'}}>
                                    <Typography  style={{fontFamily:'apple-system', fontWeight: 'bold', fontSize:18}}>
                                        Comments 
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>

                        {renderComments}
                    </Grid>

                </Grid>
                <Divider light style={{marginTop:'5px'}}/>

                <Grid item sx={{ paddingLeft:2, paddingBottom:1 }}>
                    <Stack direction='row'>
                        <Tooltip title="Like">
                            <IconButton color="inherit" aria-label="open drawer" size='medium' >
                                {true ? <FavoriteIcon fontSize='large' style={{color: 'red', }}/> : <FavoriteBorderIcon fontSize='large' style={{color: 'black'}}/>}
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Comment">
                            <IconButton color="inherit" aria-label="open drawer" style={{ fontSize:30}}>
                                <FaRegComments />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Share To">
                            <IconButton color="inherit" aria-label="open drawer" size='large' style={{ fontSize:30}}>
                                <AiOutlineSend />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack direction='column' sx={{ paddingLeft:2 }}>
                         <Typography variant='subtitle1' style={{fontFamily:'apple-system'}}>
                            Liked by Roxlee and  934 others 
                        </Typography>
                        <Typography  variant='caption' style={{fontFamily:'apple-system'}}>
                            Posted on Jun 19, 2022
                        </Typography>
                    </Stack>
                </Grid>

                <Divider light style={{marginTop:'5px'}}/>

                <Grid item sx={{flexGrow:1, paddingLeft:2, marginTop:2  }}>
                    <Stack direction='row'>
                    <Avatar alt="Remy Sharp" />
                    <Box sx={{ paddingLeft:2, flexGrow: 1}}>
                        <TextField multiline minRow={1} maxRow={10} id="filled-basic" label="Add a comment" variant="filled" size='small'  InputProps={{disableUnderline: true }} sx={{width: '100%'}}/>
                    </Box>
                    <Button sx={{ width:50 }}> Add </Button>
                    </Stack>
                </Grid>
                </Grid>

        </Grid>
        
      </Dialog>
    </React.Fragment>
  )
}

export default DiscoverCard