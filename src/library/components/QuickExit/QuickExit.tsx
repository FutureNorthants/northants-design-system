import React from 'react';
import { QuickExitProps } from './QuickExit.types';
import * as Styles from './QuickExit.styles';
import HeadingWithIcon from '../HeadingWithIcon/HeadingWithIcon';

const QuickExit: React.FunctionComponent<QuickExitProps> = ({
  label = 'Quick exit',
  url = 'https://www.bbc.co.uk/weather',
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.replace(url);
  };

  return (
    <>
      <Styles.Container data-testid="QuickExit">
        <Styles.QuickExitButton onClick={(e) => handleClick(e)}>
          <HeadingWithIcon icon="quickExit" level={3} text={label} hasHover={false} />
        </Styles.QuickExitButton>
      </Styles.Container>
    </>
  );
};

export default QuickExit;
