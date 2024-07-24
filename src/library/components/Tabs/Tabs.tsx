import React from 'react';

import { TabsProps } from './Tabs.types';
import * as Styles from './Tabs.styles';

const Tabs: React.FunctionComponent<TabsProps> = ({ tabs, activeTab = 0, hasTopMargin = false }) => (
  <Styles.Container data-testid="Tabs" $hasTopMargin={hasTopMargin}>
    <Styles.TabsContainer>
      {tabs.map((tab, index) => (
        <Styles.TabItem key={index}>
          <Styles.TabButton $isActive={activeTab == index} onClick={tab.onClick}>
            {tab.title}
          </Styles.TabButton>
        </Styles.TabItem>
      ))}
    </Styles.TabsContainer>
  </Styles.Container>
);

export default Tabs;
