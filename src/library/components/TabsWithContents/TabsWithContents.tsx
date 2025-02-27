
import React from "react";

import { TabsWithContentsProps } from "./TabsWithContents.types";
import * as Styles from "./TabsWithContents.styles";

const TabsWithContents: React.FunctionComponent<TabsWithContentsProps> = ({ foo }) => (
    <Styles.Container data-testid="TabsWithContents">{foo}</Styles.Container>
);

export default TabsWithContents;

