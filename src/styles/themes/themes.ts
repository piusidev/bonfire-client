import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title?: string;
    colors: {
      background: string;
    };
  }
}

export const dark = {
  title: 'dark',

  colors: {
    background: '#000',
  },
};

export const light = {
  title: 'light',

  colors: {
    background: '#ccc',
  },
};
