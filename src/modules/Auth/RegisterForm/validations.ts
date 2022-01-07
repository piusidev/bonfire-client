import * as yup from 'yup';

const passwordHasMatch =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const validations = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .nullable()
    .email('Email must be a valida email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      passwordHasMatch,
      'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character',
    ),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
