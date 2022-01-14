import React from 'react';

import { Error } from './styles';

interface IFormErrorProps {
  text: string;
}

export const FormError: React.FC<IFormErrorProps> = ({ text }) => {
  return <Error>{text}</Error>;
};
