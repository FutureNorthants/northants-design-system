import React from 'react';
import { IconProps } from '../Icon.types';

const ServiceIcon: React.FunctionComponent<IconProps> = ({ colourFill }) => {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.905 12.172C10.4006 12.325 9.70363 12.7386 9.5733 12.9596C9.54497 13.0106 9.51663 13.0333 9.51663 13.0106C9.51663 12.9823 9.38063 13.124 9.21063 13.3223C8.6043 14.0363 8.3833 14.722 8.3833 15.8723V16.5976H9.54497H10.701L10.718 19.839L10.735 23.086L10.888 23.3976C11.0126 23.6526 11.1033 23.749 11.3696 23.9076C11.6416 24.072 11.755 24.106 12.0156 24.106C12.4463 24.106 12.911 23.8113 13.098 23.4146L13.2283 23.1426L13.2453 19.8673L13.2623 16.5976H14.4466H15.6366V15.8723C15.631 15.079 15.5743 14.6823 15.461 14.6086C15.393 14.569 15.393 14.5576 15.461 14.5576C15.5233 14.5576 15.5233 14.535 15.4496 14.4556C15.393 14.399 15.3533 14.3196 15.3533 14.28C15.3533 14.093 14.9793 13.515 14.6336 13.1636C14.0896 12.6083 13.7156 12.3646 13.1263 12.172C12.4236 11.9453 11.6473 11.9396 10.905 12.172Z"
        fill={colourFill}
      />
      <path
        d="M43.1201 12.1551C42.4344 12.3591 41.8168 12.7898 41.3351 13.3905C41.0291 13.7701 40.7854 14.2688 40.6834 14.7278C40.6494 14.8978 40.5871 15.1245 40.5531 15.2265C40.5021 15.3795 40.5021 15.4248 40.5701 15.4701C40.6324 15.5155 40.6381 15.5381 40.5871 15.5608C40.5361 15.5778 40.5134 15.7421 40.5134 16.0935V16.5978H41.7034H42.8934L42.9048 19.8108L42.9218 23.0295L43.0804 23.3695C43.2051 23.6415 43.3014 23.7491 43.5338 23.9021C43.7944 24.0778 43.8738 24.1005 44.1968 24.1005C44.5368 24.1061 44.5878 24.0891 44.8598 23.8851C45.1941 23.6471 45.3414 23.3751 45.4434 22.8481C45.4774 22.6498 45.5001 21.3861 45.5001 19.5615V16.5978H46.6674H47.8348L47.8121 15.7025C47.8008 15.1811 47.7668 14.7675 47.7271 14.6995C47.6931 14.6371 47.5911 14.3991 47.5004 14.1725C47.3588 13.8041 47.1434 13.4811 46.7354 13.0391C46.5881 12.8805 46.0271 12.4781 45.7494 12.3365C45.0751 11.9851 43.9644 11.9058 43.1201 12.1551Z"
        fill={colourFill}
      />
      <path
        d="M7.08 17.4478C7.03467 17.4704 6.791 17.5498 6.54167 17.6178C6.026 17.7594 5.43667 18.0031 5.43667 18.0824C5.43667 18.1108 5.414 18.1221 5.39133 18.1051C5.363 18.0881 5.278 18.1221 5.20433 18.1844C5.13067 18.2411 4.92667 18.3998 4.751 18.5358C4.19 18.9664 3.62333 19.7314 3.36267 20.3944C3.306 20.5361 3.238 20.6664 3.204 20.6891C3.17567 20.7061 3.14733 20.8251 3.14733 20.9441C3.14167 21.0631 3.119 21.1764 3.085 21.1991C3.051 21.2274 3.02267 22.8141 3.01133 25.7211L3 30.1978H28.1317H53.269L53.2463 25.9591C53.2237 21.5618 53.218 21.4428 52.9743 20.7174C52.708 19.9184 51.9373 18.8701 51.297 18.4281C51.1327 18.3148 50.9967 18.2071 50.9967 18.1844C50.9967 18.0428 49.3363 17.4591 48.7753 17.4081L48.509 17.3798L48.492 20.7174C48.475 23.7661 48.4693 24.0664 48.3787 24.2194C48.322 24.3101 48.2767 24.4121 48.2767 24.4348C48.2767 24.4631 48.186 24.6671 48.0783 24.8938C47.744 25.5908 46.6277 26.6448 45.9307 26.9224C45.024 27.2794 43.4033 27.2851 42.4627 26.9224C42.1227 26.7978 41.165 26.1008 40.9667 25.8401C40.8873 25.7381 40.74 25.5624 40.638 25.4378C40.536 25.3188 40.3603 25.0354 40.2413 24.8031L40.0317 24.3894L40.0147 20.8874L39.9977 17.3911H28.16H16.3167V20.5474C16.3167 23.6584 16.294 24.0098 16.124 24.3894C15.7387 25.2338 15.682 25.3188 15.172 25.8401C14.5827 26.4408 14.169 26.7524 13.744 26.9224C12.8373 27.2794 11.2167 27.2851 10.276 26.9224C9.94733 26.7978 8.984 26.1064 8.79133 25.8571C8.71767 25.7664 8.559 25.5624 8.43433 25.4094C8.304 25.2508 8.134 24.9731 8.04333 24.7804C7.76 24.1571 7.70333 23.7661 7.70333 22.3041C7.70333 21.5788 7.68633 20.1734 7.66367 19.1874L7.62967 17.3911L7.39733 17.3968C7.267 17.3968 7.12533 17.4194 7.08 17.4478Z"
        fill={colourFill}
      />
      <path
        d="M3 46.1153C3 55.947 3.017 60.4067 3.05667 60.4293C3.09067 60.452 3.102 60.5143 3.085 60.571C3.04533 60.6957 3.24933 61.3077 3.35133 61.3757C3.391 61.3983 3.40233 61.421 3.37967 61.421C3.357 61.421 3.442 61.625 3.57233 61.88C3.75933 62.2427 3.94067 62.4693 4.411 62.9453C4.96067 63.495 5.06833 63.5743 5.66333 63.8747C6.02033 64.0503 6.47933 64.2373 6.68333 64.2827C7.00633 64.3563 9.732 64.3677 28.1033 64.3677C46.809 64.3677 49.1947 64.3563 49.5233 64.277C49.8747 64.1977 50.838 63.75 51.195 63.5007C51.5407 63.2627 52.2773 62.458 52.47 62.1123C52.5777 61.914 52.7023 61.7213 52.7363 61.676C52.8327 61.574 53.082 60.7977 53.1273 60.469C53.1443 60.3217 53.184 60.1573 53.2123 60.1063C53.2407 60.0497 53.2633 54.0657 53.2633 45.9283V31.841H28.1317H3V46.1153ZM12.9053 34.4987C13.0923 34.5553 13.2793 34.629 13.319 34.6687C13.3643 34.7027 13.5343 34.833 13.6987 34.9633C14.05 35.2297 14.2993 35.5923 14.4353 36.0343C14.5657 36.4537 14.577 38.9753 14.4523 39.542C14.3333 40.0633 14.0047 40.5337 13.54 40.8397C13.336 40.97 13.1433 41.1003 13.1037 41.1343C12.9507 41.259 12.469 41.3043 11.092 41.3043C9.749 41.3043 9.06333 41.2477 9.06333 41.14C9.06333 41.1173 8.967 41.055 8.85367 40.9983C8.34367 40.7547 7.95267 40.307 7.75433 39.7347C7.658 39.4513 7.64667 39.253 7.64667 37.8363C7.64667 36.1137 7.66933 35.955 8.00933 35.4223C8.26433 35.02 8.899 34.561 9.375 34.4477C9.47133 34.4193 10.225 34.4023 11.058 34.3967C12.3783 34.391 12.6107 34.4023 12.9053 34.4987ZM21.3033 34.4533C21.8247 34.5667 22.5443 35.1503 22.7937 35.6603C23.026 36.1363 23.0713 36.567 23.0487 38.0857C23.026 39.2757 23.009 39.5023 22.9127 39.7573C22.7257 40.2617 22.3347 40.715 21.8983 40.9417C21.7283 41.0323 21.5867 41.123 21.5867 41.1457C21.5867 41.259 20.8613 41.31 19.3937 41.293L17.8183 41.276L17.45 41.055C17.246 40.936 16.9853 40.7603 16.872 40.6697C16.6397 40.4883 16.294 39.916 16.2317 39.6213C16.2147 39.5193 16.1693 39.423 16.141 39.406C16.0673 39.3607 16.073 36.3347 16.1467 36.2893C16.1807 36.2723 16.2033 36.21 16.2033 36.1533C16.2033 36.1023 16.294 35.8757 16.4017 35.649C16.5717 35.3147 16.6737 35.19 17.008 34.9237C17.6313 34.425 17.7617 34.3967 19.5297 34.3967C20.3967 34.391 21.1333 34.4193 21.3033 34.4533ZM29.8883 34.476C30.574 34.68 31.3107 35.4337 31.4863 36.108C31.594 36.5273 31.5883 39.1793 31.4807 39.593C31.339 40.12 30.8743 40.698 30.3587 40.9757C30.234 41.0493 30.064 41.1457 29.979 41.191C29.8543 41.259 29.537 41.276 28.1033 41.276H26.375L26.069 41.1173C25.389 40.7603 25.083 40.4317 24.726 39.6893C24.6297 39.4797 24.6183 39.321 24.6183 37.8477V36.2327L24.8733 35.7283C25.0717 35.343 25.1907 35.1787 25.4117 35.0087C25.5647 34.884 25.746 34.7423 25.8083 34.6913C25.865 34.6403 26.0577 34.5553 26.2333 34.4987C26.4997 34.4137 26.7717 34.3967 28.0807 34.3967C29.265 34.391 29.6787 34.408 29.8883 34.476ZM38.462 34.493C38.6433 34.5553 38.8473 34.6517 38.9097 34.7083C38.9777 34.765 39.1363 34.8897 39.2667 34.986C39.397 35.0823 39.5783 35.292 39.6747 35.4677C39.7767 35.6377 39.873 35.7907 39.8957 35.8077C39.9183 35.8247 39.9637 35.938 39.9977 36.0627C40.0827 36.3743 40.0827 39.2417 39.9977 39.5817C39.958 39.7233 39.8163 40.0067 39.6803 40.2163C39.3687 40.6867 38.7283 41.1513 38.258 41.2477C37.8443 41.3383 34.926 41.2987 34.7333 41.2023C34.2347 40.9587 33.8607 40.6753 33.651 40.375C33.5603 40.2503 33.4413 40.0917 33.3903 40.035C33.192 39.797 33.1467 39.3947 33.1467 37.8647C33.1467 36.414 33.192 35.8813 33.3393 35.734C33.3733 35.7 33.464 35.5753 33.532 35.4563C33.6453 35.2693 33.787 35.1333 34.2517 34.7423C34.3367 34.6743 34.552 34.5667 34.7277 34.5043C35.011 34.408 35.2093 34.3967 36.5863 34.391C37.9237 34.391 38.1673 34.4023 38.462 34.493ZM46.9563 34.493C47.1377 34.5497 47.3417 34.6403 47.3983 34.6913C47.4607 34.7423 47.642 34.8783 47.795 35.003C48.016 35.173 48.135 35.3317 48.3333 35.7283L48.5883 36.2327V37.8477V39.4627L48.4297 39.7743C48.3447 39.9443 48.2257 40.1823 48.1577 40.2957C48.0273 40.5337 47.5967 40.8793 47.1433 41.1117L46.8317 41.276L45.2903 41.293C43.817 41.31 43.12 41.259 43.12 41.14C43.12 41.1117 43.0407 41.0607 42.95 41.021C42.4457 40.8113 41.93 40.2163 41.7487 39.644C41.6637 39.355 41.6467 39.1113 41.6467 37.8533C41.6467 36.8333 41.6693 36.312 41.7203 36.108C41.8903 35.4507 42.5817 34.7253 43.2617 34.493C43.5053 34.408 43.7773 34.3967 45.0863 34.391C46.418 34.391 46.6673 34.4023 46.9563 34.493ZM13.183 44.132C13.948 44.5287 14.3843 45.1237 14.5033 45.9397C14.577 46.461 14.5713 48.3027 14.4977 48.8013C14.407 49.368 14.186 49.7817 13.7553 50.1727C13.557 50.3483 13.3247 50.5297 13.2397 50.5807C12.8883 50.762 12.3443 50.8243 11.075 50.8243C9.528 50.8243 8.97267 50.7223 8.61567 50.3823C8.559 50.3313 8.41167 50.1897 8.28133 50.0707C8.151 49.9517 7.95833 49.6967 7.85633 49.504L7.675 49.1527V47.3677V45.5827L7.862 45.1973C7.96967 44.9877 8.15667 44.71 8.287 44.5853C8.51933 44.3587 9.29567 43.9393 9.57333 43.894C9.65267 43.877 10.3893 43.8713 11.2167 43.877L12.7183 43.8883L13.183 44.132ZM21.5867 44.081C22.0287 44.302 22.4933 44.6307 22.4933 44.7213C22.4933 44.761 22.5613 44.863 22.6407 44.9537C22.7257 45.0387 22.8447 45.2427 22.907 45.407C23.0147 45.6677 23.0317 45.8433 23.0487 47.1183C23.0827 49.2773 23.009 49.4983 22.0173 50.405C21.6773 50.7167 21.0767 50.8243 19.5977 50.8243C17.858 50.8243 17.5237 50.745 16.906 50.1783C16.5433 49.8497 16.294 49.4587 16.2317 49.1073C16.209 48.9883 16.1693 48.8977 16.141 48.8977C16.073 48.8977 16.073 45.8547 16.141 45.815C16.1693 45.798 16.209 45.6847 16.2317 45.5713C16.2997 45.1803 16.6907 44.6307 17.076 44.3757C17.45 44.1263 17.773 43.9677 18.045 43.9053C18.1413 43.8827 18.8893 43.8713 19.7167 43.877L21.2183 43.894L21.5867 44.081ZM29.809 43.945C29.8543 43.979 29.979 44.0413 30.0867 44.081C30.4267 44.2113 30.8857 44.54 31.0217 44.7553C31.0897 44.8687 31.203 45.016 31.2653 45.0897C31.5147 45.3673 31.5713 45.866 31.5487 47.515C31.526 48.807 31.509 49.079 31.424 49.3057C31.3673 49.4587 31.2937 49.5777 31.2597 49.5777C31.2257 49.5777 31.2143 49.5947 31.237 49.6117C31.271 49.6457 31.1577 49.8043 30.9083 50.0593C30.2113 50.7563 29.86 50.847 27.871 50.813C26.6243 50.7903 26.4543 50.779 26.154 50.6657C25.6497 50.4843 25.1453 50.0027 24.8563 49.436L24.6183 48.9827L24.6013 47.651C24.5787 46.393 24.6353 45.5203 24.743 45.4467C24.7713 45.4297 24.8223 45.339 24.8677 45.2427C25.0887 44.744 25.7403 44.149 26.1767 44.0527C26.273 44.03 26.3467 43.996 26.3467 43.9677C26.3467 43.8827 26.6697 43.8657 28.2223 43.877C29.2083 43.8827 29.758 43.9053 29.809 43.945ZM46.8487 43.945C46.8713 43.9733 47.0017 44.047 47.1433 44.098C47.54 44.251 47.9197 44.5627 48.169 44.9423C48.288 45.135 48.39 45.322 48.39 45.3673C48.39 45.407 48.4127 45.441 48.441 45.441C48.5713 45.441 48.628 46.138 48.6053 47.5377L48.5883 48.9827L48.356 49.436C48.0613 50.0027 47.5513 50.4843 47.0527 50.6657C46.7523 50.779 46.5823 50.7903 45.3357 50.813C43.3467 50.847 42.9953 50.7563 42.2983 50.0593C42.049 49.8043 41.9357 49.6457 41.9697 49.6117C41.9923 49.5947 41.9753 49.5777 41.9413 49.5777C41.9073 49.5777 41.828 49.4077 41.76 49.2037C41.658 48.8693 41.6467 48.6767 41.6467 47.3733C41.6467 46.1153 41.6637 45.8717 41.7543 45.543C41.8167 45.3333 41.9187 45.1067 41.9867 45.033C42.0547 44.9593 42.1567 44.8233 42.219 44.727C42.2757 44.6307 42.423 44.4833 42.5363 44.404C42.797 44.2283 43.4373 43.928 43.63 43.8883C43.9247 43.8373 46.809 43.8827 46.8487 43.945ZM39.703 44.081C40.06 44.2963 40.2017 44.7157 40.0373 45.0387C39.9523 45.1973 39.6463 45.6733 38.2467 47.8153C38.0427 48.127 37.561 48.8693 37.17 49.47C36.7223 50.1557 36.3993 50.5977 36.2917 50.66C36.1047 50.779 35.6967 50.8017 35.5267 50.711C35.368 50.626 33.3507 48.3877 33.243 48.178C33.0673 47.8437 33.1523 47.515 33.4867 47.2317C33.6907 47.0617 34.0703 47.0333 34.3253 47.1637C34.4103 47.209 34.739 47.5377 35.062 47.8947C35.3793 48.2517 35.6797 48.5747 35.7193 48.6087C35.7703 48.654 35.9517 48.4217 36.4957 47.5943C38.768 44.1207 38.7397 44.1603 38.9323 44.064C39.1873 43.9393 39.482 43.945 39.703 44.081ZM21.7567 53.669C22.1023 53.839 22.2383 53.9467 22.499 54.264C23.009 54.8873 23.0317 54.9893 23.0317 56.8877C23.0317 58.4233 23.026 58.5197 22.9013 58.8143C22.7427 59.211 22.261 59.7833 21.9267 59.9647C21.3827 60.2707 21.1617 60.2933 19.4503 60.2763C17.9373 60.2593 17.8637 60.2537 17.535 60.1177C17.2913 60.0213 17.093 59.8797 16.821 59.6077C16.5037 59.2903 16.43 59.1713 16.2713 58.752L16.09 58.2703V56.8593V55.4483L16.2657 54.9837C16.5433 54.247 16.9513 53.822 17.6483 53.5613C17.977 53.4367 18.045 53.4367 19.66 53.448L21.3317 53.4593L21.7567 53.669ZM30.268 53.669C30.6193 53.8447 30.7553 53.9523 31.0217 54.281C31.526 54.8987 31.56 55.0517 31.56 56.8763C31.5543 58.293 31.5487 58.412 31.4297 58.7463C31.2427 59.279 30.795 59.772 30.2623 60.044L29.8373 60.2593L28.2903 60.2763C27.31 60.2877 26.63 60.2707 26.4487 60.2367C26.0917 60.1573 25.6327 59.9307 25.423 59.7323C25.1963 59.5113 24.896 59.092 24.845 58.9277C24.8223 58.8483 24.777 58.769 24.7487 58.752C24.6523 58.6897 24.59 57.987 24.59 56.8593C24.59 55.7317 24.6523 55.029 24.7487 54.9667C24.777 54.9497 24.8223 54.8703 24.845 54.791C24.9413 54.485 25.338 54.0147 25.695 53.7823C26.1993 53.4593 26.392 53.431 28.194 53.448L29.8373 53.4593L30.268 53.669ZM38.479 53.5443C39.0797 53.7483 39.3743 53.992 39.7597 54.5927C40.0487 55.046 40.0657 55.2273 40.0487 57.001C40.0317 58.837 40.0373 58.8087 39.5047 59.466C39.295 59.7323 39.142 59.8513 38.7907 60.0327L38.343 60.2593H36.609H34.8693L34.433 60.044C34.0817 59.8683 33.94 59.7607 33.7133 59.4773C33.5603 59.2847 33.43 59.0977 33.43 59.058C33.43 59.0183 33.4073 58.9843 33.3733 58.9843C33.345 58.9843 33.2827 58.854 33.2317 58.6897C33.107 58.2703 33.107 55.454 33.2317 55.0403C33.3393 54.6833 33.804 54.06 34.1213 53.839C34.654 53.4707 34.875 53.4367 36.592 53.431C37.9973 53.431 38.1673 53.4423 38.479 53.5443ZM46.9847 53.5387C47.625 53.7597 48.0557 54.1507 48.3957 54.8307L48.5883 55.216L48.6053 56.6723C48.6223 58.0663 48.5713 58.7577 48.4467 58.7577C48.424 58.7577 48.3843 58.8257 48.3617 58.9107C48.2767 59.2563 47.7553 59.8173 47.319 60.0327C46.8543 60.2707 46.571 60.299 44.922 60.2763L43.375 60.2593L43.0067 60.0837C42.5477 59.8627 42.1057 59.4207 41.8563 58.9277L41.675 58.565L41.658 56.9783C41.641 55.4937 41.6467 55.3747 41.76 55.0233C41.896 54.5927 42.3607 53.9977 42.7177 53.7823C43.2673 53.4593 43.4203 53.4367 45.109 53.431C46.4973 53.431 46.707 53.4423 46.9847 53.5387Z"
        fill={colourFill}
      />
    </svg>
  );
};

export default ServiceIcon;