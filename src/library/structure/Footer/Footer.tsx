import React from 'react';
import { FooterProps } from './Footer.types';
import * as Styles from './Footer.styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import GDSLogo from '../../components/logos/GDSLogo/logo';
import WestWhite from '../../components/logos/WestWhiteLogo/logo';
import NorthWhite from '../../components/logos/NorthWhiteLogo/logo';
import InstagramIcon from '../../components/icons/InstagramIcon/Icon';
import FacebookIcon from '../../components/icons/FacebookIcon/Icon';
import TwitterIcon from '../../components/icons/TwitterIcon/Icon';
import LinkedInIcon from '../../components/icons/LinkedInIcon/Icon';
import YouTubeIcon from '../../components/icons/YouTubeIcon/Icon';

const Footer: React.FunctionComponent<FooterProps> = ({ footerLinksArray = null, year = new Date().getFullYear() }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Styles.Container>
      <Styles.StyledMaxWidthContainer noBackground>
        <Styles.FooterAlignment>
          <div>
            {footerLinksArray && (
              <Styles.FooterList>
                {footerLinksArray.map((link, i) => (
                  <Styles.FooterListItem key={i}>
                    <Styles.FooterLink key={link.title} href={link.url} title={link.title}>
                      {link.title}
                    </Styles.FooterLink>
                  </Styles.FooterListItem>
                ))}
              </Styles.FooterList>
            )}
            <Styles.SocialLinks>
              {themeContext.theme_vars.twitter_link && (
                <Styles.SocialLinkItem>
                  <Styles.SocialLinkSingle href={themeContext.theme_vars.twitter_link} title="View our Twitter feed">
                    <TwitterIcon colourFill={themeContext.theme_vars.colours.white} />
                  </Styles.SocialLinkSingle>
                </Styles.SocialLinkItem>
              )}
              {themeContext.theme_vars.facebook_link && (
                <Styles.SocialLinkItem>
                  <Styles.SocialLinkSingle href={themeContext.theme_vars.facebook_link} title="View our Facebook page">
                    <FacebookIcon colourFill={themeContext.theme_vars.colours.white} />
                  </Styles.SocialLinkSingle>
                </Styles.SocialLinkItem>
              )}
              {themeContext.theme_vars.instagram_link && (
                <Styles.SocialLinkItem>
                  <Styles.SocialLinkSingle
                    href={themeContext.theme_vars.instagram_link}
                    title="View our Instagram feed"
                  >
                    <InstagramIcon colourFill={themeContext.theme_vars.colours.white} />
                  </Styles.SocialLinkSingle>
                </Styles.SocialLinkItem>
              )}
              {themeContext.theme_vars.youtube_link && (
                <Styles.SocialLinkItem>
                  <Styles.SocialLinkSingle href={themeContext.theme_vars.youtube_link} title="View our YouTube channel">
                    <YouTubeIcon colourFill={themeContext.theme_vars.colours.white} />
                  </Styles.SocialLinkSingle>
                </Styles.SocialLinkItem>
              )}
              {themeContext.theme_vars.linkedin_link && (
                <Styles.SocialLinkItem>
                  <Styles.SocialLinkSingle href={themeContext.theme_vars.linkedin_link} title="View our LinkedIn page">
                    <LinkedInIcon colourFill={themeContext.theme_vars.colours.white} />
                  </Styles.SocialLinkSingle>
                </Styles.SocialLinkItem>
              )}
            </Styles.SocialLinks>
            <Styles.FooterCopy>
              &copy;&nbsp;
              {themeContext.full_name} Council &nbsp;{year}
            </Styles.FooterCopy>
          </div>

          <Styles.LogoWhite
            className={
              themeContext.theme_vars.theme_name === 'Memorial theme North' ||
              themeContext.theme_vars.theme_name === 'Memorial theme West'
                ? 'black_logo'
                : ''
            }
          >
            {themeContext.cardinal_name === 'north' ? (
              <NorthWhite />
            ) : themeContext.cardinal_name === 'west' ? (
              <WestWhite />
            ) : (
              <GDSLogo />
            )}
          </Styles.LogoWhite>
        </Styles.FooterAlignment>
      </Styles.StyledMaxWidthContainer>
    </Styles.Container>
  );
};

export default Footer;
