
import React from "react";

import { IconProps } from "../Icon.types";

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {

    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59 60.0008C59.5523 60.0008 60 59.553 60 59.0008C60 58.4485 59.5523 58.0008 59 58.0008H58V55.0008H59C59.5523 55.0008 60 54.553 60 54.0008C60 53.4485 59.5523 53.0008 59 53.0008H58C58 52.4485 57.5523 52.0008 57 52.0008C56.4477 52.0008 56 52.4485 56 53.0008H40C40 52.4485 39.5523 52.0008 39 52.0008C38.4477 52.0008 38 52.4485 38 53.0008H37C36.4477 53.0008 36 53.4485 36 54.0008C36 54.553 36.4477 55.0008 37 55.0008H38V58.0008H37C36.4477 58.0008 36 58.4485 36 59.0008C36 59.553 36.4477 60.0008 37 60.0008H38V61.0008H37C36.4477 61.0008 36 61.4485 36 62.0008C36 62.553 36.4477 63.0008 37 63.0008H38V66.0008H20V57.4008C19.2024 56.7196 18.5261 55.9081 18 55.0008C17.4739 55.9081 16.7976 56.7196 16 57.4008V66.0008H1C0.447715 66.0008 0 66.4485 0 67.0008C0 67.553 0.447715 68.0008 1 68.0008H59C59.5523 68.0008 60 67.553 60 67.0008C60 66.4485 59.5523 66.0008 59 66.0008H58V63.0008H59C59.5523 63.0008 60 62.553 60 62.0008C60 61.4485 59.5523 61.0008 59 61.0008H58V60.0008H59ZM56 66.0008H40V63.0008H56V66.0008ZM56 61.0008H40V60.0008H56V61.0008ZM56 58.0008H40V55.0008H56V58.0008Z" fill={colourFill} />
<path d="M5 22.0008H10.48C10.47 21.8808 10.46 21.7708 10.46 21.6508C10.4394 18.2423 12.6597 15.225 15.92 14.2308C15.5232 11.651 13.2051 9.81317 10.6029 10.0152C8.00067 10.2171 5.99395 12.3907 6 15.0008C5.99835 15.5524 5.5516 15.9991 5 16.0008C3.34315 16.0008 2 17.3439 2 19.0008C2 20.6576 3.34315 22.0008 5 22.0008Z" fill={colourFill} />
<path d="M43 31.0008H55C56.6569 31.0008 58 29.6576 58 28.0008C58 26.3439 56.6569 25.0008 55 25.0008C54.4484 24.9991 54.0016 24.5524 54 24.0008C54 21.2393 51.7614 19.0008 49 19.0008C46.2386 19.0008 44 21.2393 44 24.0008C43.9984 24.5524 43.5516 24.9991 43 25.0008C41.3431 25.0008 40 26.3439 40 28.0008C40 29.6576 41.3431 31.0008 43 31.0008Z" fill={colourFill} />
<path d="M10.1499 57.0008C12.8776 56.9959 15.4162 55.6061 16.8899 53.3108L10.2899 46.7108C9.90051 46.3182 9.9018 45.6847 10.2928 45.2937C10.6838 44.9027 11.3173 44.9014 11.7099 45.2908L16.9999 50.5908V40.4108L12.2899 35.7108C12.0345 35.4575 11.9341 35.0869 12.0268 34.7393C12.1194 34.3917 12.3909 34.1203 12.7384 34.0276C13.086 33.935 13.4566 34.0354 13.7099 34.2908L16.9999 37.5908V33.0008C16.9999 32.4485 17.4476 32.0008 17.9999 32.0008C18.5522 32.0008 18.9999 32.4485 18.9999 33.0008V37.5908L22.2899 34.2908C22.5432 34.0354 22.9138 33.935 23.2614 34.0276C23.6089 34.1203 23.8804 34.3917 23.973 34.7393C24.0657 35.0869 23.9653 35.4575 23.7099 35.7108L18.9999 40.4108V50.5908L24.2899 45.2908C24.6825 44.9014 25.316 44.9027 25.707 45.2937C26.098 45.6847 26.0993 46.3182 25.7099 46.7108L19.1099 53.3108C20.5836 55.6061 23.1222 56.9959 25.8499 57.0008C30.4218 56.9175 34.0657 53.153 33.9999 48.5808C33.9999 48.4808 33.9999 48.3708 33.9899 48.2708C33.9144 45.5181 32.4995 42.9757 30.1999 41.4608C29.6179 41.0816 28.9894 40.7791 28.3299 40.5608C27.9987 40.4476 27.7492 40.1717 27.6699 39.8308C27.5894 39.4918 27.6918 39.1354 27.9399 38.8908C29.3028 37.5593 30.0738 35.7362 30.0799 33.8308V33.7708C30.1175 30.3966 27.7486 27.4733 24.4399 26.8108C24.0416 26.7303 23.6362 26.6901 23.2299 26.6908C22.8473 26.693 22.4958 26.4805 22.3199 26.1408C22.1466 25.8084 22.1736 25.407 22.3899 25.1008C23.0517 24.2175 23.4441 23.1618 23.5199 22.0608C23.5368 21.9248 23.5434 21.7877 23.5399 21.6508C23.5864 18.541 21.1095 15.9791 17.9999 15.9208C14.8903 15.9791 12.4134 18.541 12.4599 21.6508C12.4564 21.7877 12.463 21.9248 12.4799 22.0608C12.5557 23.1618 12.9481 24.2175 13.6099 25.1008C13.8295 25.4087 13.8603 25.8131 13.6899 26.1508C13.4953 26.5153 13.1014 26.728 12.6899 26.6908C12.3104 26.6867 11.9315 26.7236 11.5599 26.8008C8.24704 27.4633 5.87669 30.3926 5.9199 33.7708V33.8308C5.92598 35.7361 6.69701 37.5592 8.0599 38.8908C8.30805 39.1353 8.41043 39.4918 8.3299 39.8307C8.25062 40.1717 8.00114 40.4476 7.6699 40.5607C7.01045 40.779 6.38192 41.0815 5.7999 41.4607C3.50029 42.9756 2.08536 45.518 2.0099 48.2707C1.9999 48.3707 1.9999 48.4807 1.9999 48.5807C1.93412 53.1529 5.57797 56.9175 10.1499 57.0008Z" fill={colourFill} />
</svg>


    )
} 


export default ServiceIcon;
