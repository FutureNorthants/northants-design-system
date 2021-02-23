
import React, {useEffect, useState} from "react";

import { CookieBannerProps } from "./CookieBanner.types";
import * as Styles from "./CookieBanner.styles";
import FormButton from "./../../components/FormButton/FormButton"

import {cookieName, getCookie} from './CookieHelpers';

const CookieBanner: React.FC<CookieBannerProps> = ({ title, paragraph, acceptButtonText, rejectButtonText, acceptCallback }) => {

    // on page load - look for a cookie
    useEffect(() => {
        checkCookie();
    });



    const [showCookieBanner, setShowCookieBanner] = useState(false);


    

    const checkCookie = () => {

            // on every page load run this.
            let myCookie = getCookie(cookieName);

            if (myCookie == null) {
                // no cookie - show banner
                setShowCookieBanner(true);
            } else {
                // we have cookie		
                var cookiesAccepted = myCookie.includes('"cookiesAccepted":true');
                var bannerDismissed = myCookie.includes('"bannerDismissed":true');

                // banner already dismissed - hide the banner
                if (!bannerDismissed) {
                    setShowCookieBanner(false);
                }

                if (cookiesAccepted) {
                    // we've accepted cookies so load all the things
                    acceptCallback();
                }

            }
    }

    const toggleCookie = (accepted) => {
        let cookie = {};
        let date = new Date();
        // Cookie is valid 1 year
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        if (accepted === true) {
            cookie = {
                "bannerDismissed": true,
                "cookiesAccepted": true
            };
            document.cookie = `${cookieName}=${JSON.stringify(cookie)};expires=${date.toUTCString()};path=/`;
            location.reload(); // reload to load the cookiesss
        } else {
            cookie = {
                "bannerDismissed": true,
                "cookiesAccepted": false
            };
            document.cookie = `${cookieName}=${JSON.stringify(cookie)};expires=${date.toUTCString()};path=/`;
            setShowCookieBanner(false);
        }
    }


    // on reject
    const rejectCookies = (e) => {
        toggleCookie(false);
    }


    // on accept
    const acceptCookies = (e) => {
        toggleCookie(true);
    }

    if(showCookieBanner) {
        return (
            <Styles.Container data-testid="CookieBanner">
                <Styles.CookieMessage>
                    <Styles.CookieHeading>{title}</Styles.CookieHeading>
                    <Styles.CookieParagraph>{paragraph}</Styles.CookieParagraph>
                    <Styles.ButtonsContainer>
                        <FormButton primary={true} text={acceptButtonText} isDisabled={true} onClick={acceptCookies} />
                        <FormButton primary={true} text={rejectButtonText} isDisabled={true} onClick={rejectCookies} />
                    </Styles.ButtonsContainer>
                </Styles.CookieMessage>
            </Styles.Container>
        );
    }
    else {
        return null;
    }
}
export default CookieBanner;

