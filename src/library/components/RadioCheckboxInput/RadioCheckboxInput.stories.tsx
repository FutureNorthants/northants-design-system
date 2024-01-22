import React from 'react';
import { StoryFn } from '@storybook/react';
import RadioCheckboxInput from './RadioCheckboxInput';
import { RadioCheckboxInputProps } from './RadioCheckboxInput.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/RadioCheckboxInput',
  component: RadioCheckboxInput,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<RadioCheckboxInputProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <RadioCheckboxInput {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

/**
 * TODO - the component is a controlled react component so story can
 * be updated in future to demo state change
 */

export const ExampleCheckboxInput = Template.bind({});
ExampleCheckboxInput.args = {
  label: 'Example',
  singleSelection: false,
  value: 'example',
  name: 'Example item',
  checked: true,
  onChange: () => {},
};

export const ExampleRadioInput = Template.bind({});
ExampleRadioInput.args = {
  label: 'Example',
  singleSelection: true,
  value: 'example',
  name: 'Example item',
  checked: true,
};
