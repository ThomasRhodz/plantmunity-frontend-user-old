import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#32b865',
    },
    secondary: {
      main: '#2fd09a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#93d1ba"
    }
  },
});

export default theme;