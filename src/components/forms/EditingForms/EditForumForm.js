import {
    Box,
    Button,
    DialogContent,
    Grid,
    IconButton,
    Stack,
    Tooltip,
    Typography,
    TextField,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
  } from "@mui/material";
  import React, { useState } from "react";
  
  import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
  import * as yup from "yup";
  import { yupResolver } from "@hookform/resolvers/yup";
  import { useForm } from "react-hook-form";
  import { useUpdateForumMutation } from "../../../app/services/forumApi";
  
  import useMediaQuery from "@mui/material/useMediaQuery";
  import { useTheme } from "@mui/material/styles";
  import PhotoCamera from "@mui/icons-material/PhotoCamera";
  import { RiPlantFill } from "react-icons/ri";
  
  //Schema: Rules for inputs
  const schema1 = yup.object({
    title: yup.string().required(),
    description: yup.string(),
    visibility: yup.string().required(),
  });
  
  const EditForumForm = ({forumId, forumTitle, forumDescription, forumVisibility, forumPhoto, handleClose, toast }) => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
  
    const [imageUpload, setImageUpload] = useState(forumPhoto);
    const [upload, setUpload] = useState(true);
    const [title, setTitle] = useState(forumTitle);
    const [description, setDescription] = useState(forumDescription);
    const [visibility, setVisibility] = useState(forumVisibility);
  
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
    } = useForm({
      resolver: yupResolver(schema1),
    });
  
    const [ updateForum] = useUpdateForumMutation();
  
    const onSubmit = (data) => {
      const input = {
        id: forumId,
        data:{
            title: data.title,
            description: data.description,
            visibility: data.visibility,
            cover_photo: imageUpload,
        }
      };
  
      console.log(input);
      updateForum(input)
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
            display:mobile? 'none':'flex'
          }}
        >
          Edit Forum
        </Typography>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <Stack direction={'row'} alignItems='center' sx={{ position:'fixed',width:'100%', height:60, pl:1, pr:1, bgcolor:'#5C6D63', display:mobile? 'flex':'none' }}>
              <Box sx={{ width:65 }}>
                <IconButton onClick={()=>handleClose()} sx={{ color:'white' }}>
                  <ArrowBackIosNewRoundedIcon/>
                </IconButton>
              </Box>
              
              <Typography variant="h6" align="center" sx={{ flexGrow:1, color:'white', fontFamily:'Raleway' }}>
                Edit Forum
              </Typography>
  
              <Button
                type="submit"
                sx={{ color:'white', bgcolor: 'transparent', textTransform:'none', fontFamily:'Arvo', p:0, fontSize:20 }}
              >
                Save
              </Button>
          </Stack>
  
  
        
          <Stack direction="column" sx={{ width: "100%", pl: 5, pr: 5, mt: {xs: 10, sm:8, md:3} }}>
            <Grid
              container
              direction="column"
              alignItems={"center"}
              sx={{ width: "100%", height: "100%" }}
            >
              {/* For Image preview*/}
              <Grid
                item
                sx={{
                  width: "100%",
                  height: 180,
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "2px solid #5C6D63",
                  display: upload ? "flex" : "none",
                }}
              >
                <img
                  src={imageUpload}
                  alt="uploaded_image"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </Grid>
  
              <Grid
                item
                sx={{
                  width: "100%",
                  height: 180,
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
                    <RiPlantFill style={{ fontSize: 100, color: "#5C6D63" }} />
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
                      <PhotoCamera sx={{ color: "white", fontSize: 23 }} />
                    </IconButton>
                  </Tooltip>
                </DialogContent>
              </Grid>
            </Grid>
  
            <TextField
              {...register("title")}
              required
              value={title}
              label="Forum Title"
              variant="outlined"
              sx={compStyle["input-field"]}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
  
            <TextField
              sx={{ mt: 1 }}
              {...register("description")}
              value={description}
              label="Any further details?"
              multiline
              minRows={4}
              maxRows={6}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
  
            <FormControl variant="outlined" sx={{ width: "100%", mt:3 }}>
              <InputLabel id="demo-simple-select-helper-label">Visibility</InputLabel>
              <Select
                {...register("visibility")}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Visibility"
                size="regular"
                value={visibility}
                onChange={(event) => {
                  setVisibility(event.target.value);
                }}
              >
                <MenuItem value={"Public"}>Public</MenuItem>
                <MenuItem value={"Private"}>Private</MenuItem>
              </Select>
            </FormControl>
          </Stack>
  
          <Stack direction="row" sx={{ p: 3, width: "100%", display: mobile? 'none':'flex' }}>
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
  
  export default EditForumForm;
  
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
  