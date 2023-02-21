import { Button, Dialog, Divider, Stack, Typography } from '@mui/material'
import React, {useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import EditPasswordForm from '../../forms/EditingForms/EditPasswordForm';

const DangerZone = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(900));

    const [openPassword, setOpenPassword] = useState(false);

    const openPasswordForm = () => {
      setOpenPassword(true)
    };

    const closePasswordForm = () => {
      setOpenPassword(false)
    }

    const compStyle = {
        'danger-zone-btn':{
            fontFamily:'raleway',
            fontSize: {xs:12, sm:12, md:13},
            mt:mobile ? 1 : 0,
            textTransform: 'none',
            backgroundColor:'transparent',
            border:'1px solid #b72d00',
            color:'#b72d00',
            borderRadius: 7,
            height:50,
            width: 180,
            '&:hover':{
                backgroundColor:'#b72d00',
                color:'white',
            }
        },
    }

  return (
    <React.Fragment>
      <Stack
        direction="column"
        sx={{
          width: mobile ? "100%" : tablet ? "90%" : "80%",
          height: { xs: "100%", sm: "100%", md: 380 },
          border: "1px solid #b72d00",
          borderRadius: 5,
          mb: 5,
          //boxShadow:'4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)',
        }}
      >
        <Stack
          direction={mobile ? "column" : "row"}
          alignItems="center"
          sx={{ p: 2, pl: 3, pr: 3 }}
        >
          <Stack direction="column" sx={{ flexGrow: 1 }}>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Raleway", fontWeight: "bold", mb: 1 }}
            >
              Password Change
            </Typography>
            <Typography
              variant="caption"
              align="justify"
              sx={{
                fontFamily: "Raleway",
                maxWidth: { xs: "100%", sm: 200, md: 350 },
              }}
            >
              Password change can only be done once in every 15 days. User will be
              ask to input the old password a new password that contains at least
              one capital letter, number, a special character and composed of
              minimum 8 character.
            </Typography>
          </Stack>

          <Button onClick={()=> openPasswordForm()} variant="contained" sx={compStyle["danger-zone-btn"]}>
            Change Password
          </Button>
        </Stack>

        <div style={{ width: "100%" }}>
          <Divider />
        </div>

        <Stack
          direction={mobile ? "column" : "row"}
          alignItems="center"
          sx={{ p: 2, pl: 3, pr: 3 }}
        >
          <Stack direction="column" sx={{ flexGrow: 1 }}>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Raleway", fontWeight: "bold", mb: 1 }}
            >
              Deactivating an Account
            </Typography>
            <Typography
              variant="caption"
              align="justify"
              sx={{
                fontFamily: "Raleway",
                maxWidth: { xs: "100%", sm: 200, md: 350 },
              }}
            >
              Deactivating an account will change the status of the account to
              deactivated, which will make the account temporarily invisible in
              the system.
            </Typography>
          </Stack>

          <Button variant="contained" sx={compStyle["danger-zone-btn"]}>
            Deactivate
          </Button>
        </Stack>

        <div style={{ width: "100%" }}>
          <Divider />
        </div>

        <Stack
          direction={mobile ? "column" : "row"}
          alignItems="center"
          sx={{ p: 2, pl: 3, pr: 3 }}
        >
          <Stack direction="column" sx={{ flexGrow: 1 }}>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Raleway", fontWeight: "bold", mb: 1 }}
            >
              Deleting an Account
            </Typography>
            <Typography
              variant="caption"
              align="justify"
              sx={{
                fontFamily: "Raleway",
                maxWidth: { xs: "100%", sm: 200, md: 350 },
              }}
            >
              Deleting an account means the account will be pernamently erased and
              cannot be retrieve in any means.
            </Typography>
          </Stack>

          <Button variant="contained" sx={compStyle["danger-zone-btn"]}>
            Delete Account
          </Button>
        </Stack>
      </Stack>

      <Dialog
          maxWidth={false}
          fullScreen={mobile}
          scroll='body'
          open={openPassword}
          onClose={closePasswordForm}
      >
          <EditPasswordForm 
              handleClose={()=>closePasswordForm()}
              // toast={(stringMessage)=>toast(stringMessage)}
          />
      </Dialog>

    

    </React.Fragment>
  );
}

export default DangerZone

