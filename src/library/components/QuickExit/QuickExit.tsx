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

//alert('Hello World!');
//console.log(quickExitHyperlink);
//window.location.href = quickExitHyperlink;
// let deletingUrl = history.deleteUrl({ url: window.location.href });

/*

const QuickExit: React.FunctionComponent<QuickExitProps> = ({
  quickExitButtonLabel = 'Quick exit',
  quickExitHyperlink = 'https://www.bbc.co.uk/weather',
  children,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.replace(quickExitHyperlink);
  };

  return (
    <>
      <Styles.Container data-testid="QuickExit">
        <Styles.QuickExitButtonContainer className="quickExitButtonContainer">
          <Styles.QuickExitButton onClick={(e) => handleClick(e)}>{quickExitButtonLabel}</Styles.QuickExitButton>
        </Styles.QuickExitButtonContainer>
      </Styles.Container>
      <Styles.QuickExitPageContentContainer className="quickExitContentContainer">
        {children}
      </Styles.QuickExitPageContentContainer>
    </>
  );
};

*/