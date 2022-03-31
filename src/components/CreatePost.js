import  React, {useState} from 'react';

//MUI Components
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from './Button';
import IconButton from '@mui/material/IconButton';
import TextareaAutosize from '@mui/base/TextareaAutosize';

//For Styling
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import YardIcon from '@mui/icons-material/Yard';


const Input = styled('input')({
  display: 'none',
});


//Internal Styling
const useStyles = makeStyles((theme) => 
({
    postCaption:{
        fontSize:'15px',
        border: 'none',
        outline: 'none',
        height: '200px',
        resize: 'none'
    },
    uploadHolder:{
        width: '600px',
        height: '200px',
    },
    uploadButton:{
        border: "1px solid #58a776",
        width:'500px',
        height: '85px',
    },
    image: {
        width:'500px',
        height: '200px',
        border: "1px solid #58a776",
    },
}));

//The actual component
const CreatePost = () => {
    const classes = useStyles();

    //Initialization for image
    const [imageUpload, setImageUpload] = useState('');
    //State for opening the dialog and image (after clicking upload button)
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState(false);

    //function for opening and closing the dialog
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    function handleImageChange(e) {
        if(e.target.files && e.target.files[0]){
            let reader = new FileReader()
            reader.onload = function(e){
                setImageUpload(e.target.result)
                setImage(true)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <React.Fragment>
            {/* For displaying an card with a button for creating a post*/}
            <Card sx={{ maxWidth: '600px'}}>
                <CardContent>
                    <Grid container direction='row' alignItems='center' justify='center'>
                        {/* Account Avatar or user Icon*/}
                        <Grid item>
                            <IconButton sx={{ p: 0, border: "1px solid #58a776", }} size='small'>
                                <Avatar size='small' alt='Tanjiro' src='https://ih1.redbubble.net/image.2144952579.0944/st,small,507x507-pad,600x600,f8f8f8.jpg'/>
                            </IconButton>
                        </Grid>
                        <div style={{width:10}} />

                        {/* Button that vary in sizse that appeard depending on screen size*/}
                        <Grid item sx={{display: {xs:'none', sm:'none', md:'flex'}}}>
                            <Button variant='contained' color='#efeff4' text={"What's your plantly story?"} textColor='#58a776'  btnWidth='512px' btnSize='large' startingIcon={<YardIcon size='large'/>} clickHandler={() => handleClickOpen()}/>
                        </Grid>
                        <Grid item sx={{display: {xs:'none', sm:'flex', md:'none'}}}>
                            <Button variant='contained' color='#efeff4' text={"What's your plantly story?"} textColor='#58a776'  btnWidth='452px' btnSize='large' startingIcon={<YardIcon size='large'/>} clickHandler={() => handleClickOpen()}/>
                        </Grid>
                        <Grid item sx={{display: {xs:'flex', sm:'none', md:'none'}}}>
                            <Button variant='contained' color='#efeff4' text={"What's your plantly story?"} textColor='#58a776'  btnWidth='285px' btnSize='large' startingIcon={<YardIcon size='large'/>} clickHandler={() => handleClickOpen()}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* A dialog that opens for creating a post*/}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create a post</DialogTitle>

                <Grid container direction='column' alignItems='center' justify='center' style={{padding:20}}>
                    {/* Text Area for writing a caption*/}
                    <Grid item >
                        <TextareaAutosize
                            style={{ width: 500 }}
                            maxRows={10}
                            aria-label="maximum height"
                            placeholder="What's your plantly story?"
                            className={classes.postCaption}
                            
                        />
                    </Grid>
                    <div style={{height:10}} />

                    {/* For Image preview*/}
                    <Grid item display={image ? 'flex': 'none'}>
                        <DialogContent>
                            <Grid container className={classes.uploadHolder}> 
                                <Grid item className={classes.imageHolder}>
                                    <img src={imageUpload} alt='uploaded_image'  className={classes.image} />
                                </Grid>
                            </Grid>  
                        </DialogContent>
                    </Grid>

                    {/* For Uploading Image*/}
                    <Grid item display={image ? 'flex': 'flex'} className={classes.uploadButton}>
                        <DialogContent>
                            <Stack alignItems="center" spacing={2}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" type="file" onChange={handleImageChange} />
                                    
                                    <Button variant='contained' onChangeHandler={() => handleImageChange()} color='#efeff4' text={"Choose an image to upload"} textColor='#58a776'  btnWidth='300px' btnSize='large' btnComponent='span' startingIcon={<AddAPhotoIcon size='large'/>} />
                                </label>
                            </Stack>
                        </DialogContent>
                    </Grid>
                </Grid>
                
                
                <DialogActions>
                    <Button  text={'Discard'} clickHandler={()=>handleClose()} color='transparent'/>
                    <Button  text={'Post'} clickHandler={()=>handleClose()} color='transparent'/>
                </DialogActions>
        </Dialog>
        </React.Fragment>
    );
};

export default CreatePost;
