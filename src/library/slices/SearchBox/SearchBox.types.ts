export interface SearchBoxProps {
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
  labelHidden?: boolean;

  /**
   * Form submission method
   */
  method: 'get' | 'post';

  /**
   * Where to submit the form
   */
  path: string;

  /**
   * Optional placeholder text
   */
  placeholder?: string;

  /**
   * The search button text
   */
  searchText: string;
}
