import React, { useState } from 'react';
import { TabsProps } from './Tabs.types';
import * as Styles from './Tabs.styles';
import sanitizeHtml from 'sanitize-html';

const Tabs: React.FunctionComponent<TabsProps> = ({ tabs, defaultTab = 0, hasTopMargin = false }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <Styles.Container data-testid="Tabs" $hasTopMargin={hasTopMargin}>
      <Styles.TabsContainer>
        {tabs.map((tab, index) => (
          <Styles.TabItem key={index}>
            <Styles.TabButton $isActive={activeTab == index} onClick={(e) => setActiveTab(index)}>
              {tab.title}
            </Styles.TabButton>
          </Styles.TabItem>
        ))}
      </Styles.TabsContainer>
      <div>
        {tabs.map((tab, index) => (
          <Styles.TabContent
            $isActive={activeTab == index}
            key={index}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(tab.content) }}
          ></Styles.TabContent>
        ))}
      </div>
    </Styles.Container>
  );
};

export default Tabs;
