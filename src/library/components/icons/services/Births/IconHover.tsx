
import React from "react";

import { IconProps } from "../Icon.types";

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {

    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M3.28699 12.3631C3.4728 12.1565 3.72858 12.0274 4.00405 12.0012C4.03866 11.9996 4.07332 11.9996 4.10792 12.0012H44.4009C44.6947 12.0013 44.9765 12.1189 45.1843 12.3283C45.392 12.5377 45.5088 12.8217 45.5088 13.1178V26.5166C51.0026 26.5166 55.48 31.029 55.48 36.5658C55.48 39.2853 54.3912 41.7499 52.641 43.5618L54.3375 50.2437C54.3822 50.4267 54.3802 50.6181 54.3317 50.8001C54.2832 50.9821 54.1898 51.1488 54.0603 51.2846C53.9307 51.4204 53.7691 51.521 53.5905 51.5769C53.412 51.6329 53.2223 51.6424 53.0391 51.6046L50.8579 51.1684L49.0576 52.9828C48.9208 53.1211 48.7505 53.2209 48.5636 53.2722C48.3766 53.3234 48.1796 53.3244 47.9922 53.275C47.8047 53.2255 47.6334 53.1274 47.4954 52.9905C47.3573 52.8535 47.2573 52.6824 47.2053 52.4943L45.6127 46.6149C45.5895 46.6151 45.5666 46.615 45.5436 46.615L45.5088 46.6149V56.1057H48.8325C49.1264 56.1058 49.4082 56.2234 49.6159 56.4328C49.8237 56.6422 49.9404 56.9262 49.9404 57.2223V59.1414C49.9404 62.077 47.5601 64.48 44.6433 64.48H8.29721C5.38035 64.48 3.00001 62.077 3.00001 59.1414V13.1178C2.99882 12.8389 3.10119 12.5697 3.28699 12.3631ZM5.21797 14.2344H5.21583V59.1414C5.21583 60.8743 6.56543 62.2469 8.29721 62.2469H8.36645L8.36652 62.2468H8.29934C6.56757 62.2468 5.21797 60.8742 5.21797 59.1414V14.2344ZM37.7673 51.6272C37.8387 51.6266 37.9101 51.6191 37.9806 51.6045L40.16 51.1687L40.1597 51.1684L37.9785 51.6046C37.9087 51.619 37.838 51.6265 37.7673 51.6272ZM42.7622 53.3174C42.9472 53.3159 43.1299 53.2676 43.293 53.1759V53.1747C43.13 53.2669 42.9473 53.3155 42.7622 53.3174ZM43.293 56.1057L12.4194 56.1057L12.4173 56.1057H43.293ZM45.579 44.3814C45.5556 44.3816 45.5322 44.3817 45.5088 44.3817C41.2125 44.3817 37.7534 40.8957 37.7534 36.5658C37.7534 32.3605 41.0162 28.9512 45.1399 28.7584C41.0172 28.9523 37.7556 32.3612 37.7556 36.5657C37.7556 40.8956 41.2146 44.3817 45.5109 44.3817L45.579 44.3814ZM39.2633 49.0684L39.2617 49.0744L39.2595 49.0748L39.261 49.0689L39.2583 49.0694L40.2624 45.1091C41.1536 45.6675 42.14 46.077 43.1879 46.3303L42.1666 50.029L41.301 49.1566C41.1709 49.0277 41.0111 48.9331 40.8359 48.8814C40.6608 48.8296 40.4756 48.8223 40.297 48.86L39.2633 49.0684ZM42.1682 50.0327L41.3043 49.162C41.1742 49.0331 41.0144 48.9385 40.8392 48.8868C40.7335 48.8556 40.6242 48.8405 40.5148 48.8418C40.6235 48.8407 40.7321 48.8558 40.8371 48.8868C41.0123 48.9385 41.172 49.0331 41.3022 49.1621L42.1678 50.0344L42.1682 50.0327ZM47.8288 46.3357L47.8273 46.3303C48.8752 46.077 49.8617 45.6675 50.7529 45.1091L51.7569 49.0694L50.7183 48.86C50.5396 48.8223 50.3545 48.8296 50.1793 48.8814C50.0042 48.9331 49.8444 49.0277 49.7142 49.1566L48.8501 50.0275L48.8515 50.0327L48.8499 50.0344L47.8285 46.3357C47.8286 46.3357 47.8287 46.3357 47.8288 46.3357ZM51.758 49.0744L50.7216 48.8655C50.643 48.8489 50.5631 48.841 50.4834 48.8418C50.5624 48.8411 50.6415 48.849 50.7194 48.8655L51.7581 49.0748L51.758 49.0744ZM13.5201 59.1365C13.5575 60.3173 13.1226 61.3583 12.4814 62.2419H12.4901L12.4865 62.2469H44.6433L44.6454 62.2468H12.4886L12.4922 62.2419H44.6382C46.37 62.2419 47.7196 60.8693 47.7196 59.1365V58.3339H13.5201V59.0841C13.5203 59.0892 13.5204 59.0942 13.5204 59.0992C13.5203 59.1034 13.5202 59.1076 13.5202 59.1117C13.52 59.1199 13.5198 59.128 13.5201 59.1365ZM8.99179 17.5841C8.84628 17.5909 8.70353 17.6266 8.57169 17.689C8.43986 17.7515 8.32152 17.8395 8.22344 17.948C8.12536 18.0566 8.04946 18.1835 8.00007 18.3216C7.95068 18.4598 7.92877 18.6063 7.93559 18.753C7.94241 18.8996 7.97783 19.0435 8.03982 19.1763C8.10181 19.3092 8.18917 19.4284 8.29689 19.5273C8.40462 19.6261 8.5306 19.7026 8.66766 19.7523C8.80471 19.802 8.95015 19.8241 9.09566 19.8172H39.4174C39.5642 19.8193 39.71 19.792 39.8462 19.7368C39.9825 19.6816 40.1065 19.5997 40.211 19.4958C40.3156 19.3919 40.3986 19.2681 40.4553 19.1316C40.5119 18.9951 40.5411 18.8486 40.5411 18.7006C40.5411 18.5527 40.5119 18.4062 40.4553 18.2696C40.3986 18.1331 40.3156 18.0093 40.211 17.9055C40.1065 17.8016 39.9825 17.7197 39.8462 17.6645C39.71 17.6093 39.5642 17.582 39.4174 17.5841H9.09566C9.06105 17.5824 9.02639 17.5824 8.99179 17.5841ZM8.99179 24.2835C8.84628 24.2903 8.70353 24.326 8.57169 24.3884C8.43986 24.4509 8.32152 24.5389 8.22344 24.6474C8.12536 24.756 8.04946 24.883 8.00007 25.0211C7.95068 25.1592 7.92877 25.3057 7.93559 25.4524C7.94241 25.599 7.97783 25.7429 8.03982 25.8758C8.10181 26.0086 8.18917 26.1278 8.29689 26.2267C8.40462 26.3255 8.5306 26.402 8.66766 26.4517C8.80471 26.5015 8.95015 26.5235 9.09566 26.5166H39.4174C39.5642 26.5187 39.71 26.4914 39.8462 26.4362C39.9825 26.381 40.1065 26.2991 40.211 26.1952C40.3156 26.0913 40.3986 25.9675 40.4553 25.831C40.5119 25.6945 40.5411 25.548 40.5411 25.4C40.5411 25.2521 40.5119 25.1056 40.4553 24.9691C40.3986 24.8326 40.3156 24.7088 40.211 24.6049C40.1065 24.501 39.9825 24.4191 39.8462 24.3639C39.71 24.3087 39.5642 24.2814 39.4174 24.2835H9.09566C9.06105 24.2818 9.02639 24.2818 8.99179 24.2835ZM8.99179 30.9829C8.84628 30.9897 8.70353 31.0254 8.57169 31.0879C8.43986 31.1503 8.32152 31.2383 8.22344 31.3469C8.12536 31.4554 8.04946 31.5824 8.00007 31.7205C7.95068 31.8586 7.92877 32.0052 7.93559 32.1518C7.94241 32.2985 7.97783 32.4423 8.03982 32.5752C8.10181 32.708 8.18917 32.8273 8.29689 32.9261C8.40462 33.0249 8.5306 33.1014 8.66766 33.1511C8.80471 33.2009 8.95015 33.2229 9.09566 33.216H24.6064C24.7532 33.2181 33.0625 33.1908 33.1988 33.1356C33.335 33.0804 33.459 32.9985 33.5636 32.8946C33.6681 32.7907 33.7511 32.667 33.8078 32.5304C33.8645 32.3939 33.8936 32.2474 33.8936 32.0995C33.8936 31.9515 33.8645 31.805 33.8078 31.6685C33.7511 31.532 33.6681 31.4082 33.5636 31.3043C33.459 31.2004 33.335 31.1185 33.1988 31.0633C33.0625 31.0081 24.7532 30.9808 24.6064 30.9829H9.09566C9.06105 30.9813 9.02639 30.9813 8.99179 30.9829ZM45.5109 30.9829C42.4647 30.9829 39.9714 33.4956 39.9714 36.5657C39.9714 39.6359 42.4647 42.1486 45.5109 42.1486C48.5572 42.1486 51.0505 39.6359 51.0505 36.5657C51.0505 33.4956 48.5572 30.9829 45.5109 30.9829ZM45.5109 33.216C47.3597 33.216 48.8347 34.7025 48.8347 36.5657C48.8347 38.429 47.3597 39.9155 45.5109 39.9155C43.6622 39.9155 42.1872 38.429 42.1872 36.5657C42.1872 34.7025 43.6622 33.216 45.5109 33.216ZM8.99179 37.6823C8.84628 37.6892 8.70353 37.7248 8.57169 37.7873C8.43986 37.8497 8.32152 37.9377 8.22344 38.0463C8.12536 38.1548 8.04946 38.2818 8.00007 38.4199C7.95068 38.558 7.92877 38.7046 7.93559 38.8512C7.94241 38.9979 7.97783 39.1417 8.03982 39.2746C8.10181 39.4074 8.18917 39.5267 8.29689 39.6255C8.40462 39.7243 8.5306 39.8008 8.66766 39.8506C8.80471 39.9003 8.95015 39.9224 9.09566 39.9155H24.6064C24.7532 39.9175 33.0625 39.8902 33.1988 39.835C33.335 39.7799 33.459 39.6979 33.5636 39.5941C33.6681 39.4902 33.7511 39.3664 33.8078 39.2299C33.8645 39.0934 33.8936 38.9469 33.8936 38.7989C33.8936 38.6509 33.8645 38.5044 33.8078 38.3679C33.7511 38.2314 33.6681 38.1076 33.5636 38.0037C33.459 37.8998 33.335 37.8179 33.1988 37.7627C33.0625 37.7076 24.7532 37.6802 24.6064 37.6823H9.09566C9.06105 37.6807 9.02639 37.6807 8.99179 37.6823ZM8.99179 44.3817C8.84628 44.3886 8.70353 44.4242 8.57169 44.4867C8.43986 44.5491 8.32152 44.6372 8.22344 44.7457C8.12536 44.8542 8.04946 44.9812 8.00007 45.1193C7.95068 45.2574 7.92877 45.404 7.93559 45.5506C7.94241 45.6973 7.97783 45.8412 8.03982 45.974C8.10181 46.1069 8.18917 46.2261 8.29689 46.3249C8.40462 46.4238 8.5306 46.5002 8.66766 46.55C8.80471 46.5997 8.95015 46.6218 9.09566 46.6149H33.8779C34.0247 46.617 34.1704 46.5896 34.3067 46.5345C34.4429 46.4793 34.5669 46.3974 34.6715 46.2935C34.776 46.1896 34.859 46.0658 34.9157 45.9293C34.9724 45.7928 35.0016 45.6463 35.0016 45.4983C35.0016 45.3503 34.9724 45.2038 34.9157 45.0673C34.859 44.9308 34.776 44.807 34.6715 44.7031C34.5669 44.5992 34.4429 44.5173 34.3067 44.4621C34.1704 44.407 34.0247 44.3796 33.8779 44.3817H9.09566C9.06105 44.3801 9.02639 44.3801 8.99179 44.3817ZM8.99179 51.0812C8.84628 51.088 8.70353 51.1237 8.57169 51.1861C8.43986 51.2486 8.32152 51.3366 8.22344 51.4451C8.12536 51.5537 8.04946 51.6806 8.00007 51.8187C7.95068 51.9569 7.92877 52.1034 7.93559 52.2501C7.94241 52.3967 7.97783 52.5406 8.03982 52.6734C8.10181 52.8063 8.18917 52.9255 8.29689 53.0243C8.40462 53.1232 8.5306 53.1996 8.66766 53.2494C8.80471 53.2991 8.95015 53.3212 9.09566 53.3143H33.8779C34.0247 53.3164 34.1704 53.289 34.3067 53.2339C34.4429 53.1787 34.5669 53.0968 34.6715 52.9929C34.776 52.889 34.859 52.7652 34.9157 52.6287C34.9724 52.4922 35.0016 52.3457 35.0016 52.1977C35.0016 52.0497 34.9724 51.9033 34.9157 51.7667C34.859 51.6302 34.776 51.5064 34.6715 51.4025C34.5669 51.2987 34.4429 51.2167 34.3067 51.1616C34.1704 51.1064 34.0247 51.0791 33.8779 51.0812H9.09566C9.06105 51.0795 9.02639 51.0795 8.99179 51.0812Z" fill={colourFill} />
</svg>


    )
} 


export default ServiceIcon;
