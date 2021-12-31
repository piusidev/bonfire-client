import React from 'react';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Input } from '../../../common/UI';
import { Form } from './styles';

export const RegisterForm: React.FC = () => {
  return (
    <Form>
      <Input label="Name" icon={faUser} />
      <Input label="Email" icon={faEnvelope} />
      <Input label="Password" icon={faKey} type="password" />
      <Input label="Repeat password" icon={faKey} type="password" />
    </Form>
  );
};
