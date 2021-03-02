
import React from "react";
import parse from "html-react-parser"

import { WarningTextProps } from "./WarningText.types";
import * as Styles from "./WarningText.styles";

// @TODO this needs to fit within the content border 

const WarningText: React.FC<WarningTextProps> = ({ title, isWarning = false, children }) => (
    <Styles.WarningText isWarning={isWarning}>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Content>{children}</Styles.Content>
    </Styles.WarningText>
);

export default WarningText;
