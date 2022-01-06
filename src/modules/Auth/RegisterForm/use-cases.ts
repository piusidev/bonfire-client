import * as yup from 'yup';

import { api } from '../../../services/api';

interface IRegisterProps {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}

export const register = (params: IRegisterProps) => {
  const data = JSON.stringify(params);

  const response = api.post('/signup', data);

  response.then(resp => console.log(resp.data));
  response.catch(err => console.log(err));
};

const passwordHasMatch =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const validations = yup.object({
  name: yup.string().required(),
  email: yup.string().nullable().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      passwordHasMatch,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  repeatPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
