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

  it('should render the breadcrumb links', () => {
    const { queryAllByRole, getByTestId } = renderComponent();

    // Include hidden as jest renders mobile first
    const links = queryAllByRole('link', { hidden: true });

    expect(links.length).toBe(2);

    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[0]).toHaveTextContent('Home');

    expect(links[1]).toHaveAttribute('href', '/service-landing-page');
    expect(links[1]).toHaveTextContent('Service landing page');

    expect(getByTestId('Breadcrumbs')).toHaveStyle(`margin-bottom: ${west_theme.theme_vars.spacingSizes.large}`);
  });

  it('should only show the first and last breadcrumb on mobile', () => {
    props.breadcrumbsArray = [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'Service landing page',
        url: '/service-landing-page',
      },
      {
        title: 'Service page',
        url: '/service-landing-page/service-page',
      },
    ];

    const { queryAllByRole } = renderComponent();

    const links = queryAllByRole('link', { hidden: true });

    expect(links.length).toBe(3);

    expect(links[0]).toBeVisible();
    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[0]).toHaveTextContent('Home');

    expect(links[1]).not.toBeVisible();

    expect(links[2]).toBeVisible();
    expect(links[2]).toHaveAttribute('href', '/service-landing-page/service-page');
    expect(links[2]).toHaveTextContent('Service page');
  });

  it('should not be a list when has one breadcrumb', () => {
    props.breadcrumbsArray = [
      {
        title: 'Home',
        url: '/',
      },
    ];

    const { queryByRole } = renderComponent();
    const list = queryByRole('list');
    const listItem = queryByRole('listitem');
    const link = queryByRole('link');

    expect(list).toBeNull();
    expect(listItem).toBeNull();

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveTextContent('Home');
  });
});
