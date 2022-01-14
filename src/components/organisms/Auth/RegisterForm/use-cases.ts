import { api } from '../../../../services/api';

export const createUser = (params: IUser) => {
  const data = JSON.stringify(params);

  const response = api.post('/signup', data);

  response.then(resp => console.log(resp.data));
  response.catch(err => console.log(err));
};
