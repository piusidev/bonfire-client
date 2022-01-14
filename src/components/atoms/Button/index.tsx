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
  const canClick = Boolean(action);

  return (
    <CustomButton type={type} onClick={() => (canClick ? action() : undefined)}>
      {label}
    </CustomButton>
  );
};
