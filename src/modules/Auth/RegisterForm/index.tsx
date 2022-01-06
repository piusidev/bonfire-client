import React from 'react';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { validations } from './use-cases';
import { Input, Button } from '../../../common/UI';
import { Form } from './styles';

interface IFormInputs {
  name?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
}

export const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInputs>({
    resolver: yupResolver(validations),
  });

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<IFormInputs> = error => {
    console.log(error);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input label="Name" name="name" icon={faUser} {...register('name')} />
      <Input
        label="Email"
        name="email"
        icon={faEnvelope}
        {...register('email')}
      />
      <Input
        label="Password"
        icon={faKey}
        type="password"
        name="password"
        {...register('password')}
      />
      <Input
        label="Repeat password"
        icon={faKey}
        type="password"
        name="password"
        {...register('repeatPassword')}
      />
      <Button type="submit" label="Register" />
    </Form>
  );
};
