import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import PromotedServicesTabs from './PromotedServicesTabs';
import { PromotedServicesTabsProps } from './PromotedServicesTabs.types';
import { ExamplePromotedServicesData } from './PromotedServicesTabs.storydata';
import PromotedServicesTabContent from './PromotedServicesTabContent';

describe('Promoted Services Tabs Component', () => {
  let props: PromotedServicesTabsProps;

  beforeEach(() => {
    props = ExamplePromotedServicesData;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PromotedServicesTabs {...props} />
        <PromotedServicesTabContent {...props} />
      </ThemeProvider>
    );

  it('should render tabs correctly', () => {
    const { getByTestId } = renderComponent();

    const tabComponent = getByTestId('PromotedServicesTabs');
    const tabContentComponent = getByTestId('PromotedServicesTabContent');

    expect(tabComponent).toHaveTextContent('Council tax');
    expect(tabContentComponent).toHaveTextContent('Council tax payments');
  });
});
