import React from 'react'
import Grid from '@mui/material/Grid'
import Tbs from '@mui/material/Tabs';
import Tb from '@mui/material/Tab';
import Typography from "@material-ui/core/Typography";

import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { withStyles } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Follower from '../card/FollowerCard';
import Following from '../card/FollowingCard'

const AssociateTab = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matches2 = useMediaQuery(theme.breakpoints.down('sm'));

    const StyledTab = withStyles((theme) => ({
      root: {
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: "18px",
        marginRight: theme.spacing(1),
      },
    }))((props) => <Tb {...props} />);
        
  
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      // console.log(newValue)
    };

    //Array of followers
    const sampleFollowers = [
      {
        userID: '1',
        userName: 'AnnaNovs',
        user:'Anna Novicio',
        userProfilePic: 'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/240588686_130521899304285_3184809002360963281_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHIm8cKzyJWhuCd5e-sDFKB3C4Q646xRWPcLhDrjrFFY6C7ZEBgcQv4qfMXWftnPCn-P4vsg6lE1NnW9oKnyNL1&_nc_ohc=VlPMXtS3VtMAX951lYi&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT_We-KTuz0ssGpv8j2jFjcUF0WIoavLe59KBhRmDDtTrg&oe=62A0BC2F',
        bio: 'By plucking her petals, you do not gather the beauty of the flower. :)',
        followBackStatus:1,

      },
      {
        userID: '2',
        userName: 'RoxLee',
        user:'Roxene Mae Lee',
        userProfilePic: 'https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/134413510_3564518083630903_8730801754340197184_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeHU_A2mtt_yKZ9aL7GXNgr4Dmu2sS_rRJwOa7axL-tEnL9aaxKX1Mq9e3lq8jdaGO95tJ_XbOMi7R33FeG2YjMx&_nc_ohc=HIhuRbYOYvMAX_7tKXP&_nc_ht=scontent.fmnl8-2.fna&oh=00_AT_KiVxJCeNaVNGEha3XiTSov68d_wYaQp_kvVtZoifuQA&oe=629D8741',
        bio: 'Our intuitive powers increase when you are with plants because your mind is silenced',
        followBackStatus:1,

      },
      {
        userID: '3',
        userName: 'Ela_EH_EH',
        user:'Ela Jude Dejadena',
        userProfilePic: 'https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/61237663_431366000974665_7872793470111318016_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=174925&_nc_eui2=AeF5MxQ8yZFZcfmZa1unNnMbDOOANW5DgrkM44A1bkOCubXpRyYUYtN5mNu2bftKuvnzEu-q1OfdyfVl_-YpoMVw&_nc_ohc=HIlDhUEqgLUAX-1-wez&_nc_ht=scontent.fmnl8-2.fna&oh=00_AT8fHZfPyAIMEs0a8mEHg-8lQxrjSRzQiOC-aqozb8R5tA&oe=629E7F38',
        bio: 'Let there be plants! AHAHAHAHA :)',
        followBackStatus:0,

      },
      {
        userID: '4',
        userName: 'ChenVirtue',
        user:'Rochen Virtucio',
        userProfilePic: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/92700747_2660091207451397_4246478627056648192_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGjX0AaKqWcgvKJyXq6iYP3i6tartsrCfeLq1qu2ysJ92oF7WHBT4FDv8ewlTb7TfAkH8V_R9-HDO9rmzG3bOyS&_nc_ohc=1WmEznMGE-kAX86KIDH&_nc_ht=scontent.fmnl13-2.fna&oh=00_AT99ZP5vvdAfQmPL-oZRj-Gn8-CnRLsRwGd5mn1veR1bSA&oe=62C1F339',
        bio: 'Thou shall not ruin my plant arts',
        followBackStatus:1,

      },
      {
        userID: '5',
        userName: 'BabyKarlita30',
        user:'Andrea Karla Garcia',
        userProfilePic: 'https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.18169-9/10628107_533279863468837_7893204226275894156_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=174925&_nc_eui2=AeGXT1rW7N9uCBZTw9VHZiev7QFXizsYqQvtAVeLOxipC4rjv8nc0st8hARKkhR-I15UWzHhZxPkxqN4IeVHHLSh&_nc_ohc=vjW7_j0McpEAX_04d0O&_nc_ht=scontent.fmnl8-2.fna&oh=00_AT_bqZI3ofPHT1cNv6BKCsJwuAXVbn1MhfcIMofncj9kaA&oe=629F95DE',
        bio: '4qoh c 4ndr3A who r3411y 10v3 pl4nts',
        followBackStatus:0,

      },
    ];

    //creating a collection of followers by mapping the detail from the array of followers inserted in the FollowerCard component
    const renderFollowers = sampleFollowers.map(follower => {
      return(
          //It is inserted inside a grid item because this collection of Grid item will be inserted in grid container
          <Grid item key={follower.userID}>
            <Follower userName={follower.userName} user={follower.user} userProfilePic={follower.userProfilePic} bio={follower.bio} followBackStatus={follower.followBackStatus}/>
            <Grid sx={{height:10}}/>
          </Grid>
      )
    })
    

    //Array of followings
    const sampleFollowings = [
      {
        userID: '1',
        userName: 'AnnaNovs',
        user:'Anna Novicio',
        userProfilePic: 'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/240588686_130521899304285_3184809002360963281_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHIm8cKzyJWhuCd5e-sDFKB3C4Q646xRWPcLhDrjrFFY6C7ZEBgcQv4qfMXWftnPCn-P4vsg6lE1NnW9oKnyNL1&_nc_ohc=VlPMXtS3VtMAX951lYi&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT_We-KTuz0ssGpv8j2jFjcUF0WIoavLe59KBhRmDDtTrg&oe=62A0BC2F',
        bio: 'By plucking her petals, you do not gather the beauty of the flower. :)',
        followBackStatus:1,

      },
      {
        userID: '2',
        userName: 'RoxLee',
        user:'Roxene Mae Lee',
        userProfilePic: 'https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/134413510_3564518083630903_8730801754340197184_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeHU_A2mtt_yKZ9aL7GXNgr4Dmu2sS_rRJwOa7axL-tEnL9aaxKX1Mq9e3lq8jdaGO95tJ_XbOMi7R33FeG2YjMx&_nc_ohc=HIhuRbYOYvMAX_7tKXP&_nc_ht=scontent.fmnl8-2.fna&oh=00_AT_KiVxJCeNaVNGEha3XiTSov68d_wYaQp_kvVtZoifuQA&oe=629D8741',
        bio: 'Our intuitive powers increase when you are with plants because your mind is silenced',
        followBackStatus:1,

      },
      {
        userID: '3',
        userName: 'Tyuzu_JC',
        user:'John Cloyd Bajao',
        userProfilePic: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/1610061_1030534683651267_6497129812672522428_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=174925&_nc_eui2=AeG8U41hkOzIoshwWIouXefsfthzniKVCol-2HOeIpUKiW7_uOu_mjkbBZRPsSQWAnT2btwFZDz43l2_LOGMv5qK&_nc_ohc=3K8FQ062rfQAX_0P1Ev&_nc_ht=scontent-hkt1-1.xx&oh=00_AT_j_YMteOBIhOXSLCrzNwhQimKRJjlP9WBkD-5irCWwFg&oe=629E3DC0',
        bio: 'Let there be plants! AHAHAHAHA :)',
        followBackStatus:0,

      },
      {
        userID: '4',
        userName: 'ChenVirtue',
        user:'Rochen Virtucio',
        userProfilePic: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/92700747_2660091207451397_4246478627056648192_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGjX0AaKqWcgvKJyXq6iYP3i6tartsrCfeLq1qu2ysJ92oF7WHBT4FDv8ewlTb7TfAkH8V_R9-HDO9rmzG3bOyS&_nc_ohc=1WmEznMGE-kAX86KIDH&_nc_ht=scontent.fmnl13-2.fna&oh=00_AT99ZP5vvdAfQmPL-oZRj-Gn8-CnRLsRwGd5mn1veR1bSA&oe=62C1F339',
        bio: 'Thou shall not ruin my plant arts',
        followBackStatus:1,

      },
      {
        userID: '5',
        userName: 'AdiValentine',
        user:'Adrian Alcantara',
        userProfilePic: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/81224689_3118163938197709_9092130167140122624_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=174925&_nc_eui2=AeF1qnuzw_PUVkLyR0IoB-Btqrre_XEKvbequt79cQq9t_9YEpD96m8D5n4n7q2WN_UhHvwCQiDOFowbGrnfRms_&_nc_ohc=fR7sZNEp3ZsAX-3R6op&_nc_ht=scontent-hkt1-1.xx&oh=00_AT9HeTDmaW9uL81zrECBgZYUk-AGU9mP00JX_RmiJeT34w&oe=629D0EA3',
        bio: '4qoh c 4ndr3A who r3411y 10v3 pl4nts',
        followBackStatus:0,

      },
      {
        userID: '6',
        userName: 'MigolFern',
        user:'Miguel Emmanuel Fernandez',
        userProfilePic: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/123655823_4832805133411131_7144866376556391478_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=174925&_nc_eui2=AeG-UT4USc8sUzTV5_Ekk15OIwFc4RLFIvEjAVzhEsUi8Rx0WWhTV1kwUi9iKqO4OfbU6ktdkDbscr8PKWszJ3em&_nc_ohc=qrAmA6qO0tQAX9y9Nhs&_nc_ht=scontent-hkt1-1.xx&oh=00_AT809flV3UIthpvlGgq6zQfzn46k9age7qLGkiQAxMIrNA&oe=629E362A',
        bio: 'Im new to plant hobbies, please be good to me',
        followBackStatus:0,

      },
    ];

    //creating a collection of followed users by mapping the data from the array of followings inserted in the FollowingCard component
    const renderFollowings = sampleFollowings.map(follower => {
      return(
          //It is inserted inside a grid item because this collection of Grid item will be inserted in grid container
          <Grid item key={follower.userID}>
            <Following userName={follower.userName} user={follower.user} userProfilePic={follower.userProfilePic} bio={follower.bio} followBackStatus={follower.followBackStatus}/>
            <Grid sx={{height:10}}/>
          </Grid>
      )
    })

  return (
    //Grid Container (Parent): Horizontal direction
    <Grid container direction={matches?'column':'row'} alignContent={matches?'center':''} sx={{width:{xs:'100%',sm:'100%',md:1425},  marginLeft: 'auto', marginRight: 'auto', backgroundColor:'white', overflowX:'hidden'}}>
        {/*Grid item (1st): holds the component that serve as the tab */}

        <Grid item>
            {/* Grid container: will serve as the container that has a vertical direction */}
            <Grid container direction='column' alignItems='center' sx={{padding:4,paddingLeft:0, paddingRight:0}}>
               
                {/* Page title/ Header*/}
                <Grid item>
                    <Typography
                        variant={matches?'h5':'h4'}
                        style={{fontFamily:'apple-system', marginTop: '-10px'}}
                        gutterBottom
                    >
                    Associates   
                    </Typography>
                </Grid>
                <Grid sx={{height:10}}/>

                {/* Grid item that contains the Tabs */}
                <Grid item>
                    <Tbs variant='fullWidth' TabIndicatorProps={{style: {background:'#6da58a'}}} orientation={matches? 'horizontal':'vertical'} value={value} onChange={handleChange} sx={{ height:{xm:55, sm:55, md:500}, borderRight: {xs:0, sm:0, md:1}, borderBottom:{xs:1, sm:1, md:0}, width: {xs:350, sm:700, md:230}}} style={{borderColor: '#dddfdc', marginTop:'-20px'}}>
                    <StyledTab 
                        icon={<ExploreIcon style={value===0?{ color: '#6da58a' }:{ color: '' } }/>} 
                        iconPosition="start" 
                        label={<span style={value===0?{ color: '#6da58a' }:{ color: '' } }>Followers</span>} 
                        sx={{fontFamily: 'apple-system', fontSize: {xs:12, sm:15, md:15}}}
                    />
                    <StyledTab 
                        icon={<ForumIcon style={value===1?{ color: '#6da58a' }:{ color: '' } }/>} 
                        iconPosition="start" 
                        label={<span style={value===1?{ color: '#6da58a' }:{ color: '' } }>Following</span>} 
                        sx={{fontFamily: 'apple-system', fontSize: {xs:12, sm:15, md:15}}}
                    />
                    <StyledTab 
                        icon={<ImageSearchIcon style={value===2?{ color: '#6da58a' }:{ color: '' } }/>} 
                        iconPosition="start" 
                        label={<span style={value===2?{ color: '#6da58a' }:{ color: '' } }>Requests</span>}  
                        sx={{fontFamily: 'apple-system', fontSize: {xs:12, sm:15, md:15}}}
                    />
                    </Tbs>
                </Grid> {/* ending of Grid with tabs */}
            </Grid>{/* ending of vertical container */}
        </Grid>{/* ending of first Grid item in row direction */}

         {/* Grid item that contains followers that displays if follower tab is clicked */}
         <Grid item sx={value===0?{ width:{xs:450,sm:880, md:1192}, height: {xs:'100%',sm:'100%', md:600}, backgroundColor:'#f6f7f6', overflowY:{xs:'hidden', sm:'hidden', md:'scroll'}, padding: {xs:1,sm:2, md:2}}:{display:'none'}}>
          <Grid container direction='column' alignItems='center'>
              {renderFollowers}
              <Grid sx={{height:60, display:{xs:'flex', sm:'flex', md:'none'}}}/>
            </Grid>
        </Grid>

        {/* Grid item that contains list of followed users that displays if following tab is clicked */}
        <Grid item sx={value===1?{ width:{xs:400,sm:880, md:1192}, height: {xs:'100%',sm:'100%', md:600}, backgroundColor:'#f6f7f6', overflowY:{xs:'hidden', sm:'hidden', md:'scroll'}, padding:  {xs:1,sm:2, md:2}}:{display:'none'}}>
          <Grid container direction='column' alignItems='center'>
            {renderFollowings}
            <Grid sx={{height:60, display:{xs:'flex', sm:'flex', md:'none'}}}/>
          </Grid>
        </Grid>
       
    </Grid> // ending of Grid (Parent)
  )
}

export default AssociateTab