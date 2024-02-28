import React from 'react';
import { FormButtonProps } from './FormButton.types';
import * as Styles from './FormButton.styles';

/**
 * Primary UI component for user interaction
 */
const FormButton: React.FunctionComponent<FormButtonProps> = ({
  primary = true,
  size = 'medium',
  text,
  type = 'submit',
  isDisabled = false,
  ...props
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <Styles.StyledButton className={[`button--${size}`, mode].join(' ')} disabled={isDisabled} type={type} {...props}>
      {/* TODO: add aria roles etc */}
      {text}
    </Styles.StyledButton>
  );
};

export default FormButton;
