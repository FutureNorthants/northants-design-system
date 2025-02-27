import React, { useState } from 'react';

import { TabsProps } from './Tabs.types';
import * as Styles from './Tabs.styles';

import { SBPadding } from '../../../../.storybook/SBPadding';
import ServiceIcon from '../icons/FacebookIcon/Icon';

const Tabs: React.FunctionComponent<TabsProps> = ({ tabNames, children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const FRONT_TAB_INDEX = 100;

  //React.Children.toArray(children);

  return (
    <Styles.Container data-testid="Tabs">
      <Styles.TabRow className="tabRow">
        {tabNames.map((tabName, index) => {
          if (index === activeTabIndex) {
            return (
              <Styles.TabButton className="tabButton" $zIndex={FRONT_TAB_INDEX} $niceColourIndex={index}>
                <Styles.TabButtonText onClick={() => setActiveTabIndex(index)}>{tabName}</Styles.TabButtonText>
              </Styles.TabButton>
            );
          } else {
            return (
              <Styles.TabButton
                className="tabButton"
                $zIndex={index}
                onClick={() => {
                  alert('hello!');
                  setActiveTabIndex(index);
                }}
                $niceColourIndex={index}
              >
                <Styles.TabButtonText onClick={() => setActiveTabIndex(index)}>{tabName}</Styles.TabButtonText>
              </Styles.TabButton>
            );
          }
        })}
      </Styles.TabRow>
      <Styles.TabContents className="tabContents">
        {tabNames.map((tabName, index) => {
          if (index === activeTabIndex) {
            return (
              <Styles.TabContent
                className="tabContent"
                $zIndex={FRONT_TAB_INDEX}
                $niceColourIndex={index}
              ></Styles.TabContent>
            );
          } else {
            return <Styles.TabContent className="tabContent" $zIndex={index} $niceColourIndex={index} />;
          }
        })}
      </Styles.TabContents>
    </Styles.Container>
  );
};

export default Tabs;

//                dangerouslySetInnerHTML={{ __html: tabHTMLContents[index] }}

//                {children[index]}

// {React.Children.map(children, (child, index) => {return React.cloneElement(child, { index });
//})}
