import React from 'react'
import {Grid, Typography} from '@mui/material/'
import Tbs from '@mui/material/Tabs';
import Tb from '@mui/material/Tab';

import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { styled } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Follower from '../card/affiliateCards/FollowerCard';
import Following from '../card/affiliateCards/FollowingCard'

const AssociateTab = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    //const matches2 = useMediaQuery(theme.breakpoints.down('sm'));

    // const StyledTab = withStyles((theme) => ({
    //   root: {
    //     textTransform: "none",
    //     fontWeight: theme.typography.fontWeightRegular,
    //     fontSize: "18px",
    //     marginRight: theme.spacing(1),
    //   },
    // }))((props) => <Tb {...props} />);
        
  
    const StyledTab = styled(Tb)(() => ({
      root: {
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: "18px",
        marginRight: theme.spacing(1),
      },
    }));


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
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/277996966_182226144133860_6047815247127755952_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFYVrud_zH2psKcoZ9A6gwW1ByBJgu-hbvUHIEmC76Fu0x0QIPFiG6ICndsW8OWWGgIPMBo8yQVj2V9gDQVZicH&_nc_ohc=Q9slaJqIp5UAX8fKIiM&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT-u--ri1ZPzXzWYPQGbwXSYr-rFYxu2RE1GcrZ99qQGHg&oe=62DF3C9C',
        bio: 'By plucking her petals, you do not gather the beauty of the flower. :)',
        followBackStatus:1,

      },
      {
        userID: '2',
        userName: 'RoxLee',
        user:'Roxene Mae Lee',
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/55853509_2130738117008914_7763288666104922112_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE6_cLS2VsAwKCRvOV-Juvi5AiEu2brgsfkCIS7ZuuCxyGmBe6Os4u8N-lT3kjLBvByVZy1q9_bbMjMrLlPWlcM&_nc_ohc=bpsFlUx_ATUAX_W3GVW&tn=NG8G1JopL1e6n6Ef&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT8cM3ZpL3Bjr4LX2HxN2Wvz55tRzf2LFw8BTGWsfnL_1A&oe=62FD559A',
        bio: 'Our intuitive powers increase when you are with plants because your mind is silenced',
        followBackStatus:1,

      },
      {
        userID: '3',
        userName: 'Ela_EH_EH',
        user:'Ela Jude Dejadena',
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/61237663_431366000974665_7872793470111318016_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF5MxQ8yZFZcfmZa1unNnMbDOOANW5DgrkM44A1bkOCubXpRyYUYtN5mNu2bftKuvnzEu-q1OfdyfVl_-YpoMVw&_nc_ohc=HmHc5cy1YKIAX-vxPBr&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT8IW-fZ5mMWfphv2K1N7BMkY6ERRFISwHWwr6E193F9BA&oe=62FD6B38',
        bio: 'Let there be plants! AHAHAHAHA :)',
        followBackStatus:0,

      },
      {
        userID: '4',
        userName: 'ChenVirtue',
        user:'Rochen Virtucio',
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/236862091_4004651502995354_7019314490812658128_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFCd_IXPTp2QMHdJa3a1DgcPrsouASoynU-uyi4BKjKdblB8lf7JH-Rx1E_5maIIP30CGgd5M0Udn6Rv6tSxWzA&_nc_ohc=RH2CiJw5gvUAX993S5a&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT_GPcuPC0rHZTK6_hfcxjIHSP_B6bZ-IJYawxhEnaeXaQ&oe=62DE454F',
        bio: 'Thou shall not ruin my plant arts',
        followBackStatus:1,

      },
      {
        userID: '5',
        userName: 'BabyKarlita30',
        user:'Andrea Karla Garcia',
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.18169-9/28991_285115631618596_1102731305_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=de6eea&_nc_eui2=AeGiBBWrtTYCDw_sEEFFGjMYxHsI6cRfnrvEewjpxF-eu8GrFiik30oLjdWv-WfW3Po2UlJ4G1ePeloluOwIweyt&_nc_ohc=NuaNZffOudsAX80B5Oc&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT-w87XxyeLKLXWudpfhWBc8f5mh3tgTPXZF31kujQxGww&oe=62FE3A27',
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
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/277996966_182226144133860_6047815247127755952_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFYVrud_zH2psKcoZ9A6gwW1ByBJgu-hbvUHIEmC76Fu0x0QIPFiG6ICndsW8OWWGgIPMBo8yQVj2V9gDQVZicH&_nc_ohc=Q9slaJqIp5UAX8fKIiM&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT-u--ri1ZPzXzWYPQGbwXSYr-rFYxu2RE1GcrZ99qQGHg&oe=62DF3C9C',
        bio: 'By plucking her petals, you do not gather the beauty of the flower. :)',
        followBackStatus:1,

      },
      {
        userID: '2',
        userName: 'RoxLee',
        user:'Roxene Mae Lee',
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/55853509_2130738117008914_7763288666104922112_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE6_cLS2VsAwKCRvOV-Juvi5AiEu2brgsfkCIS7ZuuCxyGmBe6Os4u8N-lT3kjLBvByVZy1q9_bbMjMrLlPWlcM&_nc_ohc=bpsFlUx_ATUAX_W3GVW&tn=NG8G1JopL1e6n6Ef&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT8cM3ZpL3Bjr4LX2HxN2Wvz55tRzf2LFw8BTGWsfnL_1A&oe=62FD559A',
        bio: 'Our intuitive powers increase when you are with plants because your mind is silenced',
        followBackStatus:1,

      },
      {
        userID: '3',
        userName: 'Tyuzu_JC',
        user:'John Cloyd Bajao',
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t31.18172-8/16722549_1363578943680171_868300315503101276_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG5QJcE1iIgOGjQZfq__HLG4Xh3SLtGAlvheHdIu0YCWxl6fcIqQtnxGqEt2x1jTd4tz1u58Y-HY2pENHsGn_rq&_nc_ohc=LMqZB9za0XQAX-hORrV&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT8F4mrF3fcGWClrnhBufjBhx--y1dwy68aH-h_4QHKv9g&oe=62FF9FFF',
        bio: 'Let there be plants! AHAHAHAHA :)',
        followBackStatus:0,

      },
      {
        userID: '4',
        userName: 'ChenVirtue',
        user:'Rochen Virtucio',
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/236862091_4004651502995354_7019314490812658128_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFCd_IXPTp2QMHdJa3a1DgcPrsouASoynU-uyi4BKjKdblB8lf7JH-Rx1E_5maIIP30CGgd5M0Udn6Rv6tSxWzA&_nc_ohc=RH2CiJw5gvUAX993S5a&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT_GPcuPC0rHZTK6_hfcxjIHSP_B6bZ-IJYawxhEnaeXaQ&oe=62DE454F',
        bio: 'Thou shall not ruin my plant arts',
        followBackStatus:1,

      },
      {
        userID: '5',
        userName: 'AdiValentine',
        user:'Adrian Alcantara',
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/81224689_3118163938197709_9092130167140122624_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF1qnuzw_PUVkLyR0IoB-Btqrre_XEKvbequt79cQq9t_9YEpD96m8D5n4n7q2WN_UhHvwCQiDOFowbGrnfRms_&_nc_ohc=J2iWr3t9kxMAX9WHxp4&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT_ngut44i_tu1FDC4tvDogl8lkX9ZbJHu6rpba1LhOPWQ&oe=62FFEF23',
        bio: '4qoh c 4ndr3A who r3411y 10v3 pl4nts',
        followBackStatus:0,

      },
      {
        userID: '6',
        userName: 'MigolFern',
        user:'Miguel Emmanuel Fernandez',
        userProfilePic: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/117236805_4429738287051153_8893824347950741393_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFMZg_bVKJTi2HtVxK4QfepeavJpcSbt6l5q8mlxJu3qeWWv7GuxQDbF6EWQvRiyGzcHpj_4GfNl4JcV-grZbU-&_nc_ohc=7oIU-yvjTMQAX8iG2AW&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT80EJ4I_tKedA9UjDoDOvH1DkifSUlQYQsc44zV6PMNsA&oe=62FE80EB',
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