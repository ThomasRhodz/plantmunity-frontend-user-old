import * as React from 'react';
import { Box, Grid, Stack, Typography, IconButton, Tooltip, Dialog, Slide } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "../../../css/style.css";
import ViewProductDialog from '../../dialogs/ViewProductDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductsCard = ({ id, productName, productImage, productPrice}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(1450));
  const mobile = useMediaQuery(theme.breakpoints.down(750));
  console.log(productImage)
  return (
    <Grid
      key={id}
      item
      sx={{
        width: {
          xs: "47%",
          sm: mobile ? "31%" : "32%",
          md: tablet ? "31%" : "32%",
        },
        height: { xs: 200, sm: 250, md: 250 },
        mr: { xs: 1, sm: 1, md: 2 },
        mb: { xs: 1, sm: 1, md: 2 },
        bgcolor: "blue",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)",
      }}
    >
      <Stack
        direction="column"
        alingItems="center"
        sx={{ width: "100%", overflow: "hidden" }}
        className="grid-item"
      >
        <Box sx={{ width: "100%", height: { xs: 200, sm: 250, md: 250 } }} onClick={() => handleClickOpen()}>
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
            height: 55,
            mt: "-55px",
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
            <Typography
              variant="caption"
              sx={{ fontFamily: "Arvo", color: "white", ml: "1px" }}
            >
              {"Php " + productPrice}
            </Typography>
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
      </Stack>

      <Dialog
        fullScreen={mobile ? true : false}
        maxWidth={mobile ? true : false}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ViewProductDialog
          handleClose={() => handleClose()}
          productId={id}
          productName={productName}
          productPrice={productPrice}
          productImage={productImage}
          inShop = {false}
        />
      </Dialog>
    </Grid>
  );
};

export default ProductsCard;
