export interface CludoSearchProps {
  /**
   * The optional search term
   */
  searchTerm?: string;

  /**
   * The cludo customer Id
   */
  customerId: number;

  /**
   * The cludo engine Id
   */
  engineId: number;
}
