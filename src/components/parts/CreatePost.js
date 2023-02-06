import  React, {useState} from 'react';

//MUI Components
import {Avatar, TextField} from '@mui/material';
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
import { TextArea } from '../basic/StyledComponents';
import TextareaAutosize from '@mui/base/TextareaAutosize';

//For Styling
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import YardIcon from '@mui/icons-material/Yard';
import {RiImageEditFill, RiImageAddFill} from 'react-icons/ri';
import DefaultImage from '../../images/default_image.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

//For Form
import { useForm } from 'react-hook-form';
import { useAddPostMutation } from '../../app/services/postApi';



const Input = styled('input')({
    visibility: 'hidden'
});


//Internal Styling
const useStyles = makeStyles((theme) => 
({
    uploadHolder:{
        width: '100%',
        height: 300,
        marginBottom:15,
        backgroundColor:'black',
        borderRadius:10,
    },
    uploadButton:{
        border: "1px solid #58a776",
        borderRadius:10,
        width:'100%',
        height: '85px',
        overflow: 'hidden'
    },
    image: {
        width:'100%',
        height: 300,
        objectFit:'cover',
        border: "1px solid #58a776",
        borderRadius:10,
    },
}));

//The actual component
const CreatePost = ({profile}) => {
    const classes = useStyles();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    const {
        register, 
        handleSubmit,  
        //formState: { errors }
    } = useForm({criteriaMode: "all"});

    const [addPost] = useAddPostMutation();

    const onSubmit = (data) => {
        const postInstance = {
            'caption': data.caption,
            'post_image': imageUpload
        };
       
        addPost(postInstance)
        .then((payload) =>{
            console.log(payload.message)
            handleClose()
            setImageUpload(DefaultImage)
            setCaption('')
            setImage(false)
        })
        .catch((err) => {
            console.log(err)
        })
        
    } 

    //Initialization for image
    const [imageUpload, setImageUpload] = useState(DefaultImage);
    const [caption, setCaption] = useState('');
    //State for opening the dialog and image (after clicking upload button)
    const [open, setOpen] = React.useState(false);
    const [images, setImage] = React.useState(false);

    //function for opening and closing the dialog
    const handleClickOpen = () => {
      setOpen(true);
      console.log(imageUpload)
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    function handleImageChange(e) {
        if(e.target.files && e.target.files[0]){

            let reader = new FileReader()
            reader.onload = function(e){
                //console.log(e.target.result)
                let canvas = document.createElement('canvas')
                let ctx = canvas.getContext("2d");
                let toBeUploaded = new Image();
                toBeUploaded.src = (e.target.result);
    
                toBeUploaded.onload = function(){
                    canvas.width = toBeUploaded.width;
                    canvas.height = toBeUploaded.height;
                    ctx.drawImage(toBeUploaded, 0, 0);
    
                    const convertedImage = canvas.toDataURL(`image/webp`, .70);
                    setImageUpload(convertedImage)
                    setImage(true)
                    console.log(convertedImage)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <React.Fragment>
            {/* For displaying an card with a button for creating a post*/}
            <Card sx={{ width: { xs:350, sm:500, md:600}}}>
                <CardContent sx={{width:'100%'}}>
                    <Grid container direction='row' alignItems='center' justify='center' sx={{width:'100%'}}>
                        {/* Account Avatar or user Icon*/}
                        <Grid item sx={{width:{xs:'16%', sm:'11%', md:'11%'}}}>
                            <IconButton sx={{ p: 0, border: "1px solid #58a776", }} size='small'>
                                <Avatar size='small' alt='Tanjiro' src={profile}/>
                            </IconButton>
                        </Grid>

                        {/* Button that vary in sizse that appeard depending on screen size*/}
                        <Grid item sx={{width:{xs:'84%', sm:'89%', md:'89%'}}}>
                            <Button variant='contained' color='#efeff4' text={"What's your plantly story?"} textColor='#58a776'  btnWidth='100%' btnSize='large' startingIcon={<YardIcon size='large'/>} clickHandler={() => handleClickOpen()}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* A dialog that opens for creating a post*/}
            <Dialog open={open} onClose={handleClose} maxWidth={false} fullScreen={mobile ? true:false} >
                <DialogTitle sx={{ fontFamily:'Arvo', bgcolor:'#5C6D63', color:'white' }}>Create a Post</DialogTitle>

                <form style={{width:'100%'}} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container direction='column' alignItems='center' justify='center' sx={{display:'flex', padding:3, width:{xs:'100%', sm:450, md:550}}}>
                        {/* Text Area for writing a caption*/}
                        <Grid item sx={{ padding:1, backgroundColor:'#f6f7f6', borderRadius:2, width:'100%' }}>
                        <TextArea
                            {...register("caption")}
                            required
                            value={caption}
                            multiline
                            placeholder="What's your plantly story?"
                            minRows={1}
                            maxRows={6}
                            onChange={(event) => {
                            setCaption(event.target.value);
                            }}
                        />
                        </Grid>
                        <div style={{height:10}} />

                        {/* For Image preview*/}
                        <Grid item sx={{ display: {xs:'flex', sm: images ? 'flex': 'none', md: images ? 'flex': 'none'}, width:'100%' }}>
                            
                                <Grid container className={classes.uploadHolder}> 
                                    <Grid item sx={{ width:'100%' }}>
                                        <img src={imageUpload} alt='uploaded_image'  className={classes.image} />
                                    </Grid>
                                </Grid>  
                           
                        </Grid>

                        {/* For Uploading Image*/}
                        <Grid item display={images ? 'flex': 'flex'} className={classes.uploadButton}>
                            <DialogContent sx={{ overflow: 'hidden' }}>
                                <Stack alignItems="center" sx={{ display:images ? 'none': 'flex' }}>
                                    <label htmlFor="contained-button-file">
                                        <Button variant='contained' onChangeHandler={() => handleImageChange()} color='#efeff4' text={"Choose an image to upload"} textColor='#58a776'  btnWidth='300px' btnSize='large' btnComponent='span' startingIcon={<RiImageAddFill/>} autofocus />
                                    </label>
                                    <Input accept="image/*" multiple  id="contained-button-file" type="file" onChange={handleImageChange} />
                                </Stack>
                                <Stack alignItems="center" sx={{ display:images ? 'flex': 'none' }} >
                                    <label htmlFor="contained-button-file">
                                        <Button variant='contained' onChangeHandler={() => handleImageChange()} color='#efeff4' text={"Change current image"} textColor='#58a776'  btnWidth='300px' btnSize='large' btnComponent='span' startingIcon={<RiImageEditFill/>} autofocus />
                                    </label>
                                    <Input  accept="image/*" multiple  id="contained-button-file" type="file" onChange={handleImageChange} />
                                </Stack>
                               
                            </DialogContent>
                        </Grid>
                    </Grid>

                    <DialogActions sx={{ justifyContent: 'flex-end' }}>
                        <Button  
                            type='button' 
                            textColor='#58a776' 
                            text={'Discard'} 
                            clickHandler={()=>{
                                handleClose()
                                setImageUpload(DefaultImage)
                                setCaption('')
                                setImage(false)
                            }} 
                            color='transparent'/>
                        <Button variant='contained'  color='#58a776' text={"Post"} textColor='white'  btnWidth='140px' type='submit'/>
                    </DialogActions>
                </form>  
            </Dialog>
        </React.Fragment>
    );
};

export default CreatePost;
