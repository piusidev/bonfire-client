import React from 'react';

import { Container } from '../../../atoms';
import { RegisterForm } from '../../../organisms';

export const RegisterTemplate: React.FC = () => {
  return (
    <Container fullscreen={true}>
      <RegisterForm />
    </Container>
  );
};
