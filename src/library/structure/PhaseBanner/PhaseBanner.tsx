import React from "react";

import { PhaseBannerProps } from "./PhaseBanner.types";
import * as Styles from "./PhaseBanner.styles";

const PhaseBanner: React.FC<PhaseBannerProps> = ({ }) => (
    <Styles.StyledMaxWidthContainer>
        {/* TODO add in link to feedback form */}
        <Styles.Phase>BETA</Styles.Phase> This is a new service - your feedback will help us to improve it.
    </Styles.StyledMaxWidthContainer>
);

export default PhaseBanner;