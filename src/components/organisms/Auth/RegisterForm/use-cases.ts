import { api } from '../../../../services/api';

export const createUser = async (user: IUser): Promise<IUser> => {
  const response = await api.post('/signup', JSON.stringify(user));

  return response.data;
};
