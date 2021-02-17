export interface PageWithSidebarContainerProps {
  /**
   * Rare occassions trhe sidebar is on the left
   */
  sidebarLeft?: boolean
  /**
   * All children content within the page
   */
  children: React.ReactNode
}
