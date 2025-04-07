import React, { useState } from 'react';

import { QuickExit2Props } from './QuickExit2.types';
import * as Styles from './QuickExit2.styles';
import { IS_BROWSER } from 'styled-components/dist/constants';
import { GoogleMapWithTitleAndDescriptionDataWithoutCookies } from '../../slices/GoogleMap/GoogleMap.storydata';

const QuickExit2: React.FunctionComponent<QuickExit2Props> = ({
  quickExit2ButtonLabel = 'Quick exit',
  quickExit2Hyperlink = 'https://www.bbc.co.uk/weather',
  children,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    //alert('Hello World!');
    //console.log(quickExitHyperlink);
    //window.location.href = quickExitHyperlink;
    window.location.replace(quickExit2Hyperlink);
    // let deletingUrl = history.deleteUrl({ url: window.location.href });
  };

  return (
    <>
      <Styles.Container data-testid="QuickExit">
        <Styles.QuickExit2ButtonContainer className="quickExitButtonContainer">
          <Styles.QuickExit2Button onClick={(e) => handleClick(e)}>{quickExit2ButtonLabel}</Styles.QuickExit2Button>
        </Styles.QuickExit2ButtonContainer>
      </Styles.Container>
      <Styles.QuickExit2PageContentContainer className="quickExitContentContainer">
        {children}
      </Styles.QuickExit2PageContentContainer>
    </>
  );
};

export default QuickExit2;
