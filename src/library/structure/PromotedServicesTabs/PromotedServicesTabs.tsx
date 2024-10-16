import React from 'react';
import { PromotedServicesTabsProps } from './PromotedServicesTabs.types';
import * as Styles from './PromotedServicesTabs.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

const PromotedServicesTabs: React.FunctionComponent<PromotedServicesTabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  const toggleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <Styles.Container data-testid="PromotedServicesTabs">
      <Row>
        {tabs.map((tab, index) => (
          <Column
            key={index}
            small="full"
            medium="one-quarter"
            large="one-quarter"
            classes="promoted-services-tab-column"
          >
            <Styles.Tab
              $isActive={index === activeTab}
              onClick={() => toggleTab(index)}
              aria-label={index === activeTab ? `Hide ${tab.title}` : `Show ${tab.title}`}
              aria-expanded={index === activeTab ? 'true' : 'false'}
              aria-controls={`promoted-services-tab-${index}`}
            >
              {tab.title}
            </Styles.Tab>
          </Column>
        ))}
      </Row>
    </Styles.Container>
  );
};

export default PromotedServicesTabs;
