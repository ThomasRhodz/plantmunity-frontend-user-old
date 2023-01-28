import React from 'react'
import {Divider, Grid, Tab, Tabs, Typography} from '@mui/material/'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Follower from '../card/affiliateCards/FollowerCard';
import Following from '../card/affiliateCards/FollowingCard'

const AssociateTab = () => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(1200));
  const mobile = useMediaQuery(theme.breakpoints.down(700));
    
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
          <Grid item key={follower.userID} sx={{ width:'100%' }}>
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
          <Grid item key={follower.userID}  sx={{ width:'100%' }}>
            <Following userName={follower.userName} user={follower.user} userProfilePic={follower.userProfilePic} bio={follower.bio} followBackStatus={follower.followBackStatus}/>
            <Grid sx={{height:10}}/>
          </Grid>
      )
    })

  return (
    <Grid
      container 
      direction={mobile ? 'column' : 'row'}
      sx={{ 
        width:'100%',
        bgcolor:'white',
        height:mobile ? '100%' : "85vh",
        borderRadius:3,
        mt:3,
        //border: '2px solid #5C6D64',
        boxShadow: "2.0px 6.0px 6.0px hsl(0deg 0% 0% / 0.38)",
        overflow:'hidden'
       }}
    >
      <Grid item sx={{ width:mobile ? '100%': tablet? "18%" : "13%", 'height':'100%' , p:2, pr:0}}>
        <Tabs
        centered={tablet? true:false}
          value={value}
          sx={{ width:'100%' }}
          orientation={mobile ? 'horizontal' : 'vertical'}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          TabIndicatorProps={{
              sx: { height: 5, width:5, borderRadius:5 } 
          }}
        >
          <Tab value= {0} label={
            <Typography 
              align='left'
              variant={mobile ? 'body2' : tablet ? 'body1': 'h6' }
              sx={{
                  fontFamily:'raleway', 
                  fontWeight:'bold',
                  width:'100%', 
                  textTransform: 'none', 
                  color: value === 0 ? '#5C6D64' : '#8e896b'  
              }}
            >
                Following
            </Typography>} 
          />
          <Tab value= {1} label={
            <Typography 
              align='left'
              variant={mobile ? 'body2' : tablet ? 'body1':  'h6' }
              sx={{
                  width:'100%',
                  fontFamily:'raleway', 
                  fontWeight:'bold', 
                  textTransform: 'none', 
                  color: value === 1 ? '#5C6D63' : '#8e896b'  
              }}
            >
                Followers
            </Typography>
            } 
          />
          <Tab value= {2} label={
            <Typography 
              align='left'
              variant={mobile ? 'body2'  :tablet ? 'body1': 'h6' }
              sx={{
                  width:'100%',
                  fontFamily:'raleway', 
                  fontWeight:'bold', 
                  textTransform: 'none', 
                  color: value === 2 ? '#5C6D63' : '#8e896b'  
              }}
            >
                Requests
            </Typography>
            } 
          />
        </Tabs>

        
      </Grid>

      <Grid item sx={mobile ? {width:'100%'} : {height:'100%' } }>
       <Divider orientation={mobile ? 'horizontal' : 'vertical'}/>
      </Grid>

      <div style={{ flexGrow:1 }}/>

      <Grid item sx={{ml: mobile? 0:1, width:mobile ? '100%' : tablet ? "78%" : "85%", height:'100%', p:mobile?0:2, overflowY:'auto' }}>

        <Grid container direction='column' alignItems={'center'} sx={{ width:'100%', p:2 }}>
            {
             value === 0 ? renderFollowings : value === 1 ? renderFollowers : 'Hello'
            }
        </Grid>

      </Grid>

    </Grid>
  )
}

export default AssociateTab