import React from 'react';
import serviceIcons from '../library/components/icons/services/ServicesIcons';
import DynamicIcon from '../library/components/DynamicIcon/DynamicIcon';
import Row from '../library/components/Row/Row';
import Column from '../library/components/Column/Column';
import HeadingWithIcon from '../library/components/HeadingWithIcon/HeadingWithIcon';
import Heading from '../library/components/Heading/Heading';
import MaxWidthContainer from '../library/structure/MaxWidthContainer/MaxWidthContainer';
import FacebookIcon from '../library/components/icons/FacebookIcon/Icon';
import InstagramIcon from '../library/components/icons/InstagramIcon/Icon';
import LinkedInIcon from '../library/components/icons/LinkedInIcon/Icon';
import TwitterIcon from '../library/components/icons/TwitterIcon/Icon';
import YouTubeIcon from '../library/components/icons/YouTubeIcon/Icon';
import ChevronIcon from '../library/components/icons/ChevronIcon/ChevronIcon';
import CloseIcon from '../library/components/icons/CloseIcon/CloseIcon';
import DownloadFileIcon from '../library/components/icons/DownloadFileIcon/DownloadFileIcon';
import SearchIcon from '../library/components/icons/SearchIcon/SearchIcon';
import { ThemeContext } from 'styled-components';

export default {
  title: 'Documentation/Iconography',
  component: HeadingWithIcon,
};

export const AllServiceIcons = {
  render: () => (
    <MaxWidthContainer>
      <Row>
        <Column small="full" medium="full" large="full">
          <Heading level={1} text="All Service Icons" />
        </Column>
        {Object.keys(serviceIcons).map((serviceIcon) => (
          <>
            {!serviceIcon.endsWith('Hover') && (
              <Column small="full" medium="full" large="one-half" key={serviceIcon}>
                <HeadingWithIcon level={3} text={serviceIcon} icon={serviceIcon} hasHover={true} />
              </Column>
            )}
          </>
        ))}
      </Row>
    </MaxWidthContainer>
  ),

  name: 'All Service Icons',
};

export const SocialIcons = {
  render: () => (
    <MaxWidthContainer>
      <Row>
        <Column small="full" medium="full" large="full">
          <Heading level={1} text="Social Icons" />
        </Column>
        <Column small="full" medium="full" large="one-half">
          <FacebookIcon colourFill="#000000" />
          Facebook
        </Column>
        <Column small="full" medium="full" large="one-half">
          <InstagramIcon colourFill="#000000" />
          Instagram
        </Column>
        <Column small="full" medium="full" large="one-half">
          <LinkedInIcon colourFill="#000000" />
          LinkedIn
        </Column>
        <Column small="full" medium="full" large="one-half">
          <TwitterIcon colourFill="#000000" />X (Twitter)
        </Column>
        <Column small="full" medium="full" large="one-half">
          <YouTubeIcon colourFill="#000000" />
          YouTube
        </Column>
      </Row>
    </MaxWidthContainer>
  ),

  name: 'Social Icons',
};

export const GeneralIcons = {
  render: () => (
    <MaxWidthContainer>
      <Row>
        <Column small="full" medium="full" large="full">
          <Heading level={1} text="General Icons" />
        </Column>
        <Column small="full" medium="full" large="one-half">
          <ChevronIcon colourFill="#000000" direction="up" />
          Chevron up
        </Column>
        <Column small="full" medium="full" large="one-half">
          <ChevronIcon colourFill="#000000" direction="right" />
          Chevron right
        </Column>
        <Column small="full" medium="full" large="one-half">
          <ChevronIcon colourFill="#000000" direction="down" />
          Chevron down
        </Column>
        <Column small="full" medium="full" large="one-half">
          <ChevronIcon colourFill="#000000" direction="left" />
          Chevron left
        </Column>
        <Column small="full" medium="full" large="one-half">
          <CloseIcon colourFill="#000000" />
          Close
        </Column>
        <Column small="full" medium="full" large="one-half">
          <DownloadFileIcon colourFill="#000000" />
          Download File
        </Column>
        <Column small="full" medium="full" large="one-half">
          <SearchIcon colourFill="#000000" />
          Search
        </Column>
      </Row>
    </MaxWidthContainer>
  ),

  name: 'General Icons',
};
