
import React from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { WarningTextDisclaimerProps } from "./WarningTextDisclaimer.types";
import WarningText from "../WarningText/WarningText";

// @TODO this needs to fit within the content border 

const WarningTextDisclaimer: React.FC<WarningTextDisclaimerProps> = () => {
    const themeContext = useContext(ThemeContext);

    return(
        <WarningText title="Why information is on a different website" isWarning>
            We are in the process of adding information to this new unitary council website. Some pages will give you a link back to a previous council website to help you find what you need. <a href={"/news/" + themeContext.cardinal_name + "-northamptonshire-council-launches-public-beta-website"} title="Read the article">Read more about the changes</a>.
        </WarningText>
    );
}

export default WarningTextDisclaimer;
