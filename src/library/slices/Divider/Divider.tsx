
import React from "react";

import { DividerProps } from "./Divider.types";
import * as Styles from "./Divider.styles";

const Divider: React.FC<DividerProps> = () => (
    <Styles.Divider data-testid="Divider"></Styles.Divider>
);

export default Divider;

