import styled from 'styled-components';

import { themeConfig } from '../../../styles/themes/config';

export const LoaderSection = styled.section`
  width: 100vw;
  height: 100vh;

  background: ${props => props.theme.colors.background};
  z-index: ${themeConfig.zIndices.tooltip};

  display: flex;
  align-items: center;
  justify-content: center;
`;
