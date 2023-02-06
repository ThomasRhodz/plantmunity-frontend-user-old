import { Avatar, Box, Button, TextField, Divider, Grid, IconButton, Stack, Typography, Tooltip } from '@mui/material'
import React from 'react'
import CommentCard from '../discoverPageCards/CommentCard';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {RiListCheck2} from 'react-icons/ri';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {FaRegComments} from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm } from 'react-hook-form';
import { useAddCommentMutation } from '../../../app/services/postApi';
import { useGetCommentsQuery } from '../../../app/services/postApi';

const schema = yup.object({
    content: yup.string(),
});



const ViewPostCard = ({image, name, caption, username, date, id, profile}) => {
    const userImage = useSelector((state) => state.user.image)
    
    const {data, isFetching} = useGetCommentsQuery(id, {refetchOnMountOrArgChange: true})

    console.log(data)

    const comments = data? data[0] : [];

    const renderComments = comments.map(({id, content, created_at, user}) => {
        return (
        <Grid key={id} item sx={{ width:'100%', padding:2, paddingTop:0, marginTop:2  }}>
            <CommentCard user={user.username} profile={user.profile_picture} date={created_at} comment={content} />
        </Grid>
        );
    });

    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    //For react hook form
    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const [addComment] = useAddCommentMutation()


    const onSubmit = (data) => {

        const input = {
            id: id,
            data: data
        }

        console.log(input)

        addComment(input).then(
            (payload) => 
                {
                    //toast("Account detail was successfully updated.")
                    console.log('fulfilled',payload)
    
                }
            ).catch(
                (error) => 
                {
                    console.error('rejected', error)
                   // toast("Error has occured, try again later.")
                }
            )
    }

  return (
        <Grid 
            container
            direction={mobile ? 'column' : 'row'} 
            sx={{ 
                width: {xs:'100%', sm:700, md: tablet? 800:1000}, 
                height:{sm:600, md: 600},
                overflowY: mobile ? 'auto' : 'hidden',
                bgcolor:'white' 
            }}
        >
            <Grid item sx={{ width:mobile ? '100%': '45%', height: {xs:400, sm:600, md: 600}, bgcolor:'yellow' }}>
                <img
                    alt='post_image'
                    src={image}
                    style={{ width:'100%', height:'100%', objectFit:'cover' }}
                />
            </Grid>
            <Grid item sx={{ width:mobile ? '100%':'55%', height: { sm:600, md:600}, bgcolor:'white' }}>
                <Stack direction='column' sx={{ width:'100%' }}>
                    <Stack direction='row' alignItems='center' sx={{ bgcolor:"white", width:'100%', height: 70, pr:2, pl:2 }}> 
                        <Avatar src={profile}/>
                        <Stack direction='column'>
                            <Typography variant="body2" sx={{ fontFamily:'Arvo', ml:1 }}>
                                {name}
                            </Typography>
                            <Typography variant="caption" sx={{ fontFamily:'raleway', ml:1 }}>
                                {'@'+username}
                            </Typography>
                        </Stack>
                        <div style={{ flexGrow:1 }}/>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    </Stack>

                    <Divider style={{backgroundColor:'#F8F7F3'}}/>

                    <Grid sx={{ width:'100%', height:mobile? '100%':340, padding:2, overflowY:'auto', bgcolor:'white'}}>
                        <Stack direction='row'>
                            <Avatar alt="Remy Sharp" src={profile} sx={{ color:'white' }} />
                            <div style={{ width: 20 }} />
                            <Stack direction='column'>
                                
                                <Typography variant={'body2'} align='justify'  sx={{fontFamily:'raleway'}}>
                                    <b> {name} </b> - {caption}
                                </Typography>
                            </Stack>
                        </Stack>

                        <Grid container direction='column' sx={{ mt:2, width:'100%'}}>
                            <Grid item sx={{ width:'100%'}}>
                                <Stack direction='row' alignContent={'center'} sx={{width:'100%'}}>
                                    <RiListCheck2 style={{fontSize:25}}/>
                
                                    <Typography variant='body1' sx={{fontFamily:'Arvo', fontWeight: 'bold', ml:2}}>
                                        Comments 
                                    </Typography>
                        
                                </Stack>
                            </Grid>

                            {renderComments}
                        </Grid>
                    </Grid>

                    <Divider/>

                    <Stack direction='row' sx={{ pl:2, pt:1 }}>
                        <Tooltip title="Like">
                            <IconButton color="inherit" aria-label="open drawer" size='medium' >
                                {true ? <FavoriteIcon fontSize='large' style={{color: 'red', }}/> : <FavoriteBorderIcon fontSize='large' style={{color: 'black'}}/>}
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Comment">
                            <IconButton color="inherit" aria-label="open drawer" style={{ fontSize:30}}>
                                <FaRegComments />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Share To">
                            <IconButton color="inherit" aria-label="open drawer" size='large' style={{ fontSize:30}}>
                                <AiOutlineSend />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack direction='column' sx={{ paddingLeft:2 }}>
                         <Typography variant='body2' style={{fontFamily:'Arvo'}}>
                            Liked by Roxlee and  934 others 
                        </Typography>
                        <Typography  variant='caption' style={{fontFamily:'Arvo'}}>
                            {"Posted on " + date}
                        </Typography>
                    </Stack>
                

                    <Divider />

                    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction='row' sx={{ width:"100%", bgcolor:'white',p:2 }}>
                        <Avatar alt="Remy Sharp" src={userImage} />
                        
                        <Box sx={{ml:2, flexGrow:1}}>
                            <TextField {...register("content")} multiline minRow={1} maxRow={10} id="filled-basic" label="Add a comment" variant="filled" size='small'  InputProps={{disableUnderline: true }} sx={{width: '100%'}}/>
                        </Box>
                        <Button type="submit" sx={{ width:50, fontFamily:'Arvo' }}> Add </Button>
                        
                    </Stack>
                    </form>
               
                </Stack>
            </Grid>
        </Grid>

        
  )
}

export default ViewPostCard