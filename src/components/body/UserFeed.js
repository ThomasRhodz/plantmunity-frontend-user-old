import { Box, Button,Dialog, Grid, IconButton, Stack, Typography, Tab, Tabs, Avatar, Toolbar, Slide } from '@mui/material'
import React, {useState, useEffect} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {BsShop, BsFillFilePostFill, BsCalendarWeek} from 'react-icons/bs';
import { RiUserShared2Line, RiUserUnfollowLine } from 'react-icons/ri';
import {RiPlantLine} from 'react-icons/ri';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import UserPosts from '../parts/viewUser/UserPosts';
import ShopDetails from '../parts/viewUser/ShopDetails';
import ShopProducts from '../parts/viewUser/ShopProducts';
import ViewShop from '../dialogs/ViewShop';

import { useGetUserDataQuery } from '../../app/services/accountApi';
import { useLazyGetIsFollowedQuery, useAddAssociateMutation, useUpdateUnfollowMutation, useGetAssociateCountQuery } from '../../app/services/associateApi';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });

  
const UserFeed = ({id}) => {
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(700));
    
    const {data, isFetching} = useGetUserDataQuery(id, {refetchOnMountOrArgChange: true})
    const {data: associates} = useGetAssociateCountQuery(id, {refetchOnMountOrArgChange: true})

    const [getIsFollowed, result] = useLazyGetIsFollowedQuery();
    const [associateClick, setAssociateCliCk] = useState(0);

    useEffect(() => {
        getIsFollowed(id)
    }, [associateClick]);

    console.log(result?.data)

    const followed = result?.data?.isFollowed
    const followedID = result?.data?.id
    const followedStatus = result?.data?.status
    
    const handleButtonLabel = () =>{
        if(followedStatus===null){
            return 'Follow'
        } else if (followedStatus=== 'Pending') {
            return 'Cancel Request'
        }else{
           return 'Unfollow'
        }
    }

    const [follow] = useAddAssociateMutation();
    const [unfollow] = useUpdateUnfollowMutation();

    const handleFollowButton = () => {
        if(followed === 1){
            unfollow(followedID)
            setAssociateCliCk(1)
        }else{
            follow(id)
            setAssociateCliCk(2)
        }
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClickClose = () => {
      setOpen(false);
    };

    const userDetail = data? data[0] : []

    const firstname = userDetail?.first_name
    const lastname = userDetail?.last_name
    const fullname = firstname + ' ' + lastname
    const image = userDetail?.profile_picture
    const coverPhoto = userDetail?.profile_cover
    const bioNote = userDetail?.bio_note
    const username = userDetail?.username

    const post = userDetail?.posts
    const products = userDetail?.products
    const shop = userDetail?.shop

    console.log(post)

    const time_stamp = new Date((userDetail?.created_at))

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        
        return date.toLocaleString('en-US', { month: 'long' });
    }

    const date = ((getMonthName(time_stamp.getMonth()+1))+" "+ time_stamp.getDate() + ", "+time_stamp.getFullYear())

  return (
    <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
      <Grid
        container
        direction="column"
        alignItems={"center"}
        sx={{
          width: mobile ? "100%" : tablet? '80%' : "50%",
          bgcolor: "white",
          boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)',
        }}
      >
        <Grid item sx={{ width: "100%", height: mobile? 200 : 300, bgcolor: "#5C6D63" }}>
            <img src={coverPhoto} alt={'Cover_Photo'} style={{width: "100%", height: mobile? 200 : 300, objectFit:'cover'}} />
        </Grid>

        <Grid item sx={{ width: "100%", marginTop:mobile ? '-70px' : tablet ? '-80px' : '-100px', p:mobile ? 2 :5, pt:0}}>
            <Stack direction='row'>
                <Stack  direction='row' alignItems='center' sx={{ width:mobile ? 140 : tablet ? 160 : 200, height:mobile ? 140 : tablet ? 160 : 200, bgcolor:"white", borderRadius:'50%' }}>
                    <Stack direction='column' alignItems='center' sx={{ width:'100%' }}>
                        <Avatar src={image} sx={{width:mobile ? 130 : tablet ? 150 : 190, height:mobile ? 130 : tablet ? 150 : 190}} />
                    </Stack>
                </Stack>

                <Box sx={{ flexGrow:1 }}/>

                <IconButton 
                    sx={{ 
                        width:mobile ? 35: 40, 
                        height:mobile ? 35: 40, 
                        mt:mobile ? 10 : tablet ? 13 : 15, 
                        mr:1, 
                        border:'1px solid #5C6D63',
                        color:'#5C6D63',
                        borderRadius:5,
                        bgcolor:'white',
                        '&:hover':{
                            color:'white',
                            bgcolor:'#5C6D63',
                        }
                        }}>
                    <MoreHorizIcon sx={{fontSize: mobile? 17: 20}} />
                </IconButton>

                <IconButton 
                    sx={{ 
                        width:mobile ? 35: 40, 
                        height:mobile ? 35: 40, 
                        mt:mobile ? 10 : tablet ? 13 : 15, 
                        mr:1, 
                        border:'1px solid #5C6D63',
                        color:'#5C6D63',
                        borderRadius:5,
                        bgcolor:'white',
                        '&:hover':{
                            color:'white',
                            bgcolor:'#5C6D63',
                        }
                        }}>
                    <MailOutlineOutlinedIcon sx={{fontSize: mobile? 17: 20}} />
                </IconButton>

                <Button
                    onClick = { () => handleFollowButton()}
                    variant='contained' 
                    startIcon={followedStatus === null ? <RiUserShared2Line style={{fontSize: mobile ? 15:17}} /> : <RiUserUnfollowLine style={{fontSize: mobile ? 15:17}}/>}
                    sx={{
                        fontSize: mobile ? 12:14,
                        fontFamily:"Arvo", 
                        textTransform:'none',
                        height:mobile? 35 : 40, 
                        width: mobile ? 150 : 170, 
                        mt:mobile ? 10 : tablet ? 13 : 15, 
                        border:'1px solid #5C6D63',
                        border: '1px solid #5C6D63',
                        bgcolor:followedStatus === null ? '#5C6D63' : 'white',
                        color:followedStatus === null ? 'white' : '#5C6D63',
                        borderRadius:5,
                        '&:hover':{
                            color:followedStatus === null ? '#5C6D63' : 'white',
                            bgcolor:followedStatus === null ? 'white' : '#5C6D63',
                        }
                    }}>
                    {handleButtonLabel()}
                </Button>
            </Stack>

            <Typography variant={ mobile ? 'h5':'h4'} sx={{ fontFamily:'Arvo', pt:2, fontWeight:'bold' }}>
                {fullname}
            </Typography>
            <Typography variant={ mobile ? 'body1':'h6'} sx={{ fontFamily:'Raleway', fontWeight:'bold' }}>
                {'@'+username}
            </Typography>

            <Typography variant={ mobile ? 'body2':'h6'} sx={{ fontFamily:'raleway', pt:2 }}>
                {bioNote}
            </Typography>

            <Stack direction={'column'} sx={{ color:'#797A7C' }}>
                <Stack direction='row' alignItems='center'  sx={{ display: shop === null ? 'none' : 'flex' }}>
                    <Button onClick={() => handleClickOpen()} startIcon={<BsShop style={{fontSize:17}} />} sx={{ p:0, marginLeft:'5px',  color:'#797A7C', textTransform:'none' }}>
                        <Typography variant={ mobile ? 'body2':'body1'} sx={{ fontFamily:'Raleway'}}>
                                {shop?.shop_name}
                        </Typography>
                    </Button>
                </Stack>

                <Stack direction='row' alignItems='center'  sx={{ display: shop === null ? 'none' : 'flex' }}>
                    <IconButton sx={{ p:0 }}>
                        <BsCalendarWeek style={{fontSize:17}} />
                    </IconButton>
                    <Typography variant={ mobile ? 'body2':'body1'} sx={{ fontFamily:'Raleway', ml:1}}>
                            {"Joined Plantmunity on "+ date}
                    </Typography>
                </Stack>
            </Stack>

            <Stack direction='row' sx={{ mt:1 }}>
                <Button sx={{ p:0, mr:2, fontFamily:'Arvo', textTransform:'none', fontWeight:'bold', fontSize:mobile ? 14 : 16 }}>{(associates? associates.follower_count : 0) + " Followers"}</Button>
                <Button sx={{ p:0, fontFamily:'Arvo', textTransform:'none', fontWeight:'bold', fontSize:mobile ? 14 : 16 }}>{(associates? associates.following_count : 0) + " Following"}</Button>
            </Stack>
        </Grid>
                    
        <Grid item sx={{ width:'100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab 
                        icon={<BsFillFilePostFill style={{ fontSize: 20 }}/>} 
                        iconPosition="start"
                        label="Posts" 
                        sx={{fontFamily: 'Arvo', textTransform:'none', fontSize: {xs:13, sm:15, md:18}}}  
                    />
                    <Tab 
                        icon={<BsShop style={{ fontSize: 20 }}/>} 
                        iconPosition="start"
                        label="Shop" 
                        sx={{fontFamily: 'Arvo', textTransform:'none', fontSize: {xs:13, sm:15, md:18}}}  
                    />
                    <Tab 
                        icon={<RiPlantLine style={{ fontSize: 20 }} />} 
                        iconPosition="start"
                        label="Products" 
                        sx={{fontFamily: 'Arvo', textTransform:'none', fontSize: {xs:13, sm:15, md:18}}}  
                    />
                    
                </Tabs>
            </Box>
        </Grid>
        { isFetching ? 
        
            "Loading..." : 
            <React.Fragment>
                <Grid item sx={{ width:'100%', display: value===0 && !isFetching  ? 'flex' : 'none', backgroundColor: '#f6f7f6',}}>
                    <UserPosts postData={post} fullname={fullname} username={username} image={image} uid={id} />
                </Grid>

                <Grid item sx={{ width:'100%', display: value===1 ? 'flex' : 'none' }}>
                <ShopDetails shopData={shop}/>
                </Grid>

                <Grid item sx={{ width:'100%', display: value===2 ? 'flex' : 'none' }}>
                <ShopProducts productData={products}/>
                </Grid> 
            </React.Fragment>
        }

        <Toolbar sx={{display: tablet ? 'flex':'none'}}/>
        <Toolbar/>

        <Dialog
            fullScreen
            maxWidth={mobile ? true : false}
            open={open}
            onClose={handleClickClose}
            TransitionComponent={Transition}
        >
            <ViewShop handleClose={()=>handleClickClose()} />
        </Dialog>
      </Grid>
    </Stack>
  );
}

export default UserFeed