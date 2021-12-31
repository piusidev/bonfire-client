import React from 'react';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Input, Button } from '../../../common/UI';
import { Form } from './styles';
import { register } from './use-cases';

export const RegisterForm: React.FC = () => {
  const data = {
    name: 'Leonardo',
    email: 'sdfdsf@jasddfsdfha.com',
    password: '123456',
    passwordConfirmation: '123456',
  };

  register(data);

  return (
    <Form>
      <Input label="Name" icon={faUser} />
      <Input label="Email" icon={faEnvelope} />
      <Input label="Password" icon={faKey} type="password" />
      <Input label="Repeat password" icon={faKey} type="password" />
      <Button label="Register" />
    </Form>
  );
};
