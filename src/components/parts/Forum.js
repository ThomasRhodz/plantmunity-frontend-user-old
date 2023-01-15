//Components
import React, {useState} from 'react';
import Masonry from '@mui/lab/Masonry';
import {Stack, Box, TextField, Select, Grid, InputBase, InputLabel, MenuItem, Typography, Divider} from '@mui/material/';

//Reusable Components
import ForumnCard from '../card/ForumCard';
import Btn from '../basic/Button';

//Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// Form and Data Handling
import { useDispatch, useSelector } from 'react-redux';
import { setForum } from '../../app/persists/forum';
import { useAddForumMutation } from '../../app/services/forumApi';

import { 
  //set, 
  useForm 
} from 'react-hook-form';
//import { yupResolver } from '@hookform/resolvers/yup';
//import * as yup from "yup";
import FormControl from '@mui/material/FormControl';

//Styling and Icons
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SearchIcon from '@mui/icons-material/Search';

//Internal Styling
const useStyles = makeStyles((theme) => ({
  searchBar: {
    display: "flex",
  },
  uploadButton:{
    border: "1px solid #58a776",
    borderRadius: 5,
    paddingTop:10,
    paddingBottom:10,
    width:'100%',
    height: '100%',
    overflow: 'hidden'
  },

  image: {
      width:'330px',
      height: '160px',
      objectFit:'cover',
      border: "1px solid #58a776",
      borderRadius:5
  },

  image_mobile: {
    width:'300px',
    height: '160px',
    objectFit:'cover',
    border: "1px solid #58a776",
    borderRadius:5
},
}));

//Schema: Rules for inputs
// const schema = yup.object({
//   coverPhoto: yup.string().required('Upload your cover photo'), 
//   title: yup.string().required('Please, enter a title'),
//   description: yup.string().max(1000, 'Invalid Phone Number'),
//   visibility: yup.string().required(),
// });

