import React, { createContext, useState, useCallback } from 'react';
import { ThemeProvider as CustomThemeProvider } from 'styled-components';

import { dark, light } from '../styles/themes';

export const ThemeContext = createContext({});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = useCallback(
    value => setTheme(value?.title === 'dark' ? light : dark),
    [],
  );

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <CustomThemeProvider theme={theme}>{children}</CustomThemeProvider>
    </ThemeContext.Provider>
  );
};
