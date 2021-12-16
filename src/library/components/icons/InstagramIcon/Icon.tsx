import React from "react";
import { IconProps } from "../services/Icon.types";

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 2.5631603,0 C 1.1488752,0 0,1.1653514 0,2.5957167 V 33.404802 C 0,34.835105 1.1488752,36 2.5631603,36 H 33.428571 C 34.842878,36 36,34.835105 36,33.404802 V 2.5957167 C 36,1.1653514 34.842878,0 33.428571,0 Z m 8.3886657,2.9962105 h 14.096348 c 4.407495,0 7.955615,3.5481211 7.955615,7.9556155 v 14.096348 c 0,4.407495 -3.54812,7.955616 -7.955615,7.955616 H 10.951826 c -4.4074971,0 -7.9556156,-3.548121 -7.9556156,-7.955616 V 10.951826 c 0,-4.4074944 3.5481185,-7.9556155 7.9556156,-7.9556155 z m 15.003789,5.4461989 a 1.8154102,1.8154102 0 0 0 -1.815399,1.8153996 1.8154102,1.8154102 0 0 0 1.815399,1.8154 1.8154102,1.8154102 0 0 0 1.815401,-1.8154 1.8154102,1.8154102 0 0 0 -1.815401,-1.8153996 z M 18,10.712046 A 7.2883381,7.2883381 0 0 0 10.712047,18.000001 7.2883381,7.2883381 0 0 0 18,25.288471 7.2883381,7.2883381 0 0 0 25.288471,18.000001 7.2883381,7.2883381 0 0 0 18,10.712046 Z m 0,2.722842 A 4.5652228,4.5652228 0 0 1 22.565113,18.000001 4.5652228,4.5652228 0 0 1 18,22.565113 4.5652228,4.5652228 0 0 1 13.434887,18.000001 4.5652228,4.5652228 0 0 1 18,13.434888 Z" fill={colourFill}/>
        </svg>
    )
} 

export default ServiceIcon;