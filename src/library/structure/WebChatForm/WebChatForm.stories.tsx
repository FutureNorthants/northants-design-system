import React from 'react';
import { StoryFn } from '@storybook/react';
import WebChatForm from './WebChatForm';
import { WebChatFormProps } from './WebChatForm.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';

export default {
  title: 'Library/Structure/Web Chat Form',
  component: WebChatForm,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<WebChatFormProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <WebChatForm {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleWebChatForm = Template.bind({});
ExampleWebChatForm.args = {
  action: 'https://www.westnorthants.gov.uk',
};

export const ExampleWebChatFormShowByDefault = Template.bind({});
ExampleWebChatFormShowByDefault.args = {
  action: 'https://www.westnorthants.gov.uk',
  show: true,
};
