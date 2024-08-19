import { Dispatch, SetStateAction } from 'react';
import { AccordionSectionProps } from '../../slices/Accordion/Accordion.types';

export interface EventListProps {
  /**
   * The search filters
   */
  filters: AccordionSectionProps[];

  /**
   * Events that match the search term
   */
  results: EventItemProps[];

  /**
   * The total number of results
   */
  totalResults?: number;

  /**
   * The current page number
   */
  pageNumber?: number;

  /**
   * What the list is sorted by
   */
  sortBy?: string;

  /**
   * Function prop passed in to handle updating sort
   */
  setSortBy?: Dispatch<SetStateAction<string>>;
}

export interface EventItemProps {
  /**
   * A unique identifier for the event
   */
  id: string;

  /**
   * The title of the event
   */
  title: string;

  /**
   * A description of the event
   */
  description: string;

  /**
   * A short summary of the event
   */
  summary?: string;

  /**
   * The date and time the event starts
   */
  startTime: string;

  /**
   * The date and time the event finishes
   */
  endTime: string;

  /**
   * The optional location of the event
   */
  location?: string;

  /**
   * A URL for the event
   */
  url: string;

  /**
   * The optional large image
   */
  imageLarge?: string;

  /**
   * The optional small image
   */
  imageSmall?: string;

  /**
   * The alt text for the image
   */
  imageAltText?: string;

  /**
   * Optional contact email
   */
  email?: string;

  /**
   * Optional website address
   */
  website?: string;

  /**
   * Optional telephone number
   */
  telephone?: string;

  /**
   * Optional address
   */
  address?: string;
}
