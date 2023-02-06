import React, { useState } from 'react'
import { Dialog, Stack, Typography, Slide } from '@mui/material'
import EditVariantForm from '../../forms/EditingForms/EditVariantForm'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });

const VariantCard = ({pid, id, attribute, price, status} ) => {

    const theme = useTheme();
    const mobileSM = useMediaQuery(theme.breakpoints.down(600));

    const [editForm, setEditForm] = useState(false)
    const openEdit = () => {
        setEditForm(true);
    }
    const closeEdit = () => {
        setEditForm(false);
    }
  return (

    <React.Fragment>

        <Stack direction='row' alignItems='center' onClick={()=>openEdit()}>
            <Typography variant='body2' sx={{fontFamily:'arvo'}}>
                {attribute + ' - Php ' +price}
            </Typography>
            
        </Stack>
        <Dialog
        fullScreen={mobileSM}
        maxWidth={false}
        scroll='body'
        open={editForm}
        onClose={closeEdit}
        TransitionComponent={Transition}
        >
            <EditVariantForm 
                PID={pid}
                ID={id}
                variantAttribute={attribute}
                variantPrice = {price}
                variantStatus = {status}
                handleClose = {()=> closeEdit()}
            />
        </Dialog>
    </React.Fragment>
  )
}

export default VariantCard