import { Box, Button, DialogContent, Grid, IconButton, Divider, Stack, Tooltip, Typography, TextField } from '@mui/material'
import React, {useState} from 'react'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useCreateShopMutation } from '../../../app/services/shopApi';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {FaStore} from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const MAX_COUNT=10;
//Schema: Rules for inputs
const schema1 = yup.object({
    shop_name: yup.string(),
    telephone: yup.string(),
    mobile: yup.string(),
    email: yup.string().email(),
    address: yup.string(),
    bio_note: yup.string(),
    time_open: yup.string(),
    time_close: yup.string(),
  });

const CreateShopForm = ({ handleClose, toast}) => {

    const ID = useSelector((state) => state.user.id);

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    const [imageUpload, setImageUpload] = useState('');
    const [upload, setUpload] = useState(false);
    const [shop_name, setShopName] = useState('');
    const [shop_telephone, setTelephone] = useState('');
    const [shop_email, setEmail] = useState('');
    const [shop_address, setAddress] = useState('');
    const [shop_contact, setContact] = useState('');
    const [shop_bio, setBio] = useState('');
    const [tag, setTag] = useState('');
    const [shop_tags, setTags] = useState([]);

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

    const handleAddService = (tag) => {
        const tags = [...shop_tags];
        console.log(tags)
        let counter = 0;
        let limitExceeded = false;
        shop_tags.map((specialty) => {
            if (tag === specialty) {
                counter += 1;
            }
        });
        if ( counter === 0) {
            tags.push(tag);
            if (tags.length === MAX_COUNT) {
            console.log(`You can only add a maximum of ${MAX_COUNT} tags`);
                limitExceeded = true;
                return true;
            }
        }else {
            console.log('Tag is already declared.')
        }
        if (!limitExceeded) {
            setTags(tags)
            setTag('')
        };
    }

    //Function in removing specific element by its file name
    const handleRemoveService = (tag) => {
        const tags = [...shop_tags];
        for (var i = 0; i < tags.length; i++) {
            if (tags[i] === tag) {
                tags.splice(i, 1);
            }
        }
        setTags(tags);
    };


    //For react hook form
    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema1),
    });

    const [createShop] = useCreateShopMutation()

    const onSubmit = (data) => {

        const input = {
                shop_name: data.shop_name,
                shop_logo: imageUpload,
                tags: shop_tags.toString(),
                bio_note:data.bio_note,
                time_open: data.time_open,
                time_close: data.time_close,
                email:data.email,
                address:data.address,
                telephone:data.telephone,
                mobile:data.mobile
        }

        // console.log(input)
        createShop(input).then(
            (payload) => 
                {
                    //toast("Account detail was successfully updated.")
                    console.log('fulfilled',payload)
                    handleClose();
    
                }
            ).catch(
                (error) => 
                {
                    console.error('rejected', error)
                   // toast("Error has occured, try again later.")
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
            Create My Shop
        </Typography>

        <Box sx={{ width: "100%" }}>
            <Divider />
        </Box>

        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" sx={{ width: "100%", pl: 5, pr: 5, mt: 3 }}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ mb: 2, width: "100%" }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Arvo",
                fontWeight: "bold",
                color: "#757575",
                mr: 1,
              }}
            >
              Shop profile
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Divider />
            </Box>
        </Stack>


        <Grid container direction='column' alignItems={'center'} sx={{width: '100%', height:'100%', p:4, pt:2, pb:0}}>

            {/* For Image preview*/}
            <Grid item 
                 sx={{
                    width:200,
                    height:200, borderRadius:'50%', overflow:'hidden',
                    border:'4px solid #5C6D63',
                    display: upload ? 'display' :'none'
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
                        <FaStore style={{ fontSize:100, color:'#5C6D63'}} />
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
            {...register("shop_name")}
            required
            value={shop_name}
            label="Shop Name"
            variant="outlined"
            sx={compStyle["input-field"]}
            onChange={(event) => {
            setShopName(event.target.value);
            }}
        />

        <Stack direction='row' alignItems={'center'} sx={{ width:'100%', mt:1 }}  >
            <TextField
                required
                {...register("time_open")}
                type='time'
                defaultValue="07:30"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                label="Time Open"
                variant="outlined"
                sx={compStyle["input-field"]}
            />
            <div style={{ width:10 }}/>
            <TextField
                required
                {...register("time_close")}
                type='time'
                defaultValue="17:30"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                label="Time Close"
                variant="outlined"
                sx={compStyle["input-field"]}
            />
        </Stack>

        <TextField
            sx={{ mt:1 }}
            {...register("bio_note")}
            value={shop_bio}
            label="Bio"
            multiline
            minRows={4}
            maxRows={6}
            onChange={(event) => {
              setBio(event.target.value);
            }}
        /> 


        <Stack direction='row' alignItems='center' sx={{mt:3, mb:1, width:'100%'}}>
            <Typography variant='body1' sx={{fontFamily:'Arvo', fontWeight:'bold', color:'#757575', mr:1}}>
                Shop Tags
            </Typography>
            <Box sx={{flexGrow:1}}>
                <Divider />
            </Box>
        </Stack>

        <Typography variant='body2' sx={{fontFamily:'Raleway', color:'#757575', mb:2}}>
            Tags are keywords that describes your shop or products that would help your customers find you faster.
        </Typography>

        <Stack direction='row'>
            <TextField
                value={tag}
                label="Add Tag" 
                variant="outlined"
                sx={compStyle['input-field']}
                onChange={(event)=>{
                        setTag(event.target.value)
                    }
                }
            />
            <Button variant='contained' onClick={()=>handleAddService(tag)} sx={compStyle['service-button']}>
                Add
            </Button>
        </Stack>

        <Grid container direction='row' sx={{mb:2}}>
            {shop_tags.map((specialty)=>{
                return(
                    <Grid item sx={{mt:1, mr: 1, p:1, border:'1px solid black', borderRadius:3}}>
                        <Stack direction='row' alignItems='center'>
                            <Typography variant='body2' sx={{fontFamily:'arvo', mr: 1}}>
                                {specialty}
                            </Typography>
                            <IconButton onClick={()=> handleRemoveService(specialty)} sx={{p:0}}>
                                <MdCancel style={{fontSize:20}}/>
                            </IconButton>
                        </Stack>
                    </Grid>
                )
                })
            }
        </Grid>
     

          

        <Stack
            direction="row"
            alignItems="center"
            sx={{ mt:3, mb: 2, width: "100%" }}
            >
            <Typography
                variant="body1"
                sx={{
                fontFamily: "Arvo",
                fontWeight: "bold",
                color: "#757575",
                mr: 1,
                }}
            >
                Shop contact
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Divider />
            </Box>
        </Stack>
          

        <TextField
            {...register("email")}
            required
            type={'email'}
            value={shop_email}
            label="Email"
            variant="outlined"
            sx={compStyle["input-field"]}
            onChange={(event) => {
            setEmail(event.target.value);
            }}
        />

        <TextField
            {...register("mobile")}
            value={shop_contact}
            label="Mobile"
            variant="outlined"
            sx={compStyle["input-field"]}
            onChange={(event) => {
            setContact(event.target.value);
            }}
        />

        <TextField
            {...register("telephone")}
            value={shop_telephone}
            label="Telephone"
            variant="outlined"
            sx={compStyle["input-field"]}
            onChange={(event) => {
            setTelephone(event.target.value);
            }}
        />

        <TextField
            required
            {...register("address")}
            value={shop_address}
            label="Address"
            variant="outlined"
            sx={compStyle["input-field"]}
            onChange={(event) => {
                setAddress(event.target.value);
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

export default CreateShopForm

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
