import { createTheme, ThemeProvider} from '@mui/material/styles';
import {getDesignTokens} from './DesignToken';

function ThemeFunc({children,mode}){

      const darkModeTheme = createTheme(getDesignTokens(mode));
    return(
    <>
          <ThemeProvider theme={darkModeTheme}>
              {children}
          </ThemeProvider>
    </>    
    )
} 
export default ThemeFunc;