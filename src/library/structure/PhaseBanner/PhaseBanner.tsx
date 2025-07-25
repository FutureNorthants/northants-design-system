import React from 'react';

import { PhaseBannerProps } from './PhaseBanner.types';
import * as Styles from './PhaseBanner.styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const PhaseBanner: React.FC<PhaseBannerProps> = ({
  isHome = false,
  phaseTitle = 'New website',
  phaseText = ['This site is new and we are improving it every day.'],
  phaseLink = '',
  phaseHyperlinkText = '',
}) => {
  const themeContext = useContext(ThemeContext);

  const spreadPhaseHyperlinksOverSeperateLines = (currentValue: string) => (
    <Styles.PhaseHyperlink href={phaseLink} isHome={isHome}>
      {currentValue}
    </Styles.PhaseHyperlink>
  );

  return (
    <Styles.Wrapper isHome={isHome}>
      <Styles.StyledMaxWidthContainer noPadding noBackground isHome={isHome}>
        <Styles.PhaseContainer className="phaseContainer">
          <Styles.Phase isHome={isHome}>{phaseTitle}</Styles.Phase>
        </Styles.PhaseContainer>

        {!!phaseLink && !!phaseHyperlinkText ? (
          <Styles.PhaseContentContainer>
            <Styles.PhaseText>{phaseText}</Styles.PhaseText>
            <Styles.PhaseHyperlink href={phaseLink} isHome={isHome}>
              {phaseHyperlinkText}
            </Styles.PhaseHyperlink>
          </Styles.PhaseContentContainer>
        ) : (
          <Styles.PhaseText>{phaseText}</Styles.PhaseText>
        )}
      </Styles.StyledMaxWidthContainer>
    </Styles.Wrapper>
  );
};

export default PhaseBanner;

/* 
        {!!phaseLink && !!phaseHyperlinkText ? <br /> : <Styles.PhaseText>{phaseText}</Styles.PhaseText>}
          <Styles.PhaseHyperlinkContainer>
            <Styles.PhaseText>{phaseText}</Styles.PhaseText>
            <Styles.PhaseHyperlink href={phaseLink} isHome={isHome}>
              {phaseHyperlinkText}
            </Styles.PhaseHyperlink>
          </Styles.PhaseHyperlinkContainer>
          */
