import React from 'react';

import { CustomButton } from './styles';

interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  action?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  action,
}) => {
  const canClick = !!action;
  return (
    <CustomButton type={type} onClick={() => (canClick ? action() : undefined)}>
      {label}
    </CustomButton>
  );
};
