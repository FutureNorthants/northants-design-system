import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BackToTop from './BackToTop';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import Header from '../../structure/Header/Header';
import Summary from '../../structure/Summary/Summary';

const meta: Meta<typeof BackToTop> = {
  title: 'Library/Components/BackToTop',
  component: BackToTop,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackToTop>;

export const ExampleBackToTop: Story = {
  args: {
    isActive: true,
  },
  render: (args) => (
    <>
      <Header />
      <MaxWidthContainer>
        <PageMain>
          <Summary>
            <p>Scroll below 300px and the back to top button should display.</p>
          </Summary>
          <ul>
            {[...Array(100)].map((row, rowIndex) => (
              <li key={rowIndex}>List item {rowIndex + 1}</li>
            ))}
          </ul>
          <BackToTop {...args} />
        </PageMain>
      </MaxWidthContainer>
    </>
  ),
};
