import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import CouncilTaxAlphabeticalDirectory from './CouncilTaxAlphabeticalDirectory';
import { CouncilTaxAlphabeticalDirectoryProps } from './CouncilTaxAlphabeticalDirectory.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { MaxWidthContainer, PageMain } from '../../structure/PageStructures';

export default {
  title: 'Library/Prototypes/Council Tax Alphabetical Directory',
  component: CouncilTaxAlphabeticalDirectory,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<CouncilTaxAlphabeticalDirectoryProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <CouncilTaxAlphabeticalDirectory {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleCouncilTaxAlphabeticalDirectory = Template.bind({});
ExampleCouncilTaxAlphabeticalDirectory.args = {};
