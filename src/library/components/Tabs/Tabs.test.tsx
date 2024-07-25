import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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
          title: 'First tab',
          content: 'First tab content',
        },
        {
          title: 'Second tab',
          content: 'Second tab content',
        },
      ],
      defaultTab: 0,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Tabs {...props} />
      </ThemeProvider>
    );

  it('should render tab text correctly', () => {
    const { getByTestId, getAllByRole, getByText } = renderComponent();

    const component = getByTestId('Tabs');
    const tabButtons = getAllByRole('button');
    const firstTabText = getByText('First tab content');
    const secondTabText = getByText('Second tab content');

    expect(component).toHaveTextContent('First tab');
    expect(component).toHaveTextContent('Second tab');

    expect(tabButtons).toHaveLength(2);
    expect(tabButtons[0]).toHaveTextContent('First tab');
    expect(tabButtons[1]).toHaveTextContent('Second tab');

    expect(firstTabText).toBeVisible();
    expect(secondTabText).not.toBeVisible();

    fireEvent.click(tabButtons[1]);

    expect(firstTabText).not.toBeVisible();
    expect(secondTabText).toBeVisible();
  });
});
