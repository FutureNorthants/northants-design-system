import { Dispatch, SetStateAction } from 'react';
import { CheckboxValsProps } from '../../components/CheckboxListFilter/CheckboxListFilter.types';
import { DropDownSelectOptionsProps } from '../../components/DropDownSelect/DropDownSelect.types';

export interface ConsultationListProps {
  /**
   * Consultations that match the search results
   */
  results: ConsultationItemProps[];

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
   * The list of activity types to select from
   */
  activityTypes?: DropDownSelectOptionsProps[];

  /**
   * The selected activity type
   */
  activityType?: string;

  /**
   * Function prop passed in to handle updating activity type
   */
  setActivityType?: Dispatch<SetStateAction<string>>;

  /**
   * What the list is sorted by
   */
  sortBy?: string;

  /**
   * Function prop passed in to handle updating sort
   */
  setSortBy?: Dispatch<SetStateAction<string>>;

  /**
   * The optional search term
   */
  consultationSearch?: string;

  /**
   * Function prop passed in to handle updating the search term
   */
  setConsultationSearch?: Dispatch<SetStateAction<string>>;

  /**
   * The selected service filter
   */
  service?: string;

  /**
   * Function prop passed in to handle updating the service
   */
  setService?: Dispatch<SetStateAction<string>>;

  /**
   * The selected status, defaults to ''
   */
  status?: string;

  /**
   * Function prop passed in to handle updating the status
   */
  setStatus?: Dispatch<SetStateAction<string>>;

  /**
   * The function prop passed in to handle the filters being submitted
   */
  onSubmit?: () => void;

  /**
   * The function prop passed in to handle the clear filters
   */
  clearFilters?: () => void;

  /**
   * The optional path for pagination
   */
  consultationsPagePath?: string;
}

export interface ConsultationItemProps {
  /**
   * A unique identifier for the consultation
   */
  id: string;

  /**
   * The title of the consultation
   */
  title: string;

  /**
   * A description of the consultation
   */
  description?: string;

  /**
   * A short summary of the consultation
   */
  summary?: string;

  /**
   * The start date of the consultation
   */
  openDate: string;

  /**
   * The end date of the consultation
   */
  closeDate: string;

  /**
   * The optional parent service landing page title
   */
  parentTitle?: string | null;

  /**
   * A URL for the consultation
   */
  url: string;

  /**
   * The optional large image
   */
  imageLarge?: string | null;

  /**
   * The optional small image
   */
  imageSmall?: string | null;

  /**
   * The alt text for the image
   */
  imageAltText?: string | null;

  /**
   * The optional survey link
   */
  surveyLink?: string;

  /**
   * The optional contact name
   */
  contact?: string | null;

  /**
   * The optional contact role
   */
  role?: string | null;

  /**
   * The optional contact email
   */
  email?: string | null;
}
