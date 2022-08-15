import React from 'react';

import { IconProps } from '../Icon.types';

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M43.0643 16.1164C42.3119 16.4031 41.712 17.0547 41.4934 17.8158C41.4223 18.0712 41.4121 18.8427 41.4121 25.0145C41.4121 31.2175 41.4223 31.9577 41.4934 32.2131C41.6155 32.6354 41.7375 32.8491 42.0527 33.1931C42.3933 33.5684 42.7288 33.7978 43.1558 33.9438C43.4558 34.048 43.5829 34.0584 46.0281 34.0741L48.5802 34.0897V46.793C48.5802 59.0479 48.5853 59.5014 48.6768 59.71C48.8852 60.1843 49.1394 60.2677 50.3137 60.2416C51.1678 60.226 51.2136 60.2208 51.3915 60.0957C51.4932 60.0279 51.6203 59.882 51.6762 59.7777L51.7829 59.5849V46.7825V33.9802H54.34C57.0598 33.9802 57.0598 33.9802 57.5936 33.7196C57.8936 33.5737 58.2952 33.2088 58.5036 32.8908C58.5951 32.7605 58.6866 32.6354 58.7121 32.6197C58.7375 32.6041 58.7527 32.5728 58.7477 32.552C58.7426 32.5311 58.768 32.4425 58.8036 32.3487C58.8392 32.2548 58.8798 32.1089 58.8951 32.0255C58.9307 31.8483 58.9357 18.4152 58.9052 18.1337C58.89 18.0347 58.8595 17.92 58.8341 17.8835C58.8087 17.8523 58.7985 17.821 58.8188 17.821C58.8392 17.821 58.8188 17.7689 58.7731 17.7011C58.7324 17.6333 58.7121 17.5603 58.7324 17.5447C58.7477 17.5239 58.7375 17.5082 58.7019 17.5082C58.6663 17.5082 58.6561 17.4822 58.6714 17.4561C58.6866 17.4248 58.6816 17.404 58.6612 17.404C58.6358 17.404 58.5748 17.3258 58.5189 17.2319C58.3715 16.9765 57.9546 16.5387 57.6851 16.3614C57.553 16.278 57.309 16.1581 57.1463 16.1008C56.8565 15.9965 56.7243 15.9965 50.1104 16.0018H43.3693L43.0643 16.1164ZM51.5796 19.4213C52.7438 19.8696 53.4758 20.6254 53.8418 21.7565C54.4417 23.5966 53.4351 25.6556 51.6253 26.2916C51.2085 26.4375 51.1627 26.4427 49.9935 26.4636L48.7835 26.4844V28.5851V30.691L47.8685 30.7067L46.9534 30.7223V24.9884V19.2545L49.1241 19.2805C51.1678 19.3066 51.3152 19.317 51.5796 19.4213Z"
        fill={colourFill}
      />
      <path
        d="M48.7837 22.846V24.5453H49.8004C50.6952 24.5453 50.8477 24.5349 51.0917 24.4411C51.9 24.1283 52.322 23.2265 52.0576 22.3456C51.9407 21.939 51.5899 21.5324 51.1832 21.3291C50.8985 21.1884 50.8731 21.1832 49.8411 21.1675L48.7837 21.1467V22.846Z"
        fill={colourFill}
      />
      <path
        d="M12.7397 26.0831C12.699 26.0935 12.4906 26.13 12.2822 26.1613C11.784 26.2447 11.0367 26.4897 10.5232 26.7399C8.99299 27.4853 7.74239 28.851 7.07134 30.5086C6.85782 31.0403 6.75106 31.4573 5.97325 34.929L5.3937 37.5197L3.86858 37.5353L2.34346 37.5509L2.00285 37.7229C1.58598 37.9315 1.24537 38.3015 1.09794 38.7081C0.996269 38.9896 0.991185 39.0835 1.00644 40.6994L1.02169 42.3987L1.15895 42.6593C1.32163 42.9825 1.73849 43.3891 2.04352 43.5246C2.18078 43.5872 2.59256 43.6706 3.07043 43.7384C3.50764 43.7957 3.87366 43.8478 3.87875 43.853C3.88383 43.8583 3.84825 43.999 3.80249 44.171C3.72624 44.4525 3.71607 45.2083 3.7059 51.7815C3.68557 59.8976 3.66015 59.3086 4.03126 59.6995C4.13802 59.8142 4.34137 59.9602 4.47863 60.0227L4.73282 60.1478H7.50345C10.1114 60.1478 10.2843 60.1374 10.4876 60.0488C10.7825 59.908 11.0926 59.564 11.1841 59.2721C11.2298 59.1366 11.4688 58.0523 11.723 56.8638C11.9721 55.6754 12.1907 54.6485 12.2059 54.5807L12.2313 54.466H22.2666H32.3019L32.3324 54.6068C32.8052 56.916 33.3441 59.3034 33.4305 59.4441C33.5881 59.7047 33.9541 60.0175 34.1829 60.0853C34.3253 60.1322 35.159 60.1478 37.0959 60.1478C40.1766 60.1478 40.0343 60.1635 40.4664 59.71C40.8833 59.2669 40.8528 59.8455 40.8528 52.0369C40.8528 45.3334 40.8477 45.0728 40.7511 44.4838C40.6952 44.1502 40.6494 43.8687 40.6494 43.8583C40.6494 43.853 40.8121 43.827 41.0155 43.8061C42.3016 43.681 42.7083 43.5403 43.11 43.1024C43.5726 42.5968 43.5726 42.5968 43.5726 40.6003V38.8541L43.4251 38.5778C43.232 38.2234 42.8558 37.8689 42.4897 37.6917L42.2 37.5509L40.6342 37.5353C39.6988 37.5249 39.0836 37.4988 39.0989 37.4675C39.1141 37.4415 39.0938 37.2747 39.0531 37.0974C38.9667 36.7482 38.4431 34.4233 38.0008 32.4686C37.7212 31.2071 37.5382 30.6233 37.2586 30.0447C36.5519 28.606 35.4996 27.5113 34.1372 26.8128C33.644 26.5574 33.2221 26.3958 32.5968 26.2238L32.0833 26.0831L22.4496 26.0779C17.1524 26.0726 12.7804 26.0726 12.7397 26.0831ZM31.6766 30.4617C32.1545 30.5868 32.5002 30.7849 32.8764 31.155C33.3898 31.6502 33.5576 32.0307 33.883 33.4173C34.7523 37.16 34.9099 37.9002 34.8794 38.1191C34.798 38.656 34.371 39.1356 33.8779 39.2398C33.6847 39.2815 30.2684 39.2972 22.1446 39.2867L10.6808 39.2711L10.452 39.1616C10.0402 38.9636 9.75047 38.5622 9.70471 38.1243C9.68946 37.9784 9.86231 37.0818 10.269 35.2C10.5893 33.7092 10.8892 32.3852 10.935 32.2653C11.1434 31.6554 11.7179 30.9882 12.2873 30.6911C12.9075 30.3731 12.2873 30.3887 22.2463 30.3887C30.2837 30.3835 31.4123 30.3939 31.6766 30.4617ZM35.4793 44.1658C35.9978 44.3899 36.1503 45.0155 36.1503 46.9337C36.1503 47.7365 36.13 48.1378 36.0842 48.2734C36.0029 48.5132 35.7335 48.7634 35.4793 48.8363C35.3725 48.8624 33.8576 48.9458 32.1087 49.0188L28.9365 49.1491L28.6772 49.0188C28.3773 48.8676 28.1892 48.6122 28.1587 48.3047C28.1282 48.0127 28.5145 46.3238 28.6721 46.0893C28.8399 45.8286 29.15 45.6931 30.2532 45.396C31.4123 45.0884 34.2541 44.2909 34.5998 44.1762C34.8946 44.0772 35.2708 44.072 35.4793 44.1658ZM10.4164 44.3847C12.5313 44.9581 15.3629 45.7765 15.4951 45.8443C15.7594 45.985 15.8865 46.2717 16.1255 47.2569C16.3746 48.2786 16.3898 48.5079 16.1966 48.7842C16.1306 48.878 15.9831 48.9979 15.8611 49.0501C15.6476 49.1491 15.5968 49.1491 12.4753 49.0188C10.7316 48.951 9.23192 48.878 9.14042 48.8624C9.03874 48.8416 8.87606 48.7425 8.74389 48.6174C8.37786 48.2734 8.34735 48.0909 8.38294 46.4906C8.41853 45.0259 8.45411 44.7392 8.65238 44.4681C8.94723 44.0772 9.23701 44.0615 10.4164 44.3847Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;