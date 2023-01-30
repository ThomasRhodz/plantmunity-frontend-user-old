import {Avatar, Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EditIcon from '@mui/icons-material/Edit';

const EditUserForm = () => {
    //Redux Static Values (User details -> userSlice.js)
    const image = useSelector((state) => state.user.image) ;
    const firstname = useSelector((state) => state.user.first_name);
    const middlename = useSelector((state) => state.user.middle_name);
    const lastname = useSelector((state) => state.user.last_name);
    const username = useSelector((state) => state.user.username);
    const contact = useSelector((state) => state.user.contact);
    const email = useSelector((state) => state.user.email) ;
    const address = useSelector((state) => state.user.address);
    const bio = useSelector((state) => state.user.bio);
  return (
    <Stack direction='column' alignItems='center' sx={{ width:'100%', height:'100%', p:3, pt:5 }}>

        <Stack direction='row' alignItems='center' sx={{ width:'80%', mb:2 }}>
            <Stack sx={{ width:200 }}>

                <Avatar 
                    sx={{width:150, height:150, mr:5}} 
                    src={image}
                />
            </Stack>
            <Stack direction={'column'}>
                
                    <Button variant='contained' startIcon={<AccountCircleIcon />} sx={{ mb:2, color:'#5C6D63', borderRadius:10, fontSize:17, mr:1, fontFamily:'Arvo', textTransform:'none', p:2, width:350, bgcolor:'transparent', border:'2px solid #5C6D63', '&:hover':{color:'white'} }}>
                        Change profile picture
                    </Button>
                    <Button variant='contained' startIcon={<InsertPhotoIcon />} sx={{ color:'#5C6D63', borderRadius:10, fontSize:17, mr:1, fontFamily:'Arvo', textTransform:'none', p:2, width:350, bgcolor:'transparent', border:'2px solid #5C6D63', '&:hover':{color:'white'} }}>
                        Change cover picture
                    </Button>
               
            </Stack>
        </Stack>

        <Stack direction='row' alignItems={'center'} sx={{ width:'80%',mt:2, mb:2 }}>
            <Typography variant={'h6'} sx={{ fontFamily:'Arvo', mr:1 }}>
                    Account Details
            </Typography>
            <Box  sx={{ flexGrow:1, mr:1 }}>
                   <Divider />
            </Box>
            <Button startIcon={<EditIcon />} sx={{ color:'#58A776', fontFamily:'Arvo', textTransform:'none', p:0 }}>
                Edit
            </Button>
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={'body1'} sx={{ fontFamily:'Raleway', width:200, mr:5 }}>
                    Username
            </Typography>
            
            <TextField
                disabled
                defaultValue={username}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={'body1'} sx={{ fontFamily:'Raleway', width:200, mr:5 }}>
                    First Name
            </Typography>
            
            <TextField
                disabled
                defaultValue={firstname}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2}}>
            <Typography align='right' variant={'body1'} sx={{ fontFamily:'Raleway', width:200, mr:5 }}>
                    Middle Name
            </Typography>
            
            <TextField
                disabled
                defaultValue={middlename}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={'body1'} sx={{ fontFamily:'Raleway', width:200, mr:5 }}>
                    Last Name
            </Typography>
            
            <TextField
                disabled
                defaultValue={lastname}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={'body1'} sx={{ fontFamily:'Raleway', width:200, mr:5 }}>
                    Bio
            </Typography>
            
            <TextField
                multiline
                rows={4}
                defaultValue="Default Value"
                disabled
                sx={{ width:'50%' }}
            />
        </Stack>

        
        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2 }}>
            <Typography align='right' variant={'body1'} sx={{ fontFamily:'Raleway', width:200, mr:5 }}>
                    Sex
            </Typography>
            
            <TextField
                disabled
                defaultValue={lastname}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>

        

        <Stack direction='row' alignItems={'center'} sx={{ width:'80%', mb:2, mt:2 }}>
            <Typography variant={'h6'} sx={{ fontFamily:'Arvo', mr:1 }}>
                    Contact Details
            </Typography>
            <Box  sx={{ flexGrow:1, mr:1 }}>
                   <Divider />
            </Box>
            <Button startIcon={<EditIcon />} sx={{ color:'#58A776', fontFamily:'Arvo', textTransform:'none', p:0 }}>
                Edit
            </Button>
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2}}>
            <Typography align='right' variant={'body1'} sx={{ fontFamily:'Raleway', width:200, mr:5 }}>
                    Contact
            </Typography>
            
            <TextField
                disabled
                defaultValue={contact}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>
        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2}}>
            <Typography align='right' variant={'body1'} sx={{ fontFamily:'Raleway', width:200, mr:5 }}>
                  Email
            </Typography>
            
            <TextField
                disabled
                defaultValue={email}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>
        <Stack direction='row' alignItems='center' sx={{ width:'100%', mb:2}}>
            <Typography align='right' variant={'body1'} sx={{ fontFamily:'Raleway', width:200, mr:5 }}>
                   Address
            </Typography>
            
            <TextField
                disabled
                defaultValue={address}
                variant="outlined"
                sx={{ width:'50%' }}
            />
        </Stack>


    </Stack>
  )
}

export default EditUserForm