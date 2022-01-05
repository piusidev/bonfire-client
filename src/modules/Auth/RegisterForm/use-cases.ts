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
