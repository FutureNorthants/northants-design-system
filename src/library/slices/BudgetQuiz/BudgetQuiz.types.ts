import { BudgetSliderProps } from '../../components/BudgetSlider/BudgetSlider.types';

export interface BudgetQuizProps {
  /**
   * The total budget percentage allowed, e.g. 85
   */
  totalAllowed: number;

  /**
   * An array of Budget Slider props
   */
  budgetServices: BudgetSliderProps[];
}
