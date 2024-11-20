import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import PromoTabsDisplay from './PromoTabsDisplay';
import { PromoTabsDisplayProps } from './PromoTabsDisplay.types';
import { PromoBlocksData } from '../PromoBlock/PromoBlock.storydata';

describe('Test Component', () => {
  let props: PromoTabsDisplayProps;

  beforeEach(() => {
    props = {
      promos: PromoBlocksData,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PromoTabsDisplay {...props} />
      </ThemeProvider>
    );

  it('should render PromoBlock correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('PromoTabsDisplay');

    expect(component).toHaveTextContent('Go Northamptonshire');
  });
});
