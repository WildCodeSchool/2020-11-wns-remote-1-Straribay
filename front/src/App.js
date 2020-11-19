import Router from "./Router";
import './App.css';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

function App() {
  return (
<<<<<<< HEAD
    <Router />
=======
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
>>>>>>> 4f7a763d6d4239f14238089cd713889b397ae7e7
  );
}

export default App;