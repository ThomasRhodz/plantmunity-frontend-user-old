import { Grid, TextField, Stack, Button, Box, Avatar, Typography, IconButton } from '@mui/material'
import { SearchField } from '../basic/StyledComponents';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React, { useState } from 'react'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {AiOutlineSend} from 'react-icons/ai'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm } from 'react-hook-form';

const schema = yup.object({
    content: yup.string(),
});

const Message = () => {

    //For react hook form
    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const [isEnabled, setIsEnabled] = useState(true)
    const [content, setContent] = useState('')

    const onSubmit = (data) => {

        const input = {
            data: data
        }

        console.log(input)

        // addComment(input).then(
        //     (payload) => 
        //         {
        //             //toast("Account detail was successfully updated.")
        //             console.log('fulfilled',payload)
        //             setContent('')
        //         }
        //     ).catch(
        //         (error) => 
        //         {
        //             console.error('rejected', error)
        //            // toast("Error has occured, try again later.")
        //         }
        //     )
    }

  return (
    <Grid
        container
        direction='row'
        sx={{ 
            bgcolor:'red',
            width:'100%',
            height:{xs: '80vh',sm: '75vh', md:'85vh'},
            mt:2,
            bgcolor: "white",
            border:'1px solid #BFCBA5',
            borderRadius:5,
            overflow: 'hidden',
            boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)',
         }}
    >
        <Grid
            sx={{ 
                width:'35%',
                height:'100%',
             }} 
            item
        >
            <Stack
                direction='column'
                sx={{ 
                    width:'100%',
                    height:'100%',
                    flexDirection:'column'
                 }}
            >
                <Stack direction={'row'} alignItems='center' sx={{ width:'100%', bgcolor:'white', minHeight:70 , borderBottom:'1px solid #BFCBA5', pl:2, pr:2 }}>
                    <Stack 
                        direction='row' 
                        alignItems={'center'}
                        sx={{
                            backgroundColor:'white', 
                            width:'100%', 
                            borderRadius:10,  
                            border:'1px solid #E7E9EB',
                        }} 
                    >
                        <IconButton>
                            <SearchRoundedIcon sx={{ color:'#5C6D63' }} />
                        </IconButton>

                        <SearchField
                            variant='outlined'
                            inputProps={{ style: { fontFamily: 'Arvo',}}}
                            placeholder={"Search"}
                            // value={ search } 
                            // onChange={handleSearchChange}
                            size='small'
                        />
                        
                    </Stack>
                    <IconButton sx={{ p:0, ml:1 }}>
                        <HiOutlinePencilAlt style={{fontSize:30}}/>
                    </IconButton>
                </Stack>

                <Box direction='column' sx={{ width:'100%', flexGrow:1, overflowY:'auto' }}>
            
                </Box>
            </Stack>

        </Grid>

        <Grid
            item
            sx={{ 
                width:'65%',
                height:'100%',
                borderLeft:'1px solid #BFCBA5',
                overflow:'hidden'
             }} 
        >
            <Stack
                direction='column'
                sx={{ 
                    width:'100%',
                    height:'100%'
                 }}
            >
                <Stack direction='row' alignItems='center' sx={{ width:'100%', bgcolor:'white', minHeight:70, borderBottom:'1px solid #BFCBA5', pl:2, pr:2 }}>
                    <Avatar />
                    <Stack diretion='column' sx={{ ml:2 }}>
                        <Typography variant="body1" sx={{ fontFamily:'Arvo' }}>
                            John Eliezar Rodis
                        </Typography>
                        <Typography variant="caption" sx={{ fontFamily:'Raleway' }}>
                            @ThomasRhodz
                        </Typography>
                    </Stack>
                </Stack>

                <Box direction='column' sx={{ width:'100%', flexGrow:1, overflowY:'auto' }}>
                    
                </Box>

                <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction='row' sx={{ width:"100%", bgcolor:'white',p:2, pl:1, minHeight:70,borderTop:'1px solid #BFCBA5',  }}>
        
                        <Box sx={{ml:2, flexGrow:1}}>
                            <TextField 
                                {...register("content")} 
                                value={content} 
                                onChange={(event)=>{
                                    setContent(event.target.value)
                                    setIsEnabled(false)
                                }} 
                                multiline minRow={1} 
                                maxRow={10} 
                                id="filled-basic" 
                                label="Write a message" 
                                variant="filled" 
                                size='small'  
                                InputProps={{disableUnderline: true }} 
                                sx={{width: '100%'}}/>
                        </Box>
                        <IconButton disabled={isEnabled} type="submit" sx={{ p:0, ml:2 }}>
                            <AiOutlineSend style={{fontSize:30}}/>
                        </IconButton>
                    </Stack>
                    </form>

            </Stack>

        </Grid>

    </Grid>
  )
}

export default Message