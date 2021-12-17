import React, { useContext } from 'react';

import { ThemeProvider, ThemeContext } from './contexts/theme-context';
import { GlobalStyle } from './styles/global';
import Routes from './routes';

const App: React.FC = () => {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
