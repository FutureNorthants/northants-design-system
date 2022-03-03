export interface AlertBannerProps {
  /**
   * Title of the alert
   */
  title: string;

  /**
   * A unique idenification for the alert banner to store the localstorage for the hide button
   */
  uid: string;

  /**
   * The type of alert
   */
  alertType?: 'alert' | 'warning' | 'positive' | 'london_bridge';

  /**
   * All children content for the banner
   */
  children: React.ReactNode;
}
