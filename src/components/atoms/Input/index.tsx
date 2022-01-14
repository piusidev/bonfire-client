import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, IconName } from '@fortawesome/free-solid-svg-icons';

import { CustomInput } from './styles';

interface IInputProps {
  inputRef: any;
  icon: IconName;
  label?: string;
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
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
  inputRef,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <CustomInput error={error}>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <input
        ref={inputRef}
        type={showPassword ? 'text' : type}
        disabled={disabled}
        value={value}
        {...props}
      />
      {type === 'password' ? (
        <a onClick={() => setShowPassword(prevState => !prevState)}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </a>
      ) : null}
    </CustomInput>
  );
};
