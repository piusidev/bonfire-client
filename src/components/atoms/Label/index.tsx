import React from 'react';

import { CustomLabel } from './styles';

interface ILabelProps {
  text: string;
}

export const Label: React.FC<ILabelProps> = ({ text }) => {
  return <CustomLabel>{text}</CustomLabel>;
};
