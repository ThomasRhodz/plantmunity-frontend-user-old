import { Box, Button, Divider, Stack, Typography, TextField, Select, FormControl, InputLabel, MenuItem, } from '@mui/material'
import React from 'react'

import { useDeletePostMutation } from '../../../app/services/postApi';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DeletePostForm = ({postID, handleClose, toast}) => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const [deletePost] = useDeletePostMutation()


    const deleteMyPost = () => {

        deletePost(postID).then(
            (payload) => 
                {
                    //toast("Variant was successfully updated")
                    console.log(payload)
                    handleClose();
    
                }
            ).catch(
                (error) => 
                {
                    console.log(error)
                   //toast("Error has occured, try again later.")
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
            Delete Post
        </Typography>

        <Box sx={{ width: "100%" }}>
            <Divider />
        </Box>

        <Typography variant='h6' align='center' sx={{ fontFamily:'Arvo', width:'100%', mt:3 }}>
            Are you sure you want to delete your post?
        </Typography>

        
        <Stack direction="row" sx={{ p: 3 }}>
          <Button
            onClick={()=>handleClose()}
            type="button"
            variant="contained"
            sx={compStyle["secondary-button"]}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={()=>deleteMyPost()}
            variant="contained"
            sx={compStyle["primary-button"]}
          >
            Yes
          </Button>
        </Stack>
    </Stack>
  );
}

export default DeletePostForm

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
