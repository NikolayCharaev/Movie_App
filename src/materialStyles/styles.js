import { createTheme } from '@mui/material/styles';

const Colors = {
  dark: '#000',
  white: '#fff',
  red: '#ff0000'
};

const theme = createTheme({
    palette: {
        secondary: { 
            main: Colors.white
        },
        primary: {
            main: Colors.white
        },
        dark: {
            main: Colors.red
        },
    }, 
});


export default theme;

