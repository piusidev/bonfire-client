import React from 'react';

import { CustomButton } from './styles';

interface IButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  action?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  label,
  type = 'button',
  action,
}) => {
  return (
    <CustomButton type={type} onClick={() => (action ? action() : undefined)}>
      {label}
    </CustomButton>
  );
};
