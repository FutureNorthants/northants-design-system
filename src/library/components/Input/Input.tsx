import React from 'react';
import { InputProps } from './Input.types';
import * as Styles from './Input.styles';

/**
 * Primary UI component for user interaction
 */
const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  isErrored = false,
  errorText,
  name,
  maxLength,
}) => {
  return (
    <>
      {errorText && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
      <Styles.StyledInput
        type={type}
        placeholder={placeholder}
        name={name}
        isErrored={isErrored}
        maxLength={maxLength}
      />
    </>
  );
};

export default Input;
