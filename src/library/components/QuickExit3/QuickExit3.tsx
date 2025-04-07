
import React from 'react';

import { QuickExit3Props } from './QuickExit3.types';
import * as Styles from './QuickExit3.styles';
import DynamicIcon from "../DynamicIcon/DynamicIcon";
import './QuickExit3.css'

const QuickExit3: React.FunctionComponent<QuickExit3Props> = ({
  quickExit3ButtonLabel = 'Quick exit',
  quickExit3Hyperlink = 'https://www.bbc.co.uk/weather',
  children,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    //alert('Hello World!');
    //console.log(quickExitHyperlink);
    //window.location.href = quickExitHyperlink;
    window.location.replace(quickExit3Hyperlink);
    // let deletingUrl = history.deleteUrl({ url: window.location.href });
  };

  return (
    <>
      <Styles.Container data-testid="QuickExit">
        <Styles.QuickExit3ButtonContainer className="quickExitButtonContainer">
          <Styles.QuickExit3Button onClick={(e) => handleClick(e)}>
            <DynamicIcon icon='quickExit' level={3}/>
            <Styles.QuickExit3ButtonLabelContainer className="quickExitButtonLabelContainer">{quickExit3ButtonLabel}</Styles.QuickExit3ButtonLabelContainer>
            </Styles.QuickExit3Button>
        </Styles.QuickExit3ButtonContainer>
      </Styles.Container>
      <Styles.QuickExit3PageContentContainer className="quickExitContentContainer">
        {children}
      </Styles.QuickExit3PageContentContainer>
    </>
  );
};

export default QuickExit3;

//<Styles.Container data-testid="QuickExit3"></Styles.Container>