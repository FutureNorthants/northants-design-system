import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import ToggleButtons from './ToggleButtons';
import { ToggleButtonsProps } from './ToggleButtons.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/Toggle Buttons',
  component: ToggleButtons,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<ToggleButtonsProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <ToggleButtons {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleToggleButtons = Template.bind({});
ExampleToggleButtons.args = {
  buttons: [
    {
      label: 'Most used',
      ariaLabel: 'View the list in most used order',
      onClick: () => {},
    },
    {
      label: 'Alphabetical',
      ariaLabel: 'View the list in alphabetical order',
      onClick: () => {},
    },
  ],
};
