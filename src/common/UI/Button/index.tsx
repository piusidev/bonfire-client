import React from 'react';

import { CustomButton } from './styles';

interface ButtonProps {
  label?: string;
  action?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, action }) => {
  return <CustomButton onClick={() => action()}>{label}</CustomButton>;
};
