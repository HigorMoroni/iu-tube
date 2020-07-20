import React, {useState} from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';

import Home from './Home';
import { dark } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles({
  root: {
  }
})

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3ea6ff'
      },
      background: {
        default: darkMode ? '#232323' : '#fff',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#fff',
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
