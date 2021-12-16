import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { dark, light } from '../styles/themes';

const Routes = () => {
  const [theme, setTheme] = useState(dark);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/" />
          </Switch>
        </Router>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default Routes;
