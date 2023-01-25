import { Grid,Typography, Stack, Avatar } from '@mui/material'
import React, {useState} from 'react'
import SignUpForm from '../forms/SignUpForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



//---------------------------------------------------------------------------------------------------------------------------

const SignUpProgress = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(500));

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 5,
        marginLeft:'-8px',
        marginTop:'-20px',
        width:mobile ? 100:115,
        borderRadius:5,
        backgroundColor:'#7CB2B1',
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#7CB2B1' : '#308fe8',
        },
      }));
   
    // const [stepTwo, setStepTwo] = useState(0);

    const [infoValue, setInfoValue] = useState(1);
    const [stepValue, setStepValue] = useState(1);

    const [SecondBar, setSecondBar] = useState(0);
    const [FirstBar, setFirstBar] = useState(0);

    const [secondBgColor, setSecondBgColor] = useState('');
    const [secondColor, setSecondColor] = useState('white');
    const [secondBorderColor, setSecondBorderColor] = useState('');

    const [thirdBgColor, setThirdBgColor] = useState('');
    const [thirdColor, setThirdColor] = useState('white');
    const [thirdBorderColor, setThirdBorderColor] = useState('');
  

    React.useEffect (() => {
        if (infoValue === 2){
            setSecondBgColor('white')
            setSecondColor('#7CB2B1')
            setSecondBorderColor('4px solid #7CB2B1')
            setFirstBar(100)
        }else if(infoValue === 3){
            setSecondBgColor('#7CB2B1')
            setSecondColor('white')
            setThirdBgColor('white')
            setThirdBorderColor('4px solid #7CB2B1')
            setThirdColor('#7CB2B1')
            setSecondBar(100)
        }

        if(stepValue === 1 && infoValue === 2){
            setSecondBgColor('')
            setSecondColor('white')
            setSecondBorderColor('')
            setFirstBar(0)
            setThirdBgColor('')
            setThirdBorderColor('')
            setThirdColor('white')
            setSecondBar(0)
        } else if(stepValue === 2 && infoValue === 3){
            setSecondBgColor('white')
            setSecondColor('#7CB2B1')
            setSecondBorderColor('4px solid #7CB2B1')
            setFirstBar(100)
            setThirdBgColor('')
            setThirdBorderColor('')
            setThirdColor('white')
            setSecondBar(0)
        }else if (stepValue === 1 && infoValue === 3){
            setSecondBgColor('')
            setSecondColor('white')
            setSecondBorderColor('')
            setFirstBar(0)
            setThirdBgColor('')
            setThirdBorderColor('')
            setThirdColor('white')
            setSecondBar(0)
        } 
              
      
    }, [ stepValue, infoValue])


    const handleProgressChange = (step) => {
        if ( infoValue === 1 && step === 2){
            setInfoValue(step)
        } else if (infoValue === 2 && step === 3){
            setInfoValue(step)
        }
        setStepValue(step)
    }

    const handleStepChange = (step) => {
        setStepValue(step)
    }

  return (
    <Grid item sx={{
        width: '100%',
        height:'100%',
        p:5,
        pt:4,
    }}>
        
        <Stack direction='column' alignItems='center' sx={{width:'100%', mb:2}}>
            <Stack direction='row' alignItems='center' >
                <Stack direction='column' alignItems='center' sx={{ marginRight:'4px',}}> 
                    <Avatar 
                        sx={{
                            backgroundColor:stepValue >= 2 ? '#7CB2B1':'white',
                            border:'5px solid #7CB2B1',
                            fontFamily:'arvo',
                            fontWeight:'bold',
                            fontSize:10,
                            height:26,
                            width:26,    
                            color:stepValue >= 2 ? 'white':'#7CB2B1'
                        }}
                    > 
                        1 
                    </Avatar>
                    <Typography variant='caption' sx={{fontFamily:'Arvo'}}>
                        Personal
                    </Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={FirstBar} />

                <Stack direction='column' alignItems='center' sx={{ marginLeft:'-4px', marginRight: '4px'}}> 
                    <Avatar 
                        sx={{
                            backgroundColor: secondBgColor,
                            border: secondBorderColor,
                            fontFamily:'arvo',
                            fontWeight:'bold',
                            fontSize:10,
                            color:secondColor,
                            height:26,
                            width:26 
                        }}
                    > 
                        2
                    </Avatar>
                    <Typography variant='caption' sx={{fontFamily:'Arvo'}}>
                        Contact
                    </Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={SecondBar} />
                <Stack direction='column' alignItems='center' sx={{ marginLeft:'-6px',}}> 
                    <Avatar 
                        sx={{
                            backgroundColor:thirdBgColor,
                            border:thirdBorderColor,
                            fontFamily:'arvo',
                            fontWeight:'bold',
                            fontSize:10,
                            color:thirdColor,
                            height:26,
                            width:26 
                        }}
                    > 
                        3
                    </Avatar>
                    <Typography variant='caption' sx={{fontFamily:'Arvo'}}>
                        Account
                    </Typography>
                </Stack>
            </Stack>
        </Stack>

        <SignUpForm stepValue={stepValue} stepChange={(step) => handleProgressChange(step)} backChange={(step)=> handleStepChange(step)}/>

    </Grid>
  )
}

export default SignUpProgress