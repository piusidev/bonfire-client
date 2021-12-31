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
      white: string;
    };
  }
}

export const defaultColors = {
  primary: '#EC4E20',
  secondary: '',

  background: '#282A36',

  highlight: '',
  disabled: '',
  divider: '#6272a4',

  error: '#C50000',
  success: '#0761D1',
  warning: '#F5A623',

  white: '#FFFCE8',
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
