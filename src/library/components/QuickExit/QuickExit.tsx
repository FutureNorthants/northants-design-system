import React, { useState } from 'react';

import { QuickExitProps } from './QuickExit.types';
import * as Styles from './QuickExit.styles';

import HeadingWithIcon from '../HeadingWithIcon/HeadingWithIcon';

const QuickExit: React.FunctionComponent<QuickExitProps> = ({
  label = 'Quick exit',
  url = 'https://www.bbc.co.uk/weather',
  hasIcon = false,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.replace(url);
  };

  return (
    <>
      <Styles.Container data-testid="QuickExit">
        <Styles.QuickExitButton onClick={(e) => handleClick(e)}>
          {hasIcon && <HeadingWithIcon icon="quickExit" level={3} text={label} hasHover={false} />}
          {!hasIcon && label}
        </Styles.QuickExitButton>
      </Styles.Container>
    </>
  );
};

export default QuickExit;
