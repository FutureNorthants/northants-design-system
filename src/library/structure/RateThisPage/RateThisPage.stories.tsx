import React, { Suspense, useState } from 'react';
import { StoryFn } from '@storybook/react';
import RateThisPage from './RateThisPage';
import { RateThisPageProps } from './RateThisPage.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export default {
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

const Template: StoryFn<RateThisPageProps> = (args) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SBPadding>
      <MaxWidthContainer>
        <p>
          <strong>Note:</strong> Submitting the form will display the form data in an alert.
        </p>
        <RateThisPage {...args} isLoading={isLoading} setIsLoading={setIsLoading} />
      </MaxWidthContainer>
    </SBPadding>
  );
};

export const ExampleRateThisPage = Template.bind({});
ExampleRateThisPage.args = {
  onSubmit: (data) => alert(JSON.stringify(data)),
  complaintsFormLink:
    'https://northamptonshire-self.achieveservice.com/service/Have_your_say_about_West_Northants_Council',
};

const SuccessTemplate: StoryFn<RateThisPageProps> = (args) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit = (data) => {
    setIsSuccess(true);
  };
  return (
    <SBPadding>
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
    </SBPadding>
  );
};

export const SuccessfulRateThisPage = SuccessTemplate.bind({});
SuccessfulRateThisPage.args = {
  complaintsFormLink:
    'https://northamptonshire-self.achieveservice.com/service/Have_your_say_about_West_Northants_Council',
};

const ErrorTemplate: StoryFn<RateThisPageProps> = (args) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const onSubmit = (data) => {
    setIsError(true);
  };
  return (
    <SBPadding>
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
    </SBPadding>
  );
};

export const ErrorRateThisPage = ErrorTemplate.bind({});
ErrorRateThisPage.args = {
  complaintsFormLink:
    'https://northamptonshire-self.achieveservice.com/service/Have_your_say_about_West_Northants_Council',
};
