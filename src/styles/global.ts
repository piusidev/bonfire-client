import styled, { createGlobalStyle } from 'styled-components';

import { themeConfig } from './themes';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

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
