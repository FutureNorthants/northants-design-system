import React from 'react';
import { render } from '@testing-library/react';

import PromotedLinks from './PromotedLinks';
import { PromotedLinksProps } from './PromotedLinks.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: PromotedLinksProps;

  beforeEach(() => {
    props = {
      promotedLinksArray: [
        {
          title: 'The first link',
          url: '/the-first-url/',
        },
        {
          title: 'The second link',
          url: '/the-second-url/',
        },
      ],
      oneCol: true,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PromotedLinks {...props} />
      </ThemeProvider>
    );

  it('should render the link text correctly', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('PromotedLinks');
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('The first link');
    expect(links.length).toBe(2);
    expect(links[0]).toHaveAttribute('href', '/the-first-url/');
    expect(links[0]).toHaveTextContent('The first link');
    expect(links[1]).toHaveAttribute('href', '/the-second-url/');
    expect(links[1]).toHaveTextContent('The second link');
  });

  it('should render the tabs when has tabs', () => {
    props.hasTabs = true;

    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('PromotedLinks');
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('The first link');
    expect(links.length).toBe(2);
    expect(links[0]).toHaveAttribute('href', '/the-first-url/');
    expect(links[0]).toHaveTextContent('The first link');
    expect(links[1]).toHaveAttribute('href', '/the-second-url/');
    expect(links[1]).toHaveTextContent('The second link');
  });
});
