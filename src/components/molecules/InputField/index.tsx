import React, { FC, forwardRef, useEffect } from 'react';

import { Label, FormError, Input } from '../../atoms';
import { InputContainer } from './styles';

interface IInputProps {
  icon?: string | any;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  disabled?: boolean;
  error?: string;
  value?: string;
}

export const InputField: FC<IInputProps> = forwardRef<
  HTMLInputElement,
  IInputProps
>(
  (
    { icon, label, type = 'text', disabled = false, value, error, ...props },
    ref,
  ) => {
    const hasLabel = Boolean(label);

    return (
      <InputContainer>
        {hasLabel ? <Label text={label} /> : null}
        <Input
          inputRef={ref}
          error={error}
          icon={icon}
          type={type}
          disabled={disabled}
          value={value}
          {...props}
        />
        {error ? <FormError text={error} /> : null}
      </InputContainer>
    );
  },
);
