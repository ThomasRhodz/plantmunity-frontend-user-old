import { Box, Button,Dialog, Grid, IconButton, Stack, Typography, Tab, Tabs, Avatar, Toolbar, Slide } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {BsShop, BsFillFilePostFill, BsCalendarWeek} from 'react-icons/bs';
import {RiPlantLine} from 'react-icons/ri';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useGetUserDataQuery } from '../../app/services/accountApi';

import UserPosts from '../parts/viewUser/UserPosts';
import ShopDetails from '../parts/viewUser/ShopDetails';
import ShopProducts from '../parts/viewUser/ShopProducts';
import ViewShop from '../dialogs/ViewShop';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });

  
const UserFeed = ({id}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClickClose = () => {
      setOpen(false);
    };

    const {data, isFetching} = useGetUserDataQuery(id, {refetchOnMountOrArgChange: true})

    console.log(data)

    const userDetail = data? data[0] : []

    const firstname = userDetail?.first_name
    const lastname = userDetail?.last_name
    const fullname = firstname + ' ' + lastname
    const image = userDetail?.profile_picture
    const coverPhoto = userDetail?.profile_cover
    const bioNote = userDetail?.bio_note

    const post = userDetail?.posts
    const products = userDetail?.products
    const shop = userDetail?.shop

    const username = userDetail?.username

    const time_stamp = new Date((userDetail?.created_at))

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        
        return date.toLocaleString('en-US', { month: 'long' });
    }
    const date = ((getMonthName(time_stamp.getMonth()+1))+" "+ time_stamp.getDate() + ", "+time_stamp.getFullYear())

    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(700));

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
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
        <Grid item sx={{ width: "100%", height: mobile? 200 : 300, bgcolor: "green" }}>
            <img src={coverPhoto} alt={'Cover Photo'} style={{width: "100%", height: mobile? 200 : 300, objectFit:'cover'}} />
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
                        width:mobile ? 30: 40, 
                        height:mobile ? 30: 40, 
                        mt:mobile ? 12 : tablet ? 13 : 14, 
                        mr:1, 
                        border:'1px solid green',
                        color:'green',
                        borderRadius:5,
                        bgcolor:'white',
                        '&:hover':{
                            color:'white',
                            bgcolor:'green',
                        }
                        }}>
                    <MoreHorizIcon sx={{fontSize: mobile? 17: 20}} />
                </IconButton>

                <IconButton 
                    sx={{ 
                        width:mobile ? 30: 40, 
                        height:mobile ? 30: 40, 
                        mt:mobile ? 12 : tablet ? 13 : 14, 
                        mr:1, 
                        border:'1px solid green',
                        color:'green',
                        borderRadius:5,
                        bgcolor:'white',
                        '&:hover':{
                            color:'white',
                            bgcolor:'green',
                        }
                        }}>
                    <MailOutlineOutlinedIcon sx={{fontSize: mobile? 17: 20}} />
                </IconButton>

                <Button 
                    variant='contained' 
                    sx={{
                        fontFamily:"Arvo", 
                        textTransform:'none',
                        height:mobile? 30 : 40, 
                        width: mobile ? 100 : 150, 
                        mt:mobile ? 12 : tablet ? 13 : 14, 
                        border:'1px solid green',
                        color:'green',
                        borderRadius:5,
                        bgcolor:'white',
                        '&:hover':{
                            color:'white',
                            bgcolor:'green',
                        }
                    }}>
                    Follow
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
                <Button sx={{ p:0, mr:2, fontFamily:'Arvo', textTransform:'none', fontWeight:'bold', fontSize:mobile ? 14 : 16 }}>12 Followers</Button>
                <Button sx={{ p:0, fontFamily:'Arvo', textTransform:'none', fontWeight:'bold', fontSize:mobile ? 14 : 16 }}>12 Followings</Button>
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

        <Grid item sx={{ width:'100%', display: value===0 ? 'flex' : 'none', backgroundColor: '#f6f7f6',}}>
            <UserPosts postData={post} fullname={fullname} username={username} image={image} uid={id} />
        </Grid>

        <Grid item sx={{ width:'100%', display: value===1 ? 'flex' : 'none' }}>
           <ShopDetails shopData={shop}/>
        </Grid>

        <Grid item sx={{ width:'100%', display: value===2 ? 'flex' : 'none' }}>
           <ShopProducts productData={products}/>
        </Grid>

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