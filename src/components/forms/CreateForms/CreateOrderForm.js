import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Divider,
} from "@mui/material";
import React, { useState } from "react";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useForm } from "react-hook-form";
import { useAddOrderMutation } from "../../../app/services/transactionApi";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CreateOrderForm = ({
  SID,
  PID,
  productName,
  productAttribute,
  productPrice,
  productQuantity,
  Total,
  handleClose,
  toast,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  const [method, setMethod] = useState("PU");
  const [location, setLocation] = useState("");

  //For react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addOrder] = useAddOrderMutation();

  const onSubmit = (data) => {
    const input = {
      shop_id: SID,
      product_id: PID,
      product_attribute: productAttribute,
      price_per_unit: productPrice,
      quantity: productQuantity,
      amount_payable: Total,
      transaction_method: method,
      location: location,
    };

    console.log(input);
    addOrder(input)
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
      sx={{ width: mobile ? "100%" : 400 }}
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
        {"Order Summary"}
      </Typography>
      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction={"row"}
          alignItems="center"
          sx={{
            position: "fixed",
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
            {"Order Summary"}
          </Typography>

          <div style={{ width:65 }}/>
        </Stack>

        <Stack
          direction="column"
          alignItems={"center"}
          sx={{ width: "100%", pl: 5, pr: 5, mt: { xs: 10, sm: 8, md: 3 } }}
        >
          <Typography
            variant={"h6"}
            sx={{ fontFamily: "Raleway", fontWeight: "bold" }}
          >
            {productName + " (" + productAttribute + ")"}
          </Typography>

          <Stack sx={{ width: "100%", mt: 1, mb: 1 }}>
            <Divider />
          </Stack>

          <FormControl variant="outlined" sx={{ width: "100%", mt: 1 }}>
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

          <Stack sx={{ width: "100%", mt: 1, mb: 1 }}>
            <Divider />
          </Stack>

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
              {"Order Amount"}
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
              width: "100%",
              height: 40,
              color: "white",
              fontFamily: "Arvo",
              fontSize: mobile ? 12 :20,
              textTransform: "none",
              bgcolor: "#58a776",
              '&:hover':{
                color: "white",
                bgcolor:'#5C6D63',
              },
              display: mobile ? "flex" : "none",
            }}
          >
            Place Order
          </Button>
        </Stack>


        <Stack
          direction="row"
          sx={{ p: 3, width: "100%", display: mobile ? "none" : "flex" }}
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
            Place Order
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateOrderForm;

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
