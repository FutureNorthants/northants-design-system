import React from 'react';
import { AlertBannerServiceProps } from './AlertBannerService.types';
import * as Styles from './AlertBannerService.styles';
import Heading from '../../components/Heading/Heading';

/**
 * A banner to be displayed at the top of a page before the main content
 * to draw the viewer's attention to an alert notice
 */
const AlertBannerService: React.FunctionComponent<AlertBannerServiceProps> = ({
  title,
  hasTopSpacing = false,
  alertType = 'alert',
  children,
}) => (
  <Styles.Container $alertType={alertType} data-testid="AlertBannerService" $hasTopSpacing={hasTopSpacing}>
    <Styles.InnerContainer data-testid="AlertBannerServiceInner">
      {title?.trim() && <Heading text={title} />}
      {children}
    </Styles.InnerContainer>
  </Styles.Container>
);

export default AlertBannerService;
