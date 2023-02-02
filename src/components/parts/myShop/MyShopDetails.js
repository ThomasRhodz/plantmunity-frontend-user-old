import React, {useState, useEffect} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, Grid, Rating, Stack, Typography } from '@mui/material'
import { useGetMyShopQuery } from '../../../app/services/shopApi';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import {FaStore} from 'react-icons/fa';
import EditShopForm from '../../forms/EditingForms/EditShopForm';

const MyShopDetails = () => {
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down(1200));
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    
    const {data} = useGetMyShopQuery(undefined, {refetchOnMountOrArgChange: true});

    console.log(data)

    const [shopName, setShopName] = useState('');
    const [shopID, setShopID] = useState('');
    const [shopLogo, setShopLogo] = useState('');
    const [bio, setBio] = useState('');
    const [tags, setTags] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [open, setOpen] = useState('');
    const [close, setClose] = useState('');

    const myShop = data? data.shop : [];

    useEffect (()=>{
       
        console.log(myShop)
        setShopLogo(myShop ? myShop.shop_logo : '');
        setShopName(myShop ? myShop.shop_name : '')
        setTags(myShop ? myShop.tags : '')
        setBio(myShop ? myShop.bio_note : '')
        setTelephone(myShop ? myShop.telephone : '')
        setEmail(myShop ? myShop.email : '')
        setContact(myShop ? myShop.mobile : '')
        setAddress(myShop ? myShop.address : '')
        setShopID(myShop ? myShop.id : '')
        setOpen(myShop ? myShop.time_open : '')
        setClose(myShop ? myShop.time_close : '')
    }, [data])

    const [openEditForm, setOpenEditForm] = useState(false);

    const openEdit = () => {
        setOpenEditForm(true)
    };

    const closeEdit = () => {
        setOpenEditForm(false)
    }
  return (
    <Grid
      container
      direction={tablet ? "column" : "row"}
      alignItems={"center"}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Grid item sx={{ width: { md: tablet ? 300 : "25%" }, height: 200, display: shopLogo===null ? 'none' :'display' }}>
        <Stack
          direction="column"
          alignItems="center"
          sx={{ width: "100%", height: "100%" }}
        >
          <img
            src={shopLogo}
            alt="shop_logo"
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Stack>
      </Grid>

      <Grid 
        item 
          sx={{
            ml:{xs:0, sm:0, md:5},
            mr: {xs:0, sm:0, md:5},
            width:200,
            height:200, borderRadius:'50%', overflow:'hidden',
            border:'4px solid #5C6D63',
            display: shopLogo===null ? 'display' :'none'
        }}
      >
        <Stack direction='row' alignItems={'center'} sx={{ height:'100%' }}>
            <Stack direction='column' alignItems={'center'} sx={{ width:'100%' }}>
                <FaStore style={{ fontSize:100, color:'#5C6D63'}} />
            </Stack>
        </Stack> 
      </Grid>

      <Grid
        item
        sx={{
          width: { md: tablet ? 500 : "45%" },
          height: { sm: "100", md: tablet ? 200 : 150 },
        }}
      >
        <Stack
          direction="column"
          alignItems={tablet ? "center" : "left"}
          sx={{ width: "100%", pt: 1 }}
        >
          <Typography
            variant={mobile ? "h5" : "h4"}
            align={tablet ? "center" : "left"}
            sx={{ fontFamily: "Arvo" }}
          >
            {shopName}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography
              variant={mobile ? "body2" : "body1"}
              sx={{ fontFamily: "Arvo", ml: "3px", mr: 1 }}
            >
              Rating:
            </Typography>
            <Rating size="small" defaultValue={2} readOnly />
          </Stack>

          <Stack
            direction={"column"}
            alignItems={"left"}
            sx={{ mt: tablet ? 0 : 1 }}
          >
            <Stack
              direction={tablet ? "column" : "row"}
              alignItems={tablet ? "left" : "center"}
              sx={{ mt: 1 }}
            >
              <Stack direction="row" sx={{ mt: tablet ? "5px" : 0 }}>
                <EmailRoundedIcon sx={{ fontSize: 20 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Arvo",
                    ml: mobile ? "6px" : "3px",
                    mr: tablet ? 0 : 2,
                  }}
                >
                  {email}
                </Typography>
              </Stack>

              <Stack direction="row" sx={{ mt: tablet ? "5px" : 0, display: contact === null ? 'none':'flex' }}>
                <SmartphoneRoundedIcon sx={{ fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Arvo",
                    ml: mobile ? "6px" : "3px",
                    mr: tablet ? 0 : 2,
                  }}
                >
                  {contact}
                </Typography>
              </Stack>

              <Stack direction="row" sx={{ mt: tablet ? "5px" : 0, display: telephone === null ? 'none':'flex' }}>
                <LocalPhoneRoundedIcon sx={{ fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Arvo",
                    ml: mobile ? "6px" : "3px",
                    mr: tablet ? 0 : 2,
                  }}
                >
                  {telephone}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" sx={{ mt: tablet ? "5px" : 1 }}>
              <LocationOnRoundedIcon sx={{ fontSize: 18 }} />
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "Arvo",
                  ml: mobile ? "6px" : "3px",
                  mr: tablet ? 0 : 2,
                  maxWidth: tablet ? 250 : 500,
                }}
              >
                {address}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        sx={{
          mb: { xs: 1, sm: 2, md: tablet ? 2 : 0 },
          pr: { xs: 0, sm: 0, md: tablet ? 0 : 5 },
          mt: { xs: 2, sm: 3, md: tablet ? 2 : 0 },
          width: { xs: "80%", sm: "60%", md: tablet ? 300 : "30%" },
          height: { xs: "100%", sm: 150, md: 135 },
        }}
      >
        <Stack direction="column">
          <Button
            variant="contained"
            size="regular"
            sx={compStyle["shop-botton"]}
          >
            Add Product
          </Button>

          <Button
            onClick={()=>openEdit()}
            variant="contained"
            size="regular"
            sx={compStyle["shop-botton"]}
          >
            Edit Shop Details
          </Button>

          <Button
            variant="contained"
            size="regular"
            sx={compStyle["close-shop-botton"]}
          >
            Close Shop
          </Button>
        </Stack>
      </Grid>

      <Dialog
        maxWidth={false}
        fullScreen={mobile}
        scroll="body"
        open={openEditForm}
        onClose={closeEdit}
      >
        <EditShopForm
          id={shopID}
          name={shopName}
          logo={shopLogo}
          email={email}
          address={address}
          contact={contact}
          telephone={telephone}
          tOpen={open}
          tClose={close}
          bio={bio}
          tags={tags}
          handleClose={() => closeEdit()}
          // toast={(stringMessage)=>toast(stringMessage)}
        />
      </Dialog>
    </Grid>
  );
}

export default MyShopDetails


const compStyle ={
   
  'shop-botton':{ 
      mt:1,
      width:'100%',
      height:40,
      textTransform:'none',
      fontFamily:'Arvo',
      borderRadius:25,
      border:'2px #5C6D63 solid',
      bgcolor:'white',
      color:'#5C6D63',
      '&:hover':{
          bgcolor:'#5C6D63',
          color:'white',
      }
  },
  'close-shop-botton':{
      mt:1, 
      width:'100%',
      height:40,
      textTransform:'none',
      fontFamily:'Arvo',
      borderRadius:25,
      border:'2px #c74224 solid',
      bgcolor:'white',
      color:'#c74224',
      '&:hover':{
          bgcolor:'#c74224',
          color:'white',
      }
  }
}
