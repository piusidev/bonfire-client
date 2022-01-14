import styled from 'styled-components';

import { themeConfig } from '../../../styles/themes';

interface IFluidContainerProps {
  align?: string;
  justify?: string;
}

export const FluidContainer = styled.div<IFluidContainerProps>`
  display: flex;
  margin: 0 auto;

  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};

  max-width: ${themeConfig.sizes.container.lg};

  height: 100vh;

  @media (max-width: ${themeConfig.breakpoints.sm}) {
    max-width: 100%;
  }
`;
