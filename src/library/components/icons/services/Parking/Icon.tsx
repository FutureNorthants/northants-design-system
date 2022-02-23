import React from 'react';

import { IconProps } from '../Icon.types';

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M42.8205 15.0854C42.1192 15.3468 41.3768 16.0083 40.9929 16.7071C40.6806 17.278 40.6959 16.8085 40.6959 25.0295C40.6959 33.1652 40.6806 32.7437 40.9622 33.3252C41.0953 33.5973 41.9195 34.4775 42.242 34.6909C42.3802 34.7816 42.6311 34.9097 42.8103 34.9683C43.1123 35.075 43.2454 35.0804 45.5236 35.1017L47.9144 35.1177V47.9213C47.9144 59.3433 47.9246 60.7463 47.9912 60.9224C48.0987 61.1838 48.5543 61.6639 48.8103 61.7919C48.9946 61.8773 49.1533 61.8933 50.2693 61.8933C50.9604 61.8933 51.6055 61.872 51.7028 61.84C51.9331 61.7759 52.3837 61.3652 52.5475 61.0717L52.6755 60.8423V47.9267V35.0057H55.0714C57.626 35.0057 57.6311 35.0057 58.1789 34.7336C58.5884 34.5309 59.6891 33.3572 59.6891 33.1225C59.6891 33.0905 59.7301 32.9838 59.7813 32.8984C59.8632 32.749 59.8683 32.2689 59.8683 25.0829C59.8683 17.8968 59.8632 17.4167 59.7813 17.246C59.7301 17.1446 59.6891 17.0379 59.6891 17.0059C59.6891 16.8245 58.7369 15.7202 58.3222 15.4215C58.1993 15.3308 57.9536 15.2027 57.7693 15.1334L57.4366 15L50.2284 15.0053C44.0697 15.0053 42.9946 15.0213 42.8205 15.0854ZM56.9553 16.7071C57.6004 16.9419 57.9639 17.3313 58.2249 18.0889C58.3325 18.3823 58.3325 18.4837 58.3478 24.9228C58.3632 32.2262 58.3785 31.9168 58.0099 32.5463C57.8103 32.8931 57.6362 33.0371 57.1806 33.2505L56.899 33.3785L54.2369 33.3946L51.5748 33.4106L51.3598 33.6293L51.1396 33.8534V46.9557C51.1396 58.1856 51.1294 60.0741 51.068 60.1648C51.0014 60.2555 50.9297 60.2662 50.3256 60.2662C49.7523 60.2662 49.6447 60.2502 49.568 60.1702C49.4809 60.0795 49.4758 59.4766 49.4604 47.0198L49.4502 33.9707L49.2352 33.7413L49.0253 33.5173L46.4605 33.5013C43.9775 33.4799 43.8854 33.4799 43.5628 33.3625C42.9485 33.1492 42.5953 32.8131 42.3751 32.2422L42.2574 31.9381L42.242 25.1415C42.2267 17.6408 42.2113 18.0835 42.5492 17.4647C42.7233 17.1446 43.0304 16.9045 43.486 16.7232L43.7932 16.6058H50.2232C56.5509 16.6005 56.6584 16.6005 56.9553 16.7071Z"
        fill={colourFill}
      />
      <path
        d="M47.0439 24.9975V30.8978H47.9654H48.8869L48.8972 28.7212L48.9125 26.5499L50.1668 26.5179C51.2573 26.4912 51.4569 26.4752 51.7026 26.3792C52.962 25.8937 53.7504 24.9922 54.0627 23.6958C54.2061 23.1143 54.1805 22.2554 54.0064 21.7219C53.6839 20.7136 53.0593 19.9507 52.189 19.5079C51.4979 19.1505 51.4364 19.1452 49.1327 19.1185L47.0439 19.1025V24.9975ZM51.2777 21.2898C51.5951 21.4391 51.974 21.8393 52.1276 22.1914C52.2965 22.5755 52.2863 23.1463 52.0968 23.5411C51.933 23.8932 51.59 24.2453 51.2521 24.4053C51.032 24.512 50.9296 24.5227 49.962 24.5227H48.9125L48.8972 22.8262L48.8869 21.1297L49.9467 21.1457C50.9347 21.1617 51.032 21.1724 51.2777 21.2898Z"
        fill={colourFill}
      />
      <path
        d="M12.1805 25.3229C12.1395 25.3336 11.9296 25.371 11.7197 25.403C10.3886 25.627 9.08319 26.3419 7.99275 27.4462C7.11732 28.3371 6.54906 29.1587 6.15998 30.1083C5.90913 30.7165 5.8477 30.9779 5.16681 34.0454C4.82892 35.5872 4.53712 36.8889 4.52176 36.9369C4.50128 37.0169 4.35793 37.0276 3.10367 37.0436L1.70606 37.0596L1.37329 37.2303C0.902304 37.4704 0.257253 38.1693 0.103669 38.6067C-0.00383959 38.9108 -0.00895904 38.9695 0.00639932 41.0821L0.0217577 43.248L0.159983 43.5148C0.334044 43.8615 1.09172 44.6297 1.38865 44.7685C1.51152 44.8218 1.78797 44.8965 1.99787 44.9285C2.20264 44.9605 2.4535 44.9979 2.54565 45.0139L2.70947 45.0405V52.7067C2.70947 61.4879 2.65316 60.5489 3.23165 61.1571C3.41084 61.3492 3.67705 61.5626 3.83063 61.6426L4.1122 61.7866H7.31186C11.0337 61.7866 10.7214 61.8293 11.3409 61.1784C11.7965 60.693 11.7658 60.7997 12.3392 58.0362L12.7692 55.9716L22.1839 55.9823L31.6037 55.9983L32.0747 58.2549C32.3869 59.7274 32.5866 60.5756 32.6583 60.6876C32.8426 61.0077 33.5337 61.6479 33.7641 61.7226C33.9228 61.7706 34.7726 61.7866 37.1173 61.7866C40.7828 61.7866 40.4654 61.8346 41.1054 61.1571C41.3921 60.853 41.52 60.6716 41.5815 60.4796C41.6634 60.2448 41.6685 59.562 41.6685 52.6267C41.6685 46.5876 41.6839 45.0352 41.7351 45.0352C41.9808 45.0352 42.846 44.8591 43.0354 44.7685C43.363 44.6191 44.0849 43.8722 44.2641 43.4934L44.4074 43.1947V40.9807V38.7668L44.259 38.4893C44.0491 38.0946 43.3375 37.385 42.9688 37.209L42.6668 37.0596L41.2743 37.0436L39.8767 37.0276L39.8255 36.8302C39.7794 36.6488 39.5286 35.5285 38.7965 32.2316C38.6532 31.57 38.4637 30.8285 38.3818 30.5778C37.9876 29.4254 37.3477 28.4172 36.3904 27.4515C35.3613 26.4219 34.3886 25.8564 32.9962 25.467L32.4791 25.3229L22.3682 25.3176C16.8084 25.3123 12.2214 25.3123 12.1805 25.3229ZM32.2282 27.0674C33.3443 27.3769 34.0712 27.745 34.962 28.4545C35.7043 29.0413 36.4415 30.1883 36.846 31.378C36.9279 31.6287 37.1378 32.4663 37.3119 33.2452C37.4808 34.0241 37.7726 35.3311 37.962 36.1527C38.1463 36.9742 38.3101 37.7691 38.3255 37.9238C38.3511 38.1586 38.3818 38.2279 38.5661 38.4093L38.776 38.628L40.3375 38.6441L41.8989 38.6601L42.2368 38.8308C42.5235 38.9801 42.5951 39.0442 42.7231 39.2842L42.8716 39.567V40.9807V42.3944L42.7282 42.6985C42.6054 42.9599 42.5439 43.024 42.3187 43.136C42.0627 43.2694 41.52 43.3761 40.6958 43.4668C40.3989 43.4988 40.3426 43.5201 40.148 43.7175C39.9279 43.9362 39.9279 43.9416 39.9279 44.3203C39.9279 44.5337 39.974 44.9872 40.0303 45.3286C40.1276 45.9315 40.1327 46.1875 40.1276 52.7067C40.1276 60.3835 40.1583 59.8394 39.7231 60.0688L39.4927 60.1862L37.0354 60.1755C34.3784 60.1595 34.3938 60.1595 34.1839 59.8661C34.1224 59.7807 33.9177 58.9005 33.5747 57.2787L33.0627 54.8246L32.8477 54.5952L32.6378 54.3712H22.189H11.7402L11.52 54.6006L11.305 54.8353L10.8033 57.2307C10.5218 58.5484 10.2607 59.7167 10.2197 59.8181C10.0764 60.1808 10.0405 60.1862 7.31186 60.1862C4.98251 60.1862 4.89548 60.1808 4.65486 60.0741C4.21459 59.8767 4.24531 60.4796 4.24531 52.6213C4.25043 46.529 4.26066 45.6487 4.33234 45.2753C4.37329 45.0405 4.41937 44.6458 4.43473 44.395L4.4552 43.9416L4.23507 43.7228L4.01493 43.4988L3.20094 43.3867C2.16681 43.248 1.90572 43.1307 1.69582 42.7252L1.55759 42.4478V41.0074C1.55759 39.5776 1.55759 39.567 1.68558 39.3002C1.75725 39.1509 1.89036 38.9801 1.98763 38.9108C2.35111 38.6654 2.57636 38.6334 4.11732 38.6334H5.55589L5.76066 38.404L5.97056 38.1799L6.60026 35.3258C7.36817 31.8368 7.42961 31.5861 7.65486 31.0099C8.0081 30.119 8.70435 29.0467 9.22142 28.5879C10.0917 27.8196 11.3972 27.1848 12.4876 27.0034C12.6975 26.9714 12.9074 26.9341 12.9484 26.9234C12.9893 26.9127 17.2282 26.9127 22.3682 26.9181L31.7112 26.9234L32.2282 27.0674Z"
        fill={colourFill}
      />
      <path
        d="M12.3492 29.8042C11.8424 29.9482 11.4738 30.1883 10.9414 30.7271C10.4294 31.2446 10.1479 31.65 10.0045 32.0768C9.95844 32.1995 9.66151 33.5546 9.33387 35.0803C8.74513 37.8331 8.74001 37.8651 8.76049 38.4466C8.77073 38.8948 8.80144 39.0815 8.87823 39.2469C9.02158 39.5563 9.61544 40.1591 9.90724 40.2978L10.1581 40.4205H22.1888C32.2332 40.4205 34.2502 40.4099 34.4192 40.3458C34.6854 40.2498 35.3458 39.583 35.5147 39.2469C35.6223 39.0228 35.6479 38.8894 35.6683 38.42C35.6888 37.8171 35.6786 37.7638 34.6496 33.2558C34.3014 31.7301 34.1837 31.4847 33.4414 30.7324C32.8578 30.1349 32.5762 29.9536 32.0182 29.8042C31.7519 29.7348 30.5796 29.7242 22.1632 29.7295C14.1257 29.7295 12.5745 29.7455 12.3492 29.8042Z"
        fill={colourFill}
      />
      <path
        d="M34.4502 44.6618C33.9843 44.8165 31.7369 45.462 29.9246 45.9635C29.0134 46.2195 28.7267 46.3636 28.5936 46.6303C28.5526 46.7103 28.4195 47.1745 28.3069 47.6546C28.0509 48.7002 28.0458 49.015 28.2762 49.3298C28.3581 49.4418 28.527 49.5752 28.655 49.6338L28.8854 49.7405L32.1516 49.6018C33.9792 49.5218 35.4792 49.4365 35.5611 49.4044C35.7403 49.3351 35.9656 49.1164 36.0782 48.903C36.155 48.7643 36.1652 48.5562 36.1652 47.4359C36.1601 45.5634 36.0526 44.9979 35.6328 44.6938C35.341 44.4804 35.039 44.475 34.4502 44.6618Z"
        fill={colourFill}
      />
      <path
        d="M8.77112 44.6831C8.26941 44.9498 8.1875 45.3233 8.1875 47.3345C8.1875 48.6042 8.20798 48.7696 8.42811 49.079C8.70456 49.4631 8.6073 49.4471 12.1397 49.6018C13.8957 49.6765 15.4162 49.7245 15.5237 49.7139C15.9025 49.6605 16.225 49.2871 16.225 48.8923C16.225 48.6415 15.8462 47.0091 15.7336 46.7797C15.5851 46.4703 15.4008 46.3209 15.0476 46.2089C14.1619 45.9368 9.41617 44.5977 9.23699 44.5764C9.0834 44.5551 8.97078 44.5817 8.77112 44.6831Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;