import styled, { css } from 'styled-components';

import { themeConfig } from '../../../styles/themes';

interface IFluidContainerProps {
  align?: string;
  justify?: string;
  fullscreen?: boolean;
}

export const FluidContainer = styled.div<IFluidContainerProps>`
  display: flex;
  margin: 0 auto;
  padding: 2rem;

  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};

  max-width: ${themeConfig.sizes.container.lg};
  height: 100vh;

  ${({ fullscreen }) => {
    if (fullscreen) {
      return css`
        height: 100vh;
        width: 100vw;
      `;
    }
  }}

  @media (max-width: ${themeConfig.breakpoints.sm}) {
    max-width: 100%;
  }
`;
