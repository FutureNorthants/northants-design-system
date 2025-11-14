import { Dispatch, SetStateAction } from 'react';

export interface BudgetSliderProps {
  /**
   * The budget slider title heading text
   */
  title: string;

  /**
   * A line of summary text to describe the slider
   */
  summary?: string;

  /**
   * An optional icon name
   */
  icon?: string;

  /**
   * The minimum percentage allowed
   */
  min: number;

  /**
   * The maximum percentage allowed
   */
  max: number;

  /**
   * The value
   */
  value?: number;

  /**
   * The function prop to set the state of the value
   */
  setValue?: () => void;

  /**
   * Optional array of impacts
   */
  impacts?: ImpactProps[];
}

export interface ImpactProps {
  /**
   * The minimum threshold for the impact
   */
  min: number;

  /**
   * The maximum threshold for the impact
   */
  max: number;

  /**
   * The impact title
   */
  title: 'low' | 'medium' | 'high';

  /**
   * The summary text for the impact
   */
  summary: string;
}
