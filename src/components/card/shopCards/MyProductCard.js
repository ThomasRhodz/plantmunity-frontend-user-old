import { Box, Dialog, IconButton, Stack, Tooltip, Typography, Slide } from '@mui/material'
import React, {useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "../../../css/style.css";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ViewMyProductCard from '../../dialogs/ViewMyProductDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const MyProductCard = ({id, productName, productImage, productDescription, toast}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(750));

  const [product, setProduct] = useState(false);

    const openProductDialog = () => {
      setProduct(true);
    }

    const closeProductDialog = () => {
      setProduct(false);
    }
  return (
      <Stack
        direction="column"
        alignItems="center"
        sx={{ width: "100%" }}
        className="grid-item"
      >
        <Box sx={{ width: "100%", height: mobile? 200:300, zIndex: 1 }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt={"product_pic"}
            src={ productImage }
          />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            width: "100%",
            bgcolor: "rgba(92, 109, 99, 0.6)",
            height: mobile? 30:50,
            mt: mobile?"-30px":"-50px",
            pl: 3,
            pr: 1,
            zIndex: 2,
          }}
        >
          <Typography
            variant={mobile? "body1" : "h6"}
            sx={{ fontFamily: "arvo", flexGrow: 1, color: "white" }}
          >
            {productName}
          </Typography>
          <Tooltip title="view details">
            <IconButton onClick={()=>openProductDialog()} sx={{ color: "white" }}>
              <ArrowForwardIosRoundedIcon sx={{  fontSize:{xs:18, sm:20, md:25} }} />
            </IconButton>
          </Tooltip>
        </Stack>

        <Dialog
          fullScreen={mobile? true:false}
          maxWidth={false}
          open={product}
          onClose={closeProductDialog}
          TransitionComponent={Transition}
        >
          <ViewMyProductCard
            productId={id}
            productName={productName}
            productImage={productImage}
            productDescription={productDescription}
            handleClose={()=>closeProductDialog()}
            toast={(stringMessage)=>toast(stringMessage)}
          />
        </Dialog>
      </Stack>
  );
}

export default MyProductCard