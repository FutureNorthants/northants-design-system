import React, { useState } from 'react';

import { QuickExitProps } from './QuickExit.types';
import * as Styles from './QuickExit.styles';
import DynamicIcon from "../DynamicIcon/DynamicIcon";

const QuickExit: React.FunctionComponent<QuickExitProps> = ({
  quickExitButtonLabel = 'Quick exit',
  quickExitHyperlink = 'https://www.bbc.co.uk/weather',
  quickExitButtonSolidOrTransparent = 'solid',
  quickExitButtonIncludeIcon = false}) => {

  const handleClick = (e) => {
    e.preventDefault();
    window.location.replace(quickExitHyperlink);
  };

  return (
    <>
      <Styles.Container data-testid="QuickExit">
        <Styles.QuickExitButtonContainer className="quickExitButtonContainer"
        $quickExitButtonSolidOrTransparent={quickExitButtonSolidOrTransparent}>
          <Styles.QuickExitButton onClick={(e) => handleClick(e)}>
            {quickExitButtonIncludeIcon && (<DynamicIcon icon='quickExit' level={3}/>)}
            {quickExitButtonLabel}</Styles.QuickExitButton>
        </Styles.QuickExitButtonContainer>
      </Styles.Container>
    </>
  );
};

export default QuickExit;
