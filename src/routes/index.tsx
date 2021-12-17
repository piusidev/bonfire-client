import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { ThemeProvider, ThemeContext } from '../contexts/theme-context';
import { GlobalStyle } from '../styles/global';

const Routes: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <button type="button" onClick={() => toggleTheme()}>
        Clique
      </button>
      {/* <Router>
        <Switch>
          <Route path="/" />
        </Switch>
      </Router> */}
    </ThemeProvider>
  );
};

export default Routes;
