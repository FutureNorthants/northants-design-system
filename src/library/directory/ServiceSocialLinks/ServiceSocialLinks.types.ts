export interface ServiceSocialLinksProps {
  /**
   * An array of social links
   */
  profiles?: SocialProfile[];
}

export interface SocialProfile {
  /**
   * The id for the social profile
   */
  id: number;

  /**
   * The profile name
   */
  name: string;

  /**
   * The link to the profile
   */
  link: string;

  /**
   * The social network name
   */
  social_network: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube';
}
