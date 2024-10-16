import React from 'react';
import { PromotedLinksProps } from './PromotedLinks.types';
import * as Styles from './PromotedLinks.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

const PromotedLinks: React.FunctionComponent<PromotedLinksProps> = ({ promotedLinksArray, oneCol, hasTabs }) => {
  if (promotedLinksArray.length > 0) {
    return (
      <Styles.PromotedLinks data-testid="PromotedLinks" $oneCol={oneCol} $hasTabs={hasTabs}>
        <Row isList hasWrap={false}>
          {promotedLinksArray.map((link, i) => (
            <Column
              isList
              small="full"
              medium={hasTabs ? 'one-quarter' : 'one-half'}
              large={hasTabs ? 'one-quarter' : 'auto'}
              key={i}
            >
              <Styles.PromotedLink $oneCol={oneCol} href={link.url} title={link.title} $hasTabs={hasTabs}>
                <span>{link.title}</span>
              </Styles.PromotedLink>
            </Column>
          ))}
        </Row>
      </Styles.PromotedLinks>
    );
  } else {
    return null;
  }
};

export default PromotedLinks;
