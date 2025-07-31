import { BreadcrumbProp } from '../../structure/Breadcrumbs/Breadcrumbs.types';
import { FooterLinkProp } from '../../structure/Footer/Footer.types';
import { HeroImageProps } from '../../structure/HeroImage/HeroImage.types';
import { SectionLinksProps } from '../../structure/SectionLinks/SectionLinks.types';
import { ServicesLinksListProps } from '../../structure/ServicesLinksList/ServicesLinksList.types';
import { AlertBannerServiceProps } from '../../structure/AlertBannerService/AlertBannerService.types';
import { ReactNode } from 'react';

export interface ServiceLandingPageExampleProps {
  /**
   * The Service landing page title
   */
  title: string;

  /**
   * Hero image banner definition
   */
  heroImage?: HeroImageProps;

  /**
   * Body text below service links
   */
  bodyText?: string | ReactNode;

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
   * Top services to highlight below the heading or hero image
   */
  topServices?: ServicesLinksListProps;

  /**
   * Summary text describing the page
   */
  summary?: string;

  /**
   * Should the summary be displayed
   */
  showSummary?: Boolean;

  /**
   * Optional service alert banner
   */
  serviceAlert?: AlertBannerServiceProps;

  /**
   * Optional heading icon
   */
  icon?: string;
}
