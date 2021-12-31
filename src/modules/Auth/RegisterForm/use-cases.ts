import { api } from '../../../services/api';

interface RegisterProps {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}

export const register = (params: RegisterProps) => {
  const data = JSON.stringify(params);

  const response = api.post('/signup', data);

  response.then(resp => console.log(resp.data));
  response.catch(err => console.log(err));
};
