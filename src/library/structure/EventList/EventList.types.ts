import { Dispatch, SetStateAction } from 'react';
import { DropDownSelectOptionsProps } from '../../components/DropDownSelect/DropDownSelect.types';

export interface EventListProps {
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
   * The list of services to select from
   */
  services: DropDownSelectOptionsProps[];

  /**
   * What the list is sorted by
   */
  sortBy?: string;

  /**
   * Function prop passed in to handle updating sort
   */
  setSortBy?: Dispatch<SetStateAction<string>>;

  /**
   * The event search term
   */
  eventSearch?: string;

  /**
   * Function prop passed in to handle updating event search
   */
  setEventSearch?: Dispatch<SetStateAction<string>>;

  /**
   * The selected service filter
   */
  service?: string;

  /**
   * Function prop passed in to handle updating the service
   */
  setService?: Dispatch<SetStateAction<string>>;

  /**
   * The selected start date filter
   */
  startDate?: string;

  /**
   * Function prop passed in to handle updating the start date
   */
  setStartDate?: Dispatch<SetStateAction<string>>;

  /**
   * The selected end date
   */
  endDate?: string;

  /**
   * Function prop passed in to handle updating the end date
   */
  setEndDate?: Dispatch<SetStateAction<string>>;

  onSubmit?: () => void;
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
