import styled from 'styled-components';

import { themeConfig } from '../../../styles/themes';

export const CustomLabel = styled.label`
  color: ${props => props.theme.colors.primary};
  font-size: ${themeConfig.fontSizes.md};
  font-weight: ${themeConfig.fontWeights.bold};

  margin: 0.3rem 0 0 0.3rem;
`;
