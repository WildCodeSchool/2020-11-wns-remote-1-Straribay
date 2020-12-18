import { ThemeProvider } from "styled-components";
import React from "react";
import Router from "./Router";
import "./App.css";

import theme from "./styles/theme";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
