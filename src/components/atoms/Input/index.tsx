import React, { FC, forwardRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomInput } from './styles';

interface IInputProps {
  icon?: string | any;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  disabled?: boolean;
  error?: string;
  value?: string;
}

export const Input: FC<IInputProps> = forwardRef<HTMLInputElement, IInputProps>(
  ({ icon, type = 'text', disabled = false, value, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <CustomInput error={error}>
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
        <input
          ref={ref}
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
  },
);