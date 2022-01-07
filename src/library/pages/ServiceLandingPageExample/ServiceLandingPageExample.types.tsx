import React from 'react';
import { BreadcrumbProp } from '../../structure/Breadcrumbs/Breadcrumbs.types';
import { FooterLinkProp } from '../../structure/Footer/Footer.types';
import { SectionLinksProps } from '../../structure/SectionLinks/SectionLinks.types';
import { ServicesLinksListProps } from '../../structure/ServicesLinksList/ServicesLinksList.types';

export interface ServiceLandingPageExampleProps {
  /**
   * The Service landing page title
   */
  title: string;
  /**
   * Array of breadcrumbs
   */
  breadcrumbsArray: Array<BreadcrumbProp>;
  /**
   * Array of Sections
   */
  sections: SectionLinksProps[];
  /**
   * Array of Footer links
   */
  footerLinksArray: FooterLinkProp[];
  /**
   * Top services to highlight at the top of the page
   */
  topServices?: ServicesLinksListProps;
}
