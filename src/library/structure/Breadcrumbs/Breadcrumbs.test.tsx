import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('Breadcrumbs', () => {
  const props: BreadcrumbsProps = {
    hasMargin: true,
    breadcrumbsArray: [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'Service landing page',
        url: '/service-landing-page',
      },
    ],
  };

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Breadcrumbs {...props} />
      </ThemeProvider>
    );

  const { queryAllByRole, getByTestId } = renderComponent();

  it('should render the breadcrumb links', () => {
    // Include hidden as jest renders mobile first
    const links = queryAllByRole('link', { hidden: true });

    expect(links.length).toBe(2);

    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[0]).toHaveTextContent('Home');

    expect(links[1]).toHaveAttribute('href', '/service-landing-page');
    expect(links[1]).toHaveTextContent('Service landing page');

    expect(getByTestId('Breadcrumbs')).toHaveStyle(`margin-bottom: ${west_theme.theme_vars.spacingSizes.large}`);
  });
});
