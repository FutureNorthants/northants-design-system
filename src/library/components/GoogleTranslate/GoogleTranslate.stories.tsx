import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GoogleTranslate from './GoogleTranslate';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import Summary from '../../structure/Summary/Summary';

const meta: Meta<typeof GoogleTranslate> = {
  title: 'Library/Components/Google Translate',
  component: GoogleTranslate,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof GoogleTranslate>;

export const ExampleGoogleTranslate: Story = {
  args: {
    pageLanguage: 'en',
    label: 'Translate this page',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <GoogleTranslate {...args} />
        <Summary>
          <p>This is some sample text to show the translation in action.</p>
        </Summary>
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleGoogleTranslateNoLabel: Story = {
  ...ExampleGoogleTranslate,
  args: {
    pageLanguage: 'fr',
  },
};

export const ExampleGoogleTranslateDarkBackground: Story = {
  args: {
    pageLanguage: 'en',
    label: 'Translate this page',
    hasDarkBackground: true,
  },
  render: (args) => (
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
  ),
};
