import { EventLinkProps } from '../EventLink/EventLink.types';

export interface RelatedEventsProps {
  /**
   * The list title
   */
  title: string;

  /**
   * The events to display in the list
   */
  events: EventLinkProps[];
}
