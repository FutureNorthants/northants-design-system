export interface FormWithLineProps {
  /**
   * The colour of the line
   */
  lineColour?: string;
  /**
   * An optional boolean to hide the line
   */
  hideLine?: boolean;
  /**
   * The role of the form, defualts to "search"
   */
  formRole?: string;
  /**
   * The method of the form, defualts to "get"
   */
  formMethod?: string;
  /**
   * The url of the form, defualts to ?
   */
  formURL?: string;
  /**
   * An optional boolean to set the form as an error - if true, the lineColour will be replaced with red
   */
  isError?: boolean;
}
