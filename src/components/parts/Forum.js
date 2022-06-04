import React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import Divider from "@material-ui/core/Divider";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import DialogTitle from '@mui/material/DialogTitle';
//import DialogContent from '@mui/material/DialogContent';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

import ForumnCard from '../card/ForumCard';
import Btn from '../basic/Button';
import TextField from '../basic/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    display: "flex",
  },
  postCaption: {
    width: "325px",
    fontSize: "15px",
    // border: 'none',
    outline: "none",
    minHeight: "150px",
    maxHeight: "150px",
    resize: "none",
    borderRadius: "5px",
    padding: 10,
  },
}));


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:'#efeff4',
  '&:hover': {
      border: "1px solid #58a776",

  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '38ch',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '18ch',
      '&:focus': {
        width: '24ch',
      },
    },
  },
}));


const Forum = () => {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  //function for opening and closing the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  //Function for closing the create forumn dialog
  const handleClose = () => {
    setOpen(false);
  };

  //state for initializing the value of the privacy for the forum
  const [privacy, setPrivacy] = React.useState(1);

  //fucntion in changing the value of privacy selected privacy the forumn that the user want to create
  const handleChange = (event) => {
    setPrivacy(event.target.value);
  };

  return (
    //Box serve as the parent component just to hold a main component and the dialog
    <Box sx={{width: {xs:350, sm:800, md:1200}, minHeight: 253,  height: {xs:'100%', sm:400, md:550}, paddingLeft:1}}>
      
      {/**Grid container: serve as the parent grid with vertical direction */}
      <Grid container direction='column'>
        <Grid item className={classes.searchBar}>
          <Grid container direction='row' style={{paddingRight:15}}> 
            <Grid item sx={{display:{xs:'none', sm:'flex', md:'flex'}}}>
              <Search style= {{float: 'right'}} >
                  <SearchIconWrapper>
                      <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search a forum"
                    inputProps={{ 'aria-label': 'search' }}
                  />
              </Search>
            </Grid>
            <Box sx={{ flexGrow: 1, display:{xs:'none', sm:'flex', md:'flex'}}} />
            <Grid item>
              <Btn variant='contained'  color='#efeff4' text={"My forums"} textColor='#58a776'  btnWidth='140px' btnSize='large' btnComponent='span' startingIcon={<ForumOutlinedIcon size='large'/>} />
            </Grid>
            <div style={{width:10}} />
            <Grid item>
              <Btn variant='contained'  color='#efeff4' text={"Create a forum"} textColor='#58a776'  btnWidth='165px' btnSize='large' btnComponent='span' startingIcon={<AddOutlinedIcon size='large'/>} clickHandler={() => handleClickOpen()}/>
            </Grid>
          </Grid>
        </Grid>
        <div style={{height:10}} />
        <Divider light variant='middle' />
        <div style={{height:10}} />
        <Grid item sx={{overflowY: {xs: 'hidden', sm: 'scroll', md: 'scroll'}, backgroundColor: '#f6f7f6', width:{xs: '100%'}, height: {xs:'100%', sm:350, md:500}}}>
          <Masonry sx={{display:{xs:'none',sm:'flex', md:'flex'}}} columns={3} spacing={2}>
            {renderForum}
          </Masonry>
          <Grid container direction='column' sx={{display:{xs:'flex',sm:'none', md:'none'}}}>
            {renderForum}
          </Grid>
        </Grid>
      </Grid>
      
      {/* A dialog that opens for creating a forum*/}
      <Dialog open={open} onClose={handleClose}>
        
        <Grid container direction='row' alignItems='center' justify='center' style={{padding:5, paddingBottom:0}}>
          <Grid item >
            <DialogTitle>Create a forum</DialogTitle>
          </Grid>
          <Box sx={{flexGrow: 1, width:110}} />
        </Grid>
        <Divider light/>

        <Grid container direction='column' alignItems='center' style={{padding:10}}>

          {/* Forumn Form*/}
              <Grid item style={{ width:350}}>
                <TextField label={'Title or Question'}/>
                <div style={{height:10}} />
              </Grid>
              <Grid item >
                <TextareaAutosize
                  maxRows={10}
                  aria-label="maximum height"
                  placeholder="Any further details?"
                  className={classes.postCaption}
                />
              </Grid>
              <div style={{height:10}} />
              <Grid item >
                <FormControl variant="outlined" sx={{ m: 1, width:350 }}>
                  <InputLabel id="demo-simple-select-helper-label">Visibility</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label='Visibility'
                    value={privacy}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Public</MenuItem>
                    <MenuItem value={2}>Follower</MenuItem>
                    <MenuItem value={3}>Followers and Following</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

          <div style={{height:10}} />
        </Grid>
        
        <DialogActions>
          <Btn  text={'Discard'} clickHandler={()=>handleClose()} color='transparent'/>
          <Btn  text={'Post'} clickHandler={()=>handleClose()} color='transparent'/>
        </DialogActions>
      </Dialog>
    </Box>

  )
};


