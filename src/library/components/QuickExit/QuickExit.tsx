import React, { useState } from 'react';

import { QuickExitProps } from './QuickExit.types';
import * as Styles from './QuickExit.styles';
import { IS_BROWSER } from 'styled-components/dist/constants';
import { GoogleMapWithTitleAndDescriptionDataWithoutCookies } from '../../slices/GoogleMap/GoogleMap.storydata';

const QuickExit: React.FunctionComponent<QuickExitProps> = ({
  quickExitButtonLabel = 'Quick exit',
  quickExitHyperlink = 'https://www.bbc.co.uk/weather',
  children,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    //alert('Hello World!');
    //console.log(quickExitHyperlink);
    //window.location.href = quickExitHyperlink;
    window.location.replace(quickExitHyperlink);
    // let deletingUrl = history.deleteUrl({ url: window.location.href });
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

export default QuickExit;
