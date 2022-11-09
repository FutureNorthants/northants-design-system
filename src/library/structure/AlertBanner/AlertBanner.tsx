import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AlertBannerProps } from './AlertBanner.types';
import * as Styles from './AlertBanner.styles';
import CloseIcon from '../../components/icons/CloseIcon/CloseIcon';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import useLocalStorage from '../../helpers/UseLocalStorage';

/**
 * A site wide alert banner, once dismissed it won't be shown again
 */
const AlertBanner: React.FunctionComponent<AlertBannerProps> = ({ uid, title, alertType = 'alert', children }) => {
  const themeContext = useContext(ThemeContext);
  const elementRef = useRef(null);
  const [showAlert, setShowAlert] = useLocalStorage('alert_' + uid, true);
  useEffect(() => {
    elementRef?.current?.addEventListener('click', embeddedLinkCLickHandler);
  }, [elementRef]);

  /* A click on any link within the alert text dismisses the banner too */
  const embeddedLinkCLickHandler = (event) => {
    if (event?.target?.tagName === 'A') {
      hideClickHandler();
    }
  };
  const hideClickHandler = () => {
    setShowAlert(false);
  };

  /* Stop flash of banner on page load when previously dismissed */
  const notServer = typeof window !== 'undefined';

  return (
    showAlert &&
    notServer && (
      <Styles.Container alertType={alertType} data-testid="AlertBanner">
        <MaxWidthContainer noBackground>
          <Styles.InnerContainer>
            <Styles.BannerContentContainer>
              <Styles.BannerTitle>{title}</Styles.BannerTitle>
              <Styles.BannerContent ref={elementRef}>{children}</Styles.BannerContent>
            </Styles.BannerContentContainer>

            <Styles.HideLink
              title="Click to dismiss this alert banner"
              onClick={hideClickHandler}
              alertType={alertType}
            >
              <CloseIcon
                colourFill={
                  alertType === 'warning'
                    ? themeContext.theme_vars.colours.black
                    : themeContext.theme_vars.colours.white
                }
              />
              <br />
              Dismiss
            </Styles.HideLink>
          </Styles.InnerContainer>
        </MaxWidthContainer>
      </Styles.Container>
    )
  );
};

export default AlertBanner;
