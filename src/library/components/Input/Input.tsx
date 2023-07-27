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
  defaultValue,
  onChange,
  id,
}) => {
  return (
    <>
      {errorText && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
      <Styles.StyledInput
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        isErrored={isErrored}
        maxLength={maxLength}
        defaultValue={defaultValue}
        id={id}
      />
    </>
  );
};

export default Input;
