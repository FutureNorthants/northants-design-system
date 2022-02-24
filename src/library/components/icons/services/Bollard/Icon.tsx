import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.0755 13.0333C25.9026 13.0766 25.5135 13.4872 25.373 13.779C25.2163 14.1086 25.0758 14.6058 25.0758 14.8219C25.0758 14.9084 25.038 15.0489 24.9948 15.1407C24.9515 15.2272 24.8921 15.4433 24.8651 15.6216C24.784 16.108 24.5949 17.0104 24.5409 17.1292C24.5139 17.1887 24.4652 17.3832 24.4274 17.5615C24.395 17.7398 24.3247 18.0046 24.2815 18.1559C24.1194 18.6855 24.1032 18.7611 24.1032 18.9016C24.1032 18.9826 24.0816 19.0907 24.0492 19.1448C23.9465 19.3285 23.833 20.0255 23.833 20.4632C23.833 20.9171 23.833 20.9171 24.0383 21.1171L24.2437 21.317H29.8634H35.4831L35.683 21.1117L35.8829 20.9063V20.3065C35.8829 19.9607 35.8613 19.6905 35.8289 19.6689C35.8019 19.6527 35.7749 19.5554 35.7749 19.4528C35.7749 19.2474 35.4236 17.7723 35.3426 17.6318C35.3102 17.5777 35.2886 17.4751 35.2886 17.4048C35.2886 17.3292 35.2021 16.9239 35.094 16.497C34.986 16.0701 34.8617 15.5406 34.8184 15.319C34.7698 15.0975 34.6888 14.7571 34.6401 14.5625C34.5861 14.368 34.5266 14.1032 34.505 13.9681C34.478 13.7682 34.4186 13.671 34.1646 13.4116C33.9971 13.2441 33.8188 13.1036 33.7647 13.1036C33.7161 13.1036 33.6567 13.0766 33.6405 13.0495C33.608 12.9955 26.3024 12.9793 26.0755 13.0333ZM32.8407 14.6814C32.8624 14.7192 32.911 14.8868 32.9488 15.0489C33.0299 15.4271 33.2244 16.2593 33.473 17.2751C33.581 17.7128 33.6675 18.1343 33.6675 18.2099C33.6675 18.2856 33.6891 18.3883 33.7215 18.4423C33.808 18.599 33.9377 19.1339 33.9377 19.3339C33.9377 19.442 33.9647 19.5446 33.9917 19.5608C34.0241 19.577 34.0457 19.6149 34.0457 19.6473C34.0457 19.6743 32.4463 19.6959 29.885 19.6959C25.3784 19.6959 25.6594 19.7175 25.7729 19.4149C25.7999 19.3447 25.8485 19.1664 25.8864 19.0205C26.0269 18.4531 26.1673 17.8641 26.2916 17.3454C26.3619 17.0482 26.4429 16.7186 26.4753 16.6159C26.5078 16.5132 26.5348 16.3565 26.5348 16.2647C26.5348 16.1782 26.5726 16.0323 26.6158 15.9458C26.6591 15.8648 26.6969 15.7243 26.6969 15.6378C26.6969 15.4811 26.8752 14.7787 26.9401 14.6706C26.9941 14.5842 32.7813 14.595 32.8407 14.6814Z"
        fill={colourFill}
      />
      <path
        d="M22.7307 25.3643C22.5848 25.5156 22.5037 25.6615 22.4551 25.8668C22.4173 26.0235 22.3416 26.2991 22.293 26.4774C22.2443 26.6557 22.1795 26.8989 22.1579 27.0177C22.1039 27.3149 21.8661 28.3254 21.6391 29.217C21.5365 29.6223 21.4554 30.0275 21.4554 30.1194C21.4554 30.2058 21.4338 30.2923 21.4122 30.3085C21.3852 30.3247 21.3203 30.5355 21.2717 30.784C21.2177 31.0326 21.1258 31.427 21.061 31.6648C21.0015 31.9026 20.9421 32.324 20.9313 32.605L20.9097 33.113L21.1366 33.3453L21.369 33.5831H29.912H38.455L38.655 33.3777C38.8495 33.1778 38.8549 33.1616 38.8549 32.7563C38.8549 32.5294 38.8063 32.1295 38.7468 31.8701C38.5415 31.0002 38.4874 30.7462 38.4226 30.422C38.3848 30.2437 38.3361 30.0491 38.3091 29.9897C38.2551 29.8654 37.7093 27.6175 37.6121 27.1258C37.5796 26.9475 37.4878 26.5314 37.4121 26.2072C37.2879 25.6669 37.2554 25.5912 37.0555 25.3805L36.834 25.1535H29.885H22.936L22.7307 25.3643ZM35.8181 27.1528C36.0126 28.0877 36.6286 30.6868 36.6935 30.8543C36.7421 30.9732 36.834 31.3568 36.8772 31.6108C36.888 31.6972 36.9204 31.8161 36.9366 31.8647C36.9744 31.9566 36.6178 31.962 29.8904 31.962C25.9944 31.962 22.8063 31.9458 22.8063 31.9296C22.8063 31.8377 22.9846 31.2271 23.0225 31.1785C23.0495 31.1461 23.0873 30.9894 23.1035 30.8273C23.1521 30.4598 23.4385 29.2656 23.5088 29.1413C23.5412 29.0873 23.5628 28.99 23.5628 28.9198C23.5628 28.7901 23.7411 27.9093 23.833 27.5851C23.86 27.4825 23.9249 27.2555 23.9735 27.0826L24.0545 26.7746L29.9012 26.7854L35.7478 26.8016L35.8181 27.1528Z"
        fill={colourFill}
      />
      <path
        d="M19.7912 37.6033C19.6183 37.787 19.5643 37.8951 19.5372 38.1004C19.521 38.2463 19.4832 38.4084 19.4508 38.457C19.4238 38.5111 19.3805 38.7164 19.3481 38.9163C19.3211 39.1217 19.2563 39.4027 19.213 39.554C19.1644 39.6999 19.0942 39.9808 19.0563 40.1754C18.9861 40.4996 18.8672 40.9859 18.6727 41.7424C18.6295 41.9045 18.5592 42.2071 18.5106 42.4179C18.4673 42.6232 18.3431 43.1419 18.2404 43.5634C18.0945 44.1524 18.0513 44.4442 18.0513 44.8224V45.3088L18.2728 45.5519L18.4998 45.7951H29.9067H41.319L41.5243 45.5843L41.7243 45.379L41.7026 44.817C41.681 44.2605 41.4595 43.1311 41.2812 42.6718C41.2541 42.6016 41.2325 42.4881 41.2325 42.4124C41.2325 42.2395 40.9786 41.2075 40.9083 41.0832C40.8759 41.0291 40.8543 40.9319 40.8543 40.8616C40.8543 40.7914 40.7192 40.1808 40.5571 39.4945C40.3896 38.8137 40.2329 38.149 40.2113 38.0248C40.1788 37.8627 40.0978 37.7222 39.9573 37.5763L39.752 37.3655H29.8797H20.0128L19.7912 37.6033ZM38.6388 39.0298C38.6388 39.0514 38.7739 39.6242 38.936 40.3105C39.0981 40.9913 39.2332 41.6127 39.2332 41.6884C39.2332 41.764 39.2548 41.8505 39.2819 41.8829C39.3305 41.9369 39.5466 42.7637 39.6115 43.1743C39.6385 43.3202 39.6871 43.5418 39.7195 43.6607C39.752 43.7795 39.7952 43.9417 39.8114 44.0227L39.8384 44.174H29.8905C24.4221 44.174 19.9425 44.1578 19.9425 44.1308C19.9425 44.0119 20.3748 42.1531 20.5369 41.5803C20.5909 41.3858 20.6558 41.1318 20.672 41.0129C20.6936 40.894 20.7693 40.5914 20.8395 40.3375C20.9098 40.0889 20.9692 39.8079 20.9692 39.7161C20.9692 39.6296 21.007 39.4837 21.0502 39.3973C21.0935 39.3162 21.1313 39.1865 21.1313 39.1163V38.9866H29.8851C34.6996 38.9866 38.6388 39.0028 38.6388 39.0298Z"
        fill={colourFill}
      />
      <path
        d="M16.8679 49.8748C16.7274 50.0261 16.6464 50.1666 16.6464 50.2584C16.6464 50.3341 16.5761 50.6799 16.4843 51.0257C16.1276 52.4469 15.8899 53.4681 15.8899 53.5924C15.8899 53.6681 15.8521 53.7924 15.8088 53.8788C15.7656 53.9653 15.717 54.1436 15.7008 54.2787C15.6629 54.538 15.4954 55.327 15.3711 55.7647C15.3333 55.9106 15.2901 56.0835 15.2847 56.1429C15.2685 56.2456 15.2144 56.251 13.9338 56.278C12.9666 56.2996 12.5829 56.3212 12.5289 56.3699C12.4964 56.4077 12.4154 56.4401 12.356 56.4401C12.2911 56.4401 12.1938 56.4779 12.1398 56.5212C12.0804 56.5644 11.9939 56.6022 11.9453 56.6022C11.7183 56.6022 10.4863 57.7532 10.4863 57.9639C10.4863 58.0125 10.4485 58.0774 10.4053 58.1152C10.362 58.153 10.3242 58.2125 10.3242 58.2503C10.3242 58.2881 10.2864 58.3476 10.2432 58.3854C10.1999 58.4232 10.1621 58.5313 10.1621 58.6231C10.1621 58.715 10.1243 58.8609 10.0811 58.9474C10.0108 59.077 10 59.4337 10 61.1358V63.1729L10.2324 63.3999L10.4647 63.6268H29.9175H49.3703L49.5703 63.4215L49.7702 63.2162V61.1412C49.7702 58.8663 49.7756 58.9365 49.4298 58.2233C49.1596 57.6721 48.3707 56.8832 47.7168 56.5266C47.4142 56.359 47.0684 56.3158 45.7662 56.2942L44.5449 56.2726L44.4315 55.8295C44.1073 54.5705 43.7722 53.1385 43.7722 53.0142C43.7722 52.9386 43.7506 52.8683 43.7236 52.8521C43.6966 52.8359 43.6642 52.7441 43.648 52.6468C43.5831 52.2956 43.2535 50.8906 43.1454 50.5394C43.1022 50.3989 43.0698 50.2476 43.0698 50.199C43.0698 50.1558 42.9671 50.0045 42.8482 49.8748L42.6213 49.6316H29.8581H17.0949L16.8679 49.8748ZM41.6757 51.9281C41.7567 52.2848 41.8918 52.8197 41.9675 53.1169C42.0431 53.4141 42.1296 53.787 42.1566 53.9491C42.189 54.1112 42.2214 54.2571 42.2322 54.2733C42.2646 54.3327 42.9617 57.2614 42.9617 57.3533C42.9617 57.3965 43.0644 57.5424 43.1887 57.6667L43.4156 57.8991H44.7179C45.831 57.8991 46.085 57.9153 46.4254 58.0017C46.6469 58.0612 46.9009 58.1476 46.9928 58.1909C47.3008 58.3476 47.6682 58.7204 47.8303 59.0392C48.0897 59.558 48.1491 59.92 48.1491 61.0169V62.0058H29.8797H11.6049L11.6373 60.9359C11.6697 59.7687 11.7075 59.5688 11.9723 59.0068C12.2263 58.4664 12.491 58.2719 13.3178 58.0017C13.5934 57.9099 13.8041 57.8991 14.9605 57.8991H16.2897L16.5491 57.6451C16.7058 57.4884 16.8085 57.3425 16.8085 57.2668C16.8085 57.202 16.8301 57.0939 16.8571 57.0237C16.9652 56.7319 17.1543 55.9538 17.3488 54.9541C17.3867 54.7758 17.4353 54.6029 17.4569 54.5759C17.4785 54.5435 17.5109 54.3922 17.5272 54.2354C17.5488 54.0787 17.5974 53.8734 17.646 53.7815C17.6893 53.6897 17.7271 53.5546 17.7271 53.4844C17.7271 53.3114 17.8946 52.6414 17.9486 52.5766C17.9757 52.5495 17.9973 52.4685 17.9973 52.3874C17.9973 52.3118 18.0513 52.0254 18.1161 51.7498L18.235 51.2527L29.8797 51.2635L41.519 51.2797L41.6757 51.9281Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;