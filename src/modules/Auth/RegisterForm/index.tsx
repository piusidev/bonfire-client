/* eslint-disable default-case */
import React from 'react';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { createUser } from './use-cases';
import { validations } from './validations';
import { Input, Button } from '../../../common/UI';
import { Form } from './styles';

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(validations),
  });

  const onSubmit: SubmitHandler<IUser> = data => {
    createUser(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
