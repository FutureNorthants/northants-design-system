import React, { useContext } from 'react';
import { ServiceSocialLinksProps, SocialProfile } from './ServiceSocialLinks.types';
import * as Styles from './ServiceSocialLinks.styles';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';
import FacebookIcon from '../../components/icons/FacebookIcon/Icon';
import InstagramIcon from '../../components/icons/InstagramIcon/Icon';
import LinkedInIcon from '../../components/icons/LinkedInIcon/Icon';
import TwitterIcon from '../../components/icons/TwitterIcon/Icon';
import YouTubeIcon from '../../components/icons/YouTubeIcon/Icon';
import { ThemeContext } from 'styled-components';
import { GeneratedTheme } from '../../../themes/ThemeVars.types';

const ServiceSocialLinks: React.FunctionComponent<ServiceSocialLinksProps> = ({ profiles }) => (
  <Styles.Container data-testid="ServiceSocialLinks">
    <Row>
      {profiles?.map((profile) => (
        <Column key={profile.id} small="full" medium="one-half" large="one-third" classes="striped-socials">
          <Styles.IconContainer>{getIcon(profile)}</Styles.IconContainer>
          <Styles.Content>
            <Styles.WebLink href={profile.link}>{profile.name}</Styles.WebLink>
          </Styles.Content>
        </Column>
      ))}
    </Row>
  </Styles.Container>
);

const getIcon = (profile: SocialProfile) => {
  const themeContext = useContext(ThemeContext) as GeneratedTheme;
  switch (profile.social_network) {
    case 'facebook':
      return <FacebookIcon colourFill={themeContext.theme_vars.colours.black} />;
    case 'instagram':
      return <InstagramIcon colourFill={themeContext.theme_vars.colours.black} />;
    case 'linkedin':
      return <LinkedInIcon colourFill={themeContext.theme_vars.colours.black} />;
    case 'twitter':
      return <TwitterIcon colourFill={themeContext.theme_vars.colours.black} />;
    case 'youtube':
      return <YouTubeIcon colourFill={themeContext.theme_vars.colours.black} />;
  }
};

export default ServiceSocialLinks;
