import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  TextField,
  Divider,
  DialogContent,
  Grid,
  Tooltip,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useForm } from "react-hook-form";
import { useAddTradeMutation } from "../../../app/services/transactionApi";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { RiPlantFill } from "react-icons/ri";
import { MdChangeCircle } from "react-icons/md";

const CreateTradeOffer = ({
  SID,
  PID,
  productName,
  productAttribute,
  productPrice,
  productQuantity,
  productImage,
  Total,
  handleClose,
  toast,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  const [details, setDetails] = useState("");
  const [offer, setOffer] = useState("");
  const [method, setMethod] = useState("PU");
  const [location, setLocation] = useState("");

  const [imageUpload, setImageUpload] = useState("");
  const [upload, setUpload] = useState(false);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        //console.log(e.target.result)
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let toBeUploaded = new Image();
        toBeUploaded.src = e.target.result;

        toBeUploaded.onload = function () {
          canvas.width = toBeUploaded.width;
          canvas.height = toBeUploaded.height;
          ctx.drawImage(toBeUploaded, 0, 0);

          const convertedImage = canvas.toDataURL(`image/webp`, 0.7);
          setImageUpload(convertedImage);
          setUpload(true);
        };
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  //For react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addTrade] = useAddTradeMutation();

  const onSubmit = (data) => {
    const input = {
      shop_id: SID,
      product_id: PID,
      product_attribute: productAttribute,
      price_per_unit: productPrice,
      quantity: productQuantity,
      trade_value: Total,
      product_offer: offer,
      product_offer_image: imageUpload,
      offer_details: details,
      transaction_method: method,
      location: location,
    };

    //console.log(input);
    addTrade(input)
        .then((payload) => {
          //toast("Account detail was successfully updated.")
          console.log("fulfilled", payload);
          handleClose();
        })
        .catch((error) => {
          console.error("rejected", error);
          // toast("Error has occured, try again later.")
        });
  };

  return (
    <Stack
      direction="column"
      alignItems={"center"}
      sx={{ width: mobile ? "100%" : 500 }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{
          fontFamily: "Arvo",
          p: 2,
          bgcolor: "#5C6D63",
          color: "white",
          width: "100%",
          display: mobile ? "none" : "block",
        }}
      >
        {"Trade Offer"}
      </Typography>

      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction={"row"}
          alignItems="center"
          sx={{
            position: "fixed",
            zIndex:2,
            width: "100%",
            height: 60,
            pl: 1,
            pr: 1,
            bgcolor: "#5C6D63",
            display: mobile ? "flex" : "none",
          }}
        >
          <Box sx={{ width: 65 }}>
            <IconButton onClick={() => handleClose()} sx={{ color: "white" }}>
              <ArrowBackIosNewRoundedIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            align="center"
            sx={{ flexGrow: 1, color: "white", fontFamily: "Raleway" }}
          >
            {"Trade Offer"}
          </Typography>

          <div style={{ width: 65 }} />
        </Stack>

        <Stack
          direction="column"
          alignItems={"center"}
          sx={{ width: "100%", pl: 5, pr: 5, mt: { xs: 10, sm: 8, md: 3 } }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Raleway", width:'100%' , fontWeight:'bold', color: '#5C6D63'  }}>
           Your Trade Offer
          </Typography>

          <Stack sx={{ width: "100%", mt: 1, mb:2 }}>
            <Divider />
          </Stack>

          <TextField
            sx={{
              m2: 2,
              width: "100%",
            }}
            value={offer}
            label="Product name"
            onChange={(event) => {
              setOffer(event.target.value);
            }}
          />

          <TextField
            sx={{
              mt:2,
              width: "100%",
            }}
            value={details}
            label="Other details"
            multiline
            minRows={1}
            maxRows={5}
            onChange={(event) => {
              setDetails(event.target.value);
            }}
          />

          <FormControl variant="outlined" sx={{ width: "100%", mt: 2 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Transaction Method
            </InputLabel>
            <Select
              {...register("method")}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Transaction Method"
              size="regular"
              value={method}
              onChange={(event) => {
                setMethod(event.target.value);
              }}
            >
              <MenuItem onClick={() => setLocation("")} value={"PU"}>
                Pick-Up
              </MenuItem>
              <MenuItem value={"MU"}>Meet Up</MenuItem>
            </Select>
          </FormControl>

          <TextField
            sx={{
              mt: 2,
              mb: 1,
              width: "100%",
              display: method === "PU" ? "none" : "flex",
            }}
            value={location}
            label="Location"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
          <Stack direction="row" alignItems="center" sx={{ mt: 3 }}>
            <Grid
              container
              direction="column"
              alignItems={"center"}
              sx={{ width: mobile ? 100 : 150, height: "100%" }}
            >
              {/* For Image preview*/}
              <Grid
                item
                sx={{
                  width: mobile ? 100 : 150,
                  height: mobile ? 100 : 150,
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "2px solid #5C6D63",
                  display: upload ? "flex" : "none",
                }}
              >
                <img
                  src={imageUpload}
                  alt="uploaded_image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "100%",
                  height: mobile ? 100 : 150,
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "2px solid #5C6D63",
                  display: upload ? "none" : "display",
                }}
              >
                <Stack
                  direction="row"
                  alignItems={"center"}
                  sx={{ height: "100%" }}
                >
                  <Stack
                    direction="column"
                    alignItems={"center"}
                    sx={{ width: "100%" }}
                  >
                    <RiPlantFill style={{ fontSize: mobile ? 50 : 100, color: "#5C6D63" }} />
                  </Stack>
                </Stack>
              </Grid>

              {/* For Uploading Image*/}
              <Grid
                item
                sx={{
                  marginTop: "-40px",
                }}
              >
                <DialogContent sx={{ overflow: "hidden" }}>
                  <Tooltip title="Upload Logo">
                    <IconButton
                      aria-label="upload picture"
                      component="label"
                      sx={{ backgroundColor: "#5C6D63" }}
                    >
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={handleImageChange}
                      />
                      <PhotoCamera sx={{ color: "white", fontSize: mobile ? 19 : 23 }} />
                    </IconButton>
                  </Tooltip>
                </DialogContent>
              </Grid>
            </Grid>

            <MdChangeCircle
              style={{
                fontSize: 40,
                marginLeft: 10,
                marginRight: 10,
                marginTop: "-40px",
              }}
            />

            <Grid
              sx={{
                width: mobile ? 100 : 150,
                height: mobile ? 100 : 150,
                borderRadius: 3,
                overflow: "hidden",
                border: "2px solid #5C6D63",
                marginTop: "-40px",
              }}
            >
              <img
                src={productImage}
                alt="requested_product"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          </Stack>

          <Typography variant="h6" sx={{ fontFamily: "Raleway", mt: 2, width:'100%', fontWeight:'bold', color: '#5C6D63' }}>
            Requested Product Details
          </Typography>

          <Stack sx={{ width: "100%", mt: 1, mb: 2 }}>
            <Divider />
          </Stack>

          <Typography
            variant={"body1"}
            sx={{ fontFamily: "Raleway", fontWeight: "bold", width: "100%" }}
          >
            {"Product: " + productName + " (" + productAttribute + ")"}
          </Typography>

          <Stack direction="row" sx={{ width: "100%" }}>
            <Typography
              variant={"body1"}
              sx={{ flexGrow: 1, fontFamily: "Raleway" }}
            >
              {"Price per Unit"}
            </Typography>
            <Typography variant={"body1"} sx={{ fontFamily: "Raleway" }}>
              {productPrice}
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ width: "100%" }}>
            <Typography
              variant={"body1"}
              sx={{ flexGrow: 1, fontFamily: "Raleway" }}
            >
              {"Quantity"}
            </Typography>
            <Typography variant={"body1"} sx={{ fontFamily: "Raleway" }}>
              {productQuantity}
            </Typography>
          </Stack>

          <Stack sx={{ width: "100%", mt: 1 }}>
            <Divider />
          </Stack>

          <Stack direction="row" sx={{ width: "100%", mt: 1 }}>
            <Typography
              variant={"body1"}
              sx={{ flexGrow: 1, fontFamily: "Raleway", fontWeight: "bold" }}
            >
              {"Product Amount"}
            </Typography>
            <Typography
              variant={"body1"}
              sx={{ fontFamily: "Raleway", fontWeight: "bold" }}
            >
              {"Php " + Total}
            </Typography>
          </Stack>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: mobile ? 3 : 5,
              mb:3,
              width: "100%",
              height: 40,
              color: "white",
              fontFamily: "Arvo",
              fontSize: mobile ? 12 : 20,
              textTransform: "none",
              bgcolor: "#58a776",
              "&:hover": {
                color: "white",
                bgcolor: "#5C6D63",
              },
              display: mobile ? "flex" : "none",
            }}
          >
            Submit Offer
          </Button>
        </Stack>

        <Stack
          direction="row"
          sx={{ p: 3, width: "100%", display: mobile ? "none" : "flex", mt:1 }}
        >
          <div style={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            onClick={() => handleClose()}
            sx={compStyle["secondary-button"]}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={compStyle["primary-button"]}
          >
            Submit offer
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateTradeOffer;

const compStyle = {
  "dialog-text": {
    fontFamily: "Raleway",
    p: 4,
    pt: 0,
  },
  "primary-button": {
    textTransform: "none",
    color: "white",
    fontFamily: "Arvo",
  },
  "secondary-button": {
    mr: 2,
    textTransform: "none",
    color: "#7CB2B0",
    border: "1px solid #7CB2B0",
    backgroundColor: "white",
    fontFamily: "Arvo",
  },
  "input-field": {
    mb: 2,
    width: "100%",
  },
  "service-button": {
    textTransform: "none",
    color: "#7CB2B0",
    border: "1px solid #7CB2B0",
    backgroundColor: "white",
    fontFamily: "Arvo",
    height: 50,
    ml: 1,
  },
};
