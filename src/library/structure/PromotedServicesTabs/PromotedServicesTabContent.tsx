import React from 'react';
import { PromotedServicesTabsProps } from './PromotedServicesTabs.types';
import * as Styles from './PromotedServicesTabs.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';

const PromotedServicesTabContent: React.FunctionComponent<PromotedServicesTabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  const toggleTab = (index) => {
    if (index === activeTab) {
      setActiveTab(-1);
    } else {
      setActiveTab(index);
    }
  };

  return (
    <Styles.TabContentContainer data-testid="PromotedServicesTabContent">
      {tabs.map((tab, contentIndex) => (
        <Styles.TabContentInner key={contentIndex}>
          <Styles.TabMobile
            $isActive={contentIndex === activeTab}
            onClick={() => toggleTab(contentIndex)}
            aria-label={contentIndex === activeTab ? `Hide ${tab.title}` : `Show ${tab.title}`}
            aria-selected={contentIndex === activeTab ? 'true' : 'false'}
            aria-controls={`promoted-services-tabpanel-${contentIndex}`}
            role="tab"
          >
            <span>{tab.title}</span>
            <ChevronIcon direction={contentIndex === activeTab ? 'up' : 'down'} colourFill="#000" />
          </Styles.TabMobile>
          <Styles.TabContent
            $isActive={contentIndex === activeTab}
            id={`promoted-services-tabpanel-${contentIndex}`}
            aria-labelledby={`promoted-services-tab-${contentIndex}`}
            role="tabpanel"
          >
            <Row>
              {tab.services.map((serviceLink, serviceLinkIndex) => (
                <Column key={serviceLinkIndex} small="full" medium="one-half" large="one-third">
                  <Styles.ServiceLink href={serviceLink.url}>{serviceLink.title}</Styles.ServiceLink>
                </Column>
              ))}
            </Row>
          </Styles.TabContent>
        </Styles.TabContentInner>
      ))}
    </Styles.TabContentContainer>
  );
};

export default PromotedServicesTabContent;
