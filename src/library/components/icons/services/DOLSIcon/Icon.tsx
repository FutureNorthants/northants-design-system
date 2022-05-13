import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.09083 8.17965C0.680167 8.37856 0.378583 8.67373 0.147583 9.11006L0 9.37956V13.6146V17.8496L0.147583 18.1255C0.372167 18.549 0.71225 18.8891 1.11008 19.0816L1.47583 19.2612H5.5825H9.68917L10.1255 19.0495C10.6003 18.8121 10.9917 18.4014 11.1457 17.9651C11.2099 17.7726 11.2292 16.8678 11.2292 13.5825V9.44373L11.0752 9.13573C10.8634 8.70581 10.4142 8.28231 9.99717 8.12831C9.6635 8.0064 9.5095 7.99998 5.56325 7.99998H1.47583L1.09083 8.17965Z"
        fill={colourFill}
      />
      <path
        d="M50.3711 8.17965C49.9604 8.37856 49.6589 8.67373 49.4279 9.11006L49.2803 9.37956V13.6146V17.8496L49.4279 18.1255C49.6524 18.549 49.9925 18.8891 50.3904 19.0816L50.7561 19.2612H54.8628H58.9694L59.4057 19.0495C59.8806 18.8121 60.272 18.4014 60.426 17.9651C60.4902 17.7726 60.5094 16.8678 60.5094 13.5825V9.44373L60.3554 9.13573C60.1437 8.70581 59.6945 8.28231 59.2774 8.12831C58.9437 8.0064 58.7897 7.99998 54.8435 7.99998H50.7561L50.3711 8.17965Z"
        fill={colourFill}
      />
      <path
        d="M16.4907 11.6832C16.1634 11.7859 15.7463 12.0618 15.5795 12.2864C15.2394 12.7484 15.1496 13.0179 15.1496 13.5825C15.1432 14.2884 15.31 14.6734 15.7977 15.1225C16.4137 15.6872 15.079 15.6423 30.3828 15.623L43.954 15.6038L44.2235 15.4562C44.6534 15.2316 44.9293 14.9493 45.1411 14.5322C45.3079 14.1985 45.3336 14.0702 45.3336 13.6467C45.3336 13.3708 45.2887 13.0307 45.2309 12.8574C45.1026 12.4724 44.6919 12.0169 44.2813 11.7987L43.954 11.6254L30.3507 11.6126C19.5643 11.6062 16.696 11.619 16.4907 11.6832Z"
        fill={colourFill}
      />
      <path
        d="M4.92151 23.2396C4.39534 23.4 4.06809 23.6952 3.74726 24.2984L3.59326 24.5871V38.2225V51.8579L3.74726 52.198C3.84351 52.4034 4.02959 52.6536 4.24776 52.8525C4.69051 53.2568 5.11401 53.3915 5.76851 53.353C6.52568 53.3017 7.07109 52.9359 7.41118 52.2622L7.60368 51.8708V38.2546V24.6384L7.40476 24.2406C6.96201 23.3615 5.90326 22.9316 4.92151 23.2396Z"
        fill={colourFill}
      />
      <path
        d="M54.2852 23.2332C53.6756 23.4257 53.2072 23.8492 52.9955 24.401C52.88 24.709 52.8735 25.094 52.8735 38.2867V51.8579L53.0275 52.198C53.2393 52.6664 53.7719 53.1413 54.2403 53.276C54.9846 53.4942 55.7546 53.2888 56.3321 52.7113C56.9417 52.1018 56.884 53.5648 56.884 38.1904V24.6384L56.685 24.2406C56.2487 23.3744 55.2156 22.938 54.2852 23.2332Z"
        fill={colourFill}
      />
      <path
        d="M29.5872 26.6725C26.8088 27.1153 24.6528 29.2135 24.2229 31.8957C24.0946 32.6657 24.1716 34.0196 24.3769 34.7126C24.6913 35.7714 25.2239 36.6504 25.9939 37.3884C26.2313 37.6194 26.5393 37.9081 26.6741 38.0364C26.8473 38.2033 26.9179 38.3252 26.9179 38.4599C26.9179 38.6974 26.8088 38.7936 26.2634 39.0182C25.7436 39.2364 24.8132 39.7625 24.2742 40.1475C23.5876 40.6352 22.3749 41.8993 21.8744 42.65C20.8028 44.2606 20.2446 45.9418 20.1419 47.8796C20.1034 48.5726 20.1034 48.5918 20.2895 48.9383C20.4242 49.195 20.559 49.3426 20.79 49.4838L21.098 49.6763H30.2802C40.4186 49.6763 39.6036 49.7083 40.0336 49.2848C40.3801 48.9383 40.425 48.7779 40.4121 48.0079C40.3608 44.2798 38.0251 40.7507 34.5024 39.0631C34.0211 38.8321 33.8607 38.6268 33.957 38.3701C33.9826 38.2995 34.2329 38.0621 34.5088 37.8375C36.4466 36.2847 37.268 33.6924 36.6071 31.2412C36.0103 29.0595 34.1816 27.3142 31.9229 26.7688C31.4096 26.6469 30.1006 26.5955 29.5872 26.6725Z"
        fill={colourFill}
      />
      <path
        d="M1.09083 57.4597C0.680167 57.6586 0.378583 57.9538 0.147583 58.3901L0 58.6596V62.8946V67.1296L0.147583 67.4055C0.372167 67.829 0.71225 68.1691 1.11008 68.3616L1.47583 68.5413H5.5825H9.68917L10.1255 68.3295C10.6003 68.0921 10.9917 67.6814 11.1457 67.2451C11.2099 67.0526 11.2292 66.1478 11.2292 62.8625V58.7238L11.0752 58.4158C10.8634 57.9858 10.4142 57.5623 9.99717 57.4083C9.6635 57.2864 9.5095 57.28 5.56325 57.28H1.47583L1.09083 57.4597Z"
        fill={colourFill}
      />
      <path
        d="M50.3711 57.4597C49.9604 57.6586 49.6589 57.9538 49.4279 58.3901L49.2803 58.6596V62.8946V67.1296L49.4279 67.4055C49.6524 67.829 49.9925 68.1691 50.3904 68.3616L50.7561 68.5413H54.8628H58.9694L59.4057 68.3295C59.8806 68.0921 60.272 67.6814 60.426 67.2451C60.4902 67.0526 60.5094 66.1478 60.5094 62.8625V58.7238L60.3554 58.4158C60.1437 57.9858 59.6945 57.5623 59.2774 57.4083C58.9437 57.2864 58.7897 57.28 54.8435 57.28H50.7561L50.3711 57.4597Z"
        fill={colourFill}
      />
      <path
        d="M16.3689 61.0337C15.9005 61.2262 15.4898 61.6177 15.2909 62.054C15.1754 62.3171 15.1433 62.4903 15.1497 62.9267C15.1497 63.4015 15.1754 63.5234 15.3358 63.8507C15.5604 64.2998 15.9069 64.6142 16.3753 64.7875C16.7154 64.9158 16.8565 64.9158 30.2224 64.9158C43.5884 64.9158 43.7295 64.9158 44.0696 64.7875C44.8653 64.4923 45.3337 63.7993 45.3337 62.9202C45.3337 62.6507 45.2888 62.3042 45.231 62.1374C45.1027 61.7524 44.692 61.2968 44.2813 61.0787L43.9541 60.9054L30.3508 60.8926L16.7475 60.8733L16.3689 61.0337Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;