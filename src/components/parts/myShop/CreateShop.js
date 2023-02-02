import { Box, Button, Dialog, Stack, Typography } from '@mui/material';
import {FaStore} from 'react-icons/fa';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import React, {useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CreateShopForm from '../../forms/CreateForms/CreateShopForm';

function CreateShop() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));

    const [openCreate, setOpenCreate] = useState(false);

    const openForm = () => {
        setOpenCreate(true)
    };

    const closeForm = () => {
        setOpenCreate(false)
    }
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Stack
        direction="column"
        alignItems={"center"}
        sx={{
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          sx={{
            width: mobile ? 280 : 400,
            height: mobile ? 280 : 400,
            bgcolor: "#F8F7F3",
            borderRadius: "50%",
          }}
        >
          <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
            <Box sx={{ marginTop: "-30px" }}>
              <FaStore
                style={{ fontSize: mobile ? 90 : 120, color: "#d3dcc2" }}
              />
            </Box>
            <Typography
              variant={mobile ? "body1" : "h6"}
              sx={{
                fontFamily: "Raleway",
                color: "#d3dcc2",
                marginTop: "-10px",
              }}
            >
              Start setting up your shop now!
            </Typography>
            <Button
              startIcon={<AddRoundedIcon />}
              onClick={()=>openForm()}
              variant="contained"
              sx={{
                mt: 1,
                color: "white",
                fontFamily: "Arvo",
                textTransform: "none",
                borderRadius: 5,
                p: 1,
                width: mobile ? 150 : 200,
                bgcolor: "#BFCBA5",
              }}
            >
              Create shop
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Dialog
        maxWidth={false}
        fullScreen={mobile}
        scroll="body"
        open={openCreate}
        onClose={closeForm}
      >
        <CreateShopForm
          handleClose={() => closeForm()}
          // toast={(stringMessage)=>toast(stringMessage)}
        />
      </Dialog>
    </Stack>
  );
}

export default CreateShop