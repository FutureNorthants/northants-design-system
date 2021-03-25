import React from "react";

import { AlertBannerServiceProps } from "./AlertBannerService.types";
import * as Styles from "./AlertBannerService.styles";
import Heading from "../../components/Heading/Heading";

/**
 * A container for holding the main content of a page
 */
const AlertBannerService: React.FC<AlertBannerServiceProps> = ({
  title,
  alertType = "alert",
  children
}) => (
  <Styles.Container alertType={alertType}>
    <Heading text={title} />
    {children}
  </Styles.Container>
);

export default AlertBannerService;

