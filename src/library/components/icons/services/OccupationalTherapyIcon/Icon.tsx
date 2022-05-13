import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.1767 6.08429C24.5992 6.24404 24.1383 6.52804 23.6833 6.99546C23.2517 7.43921 23.065 7.74687 22.8317 8.39179C22.7325 8.66396 22.7208 8.96571 22.6917 11.8116L22.6625 14.9415L21.8458 15.2196C20.6675 15.6279 20.0492 15.8823 18.9292 16.4444C16.9283 17.4384 15.3067 18.5625 13.3583 20.302L13.0958 20.5387L11.9875 19.8879C7.665 17.3437 7.65333 17.3378 6.71417 17.3319C5.92083 17.326 5.34333 17.5153 4.68417 17.9827C4.10083 18.4087 4.13583 18.3495 2.12917 21.8818C1.68583 22.6628 1.09083 23.71 0.805 24.207C0.14 25.3608 0.0525 25.6093 0.0175 26.4495C-0.0116667 27.047 0 27.1654 0.134167 27.6032C0.303333 28.1535 0.519167 28.5321 0.91 28.9522C1.20167 29.2717 1.51083 29.4788 2.7125 30.177C3.16167 30.4432 4.095 30.9875 4.78333 31.3899C5.47167 31.7981 6.11917 32.1709 6.22417 32.2241L6.405 32.3247L6.32333 32.6915C6.17167 33.3305 5.95583 34.7032 5.8625 35.6203C5.75167 36.6557 5.74 38.9455 5.83333 39.9868C5.90917 40.827 6.1425 42.3949 6.29417 43.0753L6.39917 43.5545L5.48917 44.087C1.3825 46.4833 1.26583 46.5543 0.875 46.9803C0.285833 47.6193 0 48.3648 0 49.276C0 50.2108 0.0758333 50.406 1.26 52.4828C1.6625 53.1928 2.205 54.1454 2.4675 54.601C4.08917 57.4528 4.1125 57.4824 4.59667 57.8492C5.25 58.3344 5.90917 58.5592 6.67917 58.5592C7.46667 58.5592 7.92167 58.3935 9.12917 57.6776C9.65417 57.37 10.5 56.873 11.9758 56.015C12.3958 55.7665 12.8275 55.5121 12.9208 55.453L13.1017 55.3465L13.5917 55.7961C15.9892 57.9735 18.7717 59.6124 21.8458 60.6715L22.6625 60.9495L22.6975 64.0795C22.7208 66.4225 22.7442 67.2626 22.8025 67.4401C23.1817 68.6057 24.0917 69.511 25.2 69.8068C25.6958 69.9429 33.11 69.937 33.6233 69.8009C34.6908 69.5228 35.5892 68.6353 35.9858 67.4697C36.0617 67.2449 36.0792 66.6887 36.1083 64.0795L36.1375 60.9555L37.0417 60.6419C40.0575 59.6065 42.7233 58.0208 45.2375 55.7665L45.7042 55.3465L45.9083 55.4707C46.0192 55.5358 46.6375 55.8967 47.2792 56.2754C51.2108 58.5829 51.1525 58.5533 52.1208 58.5533C52.8442 58.5533 53.4392 58.3699 54.0283 57.9675C54.6875 57.512 54.6408 57.583 56.9625 53.5064C58.8233 50.2345 58.7358 50.4179 58.7825 49.489C58.8058 49.1103 58.7883 48.7553 58.7417 48.5423C58.5725 47.7435 58.0242 46.933 57.3475 46.4715C57.1667 46.3472 55.9825 45.6431 54.7108 44.8976L52.395 43.5486L52.4825 43.1877C52.8325 41.6671 53.0308 39.7975 53.0308 37.9455C53.0308 36.07 52.8442 34.2713 52.4825 32.7034L52.395 32.3425L52.6983 32.165C52.8617 32.0703 53.6258 31.6206 54.3958 31.171C57.68 29.2599 57.9075 29.0942 58.3217 28.402C58.66 27.834 58.7533 27.5085 58.7825 26.7512C58.8175 25.917 58.7125 25.4673 58.2867 24.7218C58.1408 24.4615 57.8433 23.9408 57.6333 23.568C57.4175 23.1953 56.7233 21.9765 56.0875 20.8582C55.4517 19.74 54.8217 18.6868 54.6817 18.5152C54.0575 17.7342 52.815 17.2135 51.8583 17.326C51.1 17.4147 50.855 17.5153 49.6708 18.2135C49.2217 18.4797 48.2358 19.0595 47.4833 19.4974C46.7308 19.9411 46.0192 20.3553 45.9083 20.4204L45.7042 20.5446L45.2083 20.095C43.61 18.6454 41.545 17.2313 39.6958 16.3438C38.6808 15.8586 38.0625 15.6042 37.0417 15.2492L36.1375 14.9415L36.1083 11.8116C36.0733 8.42137 36.085 8.55746 35.7233 7.80012C35.5017 7.33862 34.8017 6.61679 34.3292 6.36829C33.6175 5.98962 33.6642 5.99554 29.365 6.00146C26.2908 6.00737 25.4042 6.02512 25.1767 6.08429ZM32.5733 8.36221C32.76 8.39179 33.0342 8.47462 33.1742 8.54562C33.3958 8.65212 33.4658 8.73496 33.5942 9.00712L33.7458 9.33846L33.775 12.711C33.81 16.5272 33.7692 16.2195 34.3175 16.7461C34.58 16.9946 34.7083 17.0715 35.0642 17.1721C38.43 18.1543 41.58 19.9589 44.1117 22.367C44.4442 22.6805 44.7942 22.9705 44.8992 23.0119C45.1908 23.1361 45.9608 23.1184 46.3108 22.9764C46.4742 22.9113 47.7283 22.2013 49.0992 21.3966C50.4758 20.5979 51.7183 19.882 51.87 19.8228L52.1383 19.7045L52.4825 19.876L52.8208 20.0476L54.355 22.7397C56.6767 26.8222 56.5367 26.5145 56.2975 27.0115C56.1808 27.266 56.105 27.3133 53.7658 28.68C52.4475 29.4551 51.2342 30.171 51.0708 30.2716C50.7092 30.5024 50.1842 30.9994 50.0733 31.2124C49.9333 31.4845 49.9683 32.5022 50.1317 33.224C50.2133 33.5554 50.33 34.153 50.4 34.5435C50.855 37.2592 50.7733 39.9335 50.1317 42.667C49.9392 43.5072 49.9333 44.4716 50.12 44.726C50.5692 45.3355 50.5808 45.3414 53.76 47.2051C56.0992 48.5719 56.1633 48.6133 56.2917 48.8795C56.5425 49.3765 56.6825 49.063 54.355 53.1514L52.8208 55.8435L52.4825 56.015L52.1383 56.1866L51.87 56.0683C51.7183 56.0091 50.4758 55.2991 49.1108 54.5004C47.7458 53.6957 46.5267 52.9975 46.4042 52.9502C46.2467 52.8851 45.9958 52.8555 45.5233 52.8555H44.8642L44.5258 53.1514C44.3392 53.317 43.9367 53.678 43.6333 53.956C41.3525 56.0505 38.1908 57.8078 35.0642 58.719C34.6908 58.8255 34.58 58.8905 34.2825 59.1745C34.09 59.3639 33.9092 59.5769 33.8683 59.6597C33.8275 59.7603 33.7925 60.849 33.775 63.1801L33.7458 66.5526L33.5942 66.884C33.4658 67.1561 33.3958 67.239 33.1742 67.3455C33.0342 67.4165 32.76 67.4993 32.5733 67.5289C32.1242 67.6058 26.6758 67.6058 26.2267 67.5289C26.04 67.4993 25.7658 67.4165 25.6258 67.3455C25.4042 67.239 25.3342 67.1561 25.2058 66.884L25.0542 66.5526L25.025 63.1801C25.0075 60.849 24.9725 59.7603 24.9317 59.6597C24.8908 59.5769 24.71 59.3639 24.5175 59.1805C24.2142 58.8846 24.115 58.8255 23.6542 58.6894C20.1892 57.648 17.1792 55.9026 14.595 53.4354C14.2917 53.1455 13.9883 52.897 13.9125 52.8792C13.8367 52.8615 13.4808 52.8555 13.1133 52.8674L12.4542 52.8851L9.78833 54.4412C8.32417 55.2991 7.0175 56.0387 6.88917 56.092C6.66167 56.1807 6.64417 56.1807 6.3175 56.015L5.97917 55.8435L4.88833 53.9205C2.67167 50.0215 2.45 49.6191 2.3975 49.4416C2.35667 49.2996 2.37417 49.1931 2.49083 48.9387L2.63667 48.6133L5.0925 47.1755C6.44583 46.3827 7.67083 45.655 7.81667 45.5603C8.155 45.3355 8.62167 44.8858 8.72667 44.6787C8.82583 44.4894 8.8375 43.3593 8.75 43.022C8.62167 42.5605 8.3475 41.0755 8.2425 40.3122C8.11417 39.3182 8.09667 36.7681 8.21333 35.8155C8.32417 34.9517 8.49917 33.9459 8.66833 33.224C8.83167 32.4963 8.86667 31.4786 8.72667 31.2124C8.62167 31.0053 8.155 30.5556 7.81667 30.3308C7.67083 30.2361 6.44583 29.5084 5.0925 28.7155L2.63667 27.2778L2.49083 26.9524C2.37417 26.698 2.35667 26.5915 2.3975 26.4495C2.45 26.272 2.67167 25.8696 4.88833 21.9705L5.97917 20.0476L6.3175 19.876L6.66167 19.7045L6.93 19.8169C7.08167 19.882 8.3475 20.6038 9.74167 21.4203C11.1358 22.2309 12.39 22.9409 12.53 22.9941C12.8392 23.1184 13.6325 23.1302 13.9008 23.0119C14.0058 22.9705 14.3675 22.6746 14.7 22.3551C17.2375 19.953 20.3758 18.1543 23.7242 17.178C24.1558 17.0538 24.5758 16.7461 24.8617 16.332L24.9958 16.1426L25.025 12.7405L25.0542 9.33846L25.2058 9.00712C25.3342 8.73496 25.4042 8.65212 25.6317 8.54562C25.7775 8.46871 26.0225 8.39179 26.1742 8.36221C26.5767 8.29712 32.165 8.29121 32.5733 8.36221Z"
        fill={colourFill}
      />
      <path
        d="M27.65 19.1305C24.0391 19.4323 20.7608 20.7458 17.9025 23.0414C17.1208 23.6686 15.3241 25.4909 14.7 26.2897C12.5941 28.9818 11.2933 32.159 10.9141 35.5197C10.7216 37.2059 10.78 39.7205 11.0541 41.3535C11.5558 44.3533 12.8158 47.2051 14.7 49.6013C15.3591 50.4415 16.7241 51.8438 17.6166 52.6011C19.8158 54.4767 22.61 55.8553 25.375 56.4292C26.7925 56.7191 27.4808 56.7842 29.4 56.7842C31.3075 56.7842 31.99 56.725 33.4016 56.4351C36.0033 55.9026 38.7216 54.6009 40.8916 52.8555C41.6791 52.2224 43.4758 50.4001 44.1 49.6013C44.87 48.6192 45.5875 47.4713 46.1416 46.3176C47.3783 43.7793 47.9033 41.5783 47.9908 38.5963C48.09 35.0996 47.495 32.2537 46.0541 29.3663C45.5583 28.3783 44.8 27.1831 44.1 26.2897C43.5516 25.5856 41.7258 23.71 41.0666 23.1716C38.3366 20.9469 35.2041 19.5979 31.7916 19.1897C31.0683 19.1068 28.4316 19.0654 27.65 19.1305ZM31.4708 21.5859C33.2966 21.8285 34.8483 22.3078 36.5458 23.1538C40.7633 25.2483 43.9308 29.1593 45.1208 33.7565C46.3925 38.6673 45.4008 43.7557 42.3733 47.8618C41.8016 48.6369 40.2616 50.2522 39.55 50.8202C35.4433 54.1039 30.2575 55.2163 25.27 53.8909C24.185 53.601 23.3333 53.2756 22.2483 52.7313C19.5591 51.3941 17.2025 49.2345 15.5808 46.6134C15.1433 45.9034 14.4433 44.4657 14.1516 43.6788C12.8275 40.0518 12.8041 36.0226 14.0933 32.3957C15.8433 27.4612 19.8683 23.6035 24.8208 22.1243C25.2058 22.0119 25.8475 21.8522 26.25 21.7693C26.8858 21.6392 27.2883 21.5859 28.3791 21.4735C28.8575 21.4262 30.7941 21.4913 31.4708 21.5859Z"
        fill={colourFill}
      />
      <path
        d="M28.6125 25.2838C27.1425 25.5146 25.725 26.408 24.9141 27.6091C24.6458 28.0114 24.2375 28.9108 24.1208 29.3664C23.9866 29.887 23.94 31.0822 24.0275 31.6502C24.3775 33.8453 26.0342 35.6321 28.1925 36.1409C30.5667 36.6971 33.1392 35.4901 34.23 33.3009C34.6967 32.3543 34.86 31.5792 34.8075 30.4787C34.7783 29.7214 34.6908 29.319 34.4342 28.6623C33.81 27.0766 32.3633 25.8045 30.73 25.4022C30.17 25.2602 29.12 25.2069 28.6125 25.2838Z"
        fill={colourFill}
      />
      <path
        d="M28.5251 38.2177C25.1126 38.6555 22.4059 41.1938 21.7292 44.5899C21.5251 45.6372 21.5542 46.9034 21.7992 47.5897C22.1026 48.4239 22.7734 49.1931 23.5259 49.5599C24.3542 49.9682 24.2492 49.9623 29.5926 49.9445L34.3876 49.9268L34.8134 49.767C35.9101 49.3647 36.7092 48.5186 37.0534 47.4122C37.1701 47.0217 37.1876 46.856 37.1817 46.0514C37.1759 43.874 36.4176 42.028 34.8892 40.4897C33.7692 39.3596 32.4801 38.6555 30.9459 38.3301C30.4909 38.2354 28.9626 38.1644 28.5251 38.2177Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;