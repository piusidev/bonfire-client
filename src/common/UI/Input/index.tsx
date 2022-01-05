import React, { FC, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CustomInput, Label } from './styles';

export type InputProps = {
  icon?: string | any;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  disabled?: boolean;
  value?: string;
};

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, label, type = 'text', disabled = false, value, ...props }, ref) => {
    const hasLabel = Boolean(label);

    return (
      <>
        {hasLabel ? <Label>{label}</Label> : null}
        <CustomInput>
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
