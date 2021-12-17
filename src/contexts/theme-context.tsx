/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, ReactNode } from 'react';
import {
  ThemeProvider as CustomThemeProvider,
  DefaultTheme,
} from 'styled-components';

import { dark, light } from '../styles/themes';

type ThemeContextInterface = {
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextInterface);

export const ThemeProvider: React.FC = (props: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = () => {
    return setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <CustomThemeProvider theme={theme}>{props.children}</CustomThemeProvider>
    </ThemeContext.Provider>
  );
};
