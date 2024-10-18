import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import PromoTabs from './PromoTabs';
import { PromoTabsProps } from './PromoTabs.types';
import { PromoBlocksData } from '../PromoBlock/PromoBlock.storydata';

describe('PromoTabs Component', () => {
  let props: PromoTabsProps;

  beforeEach(() => {
    props = {
      promos: PromoBlocksData,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PromoTabs {...props} />
      </ThemeProvider>
    );

  it('should render tabs correctly', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('PromoTabs');
    const tabs = getAllByRole('tab');
    const tabPanels = getAllByRole('tabpanel');
    const images = getAllByRole('img');

    expect(component).toHaveTextContent('Go Northamptonshire!');
    expect(component).toHaveTextContent('Avoid the crowds and follow');

    expect(tabs.length).toBe(4);
    expect(tabs[0]).toHaveTextContent('Go Northamptonshire!');

    expect(tabPanels.length).toBe(4);
    expect(tabPanels[0]).toHaveTextContent('Avoid the crowds and follow Go Northamptonshire');

    expect(images.length).toBe(4);
    expect(images[0]).toBeVisible();
  });
});
