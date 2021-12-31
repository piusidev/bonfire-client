import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CustomInput, Label } from './styles';

interface InputProps {
  icon?: string | any;
  label?: string;
  type?: string;
  disabled?: boolean;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  icon,
  label,
  type = 'text',
  disabled = false,
  value,
}) => {
  const hasLabel = Boolean(label);

  return (
    <>
      {hasLabel ? <Label>{label}</Label> : null}
      <CustomInput>
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
        <input type={type} disabled={disabled} value={value} />
      </CustomInput>
    </>
  );
};
