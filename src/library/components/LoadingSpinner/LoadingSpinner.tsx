
import React, {useState} from "react";

import { LoadingSpinnerProps } from "./LoadingSpinner.types";
import * as Styles from "./LoadingSpinner.styles";

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () =>
    <Styles.Spinner />

export default LoadingSpinner;

