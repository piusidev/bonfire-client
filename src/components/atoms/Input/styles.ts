import styled from 'styled-components';

import { themeConfig } from '../../../styles/themes';

interface ICustomInputProps {
  error?: string;
}

export const CustomInput = styled.div<ICustomInputProps>`
  display: flex;
  padding: 0.5rem;

  border: 2px solid
    ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.divider};
  border-radius: ${themeConfig.radius.md};

  transition: all 0.3s ease-in-out;

  a {
    user-select: none;
    cursor: pointer;
  }

  div:nth-child(1),
  a {
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 100%;
    color: white;
  }

  input {
    width: 100%;
    height: 2rem;
    outline: none;
    border: none;

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

    font-size: ${themeConfig.fontSizes.md};
  }
`;
