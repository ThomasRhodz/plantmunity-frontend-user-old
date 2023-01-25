import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#32b865',
    },
    secondary: {
      main: '#5C6D63',
    },
    error: {
      main: red.A400,
    },
    background: {
      //default: "#a2b897"
      default: "#F3F4F8"
    }
  },
});

export default theme;