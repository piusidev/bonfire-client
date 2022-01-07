import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title?: string;
    colors: {
      background?: string;
      primary: string;
      secondary: string;
      highlight: string;
      disabled: string;
      divider: string;
      error: string;
      success: string;
      warning: string;
      text: string;
    };
  }
}

export const defaultColors = {
  primary: '#bd93f9',
  secondary: '#ff79c6',

  background: '#040d21',

  highlight: '#8be9fd',
  disabled: '#6272a4',
  divider: '#6272a4',

  text: '#f2f2f2',

  error: '#C50000',
  success: '#50fa7b',
  warning: '#F5A623',
};

export const dark = {
  title: 'dark',

  colors: {
    ...defaultColors,
  },
};

export const light = {
  title: 'light',

  colors: {
    ...defaultColors,
  },
};
