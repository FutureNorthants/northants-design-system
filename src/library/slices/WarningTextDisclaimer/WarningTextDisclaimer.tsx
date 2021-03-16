
import React from "react";

import { WarningTextDisclaimerProps } from "./WarningTextDisclaimer.types";
import WarningText from "../WarningText/WarningText";

const WarningTextDisclaimer: React.FC<WarningTextDisclaimerProps> = () => {
    return(
        <WarningText title="Why information is on a different website" isWarning>
            We are in the process of adding information to this new unitary council website. Some pages will give you a link back to a previous council website to help you find what you need. <a href={"/your-council/about-website"} title="Read the article">Read more about the changes</a>.
        </WarningText>
    );
}

export default WarningTextDisclaimer;
