import styled from "styled-components";

export const StyledSVG = styled.svg`
    -webkit-transition: transform 0.2s ease-in-out;
    -moz-transition: transform 0.2s ease-in-out;
    -o-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    &.icon-direction-down {
        transform: rotate(90deg);
    }
    &.icon-direction-up {
        transform: rotate(-90deg);
    }
    &.icon-direction-left {
        transform: rotate(180deg);
    }
`
