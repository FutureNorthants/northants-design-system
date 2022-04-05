import React, { useState } from 'react';
import { ServiceLinksBoxedProps } from './ServiceLinksBoxed.types';
import * as Styles from './ServiceLinksBoxed.styles';
import HeadingWithIcon from '../../components/HeadingWithIcon/HeadingWithIcon';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

const ServiceLinksBoxed: React.FunctionComponent<ServiceLinksBoxedProps> = ({ serviceLinksArray, serviceId }) => {
  const [activeServiceLink, setActiveServiceLink] = useState(null);

  const toggleActive = (serviceLinkIndex) => {
    if (activeServiceLink === serviceLinkIndex) {
      setActiveServiceLink(null);
    } else {
      setActiveServiceLink(serviceLinkIndex);
    }
  };

  return (
    <Styles.Container data-testid="ServiceLinksBoxed">
      <Row>
        {serviceLinksArray.map((serviceLink, index) => (
          <Column small="full" medium="one-half" large="one-third" key={index}>
            <Styles.ServiceLink onClick={() => toggleActive(index)} show={index === activeServiceLink}>
              <HeadingWithIcon text={serviceLink.title} icon={serviceLink.iconKey} level={3} />
              <span className="serviceLinkChevron"></span>
            </Styles.ServiceLink>

            <Styles.QuickLinksContainer show={index === activeServiceLink}>
              <Styles.QuickLinksInnerContainer>
                <Row>
                  {serviceLink.quickLinksArray.map((quickLink, quickLinkIndex) => (
                    <Column small="full" medium="one-half" large="one-third" key={quickLinkIndex}>
                      <Styles.QuickLink href={quickLink.url}>{quickLink.title}</Styles.QuickLink>
                    </Column>
                  ))}
                </Row>
              </Styles.QuickLinksInnerContainer>
            </Styles.QuickLinksContainer>
          </Column>
        ))}
      </Row>
    </Styles.Container>
  );
};

export default ServiceLinksBoxed;
