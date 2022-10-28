import React from 'react'
import Divider from "@material-ui/core/Divider";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Tbs from '@mui/material/Tabs';
import Tb from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

import {navigate} from 'gatsby';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {RiUserReceivedLine, RiUserSharedLine} from 'react-icons/ri';
import {BsShop} from 'react-icons/bs';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

const ShorcutNavBar = () => {
  //a variable used for setting the value of a tab
  const [value, setValue] = React.useState(0);

  //function that is used for chnaging the value every a different tab is selected.
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //data of pages, which will be used as an array to feed into a .map to create a collective component
  const shortcuts = [
    {
        id: 0,
        location: '/profile',
        name: 'Profile',
        icon: <PersonOutlineRoundedIcon style={value===0?{ color: '#58a776' }:{ color: '#58a776' } }/>

    },

    {
        id: 1,
        location: '/shop',
        name: 'My Shop',
        icon: <BsShop style={value===1?{ color: '#58a776' }:{ color: '#58a776' } }/>

    },

    {
        id: 2,
        location: '/cart',
        name: 'My Cart',
        icon: <ShoppingCartOutlinedIcon style={value===2?{ color: '#58a776' }:{ color: '#58a776' } }/>

    },

    {
        id: 3,
        location: '/userForum',
        name: 'My Forum',
        icon: <ForumOutlinedIcon style={value===3?{ color: '#58a776' }:{ color: '#58a776' } }/>

    },

    {
        id: 4,
        location: '/accountAssociates',
        name: 'Followers ',
        icon: <RiUserReceivedLine style={value===4?{ color: '#58a776' }:{ color: '#58a776' } }/>

    },
    {
      id: 5,
      location: '/accountAssociates',
      name: 'Following ',
      icon:<RiUserSharedLine style={value===5?{ color: '#58a776' }:{ color: '#58a776' } }/>
    },

  ];

  //style of the tab
  const StyledTab = styled(Tb)(() => ({
    root: {
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: "18px",
      marginRight: theme.spacing(1),
    },
  }));

  //use for ternary operation
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (

    //Grid Container (Parent): with a vertical direction and centered contents
    <Grid container direction='column' alignItems='center' sx={{display:{xs:'none', sm:'flex', md:'flex'},paddingRight:1, paddingLeft:1, paddingTop:2, borderRadius: 2, backgroundColor: 'white', width:{sm: '245px' , md: '300px'}, height:{sm: '550px' , md: '630px'},}}>
            {/* Profile, Followers, Following, My Shop, My Cart */}
            <Grid item>
              {/** Grid container: horizontal direction to hold the user's avatar and details side by side  */}
              <Grid container direction='row' alignItems='center' spacing={matches?1:3}>
                
                <Grid item>
                    <Avatar sx={{ width: {sm:60, md:80}, height: {sm:60, md:80} }}  alt='Tanjiro' src='https://preview.redd.it/k809t2b7zca51.jpg?width=640&crop=smart&auto=webp&s=90c9b0cb15c510b5fb0643954cbb27fd51ff7ecd'/>
                </Grid>
                <Grid item>
                  {/** Grid container: the second component inside the container that serve as a container that ahs a vertical direction for user's full name and username */}
                  <Grid container direction='column' alignItems='center'>
                    <Grid item>
                      <Typography sx={{fontSize:{sm:16, md:18}, fontWeight:'bold'}}  fontFamily='apple-system' >
                        Rorona Virus
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{fontSize:{sm:16, md:18}}}  fontFamily='apple-system'>
                        @Thomas_Rhodz
                      </Typography>
                    </Grid>
                  </Grid> {/** end of vertical container for user fullname and username */}
                </Grid>

              </Grid>{/** End of Grid container for User avatar and details */}
            </Grid>

            <div style={{height:20}} /> {/** space */}

            {/** A horizontal divider */}
            <Grid item sx={{width:'100%'}}>
              <Divider variant='fullWidth' />
            </Grid>
            
            <div style={{height:20}} /> {/** space */}

            {/** Tabs of the ShorcutNavBar */}
            <Grid item>
              <Tbs  TabIndicatorProps={{style: {background:'transparent'}}} orientation={'vertical'} value={value} onChange={handleChange} sx={{ height:{xm:55, sm:390, md:405}, width: {xs:375, sm:200, md:260}}} style={{float:'left'}}>
                {shortcuts.map(({id, location, name, icon}) => (
                      <StyledTab
                        key={id} 
                        icon={icon} 
                        iconPosition="start" 
                        label={<span style={value===id?{ color: '#58a776' }:{ color: '#58a776' } }>{name}</span>} 
                        sx={{fontFamily: 'apple-system', fontSize: {xs:12, sm:15, md:18}}}
                        onClick={()=>{navigate(location)}}
                      />
                ))}
              </Tbs>
            </Grid>
        </Grid> // end of Grid container (Parent)
  )
}

export default ShorcutNavBar