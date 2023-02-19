import React from 'react'
import { Masonry } from '@mui/lab';
import { Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';  
import useMediaQuery from '@mui/material/useMediaQuery';

const ExploreListSkeleton = () => {
    const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  return (
    <Masonry sx={{display:{xs:'flex',sm:'flex', md:'flex'}}} columns={3} spacing={mobile ? 1 :2}>
        <Skeleton animation="wave" variant="rectangular" height={180} sx={{mt:1, ml:1, borderRadius:3}} />
        <Skeleton animation="wave" variant="rectangular" height={260} sx={{mt:1, ml:1, borderRadius:3}} />
        <Skeleton animation="wave" variant="rectangular" height={200} sx={{mt:1, ml:1, borderRadius:3}} />
        <Skeleton animation="wave" variant="rectangular" height={250} sx={{mt:1, ml:1, borderRadius:3}} />
        <Skeleton animation="wave" variant="rectangular" height={270} sx={{mt:1, ml:1, borderRadius:3}} />
        <Skeleton animation="wave" variant="rectangular" height={280} sx={{mt:1, ml:1, borderRadius:3}} />
        <Skeleton animation="wave" variant="rectangular" height={360} sx={{mt:1, ml:1, borderRadius:3}} />
    </Masonry>
  )
}

export default ExploreListSkeleton
