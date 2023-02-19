import { Box, Button, DialogContent, Grid, IconButton, Divider, Stack, Tooltip, Typography, TextField } from '@mui/material'
import React, {useState} from 'react'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm } from 'react-hook-form';
import { useUpdateProductMutation } from '../../../app/services/shopApi';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {RiPlantFill} from 'react-icons/ri';

//Schema: Rules for inputs
const schema1 = yup.object({
    product_name: yup.string(),
    product_description: yup.string(),
  });

const EditProductForm = ({productID, productName, productImage, productDescription, handleClose, toast}) => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    const [imageUpload, setImageUpload] = useState(productImage);
    const [upload, setUpload] = useState(true);
    const [name, setName] = useState(productName);
    const [description, setDescription] = useState(productDescription);

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
                    setUpload(true)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    //For react hook form
    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema1),
    });

    const [updateProduct] = useUpdateProductMutation()

    const onSubmit = (data) => {

        const input = {
            id: productID,
            data: {
                product_name: data.product_name,
                product_description: data.product_description,
                product_image: imageUpload,
            }
        }

        console.log(input)
        updateProduct(input).then(
            (payload) => 
                {
                    toast("Product was successfully updated.")
                    //console.log('fulfilled',payload)
                    handleClose();
    
                }
            ).catch(
                (error) => 
                {
                    console.error('rejected', error)
                    toast("Error has occured, try again later.")
                }
            )
        
    };

  return (
    <Stack
      direction="column"
      alignItems={"center"}
      sx={{ width: mobile ? '100%' : 550 }}
    >
        <Typography variant="h6" align='center' sx={compStyle["dialog-title"]}>
            Edit Product
        </Typography>

        <Box sx={{ width: "100%" }}>
            <Divider />
        </Box>

        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" sx={{ width: "100%", pl: 5, pr: 5, mt: 3 }}>

            <Grid container direction='column' alignItems={'center'} sx={{width: '100%', height:'100%'}}>

                {/* For Image preview*/}
                <Grid item 
                    sx={{
                        width:'100%',
                        height:250, overflow:'hidden',
                        borderRadius:3,
                        border:'2px solid #5C6D63',
                        display: upload ? 'flex' :'none'
                    }}
                >
                    <img src={imageUpload} alt='uploaded_image' style={{width: '100%', height:'100%', objectFit:'cover',}}/>
                </Grid>

                <Grid item 
                    sx={{
                        width:200,
                        height:200, borderRadius:'50%', overflow:'hidden',
                        border:'4px solid #5C6D63',
                        display: upload ? 'none' :'display'
                    }}
                >
                    <Stack direction='row' alignItems={'center'} sx={{ height:'100%' }}>
                        <Stack direction='column' alignItems={'center'} sx={{ width:'100%' }}>
                            <RiPlantFill style={{ fontSize:100, color:'#5C6D63'}} />
                        </Stack>
                    </Stack>
                    
                </Grid>

                {/* For Uploading Image*/}
                <Grid 
                    item 
                    sx={{
                    marginTop:'-40px'
                        
                    }}
                >
                    <DialogContent  sx={{ overflow: 'hidden' }}>
                        <Tooltip title='Upload Logo'>
                            <IconButton  aria-label="upload picture" component="label" sx={{backgroundColor:'#5C6D63'}} >
                                <input hidden accept="image/*" type="file" onChange={handleImageChange} />
                                <PhotoCamera sx={{color:'white', fontSize:23}}/>
                            </IconButton>
                        </Tooltip>
                    </DialogContent>
                </Grid>
            </Grid>

            <TextField
                {...register("product_name")}
                required
                value={name}
                label="Product Name"
                variant="outlined"
                sx={compStyle["input-field"]}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />

            <TextField
                sx={{ mt:1 }}
                {...register("product_description")}
                value={description}
                label="Description"
                multiline
                minRows={4}
                maxRows={6}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
            /> 

        </Stack>

        <Stack direction="row" sx={{ p: 3, width: "100%" }}>
          <div style={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            onClick={() => handleClose()}
            sx={compStyle["secondary-button"]}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={compStyle["primary-button"]}
          >
            Save
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default EditProductForm

const compStyle = {
    'dialog-title':{
        fontFamily:'Arvo',
        p:2,
        bgcolor:'#5C6D63', 
        color:'white',
        width:'100%'
    },
    'dialog-text':{
        fontFamily:'Raleway',
        p:4,
        pt:0,
    },
    'primary-button':{
        textTransform:'none',
        color:'white',
        fontFamily:'Arvo'
    },
   'secondary-button':{
        mr:2,
        textTransform:'none',
        color:'#7CB2B0',
        border:'1px solid #7CB2B0',
        backgroundColor:'white',
        fontFamily:'Arvo'
   },
   'input-field':{
        mb:2,
        width:'100%'
   },
   'service-button':{
        textTransform:'none',
        color:'#7CB2B0',
        border:'1px solid #7CB2B0',
        backgroundColor:'white',
        fontFamily:'Arvo',
        height:50,
        ml:1,
    },

}
