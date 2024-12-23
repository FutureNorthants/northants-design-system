import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ErrorSummary from './ErrorSummary';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof ErrorSummary> = {
  title: 'Library/Components/Error Summary',
  component: ErrorSummary,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorSummary>;

export const ExampleErrorSummary: Story = {
  args: {
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
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <ErrorSummary {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
