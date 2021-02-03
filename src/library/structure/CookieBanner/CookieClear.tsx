
import React, {useEffect, useState} from "react";

import Button from "./../../components/Button/Button"
import {cookieName, getCookie} from './CookieHelpers';

interface CookieClearProps {}

  

const CookieBanner: React.FC<CookieClearProps> = () => {

    const clearCookie = (e) => {
        document.cookie = cookieName+'=; Max-Age=-99999999;';  
        window.location.reload();
    }

        return (
            <p><br /><br /><br /><br />
                <Button primary={true} text="DEBUGGING Clear cookie" primary={false} url="#" isDisabled={true} onClick={clearCookie} />
            </p>
        );

}
export default CookieBanner;

