import React, {useState} from 'react';
import { Box, Dialog, Divider, Grid, Stack, Typography, IconButton, Tooltip, Rating, Slide, Button } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "../../css/style.css";
import { useSelector } from 'react-redux';

import FeedbackViewer from '../parts/marketplace/FeedbackViewer';

import EditIcon from '@mui/icons-material/Edit';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import { useGetProductVariantsQuery } from '../../app/services/shopApi';
import EditProductForm from '../forms/EditingForms/EditProductForm';
import CreateVariantForm from '../forms/CreateForms/CreateVariantForm';
import VariantCard from '../card/shopCards/VariantCard';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const ViewMyProductCard = ({productId, productName, productImage, productDescription, handleClose, toast}) => {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.down(1000));
    const mobile = useMediaQuery(theme.breakpoints.down(750));
    const mobileSM = useMediaQuery(theme.breakpoints.down(600));
    const shop = useSelector((state)=> state.shop.shop_name)

    const {data} = useGetProductVariantsQuery(productId, {refetchOnMountOrArgChange: true})
    console.log(data)

    const variants = data? data.variants :[];
    const variantArray = Object.values(variants);

    const [variant, setVariant] = useState(false);

    const openVariantForm = () => {
        setVariant(true);
    }

    const closeVariantForm = () => {
        setVariant(false);
    }

    const [open, setOpen] = useState(false);

    const handleOpenEdit = () => {
        setOpen(true);
    };

    const handleCloseEdit = () => {
        setOpen(false);
    };


  return (
    // main container - vertical direction header -> body (horizontal )
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{
        width: {
          xs: "100%",
          sm: mobile ? "100%" : "100%",
          md: desktop ? "100%" : 900,
        },
        height: {
          xs: "100%",
          sm: mobile ? "100%" : 500,
          md: desktop ? "100%" : 500,
        },
        bgcolor: mobile ? "#F3F4F8" : "white",
        overflow: mobile ? "scroll" : "hidden",
      }}
    >
      {/* Header of the card hold the close botton and got to shop botton */}
      <Grid item sx={{ width: "100%", height: 50, zIndex: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: "100%", p: 1 }}
        >
          {/* close icon for mobile screens */}
          <Box
            sx={{
              display: {
                xs: "flex",
                sm: mobile ? "flex" : "none",
                md: "none",
              },
            }}
          >
            <Tooltip title={"close"}>
              <IconButton onClick={() => handleClose()} sx={{ bgcolor: "white" }}>
                <ArrowBackIosNewRoundedIcon sx={{ color: "black" }} />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{flexGrow: 1}}/>
          
          {/* Icon for closing the dialog in desktop screen */}
          <Box sx={{display: {xs: "none",sm: mobile ? "none" : "flex",md: "flex",} }} >
            <Tooltip title={"close"}>
              <IconButton onClick={() => handleClose()}>
                <CancelRoundedIcon sx={{ color: "#BFCBA5" }} />
              </IconButton>
            </Tooltip>
          </Box>

        </Stack> 
      </Grid> {/* End of header container */}

      {/* body */}
      <Grid item sx={{ width: "100%", mt: "-50px", height: "100%" }}>
        {/* creating new grid container for body to set the direction to row */}
        <Grid
          container
          direction={mobile ? "column" : "row"}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          {/* Image container */}
          <Grid item sx={{ width: mobile ? "100%" : "45%", height: mobile ? 300 : 500 }}>
            <img
              alt={productName}
              src={productImage}
              style={{
                width: "100%",
                height: mobile ? 300 : 500,
                objectFit: "cover",
              }}
            />
          </Grid>
          
          {/* detail container */}
          <Grid
            item
            sx={{
              width: mobile ? "90%" : "55%",
              height: mobile ? "100%" : 500,
              overflowY: mobile ? "visible" : "auto",
              mt: mobile ? "-30px" : 0,
              bgcolor: "white",
              borderRadius: mobile ? 5 : 0,
            }}
          >
            {/* using stack to set the direction to vertical */}
            <Stack
              direction={"column"}
              alignItems={mobile ? "center" : "left"}
              sx={{ height: mobile ? "100%" : 500, p: 3 }}
            >
                
                <Typography variant="h4" sx={{ fontFamily: "Arvo", mr:2 }}>
                    {productName}
                </Typography>
                
            

                <Typography
                    variant="body2"
                    align={mobile ? "center" :'left'}
                    sx={{ fontFamily: "Raleway", width: "100%" }}
                >
                    {shop}
                </Typography>

                <Stack direction="row" alignItems="center">
                    
                    <Typography variant="caption" sx={{ fontFamily: "Arvo", mr: "5px" }}>
                    {"91 sold"}
                    </Typography>
                    <Typography variant="caption" sx={{ fontFamily: "Arvo" }}>
                    {"|"}
                    </Typography>
                    <Rating value={2} sx={{ ml: "5px", fontSize: 15 }} />

                </Stack>

                <Typography variant="body1" sx={{ fontFamily: "Arvo", mt: 2 }}>
                    {"Description"}
                </Typography>

                <Typography
                    variant="caption"
                    align="justify"
                    sx={{ fontFamily: "Raleway", width: "100%", pr: 1, mb:2 }}
                >
                    {productDescription}
                </Typography>

                <Button startIcon={<EditIcon/>} onClick={()=>handleOpenEdit()} sx={compStyle['product-botton']}>
                    Edit Product
                </Button>

                <Stack direction='row' alignItems={'center'} sx={{ width:'100%',mt:3, mb:1 }}>
                    <Typography variant={'body1'} sx={{ fontFamily:'Arvo', mr:1 }}>
                            Product Variants
                    </Typography>
                    <Box  sx={{ flexGrow:1, mr:1 }}>
                        <Divider />
                    </Box>
                    <Button 
                        onClick={()=> openVariantForm()} 
                        startIcon={<AddRoundedIcon />} 
                        sx={{ color:'#58A776', fontFamily:'Arvo', textTransform:'none' }}>
                        Add variant
                    </Button>
                </Stack>

                <Grid
                    container
                    direction={'row'}
                    sx={{ width:'100%', bgcolor:'#F3F4F8',p:2, borderRadius:3 }}
                >
                    {variantArray.map(({id, attribute, price, status})=>{
                        return(
                            <Grid 
                              key={id} 
                              sx={{
                                mt:1,
                                mr: 1,
                                p:1,
                                border:'1px solid black',
                                bgcolor:'white',
                                borderRadius:5,
                                '&:hover':{
                                  color:'white',
                                  bgcolor:'green',
                                  border:'1px solid transparent',
                                }
                                }}>
                               <VariantCard pid={productId} id={id} attribute={attribute} price={price} status={status}/> 
                            </Grid>
                        )
                        })
                    }

                </Grid>
                {/* calling the component for displaying feedbacks of products */}
                <FeedbackViewer id={productId} />
            </Stack>
          </Grid>{/* end of detail container */}

        </Grid>{/* end of container that makes the image and detail into row */}
        
      </Grid> {/* end of body container */}

      <Dialog
        fullScreen={mobileSM}
        maxWidth={false}
        open={variant}
        onClose={closeVariantForm}
        TransitionComponent={Transition}
      >
        <CreateVariantForm ID={productId} handleClose={() => closeVariantForm()} />
      </Dialog>

      <Dialog
        fullScreen={mobileSM}
        maxWidth={false}
        scroll='body'
        open={open}
        onClose={handleCloseEdit}
        TransitionComponent={Transition}
      >
        <EditProductForm 
            productID = {productId}
            productName = {productName}
            productImage = {productImage}
            productDescription = {productDescription}
            handleClose = {()=> handleCloseEdit()}
                    />
      </Dialog>
    </Grid>
    // end of main container
  );
}

export default ViewMyProductCard

const compStyle ={
   
    'product-botton':{ 
        mt:1,
        width:'100%',
        height:50,
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
  }