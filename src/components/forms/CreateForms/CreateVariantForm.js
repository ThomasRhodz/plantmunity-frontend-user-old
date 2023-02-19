import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAddProductVariantMutation } from "../../../app/services/shopApi";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

//Schema: Rules for inputs
const schema1 = yup.object({
  attribute: yup.string(),
  price: yup.string(),
});

const CreateVariantForm = ({ ID, handleClose, toast }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  const [price, setPrice] = useState(0.0);
  const [attribute, setAttribute] = useState("");

  //For react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema1),
  });

  const [addVariant] = useAddProductVariantMutation();

  const onSubmit = (data) => {
    if (data.price < 0) {
      toast("Error cannot add variant with negative value");
    } else {
      const input = {
        id: ID,
        data: data,
      };
      addVariant(input)
        .then((payload) => {
          toast("Variant added.");
          //console.log('fulfilled',payload)
          handleClose();
        })
        .catch((error) => {
          //console.error('rejected', error)
          toast("Error has occured, try again later.");
        });
    }
  };

  return (
    <Stack
      direction="column"
      alignItems={"center"}
      sx={{ width: mobile ? "100%" : 550 }}
    >
      <Typography variant="h6" align="center" sx={compStyle["dialog-title"]}>
        Create Variant
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Divider />
      </Box>

      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" sx={{ width: "100%", pl: 5, pr: 5, mt: 3 }}>
          <TextField
            {...register("attribute")}
            required
            value={attribute}
            label="Variant Attribute"
            variant="outlined"
            sx={compStyle["input-field"]}
            onChange={(event) => {
              setAttribute(event.target.value);
            }}
          />

          <TextField
            {...register("price")}
            required
            type="number"
            value={price}
            label="Variant Price"
            variant="outlined"
            sx={compStyle["input-field"]}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </Stack>

        <Stack direction="row" sx={{ p: 3, width: "100%" }}>
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
            Save
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateVariantForm;

const compStyle = {
  "dialog-title": {
    fontFamily: "Arvo",
    p: 2,
    bgcolor: "#5C6D63",
    color: "white",
    width: "100%",
  },
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
