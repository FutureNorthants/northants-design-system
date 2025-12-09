import { BudgetSliderProps } from '../../components/BudgetSlider/BudgetSlider.types';

export interface BudgetGameProps {
  /**
   * The total budget percentage allowed, e.g. 85
   */
  totalAllowed: number;

  /**
   * An array of Budget Slider props
   */
  budgetServices: BudgetSliderProps[];

  /**
   * Optional function that is triggered when results are submitted
   * For example, trigger a custom event in Google Analytics
   */
  onSubmitResults?: () => void;

  /**
   * Optional function that is triggered when try again is pressed
   */
  onTryAgain?: () => void;
}
