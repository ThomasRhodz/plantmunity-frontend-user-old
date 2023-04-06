import { IconButton, Stack, Typography } from "@mui/material"
import React from "react"
import NotificationCards from "../card/timelineCards/NotificationCards";

//Icons
import { MdCancel } from "react-icons/md"

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const ViewNotification = ({handleClose}) => {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));

  return (
    <Stack direction="column" sx={{ width:mobile ? "100%" : 500, height:"95vh", overflowY:'auto' }}>
        <Stack direction="row" alignItems={"center"} sx={{ width:"100%" }}>
            <Typography variant={"h5"} sx={{p:2, fontFamily:"Arvo", fontWeight:"bold", flexGrow:1 }}>
                Notifications
            </Typography>
            <IconButton onClick={()=> handleClose()} sx={{ display: mobile? "flex":"none", mr:1 }}>
                <MdCancel />
            </IconButton>
        </Stack>

        <Stack direction="row" alignItems={"center"} sx={{ width:"100%", borderTop:"1px solid #E8EAED", p:2 }}>
            <NotificationCards />
        </Stack>
        <Stack direction="row" alignItems={"center"} sx={{ width:"100%", borderTop:"1px solid #E8EAED", p:2 }}>
            <NotificationCards />
        </Stack>

       
    </Stack>
  )
}

export default ViewNotification