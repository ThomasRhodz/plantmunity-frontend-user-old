import { Avatar, Box, Button, TextField, Divider, Grid, IconButton, Stack, Typography, Tooltip } from '@mui/material'
import React, {useState, useEffect} from 'react'
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
import { useAddLikeMutation, useUpdateUnlikeMutation, useLazyGetIsLikedQuery } from '../../../app/services/postApi';

const schema = yup.object({
    content: yup.string(),
});

const ViewPostCard = ({image, name, caption, username, date, id, profile, likes}) => {
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    const [isLiked, result] = useLazyGetIsLikedQuery()
    const [likedClick, setLikedClick] = useState(0)
    const [likeCount, setLikeCount] = useState(likes)

    useEffect(() => {
        isLiked(id)
    }, [likedClick]);
    
    const postLiked = result?.data?.isLiked
    const likeID = result?.data?.id

    const [addLike] = useAddLikeMutation();
    const [unlike] = useUpdateUnlikeMutation();

    const handleLikeButton = () => {
        if(postLiked === 1){
            unlike(likeID)
            setLikedClick(1)
            setLikeCount(likeCount-1)
        }else{
            addLike(id)
            setLikedClick(2)
            setLikeCount(likeCount+1)
        }
    }

    const userImage = useSelector((state) => state.user.image)
    
    const {data, isFetching} = useGetCommentsQuery(id, {refetchOnMountOrArgChange: true})

    console.log(data)

    const [content, setContent] = useState('')
    const [isEnabled, setIsEnabled] = useState(true)
    const comments = data? data[0] : [];
    
    const renderComments = comments.length === 0 ? (
        <Stack direction='row' alignItems='center' sx={{ width:'100%', height:mobile ? 100:200}}>
            <Stack direction='column' alignItems='center' sx={{ width:'100%'}}>
                <Typography variant='body1' sx={{ fontFamily:'raleway', fontWeight:'bold', color:'#DCD7C3' }}>
                    No Comments
                </Typography>
            </Stack>
        </Stack>
    ) : comments.map(({id, content, created_at, user}) => {
        return (
        <Grid key={id} item sx={{ width:'100%', padding:2, paddingTop:0, marginTop:2  }}>
            <CommentCard user={user.username} profile={user.profile_picture} date={created_at} comment={content} />
        </Grid>
        );
    });



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
                    setContent('')
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
            <Grid item sx={{ width:'100%', display: mobile ? 'flex': 'none'}}>
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
            </Grid>
            <Grid item sx={{ width:mobile ? '100%': '45%', height: {xs:400, sm:600, md: 600}, bgcolor:'#F3F4F8' }}>
                <Stack direction='row' alignItems='center' sx={{ width:'100%', height:"100%" }}>
                    <img
                        alt='post_image'
                        src={image}
                        style={{ width:'100%', height:'100%', objectFit:'cover' }}
                    />
                </Stack>
            </Grid>
            <Grid item sx={{ width:mobile ? '100%':'55%', height: { sm:600, md:600}, bgcolor:'white' }}>
                <Stack direction='column' sx={{ width:'100%' }}>
                    <Stack direction='row' alignItems='center' sx={{ bgcolor:"white", width:'100%', height: 70, pr:2, pl:2, display: mobile ? 'none': 'flex'}}> 
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
                        <Stack direction='row' sx={{ display: mobile ? 'none': 'flex' }}>
                            <Avatar alt="Remy Sharp" src={profile} sx={{ color:'white'}} />
                            <div style={{ width: 20, display: mobile ? 'none': 'flex' }} />
                            
                            <Stack direction='column' >
                                <Typography variant={'body2'} align='justify'  sx={{fontFamily:'raleway'}}>
                                    <b> {name} </b> - {caption}
                                </Typography>
                            </Stack>
                        </Stack>

                        <Grid container direction='column' sx={{ mt:2, width:'100%', display: mobile ? 'none': 'flex'}}>
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

                    <Divider sx={{display: mobile ? 'none': 'flex'}}/>

                    <Stack direction='row' sx={{ pl: mobile ? 0 :2, pt:mobile ? 0 :1, marginTop: mobile ? '-20px':'0px' }}>
                        <Tooltip title="Like">
                            <IconButton onClick={()=>handleLikeButton()} color="inherit" aria-label="open drawer" size='medium' >
                                {postLiked === 1 ? <FavoriteIcon fontSize='large' style={{color: 'red', }}/> : <FavoriteBorderIcon fontSize='large' style={{color: 'black'}}/>}
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
                            {'Like by ' + likeCount + (likeCount > 1 ? ' others' : ' user')}  
                        </Typography>
                        <Typography  variant='caption' style={{fontFamily:'Arvo'}}>
                            {"Posted on " + date}
                        </Typography>
                        <Stack direction='column' sx={{display: mobile ? 'flex': 'none', mt:1}}>
                            <Typography variant={'body2'} align='justify'  sx={{fontFamily:'raleway', pr:5}}>
                                <b> {name} </b> - {caption}
                            </Typography>
                        </Stack>
                    </Stack>
                

                    <Divider />

                    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction='row' sx={{ width:"100%", bgcolor:'white',p:2 }}>
                        <Avatar alt="Remy Sharp" src={userImage} />
                        
                        <Box sx={{ml:2, flexGrow:1}}>
                            <TextField 
                                {...register("content")} 
                                value={content} 
                                onChange={(event)=>{
                                    setContent(event.target.value)
                                    setIsEnabled(false)
                                }} 
                                required
                                multiline minRow={1} 
                                maxRow={10} 
                                id="filled-basic" 
                                label="Add a comment" 
                                variant="filled" 
                                size='small'  
                                InputProps={{disableUnderline: true }} 
                                sx={{width: '100%'}}/>
                        </Box>
                        <Button disabled={isEnabled} type="submit" sx={{ width:50, fontFamily:'Arvo' }}> Add </Button>
                        
                    </Stack>
                    </form>
               
                </Stack>
            </Grid>

            <Grid item sx={{ width:'100%', display: mobile ? 'flex': 'none', p:2, pt:0 }}>
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
        </Grid>

        
  )
}

export default ViewPostCard