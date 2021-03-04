
import React from "react";

import { IconProps } from "../Icon.types";

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {

    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M67 59.0007C67.5523 59.0007 68 58.553 68 58.0007C68 57.4484 67.5523 57.0007 67 57.0007H66V54.0007H67C67.5523 54.0007 68 53.553 68 53.0007C68 52.4484 67.5523 52.0007 67 52.0007H66C66 51.4484 65.5523 51.0007 65 51.0007C64.4477 51.0007 64 51.4484 64 52.0007H48C48 51.4484 47.5523 51.0007 47 51.0007C46.4477 51.0007 46 51.4484 46 52.0007H45C44.4477 52.0007 44 52.4484 44 53.0007C44 53.553 44.4477 54.0007 45 54.0007H46V57.0007H45C44.4477 57.0007 44 57.4484 44 58.0007C44 58.553 44.4477 59.0007 45 59.0007H46V60.0007H45C44.4477 60.0007 44 60.4484 44 61.0007C44 61.553 44.4477 62.0007 45 62.0007H46V65.0007H28V56.4007C27.2024 55.7196 26.5261 54.9081 26 54.0007C25.4739 54.9081 24.7976 55.7196 24 56.4007V65.0007H9C8.44772 65.0007 8 65.4484 8 66.0007C8 66.553 8.44772 67.0007 9 67.0007H67C67.5523 67.0007 68 66.553 68 66.0007C68 65.4484 67.5523 65.0007 67 65.0007H66V62.0007H67C67.5523 62.0007 68 61.553 68 61.0007C68 60.4484 67.5523 60.0007 67 60.0007H66V59.0007H67ZM64 65.0007H48V62.0007H64V65.0007ZM64 60.0007H48V59.0007H64V60.0007ZM64 57.0007H48V54.0007H64V57.0007Z" fill={colourFill}/>
<path d="M13 21.0008H18.48C18.47 20.8808 18.46 20.7708 18.46 20.6508C18.4394 17.2423 20.6597 14.225 23.92 13.2308C23.5232 10.651 21.2051 8.81317 18.6029 9.01516C16.0007 9.21715 13.994 11.3907 14 14.0008C13.9984 14.5524 13.5516 14.9991 13 15.0008C11.3431 15.0008 10 16.3439 10 18.0008C10 19.6576 11.3431 21.0008 13 21.0008Z" fill={colourFill}/>
<path d="M51 30.0007H63C64.6569 30.0007 66 28.6576 66 27.0007C66 25.3439 64.6569 24.0007 63 24.0007C62.4484 23.9991 62.0016 23.5523 62 23.0007C62 20.2393 59.7614 18.0007 57 18.0007C54.2386 18.0007 52 20.2393 52 23.0007C51.9984 23.5523 51.5516 23.9991 51 24.0007C49.3431 24.0007 48 25.3439 48 27.0007C48 28.6576 49.3431 30.0007 51 30.0007Z" fill={colourFill}/>
<path d="M18.1499 56.0008C20.8776 55.9959 23.4162 54.6061 24.8899 52.3108L18.2899 45.7108C17.9005 45.3182 17.9018 44.6847 18.2928 44.2937C18.6838 43.9027 19.3173 43.9014 19.7099 44.2908L24.9999 49.5908V39.4108L20.2899 34.7108C20.0345 34.4575 19.9341 34.0869 20.0268 33.7393C20.1194 33.3917 20.3909 33.1203 20.7384 33.0276C21.086 32.935 21.4566 33.0354 21.7099 33.2908L24.9999 36.5908V32.0008C24.9999 31.4485 25.4476 31.0008 25.9999 31.0008C26.5522 31.0008 26.9999 31.4485 26.9999 32.0008V36.5908L30.2899 33.2908C30.5432 33.0354 30.9138 32.935 31.2614 33.0276C31.6089 33.1203 31.8804 33.3917 31.973 33.7393C32.0657 34.0869 31.9653 34.4575 31.7099 34.7108L26.9999 39.4108V49.5908L32.2899 44.2908C32.6825 43.9014 33.316 43.9027 33.707 44.2937C34.098 44.6847 34.0993 45.3182 33.7099 45.7108L27.1099 52.3108C28.5836 54.6061 31.1222 55.9959 33.8499 56.0008C38.4218 55.9175 42.0657 52.153 41.9999 47.5808C41.9999 47.4808 41.9999 47.3708 41.9899 47.2708C41.9144 44.5181 40.4995 41.9757 38.1999 40.4608C37.6179 40.0816 36.9894 39.7791 36.3299 39.5608C35.9987 39.4476 35.7492 39.1717 35.6699 38.8308C35.5894 38.4918 35.6918 38.1354 35.9399 37.8908C37.3028 36.5593 38.0738 34.7362 38.0799 32.8308V32.7708C38.1175 29.3966 35.7486 26.4733 32.4399 25.8108C32.0416 25.7303 31.6362 25.6901 31.2299 25.6908C30.8473 25.693 30.4958 25.4805 30.3199 25.1408C30.1466 24.8084 30.1736 24.407 30.3899 24.1008C31.0517 23.2175 31.4441 22.1618 31.5199 21.0608C31.5368 20.9248 31.5434 20.7877 31.5399 20.6508C31.5864 17.541 29.1095 14.9791 25.9999 14.9208C22.8903 14.9791 20.4134 17.541 20.4599 20.6508C20.4564 20.7877 20.463 20.9248 20.4799 21.0608C20.5557 22.1618 20.9481 23.2175 21.6099 24.1008C21.8295 24.4087 21.8603 24.8131 21.6899 25.1508C21.4953 25.5153 21.1014 25.728 20.6899 25.6908C20.3104 25.6867 19.9315 25.7236 19.5599 25.8008C16.247 26.4633 13.8767 29.3926 13.9199 32.7708V32.8308C13.926 34.7361 14.697 36.5592 16.0599 37.8908C16.308 38.1353 16.4104 38.4918 16.3299 38.8307C16.2506 39.1717 16.0011 39.4476 15.6699 39.5607C15.0104 39.779 14.3819 40.0815 13.7999 40.4607C11.5003 41.9756 10.0854 44.518 10.0099 47.2707C9.9999 47.3707 9.9999 47.4807 9.9999 47.5807C9.93412 52.1529 13.578 55.9175 18.1499 56.0008Z" fill={colourFill}/>
</svg>


    )
} 


export default ServiceIcon;
