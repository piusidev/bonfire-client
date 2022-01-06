import React, { FC, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CustomInput, Label } from './styles';

export type IInputProps = {
  icon?: string | any;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  disabled?: boolean;
  error?: boolean;
  value?: string;
};

export const Input: FC<IInputProps> = forwardRef<HTMLInputElement, IInputProps>(
  (
    { icon, label, type = 'text', disabled = false, value, error, ...props },
    ref,
  ) => {
    const hasLabel = Boolean(label);

    return (
      <>
        {hasLabel ? <Label>{label}</Label> : null}
        <CustomInput error={error}>
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
          <input
            ref={ref}
            type={type}
            disabled={disabled}
            value={value}
            {...props}
          />
        </CustomInput>
      </>
    );
  },
);
