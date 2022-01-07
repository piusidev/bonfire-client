import styled from 'styled-components';

import { themeConfig } from '../../../styles/themes';

export const Form = styled.form`
  background: ${props => props.theme.colors.background};

  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid ${props => props.theme.colors.divider};
  border-radius: ${themeConfig.radius.md};

  padding: 1rem;

  gap: 0.5rem;
`;
