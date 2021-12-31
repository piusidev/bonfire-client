import styled from 'styled-components';

import { themeConfig } from '../../../styles/themes';

export const Label = styled.label`
  color: ${props => props.theme.colors.white};
  font-size: ${themeConfig.fontSizes.md};
  font-weight: ${themeConfig.fontWeights.bold};

  margin: 0.3rem 0 0 0.3rem;
`;

export const CustomInput = styled.div`
  display: flex;
  padding: 0.5rem;

  border: 2px solid ${props => props.theme.colors.divider};
  border-radius: ${themeConfig.radius.md};

  div:nth-child(1) {
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(1) svg {
    width: 100%;
    color: white;
  }

  input {
    width: 100%;
    height: 2rem;
    outline: none;
    border: none;

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.white};
  }
`;
