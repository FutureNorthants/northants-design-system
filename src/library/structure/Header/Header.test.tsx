import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { HeaderProps } from './Header.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Header', () => {
  let props: HeaderProps;

  beforeEach(() => {
    props = {
      homeLink: '/',
      allServicesLink: '/all-services',
      isHomepage: false,
      hasNewsLink: true,
      hideSearchBar: false,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Header {...props} />
      </ThemeProvider>
    );

  it('should render the header', () => {
    const { getByTestId, getAllByRole, getByPlaceholderText } = renderComponent();
    const component = getByTestId('Header');
    // Include hidden links as they are hidden on mobile by default
    const links = getAllByRole('link', { hidden: true });
    const search = getByPlaceholderText('Search');

    expect(component).toBeVisible();

    // Home & All Services links
    expect(links).toHaveLength(3);

    expect(links[0]).toHaveAttribute('href', props.homeLink);
    expect(links[0]).toHaveAttribute('title', 'Home');

    expect(links[1]).toHaveAttribute('href', '/news');
    expect(links[1]).not.toHaveAttribute('title');

    expect(links[2]).toHaveAttribute('href', `${props.allServicesLink}#all-services`);
    expect(links[2]).not.toHaveAttribute('title');

    expect(search).toBeVisible();
  });

  it('should hide all services link', () => {
    props.allServicesLink = null;

    const { getAllByRole, getByTestId } = renderComponent();

    expect(getByTestId('Header')).not.toHaveTextContent('All services');
    expect(getAllByRole('link', { hidden: true })).toHaveLength(2);
  });

  it('should not have news link', () => {
    props.hasNewsLink = false;

    const { getAllByRole, getByTestId } = renderComponent();

    expect(getByTestId('Header')).not.toHaveTextContent('News');
    expect(getAllByRole('link', { hidden: true })).toHaveLength(2);
  });

  it('should hide the search bar', () => {
    props.hideSearchBar = true;

    const { queryByPlaceholderText } = renderComponent();

    expect(queryByPlaceholderText('Search')).toBeNull();
  });
});
