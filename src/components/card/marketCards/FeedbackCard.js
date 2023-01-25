import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const FeedbackCard = ({id, firstName, lastName, middleName, content, date, image}) => {
    const fullname = (middleName === '' ? firstName+' '+lastName : middleName === null ? firstName+' '+lastName : firstName + ' ' + middleName + ' ' + lastName)
  return (
    <Stack key={id} direction='row' sx={{ width:'100%', bgcolor:'white', p:1, mt:2, boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)', borderRadius:2 }}>
        <Avatar
            alt={fullname}
            src={image}
        />
        <Stack direction='column' sx={{ ml:2 }}>
            <Typography variant='caption' sx={{ fontFamily:'arvo' }}>
              {fullname + ' | ' + date}
            </Typography>
            <Typography variant='caption' sx={{ fontFamily:'raleway' }}>
              {content}
            </Typography>
        </Stack>
    </Stack>

  )
}

export default FeedbackCard