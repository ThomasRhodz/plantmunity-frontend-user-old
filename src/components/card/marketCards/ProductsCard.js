import * as React from 'react';
import { Box, Stack, Typography, IconButton, Tooltip, Dialog, Slide } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import StorefrontIcon from '@mui/icons-material/Storefront';
import "../../../css/style.css";
import ViewProductDialog from '../../dialogs/ViewProductDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductsCard = ({ PID, SID, productName, productImage, productShop, productDescription  }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(750));

  return (
    
      <Stack
        direction="column"
        alignItems="center"
        sx={{ width: "100%", overflow: "hidden" }}
        className="grid-item"
      >
        <Box sx={{ width: "100%", height: { xs: 200, sm: 200, md: 250 } }} onClick={() => handleClickOpen()}>
          <img
            src={productImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="product_image"
            
          />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            width: "100%",
            height: 65,
            mt: "-65px",
            p: 2,
            bgcolor: "rgb(92, 109, 99, 0.6)",
            zIndex: 2,
          }}
        >
          <Stack direction="column" sx={{ flexGrow: 1 }}>
            <Typography
              variant={mobile ? "caption" : "body1"}
              sx={{ fontFamily: "Arvo", color: "white" }}
            >
              {productName}
            </Typography>
            <Stack direction='row' alignItems={'center'}>

              <StorefrontIcon sx={{color:'white', fontSize:18}} />

              <Typography
                variant="caption"
                sx={{ fontFamily: "Raleway", color: "white", marginLeft: '3px' }}
              >
                {productShop}
              </Typography>
            </Stack>
 
          </Stack>

          <Tooltip title="view product">
            <IconButton
              onClick={() => handleClickOpen()}
              sx={{ color: "white" }}
            >
              <ArrowForwardIosRoundedIcon
                sx={{ fontSize: { xs: 18, sm: 20, md: 25 } }}
              />
            </IconButton>
          </Tooltip>
        </Stack>

      <Dialog
        fullScreen={mobile ? true : false}
        maxWidth={false}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ViewProductDialog
          handleClose={() => handleClose()}
          shopId={SID}
          productId={PID}
          productName={productName}
          productImage={productImage}
          productShop={productShop}
          productDescription={productDescription}
          inShop = {false}
        />
      </Dialog>
      </Stack>

    
  );
};

export default ProductsCard;
