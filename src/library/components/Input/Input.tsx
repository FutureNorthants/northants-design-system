import React from 'react';
import { InputProps } from './Input.types';
import * as Styles from './Input.styles';

/**
 * Primary UI component for user interaction
 * If value is set then treat as controlled component
 */
const Input: React.FunctionComponent<InputProps> = ({
  type = 'text',
  placeholder = '',
  isErrored = false,
  errorText,
  name,
  maxLength,
  defaultValue,
  onChange,
  id,
  value,
}) => {
  return (
    <>
      {errorText && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
      {typeof value !== 'undefined' ? (
        <Styles.StyledInput
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          name={name}
          isErrored={isErrored}
          maxLength={maxLength}
          value={value}
          id={id}
        />
      ) : (
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
      )}
    </>
  );
};

export default Input;
