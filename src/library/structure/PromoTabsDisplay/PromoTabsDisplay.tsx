import React from 'react';

import { PromoTabsDisplayProps } from './PromoTabsDisplay.types';
import * as Styles from './PromoTabsDisplay.styles';
import { PromoBlock, PromoTabs } from '../PageStructures';

const PromoTabsDisplay: React.FunctionComponent<PromoTabsDisplayProps> = ({ promos }) => (
  <Styles.Container data-testid="PromoTabsDisplay">
    <Styles.LargeScreen>
      <PromoTabs promos={promos} />
    </Styles.LargeScreen>
    <Styles.SmallScreen>
      <PromoBlock promos={promos} />
    </Styles.SmallScreen>
  </Styles.Container>
);

export default PromoTabsDisplay;
