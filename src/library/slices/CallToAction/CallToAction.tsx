import React from 'react';
import Button from '../../components/Button/Button';
import { ButtonProps } from '../../components/Button/Button.types';
import * as Styles from './CallToAction.styles';

/**
 * A button wrapped in a div used as a slice in the content management system
 */
const CallToAction: React.FunctionComponent<ButtonProps> = ({
  primary,
  size,
  text,
  url,
  isExternal,
  isDisabled,
  ...props
}) => {
  return (
    <Styles.Container>
      <Button primary={primary} size="large" text={text} url={url} isExternal={isExternal} isDisabled={isDisabled} />
    </Styles.Container>
  );
};

export default CallToAction;