//Search Bar Styling
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

  //For react hook form
  const {
    register, 
    handleSubmit,  
    //formState: { errors }
  } = useForm({criteriaMode: "all"});

  //Using the internal styling
  const classes = useStyles();

  //For using the function in a redux (Forum.js -> setForum)
  const dispatch = useDispatch();

  //For using the variable in a redux (Forum.js -> forum.[variable_name])
  const {forum} = useSelector((state) => state.forum)

  //Renaming the RTK query into shorter name
  const [addForum] = useAddForumMutation();

  //States
  const [open, setOpen] = React.useState(false); //-> for open and close of dialog
  const [images, setImage] = React.useState(false); // -> for previewing of image
  const [imageUpload, setImageUpload] = useState(''); // -> for setting the value of the image in 64 BaseEncode
  const [title, setTitle] = React.useState(' ');
  const [description, setDescription] = React.useState(' ');
  const [privacy, setPrivacy] = React.useState(1);

  //function for opening and closing the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  //Function for closing the create forumn dialog
  const handleClose = () => {
    setOpen(false);
    setImageUpload(' ');
    setImage(false);
  };

  //fucntion in changing the value of privacy selected privacy the forumn that the user want to create
  const handleChange = (event) => {
    setPrivacy(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  
  //function for handling the change of an image upladed as the cover photo
  function handleImageChange(e) {
    if(e.target.files && e.target.files[0]){
        let reader = new FileReader()
        reader.onload = function(e){
            setImageUpload(e.target.result); // -> setting the current image
            setImage(true); // -> setting the preview to true (image will display)
            dispatch(setForum({
                forumImage: e.target.result
            })); // -> setting the forum image with a 64 Base string of the current image, which will be use during upload of the forum
            
          }
        reader.readAsDataURL(e.target.files[0])
    }
  }

  const onSubmit = (data) => {
    console.log(data);

    const forumnInstance = {
      'title': data.title,
      'description': data.description,
      'visibility': data.visibility,
      'image': forum.forumImage
    }

    addForum(forumnInstance)
    console.log(forumnInstance)

    setTitle('')
    setDescription('')
    setPrivacy(1)
    setOpen(false);
    setImageUpload(' ');
    setImage(false);
  }

  return (
    //Box serve as the parent component just to hold a main component and the dialog
    <Box sx={{width: {xs:350, sm:800, md:1000}, minHeight: 253,  height: {xs:'100%', sm:400, md:550}, paddingLeft:1}}>
      
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
          </Grid> {/** End of container Row for search bar and button */}
        </Grid>{/** End  of first grid item */}

        <div style={{height:10}} />
        <Divider light variant='middle' />
        <div style={{height:10}} />

        {/** Second Grid item: List of Forums */}
        <Grid item sx={{overflowY: {xs: 'hidden', sm: 'scroll', md: 'scroll'}, backgroundColor: '#f6f7f6', width:{xs: '100%'}, height: {xs:'100%', sm:350, md:500}}}>
          <Masonry sx={{display:{xs:'none',sm:'flex', md:'flex'}}} columns={3} spacing={2}>
            {renderForum}
          </Masonry>
          
          {/** One column for the list of forum that shows in mobile view */}
          <Grid container direction='column' sx={{display:{xs:'flex',sm:'none', md:'none'}}}>
            {renderForum}
          </Grid> 
        </Grid>
      </Grid> {/**End of List of Forums */}
      
      {/* A dialog that opens by pressing 'create a forum' button*/}
      <Dialog open={open} onClose={handleClose}>
        
        <Stack direction='column' alignItems='center' sx={{ width: '100%' }}>
          <Grid item>
            <DialogTitle>Create a forum</DialogTitle>
          </Grid>

          <Grid item sx={{ width: '100%' }}>
            <Divider light />
          </Grid>
        </Stack>

        <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction='column' alignItems='center' sx={{width: {xs:330, sm: 360, md:360}, padding:2}}>

          {/* Forumn Form*/}
          <Grid item sx={{ width:'100%' }}>
            <Typography
              variant={'subtitle1'}
              style={{fontFamily:'apple-system', color:'#2b332e',}}
              gutterBottom
              >
                Cover Photo:  
            </Typography> 
          </Grid>

          {/** Image Preview */}
          <Grid item display={images ? 'flex': 'none'} sx={{ width:'100%' }}>
            <Grid container> 
              <Grid item className={classes.imageHolder} sx={{ display:{xs:'none', sm:'flex', md:'flex'} }}>
                  <img src={imageUpload} alt='uploaded_image'  className={classes.image} />
              </Grid>
              <Grid item className={classes.imageHolder} sx={{ display:{xs:'flex', sm:'none', md:'none'} }}>
                  <img src={imageUpload} alt='uploaded_image'  className={classes.image_mobile} />
              </Grid>
            </Grid>  
          </Grid>

          <Grid style={images?{height:15}:{height:5}} /> 
          
          {/** Image Upload */}
          <Grid item  className={classes.uploadButton}>
            <Stack direction='column' alignItems="center" spacing={2} sx={{ width:'100%' }}>
                <input  {...register('picture')} accept="image/*" multiple  id="contained-button-file" type="file" onChange={handleImageChange} />
            </Stack>
          </Grid>

          <div style={{height:15}} />
          
          <Grid item style={{ width:'100%'}}>
            <TextField 
              {...register("title")}
              label={'Title or Question'} 
              value={title}
              onChange={handleTitleChange}
              style={{ width: '100%' }}
              size='small'
            />
          </Grid>

          <div style={{height:15}} />

          <Grid item style={{ width:'100%'}}>
            <TextField
              {...register("description")}
              label="Any further details?"
              value={description}
              onChange={handleDescriptionChange}
              multiline
              minRows={3}
              maxRows={10}
              size='small'
              style={{ width: '100%', fontSize:10, fontFamily:'apple-system' }}
            />
          </Grid>

          <div style={{height:15}} />

          <Grid item  sx={{ width:'100%' }}>
            <FormControl variant="outlined" sx={{ width:'100%' }}>
              <InputLabel id="demo-simple-select-helper-label">Visibility</InputLabel>
              <Select
                {...register("visibility")}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label='Visibility'
                size='small'
                value={privacy}
                onChange={handleChange}
              >
                <MenuItem value={'1'}>Public</MenuItem>
                <MenuItem value={'2'}>Follower</MenuItem>
                <MenuItem value={'3'}>Followers and Following</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <div style={{height:15}} />
        </Grid>
        
        <DialogActions sx={{ paddingRight:2 }}>
            <Btn  type={'button'} textColor='#58a776' text={'Discard'} clickHandler={()=>handleClose()} color='transparent'/>
            <Btn variant='contained'  color='#58a776' text={"Post"} textColor='white'  btnWidth='140px' type={'submit'}/>
        </DialogActions>
        </form>
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
    <Grid key={sample.forumnID} sx={{mb:{xs:1}}}>
      <ForumnCard id={sample.forumnID} question={sample.question} author={sample.author} interaction={sample.interaction} coverImage={sample.coverImage} />
    </Grid>
  );
});
export default Forum