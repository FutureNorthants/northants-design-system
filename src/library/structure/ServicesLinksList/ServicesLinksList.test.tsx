import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ServicesLinksList from './ServicesLinksList';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { ServicesLinksListProps } from './ServicesLinksList.types';

describe('Services Links List', () => {
  const props: ServicesLinksListProps = {
    hideHeader: false,
    serviceLinksArray: [
      {
        title: 'First Service',
        url: 'first-service',
        iconKey: 'bins',
        quickLinksArray: [
          {
            title: 'First Quick Link',
            url: 'first-quick-link',
          },
          {
            title: 'Second Quick Link',
            url: 'second-quick-link',
          },
        ],
      },
      {
        title: 'A Second Service',
        url: 'second-service',
        iconKey: 'bins',
        quickLinksArray: [
          {
            title: 'Third Quick Link',
            url: 'first-quick-link',
          },
          {
            title: 'Fourth Quick Link',
            url: 'second-quick-link',
          },
        ],
      },
    ],
  };

  it('displays the header and links', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <ServicesLinksList {...props} />
        </ThemeProvider>
      );
    const { queryAllByRole, getByTestId, getByText } = renderComponent();

    const header = getByTestId('servicesLinksListHeader');
    expect(header).toBeVisible();
    expect(header).toHaveTextContent('Order services by');

    const links = queryAllByRole('link');
    // Quick links display: none on mobile and each service has icon and text link
    expect(links.length).toBe(4);

    expect(links[0]).toHaveAttribute('href', 'first-service');
    expect(links[0]).toHaveAttribute('title', 'First Service');

    const firstQuickLink = getByText('First Quick Link');
    expect(firstQuickLink).toHaveAttribute('href', 'first-quick-link');
    expect(firstQuickLink).toHaveAttribute('title', 'First Quick Link');
  });

  it('should sort the services alphabetically', () => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <ServicesLinksList {...props} />
        </ThemeProvider>
      );
    const { queryAllByRole, getByText } = renderComponent();

    const links = queryAllByRole('link');
    expect(links[0]).toHaveAttribute('title', 'First Service');
    expect(links[2]).toHaveAttribute('title', 'A Second Service');

    fireEvent.click(getByText('Alphabetical'));

    expect(links[0]).toHaveAttribute('title', 'A Second Service');
    expect(links[2]).toHaveAttribute('title', 'First Service');
  });

  it('should hide the header and sort buttons', () => {
    const customProps = { ...props, ...{ hideHeader: true } };
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <ServicesLinksList {...customProps} />
        </ThemeProvider>
      );
    const { queryByText } = renderComponent();

    expect(queryByText('Order services by')).toBeNull();
    expect(queryByText('Most used')).toBeNull();
    expect(queryByText('Alphabetical')).toBeNull();
  });
});
