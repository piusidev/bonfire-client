import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Register } from '../pages';
import { ThemeProvider } from '../contexts/theme-context';
import { GlobalStyle } from '../styles/global';

const Routes: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider>
          <GlobalStyle />
          <ReactQueryDevtools />
          <Switch>
            <Route path="/" element={<Register />} />
          </Switch>
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default Routes;
