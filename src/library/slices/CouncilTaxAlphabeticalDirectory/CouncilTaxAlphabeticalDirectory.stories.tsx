import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import CouncilTaxAlphabeticalDirectory from './CouncilTaxAlphabeticalDirectory';
import { MaxWidthContainer, PageMain } from '../../structure/PageStructures';
import { exampleBandings } from './CouncilTaxAlphabeticalDirectory.storydata';

const meta: Meta<typeof CouncilTaxAlphabeticalDirectory> = {
  title: 'Library/Slices/Council Tax Alphabetical Directory',
  component: CouncilTaxAlphabeticalDirectory,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleCouncilTaxAlphabeticalDirectory: Story = {
  args: {
    financialYear: '2022/23',
    parishes: exampleBandings,
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <CouncilTaxAlphabeticalDirectory {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
