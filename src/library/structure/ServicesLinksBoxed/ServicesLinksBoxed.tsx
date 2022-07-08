import React, { useEffect, useState } from 'react';
import { ServiceLinksBoxedProps } from './ServicesLinksBoxed.types';
import * as Styles from './ServicesLinksBoxed.styles';
import HeadingWithIcon from '../../components/HeadingWithIcon/HeadingWithIcon';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import DynamicIcon from '../../components/DynamicIcon/DynamicIcon';

const ServiceLinksBoxed: React.FunctionComponent<ServiceLinksBoxedProps> = ({ serviceLinksArray, serviceId }) => {
  const [activeServiceLink, setActiveServiceLink] = useState(null);
  const [bottomMargin, setBottomMargin] = useState(0);

  const toggleActive = (serviceLinkIndex) => {
    if (activeServiceLink === serviceLinkIndex) {
      setActiveServiceLink(null);
    } else {
      setActiveServiceLink(serviceLinkIndex);
    }
  };

  useEffect(() => {
    setBottomMargin(refs.current[activeServiceLink]?.current?.clientHeight);
  }, [activeServiceLink]);

  let refs = React.useRef([]);
  refs.current = serviceLinksArray.map((_, index) => {
    return refs.current[index] ?? React.createRef();
  });

  return (
    <Styles.Container data-testid="ServiceLinksBoxed">
      <Row>
        {serviceLinksArray.map((serviceLink, index) => (
          <Column small="full" medium="one-half" large="one-third" key={index}>
            <Styles.ServiceLink
              onClick={() => toggleActive(index)}
              show={index === activeServiceLink}
              aria-label={index === activeServiceLink ? 'Close ' + serviceLink.title : 'View ' + serviceLink.title}
            >
              <DynamicIcon icon={serviceLink.iconKey} level={3} />
              <Styles.ServiceHeading>{serviceLink.title}</Styles.ServiceHeading>
              <span className="serviceLinkChevron"></span>
            </Styles.ServiceLink>

            <Styles.QuickLinksContainer show={index === activeServiceLink} ref={refs.current[index]}>
              <Styles.QuickLinksInnerContainer>
                <Row isList>
                  {serviceLink.quickLinksArray?.map((quickLink, quickLinkIndex) => (
                    <Column isList small="full" medium="one-half" large="one-third" key={quickLinkIndex}>
                      <Styles.QuickLink href={quickLink.url}>{quickLink.title}</Styles.QuickLink>
                    </Column>
                  ))}
                  <Column small="full" medium="one-half" large="one-third">
                    <Styles.QuickLink href={serviceLink.url}>
                      All {serviceLink.title.toLowerCase()} {serviceLink.title.endsWith('services') ? '' : 'services'}
                    </Styles.QuickLink>
                  </Column>
                </Row>
              </Styles.QuickLinksInnerContainer>
            </Styles.QuickLinksContainer>
            <Styles.Separator margin={index === activeServiceLink ? bottomMargin : 0} />
          </Column>
        ))}
      </Row>
    </Styles.Container>
  );
};

export default ServiceLinksBoxed;
