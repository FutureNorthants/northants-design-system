import React from 'react';

import { PhaseBannerProps } from './PhaseBanner.types';
import * as Styles from './PhaseBanner.styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const PhaseBanner: React.FC<PhaseBannerProps> = ({
  isHome = false,
  phaseTitle = 'New website',
  phaseText = 'This site is new and we are improving it every day.',
  phaseLink = '',
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Styles.Wrapper isHome={isHome}>
      <Styles.StyledMaxWidthContainer noPadding noBackground isHome={isHome}>
        <Styles.PhaseContainer>
          <Styles.Phase isHome={isHome}>{phaseTitle}</Styles.Phase>
        </Styles.PhaseContainer>
        {phaseLink ? (
          <Styles.PhaseHyperlink href={phaseLink} isHome={isHome}>
            {phaseText}
          </Styles.PhaseHyperlink>
        ) : (
          <Styles.PhaseText>{phaseText}</Styles.PhaseText>
        )}
      </Styles.StyledMaxWidthContainer>
    </Styles.Wrapper>
  );
};

export default PhaseBanner;
