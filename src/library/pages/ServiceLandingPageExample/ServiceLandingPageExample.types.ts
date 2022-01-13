import { BreadcrumbProp } from '../../structure/Breadcrumbs/Breadcrumbs.types';
import { FooterLinkProp } from '../../structure/Footer/Footer.types';
import { HeroImageProps } from '../../structure/HeroImage/HeroImage.types';
import { SectionLinksProps } from '../../structure/SectionLinks/SectionLinks.types';

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
  bodyText?: string;

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
}
