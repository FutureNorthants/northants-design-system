import React, { useState } from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { AlertBannerProps } from "./AlertBanner.types";
import * as Styles from "./AlertBanner.styles";
import CloseIcon from '../../components/icons/CloseIcon/CloseIcon';
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const AlertBanner: React.FC<AlertBannerProps> = ({ uid, title, alertType = "alert", children }) => {
    const themeContext = useContext(ThemeContext);
    const [hideAlert, setHideAlert] = useLocalStorage(("alert_"+uid), true);

    const hideClickHandler = () => {
        setHideAlert(false)
    }

    return(
        hideAlert &&
            <Styles.Container alertType={alertType}>
                <MaxWidthContainer noBackground>
                    <Styles.InnerContainer>
                        <Styles.BannerContentContainer>
                            <Styles.BannerTitle>{title}</Styles.BannerTitle>
                            <Styles.BannerContent>{children}</Styles.BannerContent>
                        </Styles.BannerContentContainer>

                        <Styles.HideLink title="Click to hide this alert banner" onClick={hideClickHandler} alertType={alertType}>
                            <CloseIcon colourFill={alertType === "warning" ? themeContext.theme_vars.colours.black : themeContext.theme_vars.colours.white} />
                            <br />
                            Hide
                        </Styles.HideLink>
                    </Styles.InnerContainer>
                </MaxWidthContainer>
            </Styles.Container>
    );
}

function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
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
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
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