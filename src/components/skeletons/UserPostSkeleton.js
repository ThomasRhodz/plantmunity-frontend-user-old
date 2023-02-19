import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const UserPostSkeleton = () => {
  return (
    <React.Fragment>
        <Stack direction='column' sx={{ width: { xs: '350px', sm: '500px' , md: '650px' }, height:600, bgcolor:'white' , borderRadius:2  }}>
            <Stack direction='row' alignItems='center' sx={{ width:'100%', height:'60', p:1 }}>
                <Skeleton animation="wave" variant="circular" width={40} height={40} />
                <Stack direction='column' sx={{ ml:1, flexGrow:1 }}>                
                    <Skeleton animation="wave" variant="rectangular" width={200} height={10} sx={{ borderRadius:5 }} />
                    <Skeleton animation="wave" variant="rectangular" width={150} height={10} sx={{mt:1, borderRadius:5}} />
                </Stack>

                <Skeleton animation="wave" variant="circular" width={7} height={7} sx={{ml:'2px'}} />
                <Skeleton animation="wave" variant="circular" width={7} height={7} sx={{ml:'2px'}} />
                <Skeleton animation="wave" variant="circular" width={7} height={7} sx={{ml:'2px'}} />
            </Stack>

            <Skeleton animation="wave" variant="rectangular" width={'100%'} height={400} sx={{mt:1}} />

            <Stack direction='row' alignItems='center' sx={{ width:'100%', height:'60', p:1 }}>        
                    <Skeleton animation="wave" variant="circular" width={25} height={25} />
                    <Skeleton animation="wave" variant="circular" width={25} height={25} sx={{ml:1}} />
                    <Skeleton animation="wave" variant="circular" width={25} height={25} sx={{ml:1}} />
            </Stack>

            <Skeleton animation="wave" variant="rectangular" width={'30%'} height={20} sx={{mt:1, ml:1, borderRadius:5}} />
            <Skeleton animation="wave" variant="rectangular" width={'70%'} height={10} sx={{mt:1, ml:1, borderRadius:5}} />
            <Skeleton animation="wave" variant="rectangular" width={'70%'} height={10} sx={{mt:1, ml:1, borderRadius:5}} />
        </Stack>

        <Stack direction='column' sx={{ width: { xs: '350px', sm: '500px' , md: '650px' }, height:600, bgcolor:'white', mt:2, borderRadius:2 }}>
            <Stack direction='row' alignItems='center' sx={{ width:'100%', height:'60', p:1 }}>
                <Skeleton animation="wave" variant="circular" width={40} height={40} />
                <Stack direction='column' sx={{ ml:1, flexGrow:1 }}>                
                    <Skeleton animation="wave" variant="rectangular" width={200} height={10} sx={{ borderRadius:5 }} />
                    <Skeleton animation="wave" variant="rectangular" width={150} height={10} sx={{mt:1, borderRadius:5}} />
                </Stack>

                <Skeleton animation="wave" variant="circular" width={7} height={7} sx={{ml:'2px'}} />
                <Skeleton animation="wave" variant="circular" width={7} height={7} sx={{ml:'2px'}} />
                <Skeleton animation="wave" variant="circular" width={7} height={7} sx={{ml:'2px'}} />
            </Stack>

            <Skeleton animation="wave" variant="rectangular" width={'100%'} height={400} sx={{mt:1}} />

            <Stack direction='row' alignItems='center' sx={{ width:'100%', height:'60', p:1 }}>        
                    <Skeleton animation="wave" variant="circular" width={25} height={25} />
                    <Skeleton animation="wave" variant="circular" width={25} height={25} sx={{ml:1}} />
                    <Skeleton animation="wave" variant="circular" width={25} height={25} sx={{ml:1}} />
            </Stack>

            <Skeleton animation="wave" variant="rectangular" width={'30%'} height={20} sx={{mt:1, ml:1, borderRadius:5}} />
            <Skeleton animation="wave" variant="rectangular" width={'70%'} height={10} sx={{mt:1, ml:1, borderRadius:5}} />
            <Skeleton animation="wave" variant="rectangular" width={'70%'} height={10} sx={{mt:1, ml:1, borderRadius:5}} />
        </Stack>
    </React.Fragment>
  )
}

export default UserPostSkeleton