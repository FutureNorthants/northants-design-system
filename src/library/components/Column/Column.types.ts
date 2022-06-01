export interface ColumnProps {
  /**
   * Available column sizes for small screen
   */
  small?: 'full' | 'one-half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters';

  /**
   * Available column sizes for small screen
   */
  medium?: 'full' | 'one-half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters';

  /**
   * Available column sizes for small screen
   */
  large?: 'full' | 'one-half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters';

  /**
   * Should the column have padding
   */
  hasPadding?: boolean;

  /**
   * Option to display the border
   * Should only used for demonstrating grid
   */
  hasBorder?: boolean;
}
