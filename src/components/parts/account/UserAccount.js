import React, { useState,useEffect } from 'react'
import {Avatar, Box, Button, Dialog, Divider, Stack, TextField, Toolbar, Typography } from '@mui/material'
import DangerZone from './DangerZone';
import {useDispatch, useSelector } from 'react-redux'
import { setPersonalDetails } from '../../../app/persist/account/userSlice';
import { useGetUserQuery } from '../../../app/services/accountApi';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EditIcon from '@mui/icons-material/Edit';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import EditUserForm from '../../forms/EditingForms/EditUserForm';
import EditUserContactForm from '../../forms/EditingForms/EditUserContactForm';
import EditUserProfile from '../../forms/EditingForms/EditUserProfile';
import EditUserCoverForm from '../../forms/EditingForms/EditUserCoverForm';

const UserAccount = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(900));

    const [openAccount, setOpenAccount] = useState(false);

    const openEditAccount = () => {
        setOpenAccount(true)
    };

    const closeEditAccount = () => {
        setOpenAccount(false)
    }

    const [openContact, setOpenContact] = useState(false);

    const openEditContact = () => {
        setOpenContact(true)
    };

    const closeEditContact = () => {
        setOpenContact(false)
    }

    const [openUploadProfile, setProfile] = useState(false);

    const openEditProfile = () => {
        setProfile(true)
    };

    const closeEditProfile = () => {
        setProfile(false)
    }

    const [openUploadCover, setCover] = useState(false);

    const openEditCover = () => {
        setCover(true)
    };

    const closeEditCover = () => {
        setCover(false)
    }

    //Redux Static Values (User details -> userSlice.js)

    const {data, isFetching} = useGetUserQuery(undefined, {refetchOnMountOrArgChange: true});
    //console.log(data)
    
    const [firstname, setFName] = useState( useSelector((state) => state.user.first_name));
    const [middlename, setMName] = useState(useSelector((state) => state.user.middle_name));
    const [lastname, setLName] = useState(useSelector((state) => state.user.last_name));
    const [username, setUsername] = useState(useSelector((state) => state.user.username));
    const [contact, setContact] = useState(useSelector((state) => state.user.contact));
    const [email, setEmail] = useState(useSelector((state) => state.user.email));
    const [address, setAddress] = useState(useSelector((state) => state.user.address));
    const [image, setImage] = useState(useSelector((state) => state.user.image));
    const [bio, setBio] = useState(useSelector((state) => state.user.bio));
    const [sex, setSex] = useState(useSelector((state) => state.user.sex));
    const [coverImage, setCoverImage] = useState(useSelector((state) => state.user.profile_cover));
    
    const dispatch = useDispatch(); //for using the function in in userSlice[redux]

    useEffect (()=>{
       
        const userDetail = data ? data.user : []
        console.log(userDetail)
        setImage(userDetail ? userDetail.profile_picture : '');
        setFName(userDetail ? userDetail.first_name : '')
        setMName(userDetail ? userDetail.middle_name : '')
        setLName(userDetail ? userDetail.last_name : '')
        setBio(userDetail ? userDetail.bio_note : '')
        setUsername(userDetail ? userDetail.username : '')
        setEmail(userDetail ? userDetail.email : '')
        setContact(userDetail ? userDetail.contact : '')
        setAddress(userDetail ? userDetail.address : '')
        setSex(userDetail ? userDetail.sex : 'Male')
        setCoverImage(userDetail ? userDetail.profile_cover : '')

        const userData = userDetail ? {
            id: userDetail.id,
            first_name: userDetail.first_name,
            middle_name: userDetail.middle_name,
            last_name: userDetail.last_name,
            username: userDetail.username,
            user_type: userDetail.type, 
            address: userDetail.address,
            contact: userDetail.contact,
            email: userDetail.email,
            image: userDetail.profile_picture,
            bio_note: userDetail.bio_note,
            sex: userDetail.sex,
            profile_cover: userDetail.profile_cover
          } : {};
    
          console.log(userData)
          
        dispatch(setPersonalDetails(userData))
    }, [data])
    
  return (
    <Stack direction='column' alignItems='center' sx={{ width:'100%', height:'100%', p:3 }}>

        <Stack direction={ mobile ? 'column' :'row'} alignItems='center' sx={{ width:{xs:'100', sm:'80%, md:80%'}, mb:2 }}>
            <Stack sx={{ width: {xs:110, sm:110, md:200} }}>

                <Avatar 
                    sx={{width:tablet ? 110 : 150, height:tablet ? 110 : 150, mr:5}} 
                    src={image}
                />
            </Stack>
            <Stack direction={'column'} sx={{ ml:{xs:0, sm:3, md:0} }}>
                
                    <Button onClick={()=>openEditProfile()} variant='contained' startIcon={<AccountCircleIcon />} sx={{mt: mobile ? 2 : 0, mb: mobile ? 1 : 2, color:'#5C6D63', borderRadius:10, fontSize:{xs: 13, sm:15, md: 17}, mr:1, fontFamily:'Arvo', textTransform:'none', p:mobile ? 1 :2, width:{xs:'100%', sm:300, md:350}, bgcolor:'transparent', border:'2px solid #5C6D63', '&:hover':{color:'white'} }}>
                        Change profile picture
                    </Button>
                    <Button onClick={()=>openEditCover()} variant='contained' startIcon={<InsertPhotoIcon />} sx={{ color:'#5C6D63', borderRadius:10, fontSize:{xs: 13, sm:15, md:  17}, mr:1, fontFamily:'Arvo', textTransform:'none', p:mobile ? 1 :2, width:{xs:'100%', sm:300, md:350}, bgcolor:'transparent', border:'2px solid #5C6D63', '&:hover':{color:'white'} }}>
                        Change cover picture
                    </Button>
               
            </Stack>
        </Stack>

        <Stack direction='row' alignItems={'center'} sx={{ width: mobile ? '100%' : tablet ? '90%'  :'80%',mt:2, mb:2 }}>
            <Typography variant={mobile ? 'body1' :'h6'} sx={{ fontFamily:'Arvo', mr:1 }}>
                    Account Details
            </Typography>
            <Box  sx={{ flexGrow:1, mr:1 }}>
                   <Divider />
            </Box>
            <Button onClick={()=> openEditAccount()} startIcon={<EditIcon />} sx={{ color:'#58A776', fontFamily:'Arvo', textTransform:'none', p:0 }}>
                Edit
            </Button>
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={mobile ? 'body2' : 'body1'} sx={{ fontFamily:'Raleway', width: { xs: 100, sm:130, md:200}, mr:5 }}>
                    Username
            </Typography>
            
            <TextField
                size = { mobile ? 'small' : 'regular'}
                disabled
                value={username}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={mobile ? 'body2' : 'body1'} sx={{ fontFamily:'Raleway', width: { xs: 100, sm:130, md:200}, mr:5 }}>
                    First Name
            </Typography>
            
            <TextField
                size = { mobile ? 'small' : 'regular'}
                disabled
                value={firstname}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2}}>
            <Typography align='right' variant={mobile ? 'body2' : 'body1'} sx={{ fontFamily:'Raleway', width: { xs: 100, sm:130, md:200}, mr:5 }}>
                    Middle Name
            </Typography>
            
            <TextField
                size = { mobile ? 'small' : 'regular'}
                disabled
                value={middlename}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={mobile ? 'body2' : 'body1'} sx={{ fontFamily:'Raleway', width: { xs: 100, sm:130, md:200}, mr:5 }}>
                    Last Name
            </Typography>
            
            <TextField
                size = { mobile ? 'small' : 'regular'}
                disabled
                value={lastname}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={mobile ? 'body2' : 'body1'} sx={{ fontFamily:'Raleway', width: { xs: 100, sm:130, md:200}, mr:5 }}>
                    Bio
            </Typography>
            
            <TextField
                size = { mobile ? 'small' : 'regular'}
                multiline
                rows={4}
                value={bio}
                disabled
                sx={{ width:'50%' }}
            />
        </Stack>

        
        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={mobile ? 'body2' : 'body1'} sx={{ fontFamily:'Raleway', width: { xs: 100, sm:130, md:200}, mr:5 }}>
                    Sex
            </Typography>
            
            <TextField
                size = { mobile ? 'small' : 'regular'}
                disabled
                value={sex}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        

        <Stack direction='row' alignItems={'center'} sx={{ width: mobile ? '100%' : tablet ? '90%'  :'80%', mb:2, mt:2 }}>
            <Typography variant={mobile ? 'body1' :'h6'} sx={{ fontFamily:'Arvo', mr:1 }}>
                    Contact Details
            </Typography>
            <Box  sx={{ flexGrow:1, mr:1 }}>
                   <Divider />
            </Box>
            <Button onClick={()=> openEditContact()} startIcon={<EditIcon />} sx={{ color:'#58A776', fontFamily:'Arvo', textTransform:'none', p:0 }}>
                Edit
            </Button>
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2}}>
            <Typography align='right' variant={mobile ? 'body2' : 'body1'} sx={{ fontFamily:'Raleway', width: { xs: 100, sm:130, md:200}, mr:5 }}>
                    Contact
            </Typography>
            
            <TextField
                size = { mobile ? 'small' : 'regular'}
                disabled
                value={contact}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>
        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2}}>
            <Typography align='right' variant={mobile ? 'body2' : 'body1'} sx={{ fontFamily:'Raleway', width: { xs: 100, sm:130, md:200}, mr:5 }}>
                  Email
            </Typography>
            
            <TextField
                size = { mobile ? 'small' : 'regular'}
                disabled
                value={email}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>
        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2}}>
            <Typography align='right' variant={mobile ? 'body2' : 'body1'} sx={{ fontFamily:'Raleway', width: { xs: 100, sm:130, md:200}, mr:5 }}>
                   Address
            </Typography>
            
            <TextField
                size = { mobile ? 'small' : 'regular'}
                disabled
                value={address}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        <Stack direction='row' alignItems={'center'} sx={{ width: mobile ? '100%' : tablet ? '90%'  :'80%', mb:2, mt:2 }}>
            <Typography variant={mobile ? 'body1' :'h6'} sx={{ fontFamily:'Arvo', mr:1, color:'#b72d00' }}>
                    Danger Zone
            </Typography>
            <Box  sx={{ flexGrow:1, mr:1 }}>
                   <Divider />
            </Box>
        </Stack>
        <DangerZone />
        <Toolbar/>

        <Dialog
            maxWidth={false}
            fullScreen={mobile}
            scroll='body'
            open={openAccount}
            onClose={closeEditAccount}
        >
            <EditUserForm 
                firstName={firstname}
                lastName={lastname}
                middleName={middlename}
                userName={username}
                bio={bio}
                sex={sex}
                handleClose={()=>closeEditAccount()}
                // toast={(stringMessage)=>toast(stringMessage)}
            />
        </Dialog>

        <Dialog
            maxWidth={false}
            fullScreen={mobile}
            scroll='body'
            open={openContact}
            onClose={closeEditContact}
        >
            <EditUserContactForm 
                email ={email}
                contact = {contact}
                address = {address}
                handleClose={()=>closeEditContact()}
                // toast={(stringMessage)=>toast(stringMessage)}
            />
        </Dialog>

        <Dialog
            maxWidth={false}
            fullScreen={mobile}
            scroll='body'
            open={openUploadProfile}
            onClose={closeEditProfile}
        >
            <EditUserProfile 
                image = {image}
                handleClose={()=>closeEditProfile()}
                // toast={(stringMessage)=>toast(stringMessage)}
            />
        </Dialog>

        <Dialog
            maxWidth={false}
            fullScreen={mobile}
            scroll='body'
            open={openUploadCover}
            onClose={closeEditCover}
        >
            <EditUserCoverForm 
                image = {coverImage}
                handleClose={()=>closeEditCover()}
                // toast={(stringMessage)=>toast(stringMessage)}
            />
        </Dialog>

    </Stack>
  )
}

export default UserAccount

