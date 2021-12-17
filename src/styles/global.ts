import styled, { createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
    };
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.background};
    transition: background 0.3s ease-in-out;
  }
`;
