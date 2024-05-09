import React from 'react';
import { StoryFn } from '@storybook/react';
import ErrorSummary from './ErrorSummary';
import { ErrorSummaryProps } from './ErrorSummary.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/Error Summary',
  component: ErrorSummary,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<ErrorSummaryProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <ErrorSummary {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleErrorSummary = Template.bind({});
ExampleErrorSummary.args = {
  errors: {
    Email: {
      message: 'Invalid email address.',
      type: 'pattern',
    },
    Name: {
      message: 'The field name is required.',
      type: 'required',
    },
  },
};
