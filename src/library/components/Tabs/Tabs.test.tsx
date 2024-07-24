import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import Tabs from './Tabs';
import { TabsProps } from './Tabs.types';

describe('Test Component', () => {
  let props: TabsProps;

  beforeEach(() => {
    props = {
      tabs: [
        {
          title: 'All results',
          onClick: () => {},
        },
        {
          title: 'Service results',
          onClick: () => {},
        },
      ],
      activeTab: 0,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Tabs {...props} />
      </ThemeProvider>
    );

  it('should render tab text correctly', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('Tabs');
    const tabButtons = getAllByRole('button');

    expect(component).toHaveTextContent('All results');
    expect(component).toHaveTextContent('Service results');

    expect(tabButtons).toHaveLength(2);
    expect(tabButtons[0]).toHaveTextContent('All results');
    expect(tabButtons[1]).toHaveTextContent('Service results');
  });
});
