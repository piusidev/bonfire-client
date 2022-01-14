import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useFormContext } from 'react-hook-form';

import { CustomInput } from './styles';

interface IInputProps {
  name?: string;
  icon?: IconDefinition;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  disabled?: boolean;
  error?: string;
  value?: string;
}

export const Input: React.FC<IInputProps> = ({
  icon,
  type = 'text',
  disabled = false,
  value,
  error,
  name,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register } = useFormContext();

  return (
    <CustomInput error={error}>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <input
        type={showPassword ? 'text' : type}
        disabled={disabled}
        value={value}
        {...props}
        {...register(name)}
      />
      {type === 'password' ? (
        <a onClick={() => setShowPassword(prevState => !prevState)}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </a>
      ) : null}
    </CustomInput>
  );
};
