
import React from "react";

import { IconProps } from "../Icon.types";

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {
    const randomId = Date.now().toString(36) + Math.random().toString(36).substr(2);

    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499512 64.11L0.499948 52.49H5.08082H9.88227V58.3V64.11H5.08082H0.499512ZM32.8272 23.58H32.9153V23.198L32.8272 23.58ZM38.6214 19.66V17.7V15.74H41.544H44.4667V17.7V19.66H46.3803H48.2939V21.62V23.58H41.544H34.7942V21.62V19.66H36.7078H38.6214ZM32.8458 42.9V34.15V25.4H41.544H50.2423V34.15V42.9H41.544H32.8458ZM34.7942 64.11V54.415V44.72H41.544H48.2939V54.415V64.11H41.544H34.7942ZM50.1727 64.11V58.3V52.49H51.1469H52.1212V58.3V64.11H51.1469H50.1727ZM23.2428 64.11V58.3V52.49H28.0791H32.9153V58.3V64.11H28.0791H23.2428ZM11.7611 64.11V58.3V52.49H16.5974H21.4336V58.3V64.11H16.5974H11.7611ZM42.7618 27.535C45.086 27.955 47.0483 29.621 47.8416 31.84C48.3217 33.198 48.3635 34.85 47.932 36.18C46.8535 39.561 43.5064 41.479 40.0479 40.695C37.6542 40.156 35.7197 38.28 35.0655 35.865C34.8637 35.144 34.8498 33.492 35.0307 32.687C35.6292 30.013 37.8281 27.927 40.5002 27.5C41.0987 27.409 42.1564 27.423 42.7618 27.535ZM40.0549 29.523C38.6144 30.041 37.4176 31.252 36.9792 32.638C36.5895 33.856 36.6869 35.158 37.2505 36.32C37.4871 36.803 37.6542 37.027 38.1691 37.545C38.8789 38.266 39.3242 38.532 40.2497 38.798C42.0729 39.33 44.0909 38.693 45.2669 37.216C46.9509 35.088 46.6517 32.099 44.571 30.377C44.0283 29.929 43.1236 29.495 42.4486 29.362C42.3512 29.348 41.8641 29.341 41.3701 29.355C40.6672 29.369 40.375 29.404 40.0549 29.523ZM42.5185 35.06V33.17V31.28H41.5443H40.5701V32.26V33.24H39.6307H38.6913V34.15V35.06H40.6049H42.5185ZM42.5185 54.415V60.19H41.5443H40.5701V54.415V48.64H41.5443H42.5185V54.415ZM29.0185 60.19V58.3V56.41H28.0791H27.1397V58.3V60.19H28.0791H29.0185ZM17.5366 58.3V60.19H16.5972H15.6578V58.3V56.41H16.5972H17.5366V58.3ZM5.98583 60.19V58.3V56.41H5.04641H4.10699V58.3V60.19H5.04641H5.98583Z" fill={colourFill}/>
        </svg>
        )
    } 
    
    
    export default ServiceIcon;
    
    