const sampleForums = [
  {
    forumnID: '15',
    question: 'How often do I water my cactus?',
    author:'John Rodis',
    interaction:'30',
    coverImage:'https://m.media-amazon.com/images/I/91oad5-kPML._AC_SX466_.jpg'
  },
  {
    forumnID: '1',
    question:' How to take care a socculent?',
    author:'Thomas Rhodz',
    interaction: '12',
    coverImage: 'http://cdn.shopify.com/s/files/1/0150/6262/articles/20181113_thesill_255.jpg?v=1547152230'
  },
  {
    forumnID: '2',
    question: 'How to plant a seedling?',
    author:'Andrea Karla',
    interaction: '7',
    coverImage: 'https://www.microdrips.com/en/blog/wp-content/uploads/2017/05/preparing-seedlings-1200x800.jpg'
  },
  {
    forumnID: '14',
    question: 'Can I grow strawberries in Davao City?',
    author:'John Cloyd',
    interaction:'6',
    coverImage:'https://www.gardeningknowhow.com/wp-content/uploads/2009/04/strawberries.jpg'
  },
  {
    forumnID: '3',
    question: 'How to price a plant?',
    author:'Roxene Lee',
    interaction:'50',
    coverImage:'https://www.greenhousemag.com/fileuploads/publications/15/issues/103034/articles/images/tag-label_covered-tag_fmt.png'
  },
  {
    forumnID: '4',
    question: 'How to you make your own banana Seedlings?',
    author:'Anna Marie',
    interaction:'5',
    coverImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkAtWaOBJkqxu1SMlEe9uRZ2875sQS2sh2g&usqp=CAU'
  },
  {
    forumnID: '5',
    question: 'How often do I water my cactus?',
    author:'John Rodis',
    interaction:'30',
    coverImage:'https://m.media-amazon.com/images/I/91oad5-kPML._AC_SX466_.jpg'
  },
  {
    forumnID: '6',
    question: 'How to make you plants fat?',
    author:'Miguel Fern',
    interaction: '40',
    coverImage: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2020/04/the-best-fertilizer-options.jpg'
  },
  {
    forumnID: '7',
    question: 'Can I grow strawberries in Davao City?',
    author:'John Cloyd',
    interaction:'6',
    coverImage:'https://www.gardeningknowhow.com/wp-content/uploads/2009/04/strawberries.jpg'
  },
  {
    forumnID: '8',
    question: 'How do you plant a malunggay?',
    author:' ALcant Drian',
    interaction: '21',
    coverImage: 'https://moringa-o2.com/wp-content/uploads/2021/05/malunggay-leaves.jpg'
  },
  {
    forumnID: '9',
    question:'How can we identify agloe?',
    author:'Ela Eh',
    interaction:'20',
    coverImage:'https://www.costafarms.com/CostaFarms/Costa%20Farms%20-%20Colorful%20Aglaonema%20Header%20-%20Houseplants.jpg?height=411&width=856&scale=both'
  },
  {
    forumnID: '10',
    question:' How to take care a socculent?',
    author:'Thomas Rhodz',
    interaction: '12',
    coverImage: 'http://cdn.shopify.com/s/files/1/0150/6262/articles/20181113_thesill_255.jpg?v=1547152230',
  },
  {
    forumnID: '11',
    question: 'How to plant a seedling?',
    author:'Andrea Karla',
    interaction: '7',
    coverImage: 'https://www.microdrips.com/en/blog/wp-content/uploads/2017/05/preparing-seedlings-1200x800.jpg'
  },
  {
    forumnID: '12',
    question: 'How to you make your own banana Seedlings?',
    author:'Anna Marie',
    interaction:'5',
    coverImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkAtWaOBJkqxu1SMlEe9uRZ2875sQS2sh2g&usqp=CAU'
  },
  {
    forumnID: '13',
    question: 'How often do I water my cactus?',
    author:'John Rodis',
    interaction:'30',
    coverImage:'https://m.media-amazon.com/images/I/91oad5-kPML._AC_SX466_.jpg'
  },  
];

const renderForum = sampleForums.map(sample => {
  return (
    <Grid key={sample.forumnID}>
      <ForumnCard id={sample.forumnID} question={sample.question} author={sample.author} interaction={sample.interaction} coverImage={sample.coverImage} />
    </Grid>
  );
});
export default Forum