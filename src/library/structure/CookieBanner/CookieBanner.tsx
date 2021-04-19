
import React, {useEffect, useState} from "react";

import { CookieBannerProps } from "./CookieBanner.types";
import * as Styles from "./CookieBanner.styles";
import FormButton from "./../../components/FormButton/FormButton"

import {cookieName, getCookie} from './CookieHelpers';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';


const CookieBanner: React.FC<CookieBannerProps> = ({ title, paragraph, acceptButtonText, acceptConfirmationText = "You've accepted all cookies.", rejectButtonText, rejectConfirmationText = "You've rejected all cookies.", acceptCallback }) => {

    // on page load - look for a cookie
    useEffect(() => {
        checkCookie();
    });



    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const [showCookiesRejectedBanner, setShowCookiesRejectedBanner] = useState(false);
    const [showCookiesAcceptedBanner, setShowCookiesAcceptedBanner] = useState(false);


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
                var cookiesAcceptedConfirmationBanner = myCookie.includes('"cookiesAcceptedConfirmationBanner":true');

                // banner already dismissed - hide the banner
                if (!bannerDismissed) {
                    setShowCookieBanner(false);
                }

                // if we have accepted the cookies the page reloads, so we check acceptedConfirmationBannerDismissed
                if (cookiesAccepted && !cookiesAcceptedConfirmationBanner) {
                    setShowCookiesAcceptedBanner(true);
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
                "cookiesAccepted": true,
                "cookiesAcceptedConfirmationBanner": false,
                "cookieCreated": date.toUTCString()
            };
            document.cookie = `${cookieName}=${JSON.stringify(cookie)};expires=${date.toUTCString()};path=/`;
            location.reload(); // reload to load the cookiesss
        } else {
            cookie = {
                "bannerDismissed": true,
                "cookiesAccepted": false,
                "cookiesAcceptedConfirmationBanner": false,
                "cookieCreated": date.toUTCString()
            };
            document.cookie = `${cookieName}=${JSON.stringify(cookie)};expires=${date.toUTCString()};path=/`;
            setShowCookieBanner(false);
            setShowCookiesRejectedBanner(true);
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

    const hideCookiesAcceptedConfirmationBanner = () => {
        setShowCookiesAcceptedBanner(false);

        let myCookie = getCookie(cookieName);
        var cookieVals = JSON.parse(myCookie);
        cookieVals.cookiesAcceptedConfirmationBanner = true;
        document.cookie = `${cookieName}=${JSON.stringify(cookieVals)};expires=${cookieVals.cookieCreated};path=/`;

    };

    const hideCookiesConfirmationBanner = (e) => {
        setShowCookiesRejectedBanner(false);

        hideCookiesAcceptedConfirmationBanner();
    
    }
        return (
            <>
            {showCookieBanner && 
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
            }
            {showCookiesRejectedBanner && 
                <Styles.Container data-testid="CookieBannerRejected" id="CookieBannerRejected">
                    <Styles.CookieMessage isInline={true}>
                        <Styles.CookieParagraph>{rejectConfirmationText}</Styles.CookieParagraph>

                        <Styles.CookieHide onClick={hideCookiesConfirmationBanner} aria-controls="CookieBannerRejected" aria-hidden="false">Hide</Styles.CookieHide>
                    </Styles.CookieMessage>
                </Styles.Container>            
            }
            {showCookiesAcceptedBanner && 
                <Styles.Container data-testid="CookieBannerAccepted" id="CookieBannerAccepted">
                    <Styles.CookieMessage isInline={true}>
                        <Styles.CookieParagraph>{acceptConfirmationText}</Styles.CookieParagraph>

                        <Styles.CookieHide onClick={hideCookiesConfirmationBanner} aria-controls="CookieBannerAccepted" aria-hidden="false">Hide</Styles.CookieHide>
                    </Styles.CookieMessage>
                </Styles.Container>            
            }
            </>
        );
}
export default CookieBanner;

