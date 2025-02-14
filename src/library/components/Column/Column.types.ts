export interface ColumnProps {
  /**
   * Available column sizes for small screen
   */
  small?: 'full' | 'one-half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters' | 'auto';

  /**
   * Available column sizes for small screen
   */
  medium?: 'full' | 'one-half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters' | 'auto';

  /**
   * Available column sizes for small screen
   */
  large?: 'full' | 'one-half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters' | 'auto';

  /**
   * Should the column have padding
   */
  hasPadding?: boolean;

  /**
   * Option to display the border
   * Should only used for demonstrating grid
   */
  hasBorder?: boolean;

  /**
   * Is the column within a list
   */
  isList?: boolean;

  /**
   * Any optional classes to add to the column
   */
  classes?: string;

  /**
   * The optional id
   */
  id?: string;

  /**
   * The contents of the column
   */
  children?: React.ReactNode;

  /**
   * The optional role for aria
   */
  role?: string;
}
