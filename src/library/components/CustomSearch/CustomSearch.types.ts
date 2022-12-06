export interface CustomSearchProps {
  /**
   * Field name for search box
   */
  fieldName: string;

  /**
   * The search box id
   */
  id?: string;

  /**
   * The search box label
   */
  label: string;

  /**
   * Should the label be visible
   */
  hasHiddenLabel?: boolean;

  /**
   * Form submission method
   */
  method: string;

  /**
   * Where to submit the form
   */
  path: string;

  /**
   * Optional placeholder text
   */
  placeholder?: string | null;

  /**
   * The search button text
   */
  searchText: string;
}
