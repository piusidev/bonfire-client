/* eslint-disable default-case */
import React from 'react';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { validations, createUser } from './use-cases';
import { Input, Button } from '../../../common/UI';
import { Form } from './styles';

interface IFormInputs {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validations),
  });

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    createUser(data);
  };

  const onError: SubmitErrorHandler<IFormInputs> = data => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input
        label="Name"
        name="name"
        icon={faUser}
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Email"
        name="email"
        icon={faEnvelope}
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="Password"
        icon={faKey}
        type="password"
        name="password"
        error={errors.password?.message}
        {...register('password')}
      />
      <Input
        label="Repeat password"
        icon={faKey}
        type="password"
        name="password"
        error={errors.passwordConfirmation?.message}
        {...register('passwordConfirmation')}
      />
      <Button type="submit" label="Register" />
    </Form>
  );
};
