import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import GoogleTranslate from './GoogleTranslate';
import { GoogleTranslateProps } from './GoogleTranslate.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import Summary from '../../structure/Summary/Summary';

export default {
  title: 'Library/Components/Google Translate',
  component: GoogleTranslate,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<GoogleTranslateProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <GoogleTranslate {...args} />
        <Summary>
          <p>This is some sample text to show the translation in action.</p>
        </Summary>
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleGoogleTranslate = Template.bind({});
ExampleGoogleTranslate.args = {
  pageLanguage: 'en',
  label: 'Translate this page',
};

export const ExampleGoogleTranslateNoLabel = Template.bind({});
ExampleGoogleTranslateNoLabel.args = {
  pageLanguage: 'fr',
};

const DarkBackgroundTemplate: StoryFn<GoogleTranslateProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <div style={{ backgroundColor: 'black', padding: '10px' }}>
          <GoogleTranslate {...args} />
        </div>
        <Summary>
          <p>This is some sample text to show the translation in action.</p>
        </Summary>
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleGoogleTranslateDarkBackground = DarkBackgroundTemplate.bind({});
ExampleGoogleTranslateDarkBackground.args = {
  pageLanguage: 'en',
  label: 'Translate this page',
  hasDarkBackground: true,
};
