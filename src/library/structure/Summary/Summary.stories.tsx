import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Summary from './Summary';
import { SummaryProps } from './Summary.types';
import PageMain from '../../structure/PageMain/PageMain';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'Library/Structure/Summary',
  component: Summary,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    hasPadding: {
      table: {
        category: 'Styles',
      },
    },
    hasBackground: {
      table: {
        category: 'Styles',
      },
    },
  },
};

const Template: Story<SummaryProps> = (args: SummaryProps) => (
  <PageMain>
    <MaxWidthContainer>
      <Summary {...args}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta semper velit. Fusce viverra arcu eu
          leo tincidunt pulvinar.
        </p>
        <p>Ut a porttitor elit, nec sollicitudin leo. Praesent volutpat nulla erat, in dictum lorem elementum porta.</p>
      </Summary>
    </MaxWidthContainer>
  </PageMain>
);

export const ExampleSummary = Template.bind({});
ExampleSummary.args = {
  hasBackground: true,
  hasPadding: true,
};

export const SummaryWithoutBackground = Template.bind({});
SummaryWithoutBackground.args = {
  hasBackground: false,
  hasPadding: true,
};

export const SummaryWithoutPadding = Template.bind({});
SummaryWithoutPadding.args = {
  hasBackground: true,
  hasPadding: false,
};
