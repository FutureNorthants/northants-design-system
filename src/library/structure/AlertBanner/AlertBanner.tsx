import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AlertBannerProps } from './AlertBanner.types';
import * as Styles from './AlertBanner.styles';
import CloseIcon from '../../components/icons/CloseIcon/CloseIcon';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

/**
 * A site wide alert banner, once dismissed it won't be shown again
 */
const AlertBanner: React.FunctionComponent<AlertBannerProps> = ({ uid, title, alertType = 'alert', children }) => {
  const themeContext = useContext(ThemeContext);
  const elementRef = useRef(null);
  const [showAlert, setShowAlert] = useLocalStorage('alert_' + uid, true);
  const [notServer, setNotServer] = useState(false);
  useEffect(() => {
    elementRef?.current?.addEventListener('click', embeddedLinkCLickHandler);
  }, [elementRef]);

  /* Stop flash of banner on page load when previously dismissed */
  useEffect(() => {
    setNotServer(true);
  }, []);

  /* A click on any link within the alert text dismisses the banner too */
  const embeddedLinkCLickHandler = (event) => {
    if (event?.target?.tagName === 'A') {
      hideClickHandler();
    }
  };
  const hideClickHandler = () => {
    setShowAlert(false);
  };

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

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue; // e.g. at server-side build time
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    if (typeof window === 'undefined') return; // e.g. at server-side build time
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default AlertBanner;
