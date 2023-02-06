import { Box, Button, Divider, Stack, Typography, TextField, Select, FormControl, InputLabel, MenuItem, } from '@mui/material'
import React, {useState} from 'react'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm } from 'react-hook-form';
import { useUpdateProductVariantMutation } from '../../../app/services/shopApi';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


//Schema: Rules for inputs
const schema1 = yup.object({
    attribute: yup.string(),
    price: yup.string(),
    status: yup.string(),
  });

const EditVariantForm = ({PID, ID, variantAttribute, variantPrice, variantStatus, handleClose, toast}) => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    const [price, setPrice] = useState(variantPrice);
    const [attribute, setAttribute] = useState(variantAttribute);
    const [status, setStatus] = useState(variantStatus);

    //For react hook form
    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema1),
    });

    const [updateProductVariant] = useUpdateProductVariantMutation()


    const onSubmit = (data) => {

        const input = {
            pid: PID,
            id: ID,
            data: data
        }

        console.log(input)
        updateProductVariant(input).then(
            (payload) => 
                {
                    //toast("Account detail was successfully updated.")
                    console.log('fulfilled',payload)
                    handleClose();
    
                }
            ).catch(
                (error) => 
                {
                    console.error('rejected', error)
                   // toast("Error has occured, try again later.")
                }
            )
        
    };

  return (
    <Stack
      direction="column"
      alignItems={"center"}
      sx={{ width: mobile ? '100%' : 550 }}
    >
        <Typography variant="h6" align='center' sx={compStyle["dialog-title"]}>
            Edit Variant
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
                type='number'
                value={price}
                label="Variant Price"
                variant="outlined"
                sx={compStyle["input-field"]}
                onChange={(event) => {
                    setPrice(event.target.value);
                }}
            />

            <FormControl variant="outlined" sx={{ width:'100%' }}>
                <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                <Select
                    {...register("status")}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label='Status'
                    size='regular'
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                >
                    <MenuItem value={'IS'}>
                        In stock
                    </MenuItem>
                    <MenuItem value={'OS'}>
                        Out of Stock
                    </MenuItem>
                </Select>
            </FormControl>

        </Stack>

        <Stack direction="row" sx={{ p: 3, width: "100%" }}>
          <div style={{ flexGrow: 1 }} />
          <Button
            onClick={()=>handleClose()}
            type="button"
            variant="contained"
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
}

export default EditVariantForm

const compStyle = {
    'dialog-title':{
        fontFamily:'Arvo',
        p:2,
        bgcolor:'#5C6D63', 
        color:'white',
        width:'100%'
    },
    'dialog-text':{
        fontFamily:'Raleway',
        p:4,
        pt:0,
    },
    'primary-button':{
        textTransform:'none',
        color:'white',
        fontFamily:'Arvo'
    },
   'secondary-button':{
        mr:2,
        textTransform:'none',
        color:'#7CB2B0',
        border:'1px solid #7CB2B0',
        backgroundColor:'white',
        fontFamily:'Arvo'
   },
   'input-field':{
        mb:2,
        width:'100%'
   },
   'service-button':{
        textTransform:'none',
        color:'#7CB2B0',
        border:'1px solid #7CB2B0',
        backgroundColor:'white',
        fontFamily:'Arvo',
        height:50,
        ml:1,
    },

}
