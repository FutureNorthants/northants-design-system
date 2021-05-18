export interface AlertBannerServiceProps {
  /**
   * The title of this alert
   */
  title: string;
      /**
   * The type of alert
   */
  alertType?: "alert" | "warning" | "positive" | "london_bridge";  
  /**
  * All children content for the banner
  */
   children: React.ReactNode
}
