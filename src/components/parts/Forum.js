//Components
import React, {useState} from 'react';
import Masonry from '@mui/lab/Masonry';
import {Box, Grid, Divider} from '@mui/material/';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

//Reusable Components
import ForumnCard from '../card/discoverPageCards/ForumCard';
import Btn from '../basic/Button';

//Data Fetching
import { useGetPublicForumsQuery, useGetMyForumsQuery } from '../../app/services/forumApi';

//Dialog
import Dialog from '@mui/material/Dialog';
import CreateForumForm from '../forms/CreateForms/CreateForumForm';

//Styling and Icons
import { makeStyles } from '@mui/styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import {BsChatLeftQuoteFill} from 'react-icons/bs'

const Forum = () => {

  const [selectedList, setSelectedList] = useState(1);

  const handleClickList = () => {
    if (selectedList ===1){
      setSelectedList(2)
    }else{
      setSelectedList(1)
    }
  }

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  const {data} = useGetPublicForumsQuery(undefined,  {refetchOnMountOrArgChange: true})
  const {data: myForum} = useGetMyForumsQuery(undefined,  {refetchOnMountOrArgChange: true})
  const publicForums = data ? data[0] : [];
  const myForums = myForum ? myForum[0] : [];

  const renderForum = publicForums.map(forum => {
    return (
      <Grid key={forum.id} sx={{mb:{xs:1}}}>
        <ForumnCard uid={forum.user_id} id={forum.id} visibility={forum.visibility} description={forum.description} question={forum.title} author={forum.user?.first_name + ' ' + forum.user?.last_name } interaction={forum.activity_count} coverImage={forum.cover_photo} />
      </Grid>
    );
  });

  const renderMyForum = myForums.map(forum => {
    return (
      <Grid key={forum.id} sx={{mb:{xs:1}}}>
        <ForumnCard uid={forum.user_id} id={forum.id} visibility={forum.visibility} description={forum.description} question={forum.title} author={forum.user?.first_name + ' ' + forum.user?.last_name } interaction={forum.activity_count} coverImage={forum.cover_photo} />
      </Grid>
    );
  });

  //States
  const [open, setOpen] = React.useState(false); //-> for open and close of dialog

  //function for opening and closing the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  //Function for closing the create forumn dialog
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    //Box serve as the parent component just to hold a main component and the dialog
    <Box sx={{width: {xs:350, sm:800, md:1000}, minHeight: 253,  height: {xs:'100%', sm:400, md:550}, paddingLeft:1}}>
      
      {/**Grid container: serve as the parent grid with vertical direction */}
      <Grid container direction='column'>

        <Grid item className={classes.searchBar}>
          <Grid container direction='row' style={{paddingRight:15}}> 
            <Grid item>
              <Btn variant='contained' borderRad={25} clickHandler={()=>handleClickList()} color={selectedList === 1 ? '#BFCBA5' :'white'} text={"Public forums"} textColor={selectedList === 1 ? 'white' :'#BFCBA5'}  btnWidth='160px' btnSize='large' btnComponent='span' startingIcon={<ForumOutlinedIcon size='large'/>} />
            </Grid>

            <div style={{width:10}} />

            <Grid item>
              <Btn variant='contained' borderRad={25} clickHandler={()=>handleClickList()} color={selectedList === 2 ? '#BFCBA5' :'white'} text={"My forums"} textColor={selectedList === 2 ? 'white' :'#BFCBA5'}  btnWidth='150px' btnSize='large' btnComponent='span' startingIcon={<BsChatLeftQuoteFill />} />
            </Grid>
            <Box sx={{ flexGrow: 1, display:{xs:'none', sm:'flex', md:'flex'}}} />
            <Grid item sx={{ display: mobile ? 'none' : 'flex' }}>
              <Btn variant='contained' borderStyle={'1px solid #BFCBA5'} color='white' text={"Create a forum"} textColor='#BFCBA5'  btnWidth='175px' btnSize='large' btnComponent='span' startingIcon={<AddOutlinedIcon size='large'/>} clickHandler={() => handleClickOpen()}/>
            </Grid>
          </Grid> {/** End of container Row for search bar and button */}
        </Grid>{/** End  of first grid item */}

        <div style={{height:10}} />
        <Divider light variant='middle' />
        <div style={{height:10}} />

        {/** Second Grid item: List of Forums */}
        <Grid item sx={{overflowY: {xs: 'hidden', sm: 'scroll', md: 'scroll'}, backgroundColor: '#f6f7f6', width:{xs: '100%'}, height: {xs:'100%', sm:350, md:500}}}>
          <Masonry sx={{display:{xs:'none',sm:'flex', md:'flex'}}} columns={3} spacing={2}>
            {selectedList === 1 ? renderForum : renderMyForum}
          </Masonry>
          
          {/** One column for the list of forum that shows in mobile view */}
          <Grid container direction='column' sx={{display:{xs:'flex',sm:'none', md:'none'}}}>
            {selectedList === 1 ? renderForum : renderMyForum}
          </Grid> 
        </Grid>
      </Grid> {/**End of List of Forums */}
      
      {/* A dialog that opens by pressing 'create a forum' button*/}
      <Dialog 
        maxWidth={false}
        fullScreen={mobile}
        scroll='body'
        open={open}
        onClose={handleClose}
      >
        <CreateForumForm handleClose={()=> handleClose()}/>
      </Dialog>
    </Box>

  )
};

export default Forum

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
