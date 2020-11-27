import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <StyledButton
      type="button"
      className={[`button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
