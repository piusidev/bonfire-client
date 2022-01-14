import styled from 'styled-components';

import { themeConfig } from '../../../styles/themes';

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 3rem;

  background: ${props => props.theme.colors.success};

  margin: 1rem 0;
  outline: none;
  border: none;
  border-radius: ${themeConfig.radius.md};

  text-transform: uppercase;
  font-weight: ${themeConfig.fontWeights.bold};
  letter-spacing: ${themeConfig.letterSpacings.wide};

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 0.6;
  }
`;
