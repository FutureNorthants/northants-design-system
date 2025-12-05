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
  icon?: string | null;

  /**
   * The minimum percentage allowed
   */
  minimum: number;

  /**
   * The maximum percentage allowed
   */
  maximum: number;

  /**
   * The value
   */
  initialValue?: number;

  /**
   * Optional array of impacts
   */
  impacts?: ImpactProps[];

  /**
   * The function passed in that will triggered when the value is updated (for parent component to manage)
   */
  onChange?: (value: number, index: number) => void;

  /**
   * The index number of the service from the parent component
   */
  index?: number;
}

export interface ImpactProps {
  /**
   * The minimum threshold for the impact
   */
  minimum: number;

  /**
   * The maximum threshold for the impact
   */
  maximum: number;

  /**
   * The impact title
   */
  title: 'low' | 'medium' | 'high';

  /**
   * The summary text for the impact
   */
  summary: string;
}
