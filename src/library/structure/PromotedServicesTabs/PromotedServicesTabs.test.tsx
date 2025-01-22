import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import PromotedServicesTabs from './PromotedServicesTabs';
import { PromotedServicesTabsProps } from './PromotedServicesTabs.types';
import { ExamplePromotedServicesData } from './PromotedServicesTabs.storydata';
import PromotedServicesTabContent from './PromotedServicesTabContent';

describe('Promoted Services Tabs Component', () => {
  let props: PromotedServicesTabsProps;

  beforeEach(() => {
    props = {
      activeTab: 0,
      ...ExamplePromotedServicesData,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PromotedServicesTabs {...props} />
        <PromotedServicesTabContent {...props} />
      </ThemeProvider>
    );

  it('should render tabs correctly', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const tabComponent = getByTestId('PromotedServicesTabs');
    const tabContentComponent = getByTestId('PromotedServicesTabContent');
    const allLinks = getAllByRole('link', { hidden: true });
    const visibleLinks = getAllByRole('link');

    expect(tabComponent).toHaveTextContent('Council tax');
    expect(tabContentComponent).toHaveTextContent('Council tax payments');

    expect(allLinks.length).toBe(18);
    expect(visibleLinks.length).toBe(6);
    expect(visibleLinks[0]).toHaveAttribute('href', '/first-service/first-sub-service');
    expect(visibleLinks[0]).toHaveTextContent('Council tax payments');
    expect(visibleLinks[5]).toHaveAttribute('href', '/first-service');
    expect(visibleLinks[5]).toHaveTextContent('All council tax services');
  });
});
