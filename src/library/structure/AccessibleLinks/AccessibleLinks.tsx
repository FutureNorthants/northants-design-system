
import React from "react";
import { Story } from '@storybook/react/types-6-0';

import { AccessibleLinksProps } from "./AccessibleLinks.types";
import * as Styles from "./AccessibleLinks.styles";

const AccessibleLinks: React.FC<AccessibleLinksProps> = ({
    title, url
}) => (
    <Styles.AccessibleLinks data-testid="AccessibleLinks" href={url}>{title}</Styles.AccessibleLinks>
);



export default AccessibleLinks;

