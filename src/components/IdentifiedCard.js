import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const IdentifiedCard = ({sciName, famName, comName, accuracy, imageLink}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const matches2 = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Card sx={{ display: 'flex', width: {xs:'300px', sm:'370px', md:'550px'} }}>
        <CardContent >
          <Typography variant={matches?'body1':'h6'} style={{fontFamily:'apple-system', fontStyle:'italic', fontWeight: 'bold', color:'yellowgreen'}} gutterBottom>
               {sciName}
          </Typography>
          <Typography variant={matches?"body2":"body1"} style={{fontFamily:'apple-system'}} gutterBottom>
                {famName} 
          </Typography>
          <Typography variant={matches?"body2":"body1"} style={{fontFamily:'apple-system'}} gutterBottom>
                {comName}
          </Typography>
          <Typography variant={matches?"body2":"body1"} style={{fontFamily:'apple-system'}} gutterBottom>
                {accuracy}
          </Typography>
        </CardContent>
        <Box sx={{flexGrow:1}}/>
        <CardMedia
            component="img"
            sx={{ width: {xs:150, sm:150, md:200},}}
            image={imageLink}
            alt="Live from space album cover"
        />
    </Card>
    
    
  )
}

export default IdentifiedCard