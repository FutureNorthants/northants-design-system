
import React from "react";

import { ChevronIconProps } from "./ChevronIcon.types";
import * as Styles from "./ChevronIcon.styles";

const ChevronIcon: React.FC<ChevronIconProps> = ({ colourFill = "", direction = "right" }) => {
    return (
        <Styles.StyledSVG width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={"icon-direction-" + direction}>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.265759 10.6362C-0.0886068 10.9905 -0.0886069 11.5651 0.265758 11.9194C0.620124 12.2738 1.19466 12.2738 1.54903 11.9194L6.73423 6.73424C7.08859 6.37988 7.08859 5.80534 6.73423 5.45097L1.54903 0.265774C1.19466 -0.0885916 0.620124 -0.0885917 0.265759 0.265774C-0.0886064 0.620139 -0.0886064 1.19468 0.265759 1.54904L4.8118 6.09509L0.265759 10.6362Z" fill={colourFill} />
        </Styles.StyledSVG>
    )
} 


export default ChevronIcon;

