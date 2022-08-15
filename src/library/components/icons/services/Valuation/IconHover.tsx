import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.839583 8.11385C0.525416 8.25468 0.319583 8.44968 0.14625 8.78551L0 9.05635V32.2397C0 54.1934 0.00541666 55.4338 0.0920833 55.6234C0.24375 55.9376 0.514583 56.2138 0.812499 56.3492L1.08333 56.4792H13.4225H25.7562V43.8151C25.7562 31.308 25.7562 31.1509 25.8646 30.6959C26.0162 30.0676 26.4766 29.1413 26.8775 28.6647C27.0508 28.4588 27.365 28.1447 27.5708 27.9713C27.9771 27.6301 28.8275 27.1751 29.3204 27.0343C29.4883 26.9855 29.6508 26.9259 29.6833 26.8988C29.7104 26.8718 32.1371 26.8501 35.3275 26.8501H40.9229L40.9121 17.9234C40.8958 9.40301 40.8904 8.99135 40.7983 8.80176C40.6737 8.55801 40.3812 8.24927 40.1483 8.12468C39.9858 8.0326 39.5796 8.02718 34.1466 8.01093L28.3183 8.0001L28.2858 10.2318C28.2641 11.4613 28.2479 14.7438 28.2479 17.5172C28.2425 22.4138 28.2425 22.5763 28.1396 22.8201C28.08 22.9555 27.9987 23.1018 27.9554 23.1397C27.9121 23.183 27.8687 23.2372 27.8579 23.2588C27.8525 23.2859 27.7225 23.3888 27.5708 23.4918C27.3162 23.6705 27.2783 23.6813 26.8396 23.6813C26.3304 23.6813 26.2546 23.6488 25.4312 23.0476C25.2362 22.9068 24.9979 22.7334 24.9004 22.6684C24.8029 22.598 24.6458 22.4788 24.5483 22.3976C24.4508 22.3163 24.3479 22.2459 24.3154 22.2459C24.2829 22.2459 24.2233 22.208 24.1854 22.1647C24.115 22.078 23.66 21.7584 23.6112 21.7584C23.5679 21.7584 22.9017 22.2351 22.5387 22.5276C22.36 22.6684 22.1975 22.7713 22.1704 22.7551C22.1487 22.7388 22.1271 22.7497 22.1271 22.7713C22.1271 22.7984 22.0567 22.858 21.9754 22.9068C21.8942 22.9555 21.7425 23.0693 21.6396 23.1613C21.5367 23.2534 21.4175 23.3293 21.385 23.3293C21.3471 23.3293 21.3146 23.3509 21.3146 23.3834C21.3146 23.4105 21.2875 23.4376 21.2496 23.4376C21.2171 23.4376 21.1467 23.4701 21.1033 23.508C20.8487 23.7138 20.1825 23.768 19.8575 23.6055C19.6896 23.5188 19.0829 23.1018 18.1458 22.4355C17.1654 21.7368 17.1925 21.7476 17.1112 21.818C17.0679 21.8505 17.0354 21.8668 17.0354 21.8451C17.0354 21.8288 16.9867 21.8559 16.9325 21.9047C16.7429 22.078 16.6346 22.1647 16.6021 22.1647C16.5858 22.1647 16.5208 22.2134 16.4504 22.273C16.38 22.3326 16.315 22.3705 16.3096 22.3543C16.2987 22.3272 15.8979 22.6251 15.7462 22.7713C15.7083 22.8093 15.6487 22.8418 15.6217 22.8418C15.5946 22.8418 15.5296 22.8851 15.4754 22.9338C15.3129 23.0963 14.6358 23.5351 14.4192 23.6272C14.1267 23.7463 13.6771 23.7193 13.3629 23.5622C13.0217 23.3888 12.9567 23.3347 12.7887 23.0909L12.6479 22.8797V15.4426V8.0001H6.86833C1.16458 8.0001 1.07792 8.00552 0.839583 8.11385ZM17.6854 29.9159C17.9725 30.0838 18.1837 30.4305 18.1892 30.7393C18.1946 31.178 17.8858 31.6113 17.485 31.7197C17.3496 31.7576 15.6867 31.7793 12.415 31.7793C8.00041 31.7793 7.53458 31.7684 7.35041 31.6872C7.24208 31.6384 7.13375 31.5951 7.11208 31.5951C7.06875 31.5897 6.89541 31.3568 6.79791 31.1672C6.64625 30.8638 6.71125 30.4522 6.97666 30.1001C7.03083 30.0243 7.09583 29.9647 7.11208 29.9593C7.13375 29.9593 7.23666 29.9159 7.33958 29.8672C7.51291 29.7859 8.00041 29.7805 12.5125 29.7913C17.4525 29.8022 17.4958 29.8022 17.6854 29.9159ZM17.6854 36.1451C17.9725 36.313 18.1837 36.6597 18.1892 36.9684C18.1946 37.4072 17.8858 37.8405 17.485 37.9488C17.3496 37.9868 15.6867 38.0084 12.415 38.0084C8.00041 38.0084 7.53458 37.9976 7.35041 37.9163C7.24208 37.8676 7.13375 37.8243 7.11208 37.8243C7.06875 37.8188 6.89541 37.5859 6.79791 37.3963C6.64625 37.093 6.71125 36.6813 6.97666 36.3293C7.03083 36.2534 7.09583 36.1938 7.11208 36.1884C7.13375 36.1884 7.23666 36.1451 7.33958 36.0963C7.51291 36.0151 8.00041 36.0097 12.5125 36.0205C17.4525 36.0313 17.4958 36.0313 17.6854 36.1451ZM17.6854 41.9409C17.9725 42.1088 18.1837 42.4555 18.1892 42.7643C18.1946 43.203 17.8858 43.6363 17.485 43.7447C17.3496 43.7826 15.6867 43.8043 12.415 43.8043C8.00041 43.8043 7.53458 43.7934 7.35041 43.7122C7.24208 43.6634 7.13375 43.6201 7.11208 43.6201C7.06875 43.6147 6.89541 43.3818 6.79791 43.1922C6.64625 42.8888 6.71125 42.4772 6.97666 42.1251C7.03083 42.0493 7.09583 41.9897 7.11208 41.9843C7.13375 41.9843 7.23666 41.9409 7.33958 41.8922C7.51291 41.8109 8.00041 41.8055 12.5125 41.8163C17.4525 41.8272 17.4958 41.8272 17.6854 41.9409ZM17.6854 47.8993C17.9725 48.0672 18.1837 48.4138 18.1892 48.7226C18.1946 49.1613 17.8858 49.5947 17.485 49.703C17.3496 49.7409 15.6867 49.7626 12.415 49.7626C8.00041 49.7626 7.53458 49.7518 7.35041 49.6705C7.24208 49.6218 7.13375 49.5784 7.11208 49.5784C7.06875 49.573 6.89541 49.3401 6.79791 49.1505C6.64625 48.8472 6.71125 48.4355 6.97666 48.0834C7.03083 48.0076 7.09583 47.948 7.11208 47.9426C7.13375 47.9426 7.23666 47.8993 7.33958 47.8505C7.51291 47.7693 8.00041 47.7638 12.5125 47.7747C17.4525 47.7855 17.4958 47.7855 17.6854 47.8993Z"
        fill={colourFill}
      />
      <path
        d="M15.3997 13.7688C15.3889 16.943 15.3889 19.5376 15.3997 19.5376C15.4051 19.5376 15.5514 19.4401 15.7247 19.3209C16.6076 18.698 16.7485 18.6276 17.1656 18.6276C17.4851 18.6276 18.0106 18.7955 18.0106 18.893C18.0106 18.9201 18.0431 18.9417 18.081 18.9417C18.1135 18.9417 18.2326 19.0176 18.3356 19.1042C18.4385 19.1963 18.5685 19.283 18.6226 19.2992C18.6714 19.3155 18.7147 19.3534 18.7147 19.3805C18.7147 19.4076 18.7472 19.4292 18.7906 19.4292C18.8339 19.4292 18.8772 19.4671 18.8989 19.5105C18.9151 19.5538 18.9639 19.5917 19.0072 19.5917C19.0451 19.5917 19.0993 19.6296 19.1156 19.6784C19.1318 19.7217 19.1697 19.7488 19.1914 19.7326C19.2185 19.7163 19.316 19.7813 19.4081 19.8734C19.5056 19.9601 19.5814 20.0196 19.5814 20.0034C19.5814 19.9655 19.6843 20.0467 19.8522 20.2092C19.9118 20.2688 19.9606 20.2959 19.9606 20.2634C19.9606 20.2363 19.9768 20.2363 20.0039 20.2688C20.0256 20.2959 20.1231 20.3771 20.2206 20.4476L20.3939 20.5721L20.7893 20.3013C21.5314 19.7867 21.6668 19.6838 21.6831 19.6405C21.6939 19.6134 21.7318 19.5917 21.7643 19.5917C21.8022 19.5917 21.8943 19.5321 21.9701 19.4617C22.046 19.3913 22.1868 19.2938 22.2789 19.2451C22.3764 19.1963 22.4522 19.1313 22.4522 19.1042C22.4522 19.0717 22.4793 19.0501 22.5064 19.0501C22.5389 19.0501 22.696 18.9634 22.8585 18.8551C23.1239 18.6763 23.1997 18.6546 23.5572 18.6384C23.9256 18.6221 23.996 18.6384 24.2776 18.7846C24.451 18.8713 24.6243 18.9851 24.6622 19.0338C24.6947 19.0826 24.7272 19.1096 24.7272 19.088C24.7272 19.0446 24.8464 19.1313 24.9818 19.2776C25.0306 19.3263 25.0901 19.3588 25.1172 19.3426C25.1389 19.3263 25.1606 19.3371 25.1606 19.3642C25.1606 19.3913 25.2147 19.4346 25.2851 19.4671L25.4043 19.5213L25.3935 15.1555C25.3826 12.7559 25.3772 10.1613 25.3772 9.39214V8.00006H20.3939H15.4106L15.3997 13.7688Z"
        fill={colourFill}
      />
      <path
        d="M29.9973 28.2042C29.0169 28.4588 28.2044 29.1251 27.7819 30.0188C27.4135 30.788 27.4406 29.2605 27.4515 48.6792L27.4623 66.3105L27.6085 66.7113C27.966 67.6809 28.7406 68.4609 29.7102 68.8184L30.1165 68.9646L44.2214 68.9809C56.696 68.9917 58.3698 68.9809 58.6569 68.9105C59.8377 68.618 60.8235 67.643 61.1648 66.4459C61.2569 66.1101 61.2623 65.4059 61.2623 48.5438V30.9938L61.1377 30.5876C60.7964 29.488 60.0598 28.7026 58.9927 28.2909L58.5539 28.123L44.4706 28.1122C30.8369 28.1013 30.3765 28.1067 29.9973 28.2042ZM55.5314 34.2113C55.6723 34.2763 55.8131 34.4009 55.9106 34.5471L56.0623 34.7801V37.9542V41.123L55.9377 41.2855C55.8673 41.3776 55.7102 41.513 55.591 41.5942L55.3689 41.7459H44.3785C34.5581 41.7459 33.3665 41.7351 33.204 41.6646C32.9548 41.5401 32.7652 41.3505 32.6515 41.0796C32.554 40.8684 32.554 35.0617 32.6515 34.7963C32.7435 34.5417 32.906 34.3576 33.1498 34.2276L33.3665 34.1138H44.3352C54.9952 34.1084 55.3094 34.1138 55.5314 34.2113ZM39.1623 43.3276C39.249 43.3601 39.3952 43.463 39.4765 43.5496C39.7852 43.8584 39.7852 43.8746 39.7852 46.323C39.7852 47.7476 39.7635 48.663 39.7256 48.8092C39.6606 49.0746 39.4115 49.3617 39.1569 49.4701C38.9131 49.573 34.3469 49.5838 34.114 49.4809C33.9298 49.4051 33.6102 49.1126 33.6102 49.0259C33.6102 48.988 33.5831 48.9501 33.5506 48.9392C33.5127 48.9284 33.4965 48.1376 33.4965 46.4421C33.5019 44.3513 33.5127 43.9396 33.5831 43.8151C33.7402 43.5334 33.8973 43.3926 34.1681 43.2951C34.4227 43.2084 38.9348 43.2355 39.1623 43.3276ZM47.0977 43.3601C47.3089 43.4467 47.5364 43.7176 47.5906 43.9451C47.6123 44.0642 47.6394 45.1855 47.6394 46.4367V48.7226L47.4877 49.0096C47.2114 49.5351 47.3198 49.5188 44.606 49.5351C42.2714 49.5513 41.7894 49.5242 41.7894 49.3671C41.7894 49.3346 41.7731 49.3238 41.7569 49.3455C41.7135 49.3888 41.4644 49.118 41.4048 48.9609C41.3777 48.8905 41.356 47.7313 41.356 46.388C41.3614 43.8313 41.356 43.8855 41.5998 43.5767C41.8327 43.2896 41.8056 43.2896 44.3352 43.2626C46.621 43.2355 46.8052 43.2409 47.0977 43.3601ZM54.941 43.4467C55.071 43.5334 55.2119 43.6959 55.2769 43.8313C55.3852 44.0534 55.3852 44.1455 55.3852 46.4259C55.3798 48.1484 55.3635 48.8309 55.3148 48.9392C55.2389 49.118 54.9085 49.4376 54.811 49.4376C54.7677 49.4376 54.7352 49.4592 54.7352 49.4917C54.7352 49.5242 53.836 49.5459 52.2489 49.5459H49.7627L49.5298 49.3726C49.0477 49.0259 49.0477 49.0476 49.0639 46.3501C49.0748 44.0751 49.0748 44.0426 49.1994 43.8151C49.5081 43.2192 49.4539 43.2301 52.3302 43.2626L54.7189 43.2896L54.941 43.4467ZM39.0377 50.483C39.2977 50.5696 39.5469 50.7646 39.6606 50.9651C39.7527 51.1276 39.7581 51.3334 39.7744 53.4838C39.7852 55.0817 39.769 55.8996 39.731 56.0513C39.6931 56.1759 39.5956 56.3492 39.4981 56.4359C39.1569 56.7555 39.1894 56.7501 36.5785 56.7501C34.2331 56.7446 34.179 56.7446 33.9948 56.6309C33.464 56.3113 33.4748 56.3709 33.4748 53.5813C33.4748 51.4092 33.4856 51.1817 33.5723 51.0246C33.7185 50.7538 33.919 50.5859 34.1681 50.5209C34.2927 50.4884 34.4227 50.4505 34.4498 50.4396C34.4823 50.4288 35.4844 50.418 36.6815 50.418C38.1765 50.418 38.9131 50.4396 39.0377 50.483ZM47.1248 50.6021C47.3144 50.7213 47.4335 50.8405 47.5148 51.0084C47.6339 51.2467 47.6339 51.2901 47.6339 53.6084C47.6394 55.7805 47.6285 55.9809 47.5364 56.1813C47.4823 56.3005 47.3848 56.4413 47.3252 56.4955C47.0598 56.7338 46.9189 56.7446 44.4544 56.7501C42.2389 56.7501 42.0981 56.7446 41.9031 56.6471C41.6431 56.5117 41.4427 56.2517 41.3669 55.9267C41.3235 55.7534 41.3019 54.9896 41.3019 53.5651C41.3019 51.2576 41.3235 51.0571 41.6106 50.7646C41.7623 50.613 41.9031 50.5426 42.1956 50.4667C42.2877 50.4396 43.371 50.4234 44.606 50.4288L46.8539 50.4396L47.1248 50.6021ZM54.1935 53.6734C54.1935 53.7005 54.2477 53.7167 54.3181 53.7167C54.3831 53.7167 54.5077 53.7546 54.5944 53.798C54.6756 53.8413 54.7677 53.863 54.7948 53.8467C54.8219 53.8305 54.8598 53.8521 54.876 53.8955C54.8923 53.9388 54.9627 53.9713 55.0331 53.9713C55.1035 53.9713 55.1956 54.0092 55.2389 54.0471C55.2823 54.0905 55.4014 54.1826 55.4989 54.2584C55.7914 54.4751 56.4198 55.1251 56.3873 55.1792C56.371 55.2063 56.3819 55.2388 56.4089 55.2605C56.4414 55.2767 56.4523 55.358 56.4414 55.4392C56.4252 55.5205 56.4089 55.6342 56.4035 55.6938C56.3927 55.7534 56.3494 55.8401 56.2952 55.8834C56.046 56.1055 55.9648 56.1596 55.8944 56.1326C55.851 56.1163 55.8185 56.1271 55.8185 56.1596C55.8185 56.3113 55.2877 55.9917 54.8327 55.5584C54.5239 55.2659 54.1394 55.0763 53.9119 55.1088C53.836 55.1196 53.7548 55.1034 53.7331 55.0709C53.7114 55.033 53.6681 55.033 53.5923 55.0709C53.5327 55.1034 53.4623 55.1142 53.4352 55.098C53.4081 55.0817 53.3756 55.0926 53.3539 55.1251C53.3323 55.1576 53.2998 55.1684 53.2727 55.1521C53.2456 55.1359 53.1752 55.1684 53.1102 55.2334C53.0506 55.293 52.9802 55.3417 52.9531 55.3417C52.8935 55.3417 52.601 55.7209 52.5848 55.8238C52.5794 55.8671 52.5414 55.9213 52.5035 55.943C52.4494 55.9809 52.4494 55.9917 52.5144 55.9917C52.5848 55.9917 52.5848 56.0026 52.5198 56.0405C52.4764 56.0676 52.4548 56.138 52.4764 56.203C52.4927 56.268 52.4819 56.333 52.4548 56.3492C52.4277 56.3655 52.4277 56.4196 52.4602 56.4792C52.4873 56.5334 52.5144 56.8963 52.5144 57.2863V57.9959H53.2456C53.9335 57.9959 54.2477 58.0501 54.2477 58.1692C54.2477 58.1963 54.2694 58.2071 54.291 58.1909C54.3181 58.1746 54.3777 58.2126 54.4264 58.2721C54.4752 58.3263 54.5023 58.3751 54.486 58.3751C54.4698 58.3751 54.5077 58.4401 54.5673 58.5159C54.7135 58.7001 54.7081 58.7921 54.5564 59.0251C54.486 59.128 54.4373 59.2471 54.4481 59.2796C54.4644 59.323 54.421 59.3501 54.3398 59.3501C54.2639 59.3501 54.1935 59.3826 54.1827 59.4151C54.1664 59.4692 53.9335 59.4909 53.3377 59.5017L52.5144 59.518V60.1626C52.5144 60.6501 52.4981 60.8071 52.4385 60.8288C52.4006 60.8451 52.3681 60.9155 52.3735 60.9859C52.3789 61.0563 52.3627 61.143 52.3356 61.1755C52.3085 61.2134 52.2977 61.2838 52.3194 61.3271C52.3356 61.3705 52.3302 61.4084 52.3085 61.4084C52.2869 61.4084 52.2598 61.4734 52.2544 61.5546C52.2489 61.6359 52.211 61.7171 52.1731 61.7442C52.1406 61.7659 52.1298 61.7876 52.1569 61.7876C52.1785 61.7876 52.1677 61.8417 52.1244 61.9067L52.0431 62.0313L53.9281 62.0151C55.6777 61.9988 55.8185 62.0042 55.9269 62.0963C55.9864 62.1505 56.0623 62.1992 56.0894 62.1992C56.1219 62.2046 56.1652 62.2101 56.1869 62.2155C56.2139 62.2155 56.3006 62.3509 56.3819 62.5134C56.5119 62.768 56.5227 62.8276 56.4631 62.9359C56.4306 63.0063 56.3764 63.0767 56.3494 63.093C56.3223 63.1092 56.2952 63.1796 56.2898 63.2392C56.2844 63.3421 56.2085 63.3855 56.0731 63.3638C56.0514 63.3584 56.0189 63.3909 56.0027 63.4396C55.9756 63.5046 55.5748 63.5155 53.0669 63.5209C50.5048 63.5209 50.1419 63.5101 50.0335 63.4396C49.9685 63.3909 49.9144 63.3692 49.9144 63.3855C49.9144 63.4667 49.6977 63.288 49.6977 63.2067C49.6977 63.158 49.6598 63.0659 49.6164 63.0117C49.5244 62.8871 49.5081 62.5676 49.5894 62.5188C49.6219 62.4971 49.6327 62.4646 49.6164 62.4376C49.5894 62.3942 49.8819 62.0367 49.9577 62.0259C50.1581 62.0042 50.781 61.5438 50.781 61.4138C50.781 61.3867 50.8189 61.338 50.8623 61.3001C50.9056 61.2621 50.9327 61.2134 50.9164 61.1917C50.9002 61.1646 50.911 61.1321 50.9435 61.1105C50.976 61.0888 50.9869 61.0509 50.9706 61.0238C50.9489 60.9967 50.9598 60.9751 50.9869 60.9751C51.0139 60.9751 51.0302 60.9101 51.0194 60.8288C51.0139 60.7476 51.0356 60.6609 51.0681 60.6392C51.1169 60.6067 51.106 60.5796 51.041 60.5363C50.9598 60.493 50.9435 60.4009 50.9435 60.0001V59.5126L50.5535 59.5017C50.3369 59.5017 50.131 59.4963 50.0931 59.4963C50.0552 59.4963 50.0335 59.4746 50.0389 59.4421C50.0444 59.4151 49.9685 59.3663 49.8764 59.3392C49.7464 59.3067 49.6977 59.2634 49.6977 59.1821C49.6977 59.1226 49.6598 59.0305 49.611 58.9871C49.5189 58.8951 49.5352 58.5484 49.6381 58.4888C49.6652 58.4726 49.6977 58.3967 49.7031 58.3263C49.7194 58.2505 49.7681 58.1909 49.8223 58.1801C49.8764 58.1746 49.9794 58.1313 50.0498 58.0826C50.1364 58.023 50.3044 57.9959 50.5644 57.9959H50.9435V57.2646C50.9435 56.6309 50.9544 56.5334 51.041 56.4846C51.1277 56.4359 51.1277 56.4251 51.0302 56.3546C50.9598 56.3005 50.9489 56.268 50.9869 56.2409C51.0248 56.2192 51.0519 56.1434 51.0519 56.0676C51.0519 55.9971 51.0735 55.8942 51.1006 55.8401C51.1331 55.7913 51.1656 55.6613 51.1873 55.553C51.2035 55.4501 51.3498 55.1576 51.5123 54.9138C51.6748 54.6646 51.8102 54.4426 51.8102 54.4155C51.8102 54.3884 51.8427 54.3667 51.8806 54.3667C51.9239 54.3667 52.0594 54.2909 52.1785 54.2042C52.3031 54.1121 52.406 54.058 52.406 54.0796C52.406 54.1013 52.4385 54.0742 52.4764 54.0255C52.5577 53.9171 53.0994 53.7005 53.2023 53.7384C53.2402 53.7546 53.2727 53.7438 53.2727 53.7167C53.2727 53.6571 53.4244 53.6355 53.8577 53.6355C54.0419 53.6355 54.1935 53.6517 54.1935 53.6734ZM39.3898 57.7901C39.4494 57.8442 39.5198 57.8876 39.5523 57.8876C39.5848 57.8876 39.6281 57.9309 39.6444 57.9796C39.666 58.0338 39.731 58.1638 39.7852 58.2667C39.8881 58.4455 39.8935 58.5755 39.8935 60.7801C39.8935 62.4105 39.8719 63.1634 39.8285 63.3151C39.7419 63.6076 39.4169 63.8784 39.0594 63.9542C38.6206 64.0517 34.4444 64.0084 34.2331 63.9001C34.0544 63.8134 33.7402 63.5751 33.8052 63.5751C33.8269 63.5751 33.7998 63.5263 33.7402 63.4613C33.6427 63.353 33.6373 63.2176 33.621 60.9534C33.6048 58.3588 33.6156 58.2234 33.8865 57.9634C34.2169 57.6438 34.2602 57.6438 36.8927 57.6709C39.0756 57.698 39.2977 57.7088 39.3898 57.7901ZM47.1681 57.7359C47.2331 57.7738 47.3035 57.828 47.3252 57.8605C47.3469 57.8876 47.3685 57.893 47.3685 57.8713C47.3685 57.8009 47.6123 58.1151 47.6827 58.283C47.7694 58.4834 47.7802 62.9901 47.6935 63.2934C47.6231 63.5534 47.3739 63.8188 47.1139 63.9109C46.9569 63.9651 46.3881 63.9813 44.606 63.9813C43.3385 63.9813 42.2444 63.9651 42.1685 63.9434C42.0927 63.9217 41.941 63.8188 41.8327 63.7213C41.4589 63.3855 41.4644 63.4126 41.4644 60.7584C41.4698 58.218 41.4644 58.2396 41.746 57.9796C42.0927 57.6601 41.9248 57.6763 44.5952 57.6763C46.4585 57.6709 47.076 57.6871 47.1681 57.7359Z"
        fill={colourFill}
      />
      <path
        d="M34.5854 37.9271V39.7417H44.3354H54.0854V37.9271V36.1125H44.3354H34.5854V37.9271ZM42.64 37.028C42.7863 37.1146 42.9109 37.2446 43.0084 37.4234C43.1492 37.6834 43.16 37.8296 43.0842 38.3225C43.0679 38.4146 42.6563 38.8479 42.51 38.9238C42.315 39.0267 41.8004 38.9942 41.5513 38.8696C40.9284 38.5555 40.8146 37.6617 41.34 37.158C41.7029 36.8113 42.1796 36.7625 42.64 37.028ZM47.2171 37.0659C47.6342 37.3584 47.775 37.7863 47.6125 38.2792C47.5638 38.4255 47.4988 38.55 47.4663 38.55C47.4338 38.55 47.4229 38.5663 47.4392 38.5825C47.4879 38.6313 47.255 38.8046 46.9679 38.9292C46.5292 39.1242 46.0254 38.9671 45.7438 38.5338C45.5867 38.2955 45.5596 38.2034 45.5542 37.9271C45.5542 37.6617 45.5813 37.5588 45.7113 37.353C46.0417 36.833 46.7079 36.7084 47.2171 37.0659ZM38.0359 37.0442C38.3284 37.1796 38.4638 37.353 38.5721 37.7159C38.6696 38.0625 38.6209 38.3117 38.3825 38.6367C37.7813 39.4492 36.4813 38.9996 36.4813 37.9759C36.4813 37.6725 36.5517 37.4992 36.7738 37.2663C37.1204 36.898 37.57 36.8221 38.0359 37.0442Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;