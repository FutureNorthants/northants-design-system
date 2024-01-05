import React from 'react';
import { Story } from '@storybook/react/types-6-0';
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
};

const Template: Story<RateThisPageProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <p>
          <strong>Note:</strong> Submitting the form will display the form data in an alert.
        </p>
        <RateThisPage {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleRateThisPage = Template.bind({});
ExampleRateThisPage.args = {
  onSubmit: (data) => alert(JSON.stringify(data)),
};
