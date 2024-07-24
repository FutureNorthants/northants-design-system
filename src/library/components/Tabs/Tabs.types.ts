export interface TabsProps {
  /**
   * An array of tabs
   */
  tabs: TabProp[];

  /**
   * The optional active tab index. Defaults to 0
   */
  activeTab?: number;

  /**
   * The optional top margin
   */
  hasTopMargin?: boolean;
}

export interface TabProp {
  title: string;
  onClick: () => void;
  // isActive: boolean;
}
