import React from 'react';
import { StoryFn } from '@storybook/react';
import RateThisPage from './RateThisPage';
import { RateThisPageProps } from './RateThisPage.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';

export default {
  title: 'Library/Structure/RateThisPage',
  component: RateThisPage,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    onSubmit: {},
    complaintsFormLink: {},
  },
};

const Template: StoryFn<RateThisPageProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <p>
        <strong>Note:</strong> Submitting the form will display the form data in an alert.
      </p>
      <RateThisPage {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleRateThisPage = Template.bind({});
ExampleRateThisPage.args = {
  onSubmit: (data) => alert(JSON.stringify(data)),
  complaintsFormLink:
    'https://northamptonshire-self.achieveservice.com/service/Have_your_say_about_West_Northants_Council',
};
