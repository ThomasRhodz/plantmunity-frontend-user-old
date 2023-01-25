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

const InShopProductCard = ({ id, productName, productImage, productPrice}) => {

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
          xs: "100%",
          sm: mobile ? "31%" : "30%",
          md: tablet ? "30%" : "31%",
        },
        height: { xs: 200, sm: 180, md: 250 },
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
        <Box sx={{ width: "100%", height: { xs: 200, sm: 180, md: 250 } }}>
          <img
            src={productImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="product_image"
            onClick={() => handleClickOpen()}
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
              variant={tablet ? "caption" : "body1"}
              sx={{ fontFamily: "Arvo", color: "white", fontWeight:'bold' }}
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
                sx={{ fontSize: { xs: 18, sm: 18, md: 25 } }}
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
          inShop={true}
        />
      </Dialog>
    </Grid>
  );
};

export default InShopProductCard;
