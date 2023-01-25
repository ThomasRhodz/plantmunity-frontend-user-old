import  React, {useState} from 'react';
import {Grid, Box, Stack, Divider, Typography} from '@mui/material/';
import Button from '../basic/Button';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LinkIcon from '@mui/icons-material/Link';

import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import IdentifiedCard from '../card/discoverPageCards/IdentifiedCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const Input = styled('input')({
    display: 'none',
  });

//Internal Styling
const useStyles = makeStyles((theme) => 
({
    
    uploadHolder:{
        width: '600px',
        backgroundColor:'blue'
    },

    image: {
        height: '135px',
        '&:hover':{
            opacity:0.5
        },
        [theme.breakpoints.down('sm')]: {
            height: '80px',
        },
    },
}));

  
const Identify = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matches2 = useMediaQuery(theme.breakpoints.down(600));
    const classes = useStyles();

    //Initialization for image
    const [imageUpload, setImageUpload] = useState('');
    const [image, setImage] = React.useState(false);
  

    function handleImageChange(e) {
        if(e.target.files && e.target.files[0]){
            let reader = new FileReader()
            reader.onload = function(e){
                setImageUpload(e.target.result)
                setImage(true)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
  return (
      <React.Fragment>
        <Grid container direction={matches2 ? 'column':'row'} alignItems='center' sx={{ width:'100%', height:{xs:'100%', sm:400, md:560 }}}>
            <Grid item sx={{width:{xs:340, sm: 420, md:505}, height: {xs:420, sm: 400, md:550}}}>
                <Grid container direction='column' alignItems='center' style={{padding:10}}>
                    <Grid item sx={{display:{xs:'none', sm:'flex',md:'flex'}, width:{xs:300, sm: 390, md:500}, height:{xs:70, sm: 50, md:100}}}>
                        <Typography
                            variant={matches?'body1':'h6'}
                            style={matches?{fontFamily:'apple-system', fontSize:'15px',marginTop: '-10px'}:{fontFamily:'apple-system', marginTop: '-10px', maxWidth:500}}
                            gutterBottom
                        >
                            Identify, explore and learn from your observations of wild plants by uploading an image or using an online image link.   
                        </Typography>
                    </Grid>
                    <Grid item sx={{display:{xs:'flex', sm:'none',md:'none'}, width:{xs:300, sm: 390, md:500}, height:{xs:70, sm: 50, md:100}}}>
                        <Typography
                            variant='h6'
                            style={matches?{fontFamily:'apple-system', fontSize:'13px'}:{fontFamily:'apple-system', marginTop: '-10px'}}
                            gutterBottom
                        >
                            Identify, explore and learn from your observations of wild plants by uploading an image or using an online image link.   
                        </Typography>
                    </Grid>
                    <div style={{height:20}} />
                    <Grid item  style={{ backgroundColor:'#6da58a', padding: 20, borderRadius:20}} sx={{width:{xs:320, sm: 360, md:500}}}>
                        <Grid container  direction='column' alignItems='center' style={{padding: 20, border: '3px dashed white', borderRadius:25}}>
                            {/* <Grid item> */}
                                <Grid container alignItems='center' direction='column' sx={{width:{xs:250, sm: 290, md:430}}}spacing={1}>
                                    <Grid item display={image ? 'flex': 'flex'}>
                                            <Stack alignItems="center" spacing={2} sx={{display:{xs:'none',sm:'flex',md:'flex'}}}>
                                                <label htmlFor="contained-button-file">
                                                    <Input accept="image/*" id="contained-button-file" type="file" onChange={handleImageChange} />
                                                    <Button variant='contained' onChangeHandler={() => handleImageChange()} color='#efeff4' text={"Use an image link"} textColor='#58a776'  btnWidth={matches?'250px':'300px'} textSize={matches?'14px':'18px'}  btnSize='large' btnComponent='span' startingIcon={<LinkIcon size='large'/>} />
                                                </label>
                                            </Stack>
                                            <Stack alignItems="center" spacing={2} sx={{display:{xs:'flex',sm:'none',md:'none'}}}>
                                                <label htmlFor="contained-button-file">
                                                    <Input accept="image/*" id="contained-button-file" type="file" onChange={handleImageChange} />
                                                    <Button variant='contained' onChangeHandler={() => handleImageChange()} color='#efeff4' text={"Use an image link"} textColor='#58a776'  btnWidth='200px' textSize='12px'  btnSize='large' btnComponent='span' startingIcon={<LinkIcon size='large'/>} />
                                                </label>
                                            </Stack>
                                    </Grid>
                                    <Grid item display={image ? 'flex': 'flex'}>
                                        <Stack alignItems="center" spacing={2}  sx={{display:{xs:'none',sm:'flex',md:'flex'}}}>
                                            <label htmlFor="contained-button-file">
                                                <Input accept="image/*" id="contained-button-file" type="file" onChange={handleImageChange} />
                                                <Button variant='contained' onChangeHandler={() => handleImageChange()} color='#efeff4' text={"Choose an image to upload"} textColor='#58a776'  btnWidth={matches?'250px':'300px'} textSize={matches?'14px':'18px'}  btnSize='large' btnComponent='span' startingIcon={<AddAPhotoIcon size='large'/>} />
                                            </label>
                                        </Stack>
                                        <Stack alignItems="center" spacing={2}  sx={{display:{xs:'flex',sm:'none',md:'none'}}}>
                                            <label htmlFor="contained-button-file">
                                                <Input accept="image/*" id="contained-button-file" type="file" onChange={handleImageChange} />
                                                <Button variant='contained' onChangeHandler={() => handleImageChange()} color='#efeff4' text={"Choose an image to upload"} textColor='#58a776'  btnWidth='200px' textSize='12px'  btnSize='large' btnComponent='span' startingIcon={<AddAPhotoIcon size='large'/>} />
                                            </label>
                                        </Stack>
                                    </Grid>
                                    <Grid item >
                                        <Typography
                                            variant={matches? 'caption' :"subtitle1"}
                                            style={{fontFamily:'apple-system', marginTop: '-10px', color: 'white'}}
                                            gutterBottom
                                        >
                                            only image file can be selected or supported.  
                                        </Typography>
                                    </Grid>
                                    <Grid item  sx={{ width:{xs:'200px',sm:'250px', md:'330px'}, height:{xs:'100px',sm:'100px', md:'150px'}, backgroundColor: 'white',}}>
                                        <Grid container direction='column' alignItems='center'>       
                                            <Grid item sx={{ flexGrow: 1}}  display={image ? 'flex': 'none'}>
                                                <img src={imageUpload} alt='uploaded_image'  className={classes.image}/>
                                            </Grid>
                                        </Grid>
                                    
                                    </Grid>
                                </Grid>  
                            {/* </Grid>      */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box sx={{width:{xs:0, sm:0, md:20}, height:{xs:5, sm:5, md:0}}} />

            <Grid item style={{backgroundColor: '#efeff4', padding: 10, paddingTop:17}} sx={{width:{xs:330, sm:390, md:505}, height:{xs:'100%', sm: 400, md:550}}}>
                <Grid container direction='column' alignItems='Left'>
                    <Grid item>
                        <Typography
                            variant={matches?"h6":"h5"}
                            style={{fontFamily:'Roboto', marginTop: '-10px', color: '#6da58a'}}
                            gutterBottom
                        >
                            Results:
                        </Typography>
                        <Divider/>
                    </Grid>
                    <div style={{height:10}} />
                    <Grid item sx={{overflowY: {xs: 'hidden', sm: 'scroll', md: 'scroll'}, height: {xs:'100%', sm: 340, md:490}}}>
                        {resultList}
                    </Grid>
                </Grid>
            
            </Grid>
        
        </Grid>
    </React.Fragment>
  )
}

const resultSample = [
    {
        resultID:'1',
        scientificName:'Helianthus annuus L.',
        familyName:'Helianthus L.',
        commonName:'Sun Flower',
        accuracy:'99.1%',
        imageLink:'https://www.almanac.com/sites/default/files/styles/landscape/public/image_nodes/sunflower-1627193_1920.jpg?itok=dhvHrrYK',
    },
    {
        resultID:'2',
        scientificName:'Bellis perennis L.',
        familyName:'Bellis L',
        commonName:'English Daisy',
        accuracy:'93%',
        imageLink:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg',
    },
    {
        resultID:'3',
        scientificName:'Aglaonema commutatum Schott',
        familyName:'Aglaonema Schott',
        commonName:'Philippine evergreen',
        accuracy:'91%',
        imageLink:'https://img.freepik.com/free-photo/white-green-leaves-aglaonema-plants-common-name-aglaonema-scientific-name-aglaonema-sp-family-araceae_45000-245.jpg?size=626&ext=jpg',
    },
    {
        resultID:'4',
        scientificName:'Sansevieria trifasciata',
        familyName:'Agavaceae',
        commonName:'Snake Plant',
        accuracy:'98%',
        imageLink:'https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg',
    },
];

const resultList = resultSample.map(result => {
    return(
        <React.Fragment key={result.resultID}>
            <Grid item>
                <IdentifiedCard sciName={result.scientificName} famName={result.familyName} comName={result.commonName} accuracy={result.accuracy} imageLink={result.imageLink} />
            </Grid>
            <Box sx={{height:10}}/>
        </React.Fragment>
        
    )
});
export default Identify