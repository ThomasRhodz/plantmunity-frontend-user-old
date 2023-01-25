import React, {useEffect} from 'react';
import { Box, Dialog, Grid, Stack, Typography, IconButton, Tooltip, Rating, TextField, Button, Slide } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "../../css/style.css";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FeedbackViewer from '../parts/marketplace/FeedbackViewer';

import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import StorefrontIcon from '@mui/icons-material/Storefront';

import ViewShop from './ViewShop';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const ViewProductDialog = ({productId, productName, productImage, handleClose, inShop, productPrice, toast}) => {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.down(1000));
    const mobile = useMediaQuery(theme.breakpoints.down(750));

    const [attribute, setAttribute] = React.useState('');
    const [quantity, setQuantity] = React.useState(0);
    const [amountPayable, setAmountPayable] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClickClose = () => {
      setOpen(false);
    };

    const handleChangeAttribute = (event) => {
        setAttribute(event.target.value);
    };

    const calculateAmmountPayable = () => {
        if (attribute !== ''){

            const subTotal = attribute * quantity
            const VAT = subTotal * 0.12
            setAmountPayable(VAT + subTotal)
        }else{
            setAmountPayable(0)
        }
    };

    useEffect(() => {
        calculateAmmountPayable()
    }, [quantity,attribute]);

    const handleAddQuantity = () => {
        setQuantity(quantity+1);
    };
    const handleMinusQuantity = () => {
        if (quantity <= 0){
             setQuantity(0);
        }else{
            setQuantity(quantity-1);
        }
       
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

          <Box sx={{flexGrow: 1, display: { xs: "flex", sm:mobile? 'flex': "none", md: "none" }}}/>

            {/* Icon for going to the store of the viewed products */}
          <Box sx={{ display: inShop ? 'none' : 'flex' }}>
            <Tooltip title={"Go to Store"}>
              <IconButton onClick={() => handleClickOpen()} sx={{ bgcolor:'white', '&:hover':{bgcolor:'#BFCBA5', color:'white'} }} >
                <StorefrontIcon />
              </IconButton>
            </Tooltip>
          </Box>
          
          <Box sx={{flexGrow: 1,display: { xs: "none", sm: mobile ? "none" : "flex", md: "flex" },}}/>
          
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
              <Typography variant="h4" sx={{ fontFamily: "Arvo" }}>
                {productName}
              </Typography>

              <Typography
                variant="body2"
                align={mobile ? "center" :'left'}
                sx={{ fontFamily: "Raleway", width: "100%" }}
              >
                {"Palatintin Hand Graden"}
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
                sx={{ fontFamily: "Raleway", width: "100%", pr: 1 }}
              >
                {
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
              </Typography>

              <Typography variant="body1" sx={{ fontFamily: "Arvo", mt: 3, mb: 1 }}>
                {"Purchase Details"}
              </Typography>

              <Stack
                direction={mobile ? "column" : "row"}
                alignItems={"center"}
                sx={{ mt: 1, width:'100%' }}
              >
                <Stack direction="column" sx={{ width:'100%' }}>
                  <FormControl
                    style={{ width: mobile ? '100%' : desktop ? 150 : 190 }}
                    size="small"
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ fontFamily: "Arvo" }}
                    >
                      Size | No. of leaves
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={attribute}
                      label="Size | No. of leaves"
                      onChange={handleChangeAttribute}
                    >
                      <MenuItem value={250}>3 leaves</MenuItem>
                      <MenuItem value={350}>4 leaves</MenuItem>
                      <MenuItem value={500}>5 leaves</MenuItem>
                    </Select>
                  </FormControl>

                  <Stack direction="row" alignItems={mobile ? "center" :"center"} sx={{ mt: 2 }}>
                    <Box
                      sx={{
                        bgcolor: "#BFCBA5",
                        mr: "2px",
                        borderRadius: "5px 0px 0px 5px ",
                      }}
                    >
                      <IconButton
                        onClick={() => handleMinusQuantity()}
                        sx={{ p: "7px" }}
                      >
                        <RemoveRoundedIcon sx={{ color: "white" }} />
                      </IconButton>
                    </Box>
                    <TextField
                      sx={{ width: desktop ? 72 : 112 }}
                      size="small"
                      type="number"
                      label="Quantity"
                      value={quantity}
                      InputProps={{
                        readOnly: true,
                        style: {
                          paddingLeft: 1,
                        },
                      }}
                    />
                    <Box
                      sx={{
                        bgcolor: "#BFCBA5",
                        ml: "2px",
                        borderRadius: "0px 5px 5px 0px ",
                      }}
                    >
                      <IconButton
                        onClick={() => handleAddQuantity()}
                        sx={{ p: "7px" }}
                      >
                        <AddRoundedIcon sx={{ color: "white" }} />
                      </IconButton>
                    </Box>

                    <Box sx={{ display:mobile?'flex':'none', flexGrow:1 }}/>

                    <Stack direction="column" align="right" sx={{ display:mobile?'flex':'none' }}>
                      <Typography
                        variant={desktop ? "h6" : "h4"}
                        sx={{
                          fontFamily: "Arvo",
                          fontWeight: "bold",
                          color: "#5C6D63",
                        }}
                      >
                        {"Php " + amountPayable}
                      </Typography>
                      <Typography
                        variant={desktop ? "caption" : "body1"}
                        sx={{ fontFamily: "Arvo" }}
                      >
                        {"12% VAT included"}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <div style={{ flexGrow: 1 }} />
                <Stack direction="column" align="right" sx={{ display:mobile?'none':'flex', }}>
                  <Typography
                    variant={desktop ? "h5" : "h4"}
                    sx={{
                      fontFamily: "Arvo",
                      mt: 2,
                      fontWeight: "bold",
                      color: "#5C6D63",
                    }}
                  >
                    {"Php " + amountPayable}
                  </Typography>
                  <Typography
                    variant={desktop ? "body2" : "body1"}
                    sx={{ fontFamily: "Arvo", minWidth:150}}
                  >
                    {"12% VAT included"}
                  </Typography>
                </Stack>
              </Stack>
              <Button
                startIcon={<AddShoppingCartRoundedIcon />}
                variant="contained"
                sx={{
                  mt: mobile ? 3 : 5,
                  width: "100%",
                  height: 40,
                  color: "white",
                  fontFamily: "Arvo",
                  textTransform: "none",
                  bgcolor: "#58a776",
                }}
              >
                Add to cart
              </Button>

              {/* calling the component for displaying feedbacks of products */}
              <FeedbackViewer id={productId} />
            </Stack>
          </Grid>{/* end of detail container */}

        </Grid>{/* end of container that makes the image and detail into row */}
        
      </Grid> {/* end of body container */}

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
    // end of main container
  );
}

export default ViewProductDialog