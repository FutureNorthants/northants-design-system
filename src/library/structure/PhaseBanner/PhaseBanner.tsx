import React from 'react';

import { PhaseBannerProps } from './PhaseBanner.types';
import * as Styles from './PhaseBanner.styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const PhaseBanner: React.FC<PhaseBannerProps> = ({
  isHome = false,
  phaseTitle = 'New website',
  children = <p>This site is new and we are improving it every day.</p>,
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Styles.Wrapper $isHome={isHome} className="Wrapper">
      <Styles.StyledMaxWidthContainer noPadding noBackground $isHome={isHome} className="StyledMaxWidthContainer">
        <Styles.PhaseContainer className="phaseContainer">
          <Styles.Phase $isHome={isHome} className="Phase">
            {phaseTitle}
          </Styles.Phase>
        </Styles.PhaseContainer>
        <Styles.PhaseContentContainer $isHome={isHome} className="phaseContentContainer">
          {children}
        </Styles.PhaseContentContainer>
      </Styles.StyledMaxWidthContainer>
    </Styles.Wrapper>
  );
};

export default PhaseBanner;
