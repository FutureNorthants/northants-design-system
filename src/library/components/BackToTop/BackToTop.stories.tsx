import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import BackToTop from './BackToTop';
import { BackToTopProps } from './BackToTop.types';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import Header from '../../structure/Header/Header';
import Summary from '../../structure/Summary/Summary';

export default {
  title: 'Library/Components/BackToTop',
  component: BackToTop,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<BackToTopProps> = (args) => (
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
);

export const ExampleBackToTop = Template.bind({});
ExampleBackToTop.args = {
  isActive: true,
};
