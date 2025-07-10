import React, { Suspense, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RateThisPage from './RateThisPage';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof RateThisPage> = {
  title: 'Library/Structure/Rate This Page',
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

export default meta;
type Story = StoryObj<typeof RateThisPage>;

export const ExampleRateThisPage: Story = {
  args: {
    onSubmit: (data) => alert(JSON.stringify(data)),
    complaintsFormLink: 'https://www.westnorthants.gov.uk/communicating-us/comments-compliments-and-complaints',
  },
  render: (args) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
      <MaxWidthContainer>
        <p>
          <strong>Note:</strong> Submitting the form will display the form data in an alert.
        </p>
        <RateThisPage {...args} isLoading={isLoading} setIsLoading={setIsLoading} />
      </MaxWidthContainer>
    );
  },
};

export const SuccessfulRateThisPage: Story = {
  args: {
    complaintsFormLink: 'https://www.westnorthants.gov.uk/communicating-us/comments-compliments-and-complaints',
  },
  render: (args) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const onSubmit = (data) => {
      setIsSuccess(true);
    };
    return (
      <MaxWidthContainer>
        <p>
          <strong>Note:</strong> Submitting the form will display the success message.
        </p>
        <RateThisPage
          {...args}
          onSubmit={onSubmit}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isSuccessful={isSuccess}
        />
      </MaxWidthContainer>
    );
  },
};

export const ErrorRateThisPage: Story = {
  args: {
    complaintsFormLink: 'https://www.westnorthants.gov.uk/communicating-us/comments-compliments-and-complaints',
  },
  render: (args) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const onSubmit = (data) => {
      setIsError(true);
    };
    return (
      <MaxWidthContainer>
        <p>
          <strong>Note:</strong> Submitting the form will display the error message.
        </p>
        <RateThisPage
          {...args}
          onSubmit={onSubmit}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isError={isError}
        />
      </MaxWidthContainer>
    );
  },
};
