import React from 'react';
import {Box, Grid, Stack, Typography, IconButton, Button, Paper, Divider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SearchField } from '../basic/StyledComponents';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Background from '../../images/AboutIntroImage.jpg'; 
import {BsCart, BsReceiptCutoff} from 'react-icons/bs'

const MarketPlace = () => {
    const [search, setSearch] = React.useState('')
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

  return (
    <Grid container direction='column' alignitems='center' sx={compStyle['main-container']} >
        {/* title */}
        <Grid item>
            <Paper  sx={compStyle['paper-container']} elevation={0}>

                <Stack direction='column' alignItems='center'>
                    <Typography variant='h6' sx={{ fontFamily:'raleway', letterSpacing:2, fontWeight:'bold',  color:'gold', }}>
                        WELCOME TO THE
                    </Typography>
                    <Typography variant='h2' sx={{ color:'white', fontFamily:'Arvo', fontWeight:'bold', mt:'-10px' }}>
                        Market Place
                    </Typography>
                    <Grid sx={{mt:4}}>
                        <Stack direction='row' alignItems='center' sx={{backgroundColor:'#F0F2F5', width:600, p:2, pt: 0, pb:0, borderRadius:10,  border:'1px solid #E7E9EB',}} >
                            <SearchField
                                variant='outlined'
                                inputProps={{ style: { fontFamily: 'raleway',}}}
                                placeholder={"Search by user's name, email or username"}
                                value={ search } 
                                onChange={handleSearchChange}
                                size='small'
                            />
                            <IconButton color="secondary">
                                <SearchRoundedIcon sx={{ color:'gray' }} />
                            </IconButton>
                        </Stack>
                    </Grid>

                </Stack>
            </Paper>

        </Grid>

        <Grid item sx={compStyle['market-container']}>
            <Stack direction='column' alignItems='center' sx={{width:'100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width:'90%', position:'sticky', top: 70, zIndex:3, backgroundColor:'white',  pt:4, }}>
                    <Stack direction='row' alignItems='center'>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{flexGrow:1}}>
                            <Tab 
                                label={
                                    <Typography variant='h6' sx={{textTransform:'none', fontFamily:'Arvo'}}>
                                       Followed Users 
                                    </Typography>
                                } 
                                {...a11yProps(0)} 
                            />
                            <Tab 
                                label={
                                    <Typography variant='h6' sx={{textTransform:'none', fontFamily:'Arvo'}}>
                                      Public Market 
                                    </Typography>
                                } 
                                {...a11yProps(1)} 
                            />
                        </Tabs>

                        <Button 
                            variant='contained'
                            sx={{backgroundColor:'transparent', width:170, border:'2px solid #5B8C4A', borderRadius:5}}
                            startIcon={<BsCart style={{ color:'#5B8C4A', fontSize:22 }} />}
                        >
                            <Typography variant='body1' sx={{textTransform:'none', fontFamily:'Arvo', color:'#5B8C4A'}}>
                               My Cart
                            </Typography>
                        </Button>

                        <Button 
                            variant='contained'
                            sx={{backgroundColor:'transparent', width:170, border:'2px solid #5B8C4A', borderRadius:5,  ml: 1}}
                            startIcon={<BsReceiptCutoff style={{ color:'#5B8C4A', fontSize:22, }} />}
                        >
                           <Typography variant='body1' sx={{textTransform:'none', fontFamily:'Arvo', color:'#5B8C4A'}}>
                               History
                            </Typography>
                        </Button>
                    </Stack>
                </Box>

                <Stack direction='row' sx={{width:'90%', backgroundColor:'red', height:2000, mt:2}}>
                    <Stack direction='column' sx={{width: 300, height:600, backgroundColor:'green', p:4, pt:2, position:'sticky', zIndex:2, top:170}}>
                        <Typography variant='h6' align='center' sx={{textTransform:'none', fontFamily:'raleway', width: '100%'}}>
                           Popular Category
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Grid>

    </Grid>
  )
}

export default MarketPlace


const compStyle = {
    'main-container':{
        backgroundColor:'white',
        width:'100%',
        minHeight:'100vh',
        maxHeight:'100%',
        mt:8,
        
    },
    'paper-container': {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        width: '100%', 
        height: {xs: '100%', sm: 300, md: 280}, 
        borderRadius: 0, 
        padding:{xs:4, sm:8, md:8}
        
    },
    'market-container':{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
      
        
    },
}