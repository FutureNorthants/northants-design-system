
import React from "react";
import parse from "html-react-parser"

import { WarningTextDisclaimerProps } from "./WarningTextDisclaimer.types";
import WarningText from "../WarningText/WarningText";

// @TODO this needs to fit within the content border 

const WarningTextDisclaimer: React.FC<WarningTextDisclaimerProps> = () => (
    <WarningText title="Why information is on a different website" isWarning>
        We are in the process of adding information to this new unitary council website. Some pages will give you a link back to a previous council website to help you find what you need. <a href="/">Read more about the changes</a>.
    </WarningText>
);

export default WarningTextDisclaimer;
