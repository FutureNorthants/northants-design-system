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
  initialValue?: number;

  /**
   * Optional array of impacts
   */
  impacts?: ImpactProps[];

  onChange?: (value: number, index: number) => void;

  index?: number;
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
