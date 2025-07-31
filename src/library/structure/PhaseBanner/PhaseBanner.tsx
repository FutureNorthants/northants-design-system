import React from 'react';

import { PhaseBannerProps } from './PhaseBanner.types';
import * as Styles from './PhaseBanner.styles';

/**
 * A Phase Banner notifying the customer that the website (or one of it's features) is a new one
 * and potentially allowing feedback to be collected via a Microsoft O365 link
 */
const PhaseBanner: React.FC<PhaseBannerProps> = ({
  isHome = false,
  phaseTitle = 'New website',
  children = <p>This site is new and we are improving it every day.</p>,
}) => {
  return (
    <Styles.Wrapper data-testid="PhaseBanner" $isHome={isHome}>
      <Styles.StyledMaxWidthContainer noPadding noBackground $isHome={isHome}>
        <Styles.PhaseContainer data-testid="wrapper">
          <Styles.Phase data-testid="PhaseBannerHeading" $isHome={isHome}>
            {phaseTitle}
          </Styles.Phase>
        </Styles.PhaseContainer>
        <Styles.PhaseContentContainer $isHome={isHome}>{children}</Styles.PhaseContentContainer>
      </Styles.StyledMaxWidthContainer>
    </Styles.Wrapper>
  );
};

export default PhaseBanner;
