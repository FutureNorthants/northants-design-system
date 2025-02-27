import React, { useEffect, useState } from 'react';

import { TabProps } from './Tab.types';
import * as Styles from './Tab.styles';
import { UseSelectStateChangeTypes } from 'downshift';

const Tab: React.FunctionComponent<TabProps> = ({
  tabName,
  tabIndex,
  activeTabIndex,
  tabSizeInPixels,
  tabColour,
  tabTextColour,
  zIndex,
  onClickFn,
  children,
}) => {
  const tabIndentInPixels: number = tabSizeInPixels * tabIndex;

  return (
    <>
      <Styles.Container data-testid="Tab" $zIndex={zIndex}>
        <Styles.TabTop
          className="tabTop"
          onClick={() => {
            onClickFn();
          }}
          $tabColour={tabColour}
          $tabTextColour={tabTextColour}
          $tabIndex={tabIndex}
          $tabIndentInPixels={tabIndentInPixels}
          $zIndex={tabIndex - activeTabIndex}
        >
          <Styles.TabTopText className="tabTopText" $tabTextColour={tabTextColour} $zIndex={tabIndex - activeTabIndex}>
            {tabName}
          </Styles.TabTopText>
        </Styles.TabTop>

        <Styles.TabBody
          className="tabBody"
          $tabIndex={tabIndex}
          $tabColour={tabColour}
          $zIndex={tabIndex - activeTabIndex}
        >
          {children}
        </Styles.TabBody>
      </Styles.Container>
    </>
  );
};

export default Tab;

//           onClick={() => {onClickFn();}}
//         <Styles.TabSpace $zIndex={zIndex} />
