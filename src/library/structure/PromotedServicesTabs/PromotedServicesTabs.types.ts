import { Dispatch, SetStateAction } from 'react';

export interface PromotedServicesTabsProps {
  /**
   * An array of tabs
   */
  tabs: PromotedServicesTab[];

  /**
   * The active tab
   */
  activeTab?: number;

  /**
   * Optional function prop to update the active tab
   */
  setActiveTab?: Dispatch<SetStateAction<number>>;
}

export interface PromotedServicesTab {
  /**
   * The tab title
   */
  title: string;

  /**
   * URL of the page
   */
  url?: string;

  /**
   * An array of service links
   */
  services: ServiceLink[];
}

export interface ServiceLink {
  /**
   * Title of the page
   */
  title: string;

  /**
   * URL of the page
   */
  url: string;
}
