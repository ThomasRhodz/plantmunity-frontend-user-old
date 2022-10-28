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
import Button from '../basic/Button';
import IconButton from '@mui/material/IconButton';
import TextareaAutosize from '@mui/base/TextareaAutosize';

//For Styling
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import YardIcon from '@mui/icons-material/Yard';

//For Form
import { useForm } from 'react-hook-form';
//import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../../redux/post';
import { useAddPostMutation } from '../../services/postApi'


const Input = styled('input')({
    visibility: 'hidden'
});


//Internal Styling
const useStyles = makeStyles((theme) => 
({
    postCaption:{
        fontSize:'15px',
        border: 'none',
        outline: 'none',
        height: '200px',
        resize: 'none',
        backgroundColor:'#f6f7f6'
    },
    uploadHolder:{
        width:'100%',
        height: '100%',
    },
    uploadButton:{
        border: "1px solid #58a776",
        width:'500px',
        height: '85px',
        overflow: 'hidden'
    },
    image: {
        width:'500px',
        height: '300px',
        objectFit:'cover',
        border: "1px solid #58a776",
    },
}));

//The actual component
const CreatePost = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {post} = useSelector((state) => state.post)

    const [addPost] = useAddPostMutation();

    const {register, handleSubmit,  formState: { errors }} = useForm({criteriaMode: "all"});

    const onSubmit = (data) => {

        const postInstance = {
            'post_caption': data.caption,
            'image': post.post
        };
        addPost(postInstance)
        console.log('success')
        setOpen(false);
    } 

    //Initialization for image
    const [imageUpload, setImageUpload] = useState('');
    //State for opening the dialog and image (after clicking upload button)
    const [open, setOpen] = React.useState(false);
    const [images, setImage] = React.useState(false);

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
                console.log(e.target.result)
                dispatch(setPost({
                    post: e.target.result
                }))
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
                                <Avatar size='small' alt='Tanjiro' src='https://preview.redd.it/k809t2b7zca51.jpg?width=640&crop=smart&auto=webp&s=90c9b0cb15c510b5fb0643954cbb27fd51ff7ecd'/>
                            </IconButton>
                        </Grid>
                        <div style={{width:10}} />

                        {/* Button that vary in sizse that appeard depending on screen size*/}
                        <Grid item sx={{display: {xs:'none', sm:'none', md:'flex'}}}>
                            <Button variant='contained' color='#efeff4' text={"What's your plantly story?"} textColor='#58a776'  btnWidth='512px' btnSize='large' startingIcon={<YardIcon size='large'/>} clickHandler={() => handleClickOpen()}/>
                        </Grid>
                        <Grid item sx={{display: {xs:'none', sm:'flex', md:'none'}}}>
                            <Button variant='contained' color='#efeff4' text={"What's your plantly story?"} textColor='#58a776'  btnWidth='419px' btnSize='large' startingIcon={<YardIcon size='large'/>} clickHandler={() => handleClickOpen()}/>
                        </Grid>
                        <Grid item sx={{display: {xs:'flex', sm:'none', md:'none'}}}>
                            <Button variant='contained' color='#efeff4' text={"What's your plantly story?"} textColor='#58a776'  btnWidth='265px' btnSize='large' startingIcon={<YardIcon size='large'/>} clickHandler={() => handleClickOpen()}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* A dialog that opens for creating a post*/}
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Create a post</DialogTitle>

                <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container direction='column' alignItems='center' justify='center' style={{padding:20, width:'100%'}}>
                        {/* Text Area for writing a caption*/}
                        <Grid item sx={{ padding:1, backgroundColor:'#f6f7f6', borderRadius:2 }}>
                            <TextareaAutosize
                                style={{ width: 485, padding:2 }}
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="What's your plantly story?"
                                className={classes.postCaption}
                                {...register('caption', {required: 'Required'})}
                                
                            />
                        </Grid>
                        <div style={{height:10}} />

                        {/* For Image preview*/}
                        <Grid item display={images ? 'flex': 'none'} sx={{ width:'100%' }}>
                            <DialogContent>
                                <Grid container className={classes.uploadHolder}> 
                                    <Grid item >
                                        <img src={imageUpload} alt='uploaded_image'  className={classes.image} />
                                    </Grid>
                                </Grid>  
                            </DialogContent>
                        </Grid>

                        {/* For Uploading Image*/}
                        <Grid item display={images ? 'flex': 'flex'} className={classes.uploadButton}>
                            <DialogContent sx={{ overflow: 'hidden' }}>
                                <Stack alignItems="center" spacing={2}>
                                    <label htmlFor="contained-button-file">
                                        <Button variant='contained' onChangeHandler={() => handleImageChange()} color='#efeff4' text={"Choose an image to upload"} textColor='#58a776'  btnWidth='300px' btnSize='large' btnComponent='span' startingIcon={<AddAPhotoIcon size='large'/>} autofocus />
                                    </label>
                                    <Input  {...register('picture', {required: 'Required'})} accept="image/*" multiple  id="contained-button-file" type="file" onChange={handleImageChange} />
                                </Stack>
                                {/* <input {...register('picture', {required: 'Required'})} accept="image/*" type="file" onChange={handleImageChange}/> */}
                            </DialogContent>
                        </Grid>
                    </Grid>
                    
                    <DialogActions>
                        <Button  type='button' textColor='#58a776' text={'Discard'} clickHandler={()=>handleClose()} color='transparent'/>
                        <Button variant='contained'  color='#58a776' text={"Post"} textColor='white'  btnWidth='140px' type='submit'/>
                    </DialogActions>
                </form>  
            </Dialog>
        </React.Fragment>
    );
};

export default CreatePost;
