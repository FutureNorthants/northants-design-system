import React from 'react';
import { Story } from '@storybook/react/types-6-0';
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

const Template: Story<RadioCheckboxInputProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <RadioCheckboxInput {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

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
