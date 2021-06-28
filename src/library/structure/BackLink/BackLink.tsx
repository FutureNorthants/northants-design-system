
import React from "react";

import { BackLinkProps } from "./BackLink.types";
import * as Styles from "./BackLink.styles";

const BackLink: React.FC<BackLinkProps> = ({ link }) => (
    <Styles.Container href={link} data-testid="BackLink">Back</Styles.Container>
);

export default BackLink;

