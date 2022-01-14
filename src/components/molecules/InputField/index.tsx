import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { Label, FormError, Input } from '../../atoms';
import { InputContainer } from './styles';

interface IInputProps {
  name?: string;
  icon?: IconDefinition;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  disabled?: boolean;
  error?: string;
  value?: string;
}

export const InputField: React.FC<IInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <InputContainer>
      {label ? <Label text={label} /> : null}
      <Input {...props} />
      {error ? <FormError text={error} /> : null}
    </InputContainer>
  );
};
