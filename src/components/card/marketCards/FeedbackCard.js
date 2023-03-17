import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const FeedbackCard = ({id, firstName, lastName, middleName, content, date, image}) => {
    const fullname = (middleName === '' ? firstName+' '+lastName : middleName === null ? firstName+' '+lastName : firstName + ' ' + middleName + ' ' + lastName)
  return (
      <React.Fragment>
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
      </React.Fragment>
   

  )
}

export default FeedbackCard