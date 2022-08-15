
import React from "react";

import { IconProps } from "../Icon.types";

const ServiceIcon: React.FC<IconProps> = ({ colourFill }) => {

    return (
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M21.8862 30.0911C21.9279 30.0454 21.9693 29.9994 22.0102 29.953L22.0001 30L21.8862 30.0911ZM44.019 31.8723C43.9912 32.3761 43.6417 32.8051 43.1531 32.9327C41.1874 33.4479 39.6089 34.898 38.8626 36.7339C39.2139 36.6931 39.5694 36.6668 39.9314 36.6668C45.0222 36.6668 49.1637 40.8083 49.1637 45.8991C49.1637 48.8609 47.7105 51.6208 45.3848 53.3355C47.4047 54.6956 48.6871 56.997 48.6871 59.5344V63.6759H54.1631V38.2896C53.8374 35.7363 51.9496 33.5887 49.4479 32.9327C48.9594 32.8045 48.6099 32.3761 48.5821 31.8723C48.5548 31.3678 48.8556 30.9037 49.3271 30.7233C52.5908 29.4744 54.7838 26.293 54.7838 22.8074C54.7838 18.1297 50.9782 14.3241 46.3005 14.3241C41.6234 14.3241 37.8178 18.1297 37.8178 22.8074C37.8178 26.293 40.0103 29.4744 43.274 30.7233C43.7455 30.9037 44.0462 31.3678 44.019 31.8723ZM37.3463 54.5549C35.0818 55.1484 33.4999 57.1961 33.4999 59.5344V63.6759H46.363V59.5344C46.363 57.1961 44.7816 55.1484 42.5171 54.5549C42.0285 54.4272 41.679 53.9982 41.6512 53.4944C41.624 52.99 41.9247 52.5258 42.3962 52.3454C45.054 51.3286 46.8396 48.7378 46.8396 45.8991C46.8396 42.0901 43.7404 38.9909 39.9314 38.9909C36.1224 38.9909 33.0233 42.0901 33.0233 45.8991C33.0233 48.7384 34.8089 51.3286 37.4672 52.3454C37.9387 52.5258 38.2394 52.99 38.2122 53.4944C38.1844 53.9982 37.8349 54.4272 37.3463 54.5549ZM22.76 52.3454C25.4183 51.3286 27.2039 48.7384 27.2039 45.8991C27.2039 42.0901 24.1048 38.9909 20.2958 38.9909C16.4868 38.9909 13.3876 42.0901 13.3876 45.8991C13.3876 48.7378 15.1732 51.3286 17.831 52.3454C18.3025 52.5258 18.6032 52.99 18.576 53.4944C18.5482 53.9982 18.1986 54.4272 17.7101 54.5549C15.4456 55.1484 13.8642 57.1961 13.8642 59.5344V63.6759H26.7273V59.5344C26.7273 57.1961 25.1454 55.1484 22.8809 54.5549C22.3923 54.4272 22.0428 53.9982 22.015 53.4944C21.9878 52.99 22.2885 52.5258 22.76 52.3454ZM22.4094 22.8074C22.4094 18.1297 18.6038 14.3241 13.9266 14.3241C9.24895 14.3241 5.44336 18.1297 5.44336 22.8074C5.44336 26.293 7.63638 29.4744 10.9001 30.7233C11.3716 30.9037 11.6723 31.3678 11.6451 31.8723C11.6173 32.3761 11.2678 32.8051 10.7792 32.9327C8.30252 33.5818 6.4193 35.7045 6.07261 38.2278V63.6759H11.5401V59.5344C11.5401 56.997 12.8225 54.6956 14.8424 53.3355C12.5166 51.6208 11.0635 48.8609 11.0635 45.8991C11.0635 40.8083 15.205 36.6668 20.2958 36.6668C20.6586 36.6668 21.015 36.6934 21.367 36.7343C20.622 34.8974 19.0451 33.4496 17.074 32.9327C16.5855 32.8045 16.236 32.3761 16.2082 31.8723C16.1809 31.3678 16.4817 30.9037 16.9532 30.7233C20.2169 29.4744 22.4094 26.293 22.4094 22.8074ZM43.2141 47.6716C42.7375 47.241 42.0027 47.2784 41.5726 47.7539C40.7782 48.6317 39.3205 48.6328 38.5262 47.7539C38.0967 47.2784 37.3613 47.241 36.8847 47.6716C36.4086 48.1017 36.3717 48.8371 36.8024 49.3132C37.6331 50.2318 38.8167 50.7589 40.0491 50.7589C41.2821 50.7589 42.4657 50.2318 43.2964 49.3132C43.727 48.8371 43.6901 48.1017 43.2141 47.6716ZM17.1738 27.6927C16.3432 28.6114 15.1596 29.1385 13.9271 29.1385C12.6942 29.1385 11.5106 28.6114 10.6799 27.6927C10.2492 27.2167 10.2861 26.4813 10.7622 26.0512C11.2388 25.6211 11.9741 25.6586 12.4037 26.1335C13.1975 27.0113 14.6551 27.0124 15.4501 26.1335C15.879 25.6586 16.6144 25.6211 17.0916 26.0512C17.5676 26.4813 17.6045 27.2167 17.1738 27.6927ZM49.5479 27.6927C49.9786 27.2167 49.9417 26.4813 49.4656 26.0512C48.989 25.6211 48.2531 25.6586 47.8241 26.1335C47.0303 27.0113 45.5727 27.0124 44.7777 26.1335C44.3482 25.6586 43.6128 25.6211 43.1362 26.0512C42.6602 26.4813 42.6233 27.2167 43.054 27.6927C43.8846 28.6114 45.0682 29.1385 46.3006 29.1385C47.5336 29.1385 48.7172 28.6114 49.5479 27.6927ZM16.8796 47.6711C17.3574 47.2416 18.0916 47.2796 18.5211 47.7545C19.3132 48.6311 20.7714 48.6328 21.5664 47.7539C21.9953 47.2784 22.7307 47.241 23.2079 47.6716C23.6839 48.1017 23.7208 48.8371 23.2902 49.3132C22.4595 50.2318 21.2759 50.7589 20.0435 50.7589C18.8099 50.7589 17.6269 50.2318 16.7962 49.3126C16.3661 48.836 16.4036 48.1012 16.8796 47.6711Z" fill={colourFill} />
</svg>

    )
} 


export default ServiceIcon;
