import React from 'react';
import Textarea from './Textarea';
import { TextareaProps } from './Textarea.types';
import { StoryFn } from '@storybook/react-webpack5';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/Textarea',
  component: Textarea,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<TextareaProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <Textarea {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const Example = Template.bind({});
Example.args = {
  name: 'exampleInput',
  placeholder: 'Enter some text',
  id: 'ExampleTextarea',
};

export const ExampleWithDefaultValue = Template.bind({});
ExampleWithDefaultValue.args = {
  name: 'exampleInput',
  placeholder: 'Enter some text',
  id: 'ExampleTextarea',
  defaultValue: 'Some default text',
};

export const ExampleFullWidth = Template.bind({});
ExampleFullWidth.args = {
  name: 'exampleInput',
  placeholder: 'Enter some text',
  id: 'ExampleTextarea',
  isFullWidth: true,
};

export const ExampleHasError = Template.bind({});
ExampleHasError.args = {
  name: 'exampleInput',
  placeholder: 'Enter some text',
  id: 'ExampleTextarea',
  isErrored: true,
  errorText: 'The field example textarea is required.',
  isFullWidth: true,
};
