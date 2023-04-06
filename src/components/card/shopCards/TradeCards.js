import React from "react";
import { styled } from "@mui/material/styles";
import {
  Divider,
  Stack,
  Card,
  CardContent,
  CardActions,
  Collapse,
  Grid,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useUpdateTradeMutation } from "../../../app/services/transactionApi";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import { MdChangeCircle } from "react-icons/md";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TradeCards    = ({
  OrderID,
  offerDetail,
  productOffer,
  productOfferImage,
  productImage,
  productName,
  productAttribute,
  orderPrice,
  transactionMethod,
  location,
  orderQuantity,
  orderTotal,
  orderStatus,
  cProfile,
  cId,
  cUsername,
  cName,
  cContact,
  cEmail,
  cAddress,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(750));
  const [expanded, setExpanded] = React.useState(false);

  const [updateTrade] = useUpdateTradeMutation()

  const handleUpdate = (stat) => {
    const input = {
      id: OrderID,
      data:{
        'action':stat
      }
    }

    updateTrade(input)
    .then((payload) =>{
      console.log(payload)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%", mt:1 }}>
      <CardContent sx={{ p: 0, height: 100}}>
        <Stack direction="row" alignItems="center" sx={{ height: 100, width: "100%"}}>
          <Stack direction="row" alignItems="center" sx={{ p: 2 }}>
            <CardActions disableSpacing sx={{ marginLeft:'-20px' }}>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            
            <Avatar
              src={cProfile}
              alt="product_image"
              style={{
                width: expanded ? 60 : 50,
                height: expanded ? 60 : 50,
                borderRaidus: 2,
                objectFit: "cover",
              }}
            />
            

            <Stack direction="column" sx={{ ml: 2 }}>
              <Typography
                variant={expanded ? "body1" : "body2"}
                sx={{ fontFamily: "Raleway", fontWeight: "bold" }}
              >
                {cName}
              </Typography>
              <Typography
                variant={expanded ? "body2" : "caption"}
                sx={{ fontFamily: "Raleway" }}
              >
                {"@"+cUsername}
              </Typography>
            </Stack>
          </Stack>
          <div style={{ flexGrow: 1 }} />

          <Stack
            direction={mobile ? "column" : "row"}
            alignItems="center"
            sx={{ ml: 2,  mr: 3, }}
          >
            <Button
              onClick={() => handleUpdate("Accepted")}
              variant="contained"
              size={mobile ? "small" : "regular"}
              sx={{
                mr: mobile ? 0 : 1,
                width: mobile ? 80 : 130,
                textTransform: "none",
                fontFamily: "Arvo",
                color: "white",
                borderRadius: 5,
                fontSize: mobile ? 9 : 13,
                pr: mobile ? 2 : 3,
                pl: mobile ? 2 : 3,
                display: orderStatus === "Pending" ? "flex" : "none",
              }}
            >
              Accept
            </Button>

            <Button
              onClick={() => handleUpdate("Completed")}
              variant="contained"
              size={mobile ? "small" : "regular"}
              sx={{
                mr: mobile ? 0 : 1,
                width: mobile ? 80 : 130,
                textTransform: "none",
                fontFamily: "Arvo",
                color: "white",
                borderRadius: 5,
                fontSize: mobile ? 9 : 13,
                pr: mobile ? 2 : 3,
                pl: mobile ? 2 : 3,
                display: orderStatus === "Accepted" ? "flex" : "none",
              }}
            >
              Complete
            </Button>

            <Button
              onClick={() => handleUpdate("Rejected")}
              variant="contained"
              size={mobile ? "small" : "regular"}
              sx={{
                mt: mobile ? 1 : 0,
                width: mobile ? 80 : 130,
                textTransform: "none",
                fontFamily: "Arvo",
                color: "white",
                borderRadius: 5,
                fontSize: mobile ? 9 : 13,
                pr: mobile ? 2 : 3,
                pl: mobile ? 2 : 3,
                bgcolor: "#C74224",
                display: orderStatus === "Pending" ? "flex" : "none",
                '&:hover':{
                  bgcolor:"#be3c3c"
                }
              }}
            >
              Reject
            </Button>

            <Button
              onClick={() => handleUpdate("Cancelled")}
              variant="contained"
              size={mobile ? "small" : "regular"}
              sx={{
                mt: mobile ? 1 : 0,
                width: mobile ? 80 : 130,
                textTransform: "none",
                fontFamily: "Arvo",
                color: "white",
                borderRadius: 5,
                fontSize: mobile ? 9 : 13,
                pr: mobile ? 2 : 3,
                pl: mobile ? 2 : 3,
                bgcolor: "#C74224",
                display: orderStatus === "Accepted" ? "flex" : "none",
                '&:hover':{
                  bgcolor:"#be3c3c"
                }
              }}
            >
              Cancel
            </Button> 
          </Stack>
          <Typography
            sx={{
              display: orderStatus === 'Accepted' ? 'none' : orderStatus === 'Pending' ? 'none' : 'flex',
              mr:2,
              color: orderStatus === "Cancelled" ? "#C74224" : orderStatus === "Rejected" ? "#C74224" : "Green",
              fontFamily: "Raleway",
              fontWeight:'bold',
              fontSize: mobile ? 10:15
            }}
          >
            {orderStatus}
          </Typography>
          
          <Box sx={{ height: "100%", width: mobile ? '3%' : '1%', bgcolor: orderStatus === "Cancelled" ? "#C74224" : orderStatus === "Rejected" ? "#C74224" : orderStatus === "Completed" ? "Green" :  orderStatus === "Accepted" ? "Green" : '#5C6D63'  }}></Box>
        </Stack>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Stack
            direction="column"
            alignItems="center"
            sx={{ width: "100%", mb: 3 }}
          >
            <Typography
              variant={mobile ? "body1" :"h6"}
              sx={{ fontFamily: "Arvo", width: "100%", mb: 1 }}
            >
              Order Summary:
            </Typography>

            <Stack direction='row' alignItems='center' sx={{ width:'100%' , height:""}}>
              <Box sx={{ width:80, height:80 }}>
                <img 
                  src={productImage}
                  alt="product_image"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRaidus: 2,
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Stack direction='column' sx={{ ml:1 }}>
                <Typography variant="body1" sx={{ fontFamily:"Arvo" }}>
                  {productName}
                </Typography>

                <Typography variant="body2" sx={{ fontFamily:"Raleway" }}>
                  {productAttribute}
                </Typography>
              </Stack>
            </Stack>

            <Stack sx={{ width: "100%", mt: 1, mb: 1 }}>
              <Divider />
            </Stack>

            <Stack direction="row" sx={{ width: "100%" }}>
              <Typography
                variant={mobile? "body2": "body1"}
                sx={{ flexGrow: 1, fontFamily: "Raleway" }}
              >
                {"Price per Unit"}
              </Typography>
              <Typography variant={mobile? "body2": "body1"} sx={{ fontFamily: "Raleway" }}>
                {orderPrice}
              </Typography>
            </Stack>

            <Stack direction="row" sx={{ width: "100%" }}>
              <Typography
                variant={mobile? "body2": "body1"}
                sx={{ flexGrow: 1, fontFamily: "Raleway" }}
              >
                {"Quantity"}
              </Typography>
              <Typography variant={mobile? "body2": "body1"} sx={{ fontFamily: "Raleway" }}>
                {orderQuantity}
              </Typography>
            </Stack>

            <Stack sx={{ width: "100%", mt: 1 }}>
              <Divider />
            </Stack>

            <Stack direction="row" sx={{ width: "100%", mt: 1 }}>
              <Typography
                variant={mobile? "body2": "body1"}
                sx={{ flexGrow: 1, fontFamily: "Raleway", fontWeight: "bold" }}
              >
                {"Trade Value"}
              </Typography>
              <Typography
                variant={mobile? "body2": "body1"}
                sx={{ fontFamily: "Raleway", fontWeight: "bold" }}
              >
                {"Php " + orderTotal}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction='row' alignItems='center' sx={{ width:'100%' }}>
            <Box sx={{ flexGrow:1, mr:3 }}>
              <Divider />
            </Box>
            <MdChangeCircle style={{fontSize:40, color:"#BFCBA5"}} />

            <Box sx={{ flexGrow:1, ml:3 }}>
              <Divider />
            </Box>
          </Stack>


          <Stack
            direction="column"
            alignItems="center"
            sx={{ width: "100%", mb: 3 }}
          >
            <Typography
              variant={mobile ? "body1" :"h6"}
              sx={{ fontFamily: "Arvo", width: "100%", mb: 1 }}
            >
              Traded For:
            </Typography>

            <Stack direction='row' alignItems='center' sx={{ width:'100%' , mb:2}}>
              <Box sx={{ minWidth:80, height:80 }}>
                <img 
                  src={productOfferImage}
                  alt="product_image"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRaidus: 2,
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Stack direction='column' sx={{ ml:2 }}>
                <Typography variant="body1" sx={{ fontFamily:"Arvo" }}>
                  {productOffer}
                </Typography>

                <Typography variant="caption" align='justify' sx={{ fontFamily:"Raleway" }}>
                  {offerDetail}
                </Typography>
              </Stack>
            </Stack>

            <Stack sx={{ width: "100%", mt: 1, mb: 1 }}>
              <Divider />
            </Stack>
          </Stack>

          <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
            <Typography
              variant={mobile ? "body1" : "h6"}
              sx={{ fontFamily: "Arvo", width: "100%", ml: 2, mb: 1 }}
            >
              Transaction Method:
            </Typography>

            <Grid
              container
              direction="row"
              alignItems="center"
              sx={{ width: "100%", mb: 3 }}
            >
              <Grid item>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    bgcolor: "#5C6D63",
                    color: "white",
                    borderRadius: 5,
                    p: 1,
                    pr: 3,
                    pl: 3,
                    ml: 1,
                    mt:1
                  }}
                >
                  <Inventory2RoundedIcon sx={{ fontSize: mobile ?15:20 }} />
                  <Typography
                    variant={mobile ? "caption" : "body2"}
                    sx={{ fontFamily: "Raleway", ml: 1 }}
                  >
                    {transactionMethod === "PU" ? "Pick-Up" : "Meet-up"}
                  </Typography>
                </Stack>
              </Grid>

              <Grid
                item
                sx={{ display: transactionMethod === "PU" ? "none" : "flex" }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    bgcolor: "#5C6D63",
                    color: "white",
                    borderRadius: 5,
                    p: 1,
                    pr: 3,
                    pl: 3,
                    ml: 1,
                    mt:1
                  }}
                >
                  <LocationOnRoundedIcon sx={{ fontSize: mobile ?15:20 }}/>
                  <Typography
                    variant={mobile ? "caption" : "body2"}
                    sx={{ fontFamily: "Raleway", ml: 1 }}
                  >
                    {location}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            <Typography
              variant={mobile ? "body1" : "h6"}
              sx={{ fontFamily: "Arvo", width: "100%", ml: 2, mb: 1 }}
            >
              Customer Details:
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              sx={{ width: "100%" }}
            >

              <Grid item sx={{ mt: 1 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    bgcolor: "#5C6D63",
                    color: "white",
                    borderRadius: 5,
                    p: 1,
                    pr: 3,
                    pl: 3,
                    ml: 1,
                  }}
                >
                  <EmailRoundedIcon sx={{ fontSize: mobile ?15:20 }}/>
                  <Typography
                    variant={mobile ? "caption" : "body2"}
                    sx={{ fontFamily: "Raleway", ml: 1 }}
                  >
                    {cEmail}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item sx={{ mt: 1 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    bgcolor: "#5C6D63",
                    color: "white",
                    borderRadius: 5,
                    p: 1,
                    pr: 3,
                    pl: 3,
                    ml: 1,
                  }}
                >
                  <LocationOnRoundedIcon sx={{ fontSize: mobile ?15:20 }}/>
                  <Typography
                    variant={mobile ? "caption" : "body2"}
                    sx={{ fontFamily: "Raleway", ml: 1 }}
                  >
                    {cAddress}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item sx={{ mt: 1 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    bgcolor: "#5C6D63",
                    color: "white",
                    borderRadius: 5,
                    p: 1,
                    pr: 3,
                    pl: 3,
                    ml: 1,
                  }}
                >
                  <SmartphoneRoundedIcon sx={{ fontSize: mobile ?15:20 }}/>
                  <Typography
                    variant={mobile ? "caption" : "body2"}
                    sx={{ fontFamily: "Raleway", ml: 1 }}
                  >
                    {cContact}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default TradeCards   ;
