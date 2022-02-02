export interface AlertBannerServiceProps {
  /**
   * The optional title of this alert banner
   */
  title?: string;

  /**
   * Set to true for additional margin above the alert banner
   */
  hasTopSpacing?: boolean;

  /**
   * The type of alert banner
   */
  alertType?: 'alert' | 'warning' | 'positive' | 'london_bridge';

  /**
   * All child content for the alert banner
   */
  children: React.ReactNode;
}
