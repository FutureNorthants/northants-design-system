import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.5464 5.06129C31.5464 5.09192 31.5093 5.12256 31.466 5.12256C31.3794 5.12256 30.5753 5.66182 29.6536 6.33589C29.3134 6.581 28.6454 7.05898 28.1629 7.40827C27.3093 8.02105 26.1835 8.82994 24.3278 10.1597C23.8268 10.5212 23.066 11.0666 22.6392 11.373C22.2124 11.6794 21.4082 12.2554 20.8454 12.6599C20.2825 13.0643 19.4289 13.6771 18.9464 14.0203C18.4639 14.3695 17.666 14.9394 17.1711 15.2949C16.6825 15.6503 15.866 16.2324 15.3588 16.594C14.8577 16.9616 14.0474 17.5377 13.5711 17.8808C13.0887 18.2301 12.2722 18.8123 11.7526 19.1861C11.233 19.5537 10.5278 20.0685 10.1814 20.3197C9.84124 20.571 9.37113 20.9019 9.14845 21.0551C8.92577 21.2083 8.4 21.5759 7.97938 21.8823C7.21856 22.44 5.87629 23.402 4.45361 24.4254C4.0268 24.7257 3.30309 25.2465 2.84536 25.5774C2.38763 25.9145 1.82474 26.3128 1.59588 26.466C0.804124 26.9991 0.340206 27.4036 0.216495 27.6609C0.148454 27.8019 0.0742268 27.9183 0.0494845 27.9183C0.0185567 27.9183 0 28.1083 0 28.3473C0 28.5801 0.0247423 28.7762 0.0556701 28.7762C0.0865979 28.7762 0.129897 28.8436 0.148454 28.9233C0.216495 29.1868 0.71134 29.6219 1.07629 29.7322C1.73196 29.9344 2.02268 29.7996 3.94021 28.4024C4.83711 27.7528 5.97526 26.9317 7.42268 25.8961C7.87423 25.5774 8.69072 24.9892 9.24124 24.597C9.78557 24.1987 10.633 23.592 11.1155 23.2489C13.0515 21.8578 13.8124 21.3124 14.4124 20.8712C14.7588 20.62 15.2474 20.2707 15.4948 20.1052C15.9155 19.8172 16.4474 19.4312 18.1856 18.1627C18.5876 17.8747 19.033 17.556 19.1814 17.4641C19.3299 17.3661 19.6825 17.1148 19.967 16.8942C20.2515 16.6798 20.6722 16.3734 20.901 16.2202C21.1299 16.067 21.6619 15.687 22.0825 15.3868C23.1464 14.6147 24.8351 13.4013 27.5072 11.4833C29.4 10.129 30.1794 9.57141 31.0763 8.92185L31.9918 8.25391L32.734 8.81768C33.1423 9.1302 33.6309 9.49175 33.8227 9.62043C34.0144 9.75525 34.4289 10.0555 34.732 10.2945C35.0412 10.5335 35.3753 10.7847 35.4742 10.846C35.5794 10.9134 35.9814 11.2137 36.3711 11.5201C36.7608 11.8265 37.1505 12.1206 37.2371 12.1758C37.3237 12.2309 37.7443 12.5496 38.1711 12.8805C38.5979 13.2175 39.3464 13.7874 39.8289 14.1612C40.7567 14.872 41.9072 15.7606 43.1443 16.7288C43.5526 17.0474 44.2887 17.6235 44.7773 18.0034C45.266 18.3833 46.0392 18.9838 46.4969 19.3393C46.9485 19.6947 47.7031 20.2768 48.1732 20.6384C48.6371 20.9999 49.299 21.5147 49.6392 21.7782C49.9794 22.0417 50.567 22.489 50.9381 22.7709C51.3155 23.0528 51.7732 23.402 51.9588 23.5491C52.633 24.0822 54.0309 25.1301 54.2227 25.2527C54.3278 25.3201 54.7423 25.6265 55.1505 25.939C55.5526 26.2454 56.2948 26.7969 56.7959 27.1646C58.9732 28.7517 58.8495 28.6843 59.4742 28.6414C59.7897 28.623 59.9258 28.5801 60.1361 28.433C60.8474 27.9428 61.0392 27.0788 60.5814 26.4292C60.4825 26.2944 60.0557 25.9267 59.6289 25.6081C59.2021 25.2956 58.4784 24.7624 58.0206 24.4254C57.5629 24.0822 56.8825 23.5798 56.5175 23.304C56.1464 23.0282 55.6763 22.679 55.466 22.5319C55.2557 22.3848 54.8165 22.0539 54.4948 21.7965C54.1732 21.533 53.7835 21.2389 53.6289 21.1347C53.4742 21.0306 53.0412 20.6997 52.6577 20.4055C52.2742 20.1052 51.5691 19.5537 51.0866 19.1861C50.6041 18.8123 49.8433 18.2301 49.3979 17.8808C48.1299 16.8942 46.8928 15.9383 45.9711 15.2152C45.1423 14.5718 44.4928 14.0693 42.7856 12.7395C42.3155 12.378 41.567 11.7958 41.1155 11.4527C40.6639 11.1095 39.965 10.5703 39.5567 10.2577C38.567 9.49787 37.1876 8.46226 36.7175 8.13136C36.5134 7.97816 36.0309 7.62274 35.6474 7.33473C34.7876 6.67905 33.5505 5.77212 33.1299 5.49024C32.4742 5.0429 32.3691 5.00001 31.9423 5.00001C31.7196 5.00001 31.5464 5.02452 31.5464 5.06129Z"
        fill={colourFill}
      />
      <path
        d="M31.2 11.8816C30.6557 12.2677 29.5794 13.0582 28.4598 13.9038C28.1381 14.1489 27.7113 14.4553 27.5196 14.5901C27.3216 14.7249 26.8515 15.0681 26.4618 15.3622C26.0783 15.6503 25.3546 16.1834 24.8536 16.5572C24.3526 16.9249 23.5113 17.5438 22.9856 17.9298C22.4598 18.3159 21.6495 18.9103 21.1856 19.2473C20.7278 19.5844 19.9608 20.1481 19.4845 20.5035C19.0144 20.859 18.2412 21.4289 17.7711 21.772C17.301 22.1152 16.4845 22.7157 15.9588 23.1018C15.433 23.4878 14.6969 24.0332 14.3258 24.3151C13.9608 24.597 13.4969 24.934 13.299 25.0688C13.101 25.2036 12.6247 25.5529 12.235 25.8409C11.8515 26.1289 11.0969 26.6927 10.5526 27.0971C10.0082 27.5016 9.55051 27.8876 9.51958 27.9673C9.48865 28.0531 9.4701 33.9788 9.47628 41.994L9.49484 55.8737L9.69896 56.0514L9.90309 56.2291L16.367 56.2169L22.8371 56.1985L22.9856 56.0269L23.134 55.8553V47.3988C23.134 38.3908 23.1278 38.6666 23.4124 38.5563C23.468 38.5379 27.2845 38.5195 31.8928 38.5195C40.1876 38.5195 40.268 38.5195 40.3917 38.6421C40.5155 38.7646 40.5155 38.8443 40.5155 47.1415C40.5155 52.8404 40.534 55.598 40.5835 55.7573C40.6268 55.9166 40.7134 56.0269 40.8433 56.1066C41.0289 56.2169 41.1649 56.2291 42.6928 56.2291H44.3381L44.5299 56.0759C44.6289 55.9901 44.7464 55.8186 44.7897 55.6899C44.9629 55.1567 45.4948 53.8392 45.7113 53.4103C47.2701 50.3464 50.0969 47.9075 53.3752 46.7983C53.901 46.6206 54.1051 46.5103 54.1856 46.3694C54.2289 46.2897 54.2474 43.5321 54.2474 37.9803C54.2474 29.7138 54.2474 29.7138 54.1175 29.5483C54.0495 29.4625 53.8206 29.2603 53.6103 29.101C53.4 28.9416 52.9484 28.574 52.6082 28.286C52.268 27.9979 51.7175 27.5445 51.3835 27.2749C51.0495 27.0052 50.468 26.5273 50.0845 26.2209C49.701 25.9083 49.1258 25.4365 48.8041 25.1791C48.4825 24.9217 48.0371 24.5541 47.8144 24.358C47.5917 24.168 47.2763 23.9045 47.1031 23.7758C46.9361 23.6533 46.5155 23.3101 46.1691 23.0221C45.5691 22.5196 44.9134 21.9742 43.1319 20.5219C42.6866 20.1604 42.0371 19.6273 41.6907 19.3392C41.3443 19.0512 40.9051 18.6958 40.7134 18.5487C40.5155 18.4017 40.1691 18.1075 39.9278 17.8992C39.6928 17.6908 39.3588 17.4212 39.1979 17.2987C39.0309 17.17 38.5979 16.8207 38.2392 16.5204C37.6206 16.0118 36.9711 15.4725 35.1031 13.9467C34.6948 13.6158 34.101 13.1256 33.7856 12.8621C32.4866 11.7836 32.0845 11.4955 31.8804 11.4955C31.8062 11.4955 31.5031 11.6671 31.2 11.8816Z"
        fill={colourFill}
      />
      <path
        d="M25.7507 40.7072C25.6703 40.7194 25.5528 40.8052 25.4847 40.891C25.361 41.0442 25.361 41.1178 25.361 48.3977C25.361 56.3823 25.3424 55.9963 25.7012 56.1556C25.8187 56.2107 27.3466 56.2291 31.8744 56.2291C37.7198 56.2291 37.893 56.223 38.0847 56.1066C38.2146 56.0269 38.3012 55.9166 38.3445 55.7573C38.4187 55.4938 38.4311 41.3567 38.3569 41.0932C38.3321 41.0075 38.2208 40.8788 38.1095 40.8052L37.8991 40.6643L31.893 40.6704C28.5899 40.6765 25.8249 40.6949 25.7507 40.7072Z"
        fill={colourFill}
      />
      <path
        d="M56.567 48.3303C55.701 48.4222 54.4206 48.698 53.8453 48.9186C51.9463 49.66 50.4865 50.6711 49.1876 52.1541C48.4453 52.9997 48.0371 53.6187 47.536 54.6543C46.7257 56.3333 46.4226 57.6814 46.4288 59.6608C46.435 60.7638 46.5773 62.0322 46.769 62.6634C47.1092 63.7726 47.8453 65.3045 48.4267 66.1257C49.8309 68.1111 51.7793 69.5757 54.0927 70.3846C55.2371 70.7829 55.8247 70.8809 57.2597 70.9177C58.67 70.9544 59.1773 70.9054 60.1546 70.6603C61.6206 70.2926 62.9938 69.637 64.2185 68.7239C65.2515 67.9579 65.9814 67.2042 66.7237 66.1563C67.2432 65.4087 67.7814 64.5018 67.6886 64.5018C67.6639 64.5018 67.67 64.4773 67.7072 64.4528C67.7876 64.3976 68.2329 63.2149 68.3999 62.6021C68.7216 61.4378 68.7525 61.1743 68.7525 59.5995C68.7525 58.2697 68.734 58.0246 68.6103 57.4547C68.3814 56.4007 67.7999 54.7584 67.4412 54.1457C66.4267 52.4115 64.8804 50.7937 63.3958 49.9174C62.1525 49.1759 61.1319 48.7715 59.9752 48.5386C58.6391 48.2751 57.6618 48.22 56.567 48.3303ZM59.8639 51.3207C60.4453 51.431 61.169 51.8293 61.868 52.4176C62.8948 53.2939 63.2164 53.7351 63.2164 54.2682C63.2164 54.9545 62.6721 55.4938 61.9793 55.4938C61.5711 55.4938 61.3113 55.3406 60.6865 54.7401C59.9752 54.0537 59.6783 53.876 59.0907 53.7719C58.5896 53.6861 57.8103 53.778 57.5257 53.9496C57.1979 54.1518 56.7587 54.6236 56.5731 54.9729L56.3814 55.3406L56.3628 56.9767L56.3443 58.619H57.7484C59.0597 58.619 59.1773 58.6313 59.4309 58.7477C60.1793 59.1092 60.2907 60.3471 59.6103 60.8434C59.2639 61.1008 59.0659 61.1314 57.6742 61.1314H56.3505V62.2528C56.3505 63.4662 56.301 63.8767 56.0721 64.5079C55.9917 64.7346 55.9422 64.9369 55.9608 64.9552C55.9855 64.9736 55.967 64.992 55.9237 64.992C55.8804 64.992 55.8618 65.0165 55.8804 65.0472C55.8989 65.0717 55.8742 65.1513 55.8247 65.2126C55.7752 65.2739 55.7319 65.3474 55.7319 65.3719C55.7319 65.4026 57.1917 65.421 58.9793 65.421C62.4804 65.421 62.4865 65.421 62.8329 65.7457C63.2041 66.0828 63.334 66.7691 63.1051 67.1735C62.9628 67.4309 62.7092 67.7189 62.5484 67.8047C62.4556 67.8537 60.9834 67.8721 57.3092 67.8721C51.5195 67.8721 51.9216 67.9089 51.5876 67.3758C51.4206 67.1 51.402 67.0265 51.402 66.5301C51.402 66.0276 51.4144 65.9725 51.5938 65.7335C51.7298 65.5435 51.8907 65.421 52.1938 65.2862C52.6762 65.0655 53.1958 64.7101 53.1958 64.5998C53.1958 64.5569 53.2515 64.4711 53.3133 64.416C53.3814 64.3547 53.4927 64.1525 53.567 63.9625C53.6412 63.7726 53.7278 63.5581 53.7587 63.4907C53.7896 63.4233 53.8206 62.8656 53.8267 62.2528L53.8453 61.1437L53.0412 61.1192C52.0948 61.0947 51.8597 61.0028 51.5752 60.5432C51.4267 60.3103 51.402 60.2 51.402 59.8201C51.402 59.4034 51.4144 59.3544 51.6247 59.0909C51.9401 58.6925 52.169 58.619 53.0907 58.619H53.8453L53.8515 56.9461C53.8577 55.0526 53.9133 54.7217 54.3649 53.8454C54.4948 53.588 54.6061 53.3552 54.6061 53.3306C54.6061 53.2387 55.0144 52.7362 55.2061 52.5892C55.3051 52.5095 55.5154 52.3318 55.6639 52.1909C56.0288 51.8538 56.969 51.4004 57.4639 51.3207C57.6865 51.2839 57.8783 51.241 57.8968 51.2288C57.9463 51.1736 59.4989 51.2472 59.8639 51.3207Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;