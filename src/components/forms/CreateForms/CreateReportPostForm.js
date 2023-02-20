import {
  Box,
  IconButton,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useForm } from "react-hook-form";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useAddPostReportMutation } from "../../../app/services/reportApi";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const menuReasons = [
  {
    id: 1,
    subject: "I just dont like it",
  },
  {
    id: 2,
    subject: "Non-plantly content",
  },
  {
    id: 3,
    subject: "Offensive content",
  },
  {
    id: 4,
    subject: "Nudity and pornography",
  },
  {
    id: 5,
    subject: "Hateful Speech",
  },
  {
    id: 6,
    subject: "Intelectual Property Violation",
  },
];

const CreateReportPostForm = ({ PID, handleClose, toast }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));

  const [reason, setReason] = useState("I, just dont like it");
  //For react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addPostReport] = useAddPostReportMutation();

  const onSubmit = (data) => {
    const input = {
      id: PID,
      data: {
        'reason': reason
      },
    };

    console.log(input);
    addPostReport(input)
      .then((payload) => {
        //toast("Post reported");
        console.log('fulfilled',payload)
        handleClose();
      })
      .catch((error) => {
        //console.error('rejected', error)
        toast("Error has occured, try again later.");
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
          display:mobile? 'none':'block'
        }}
      >
        Report Post
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Divider />
      </Box>

      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={'row'} alignItems='center' sx={{ position:'fixed',width:'100%', height:60, pl:1, pr:1, bgcolor:'#5C6D63', display:mobile? 'flex':'none' }}>
            <Box sx={{ width:65 }}>
              <IconButton onClick={()=>handleClose()} sx={{ color:'white' }}>
                <ArrowBackIosNewRoundedIcon/>
              </IconButton>
            </Box>
            
            <Typography variant="h6" align="center" sx={{ flexGrow:1, color:'white', fontFamily:'Raleway' }}>
              Report Post
            </Typography>

            <Button
              type="submit"
              sx={{ color:'white', bgcolor: 'transparent', textTransform:'none', fontFamily:'Arvo', p:0, fontSize:20 }}
            >
              Submit
            </Button>
        </Stack>

        <FormControl sx={{ width:'100%',  mt: mobile? 8:0}}>
          <FormLabel id="demo-customized-radios" sx={{ p:2}}>
            <Typography sx={{ fontFamily:'Raleway', color:'black'  }}>
                {" Choose a reason for the report: "}
            </Typography>
          </FormLabel>
          <RadioGroup
            {...register("reason")}
            value={reason}
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            sx={{ width: "100%" }}
            onChange={(event) => setReason(event.target.value)}
          >
            {menuReasons.map(({ id, subject }) => {
              return (
                <FormControlLabel
                  sx={{
                    p: 2,
                    borderBottom: "1px solid #F3F4F8",
                    width: "100%",
                    fontFamily:'Raleway'
                  }}
                  key={id}
                  value={subject}
                  control={<BpRadio />}
                  label={
                    <Typography sx={{ fontFamily:'Raleway', fontWeight:'bold', ml:1  }}>
                        {subject}
                    </Typography>
                  }
                />
              );
            })}
          </RadioGroup>
        </FormControl>

        <Stack direction="row" sx={{ p: 3, width: "100%", display: mobile? 'none': 'flex' }}>
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
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateReportPostForm;

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
