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
    const links = getAllByRole('link');
    const search = getByPlaceholderText('Search');

    expect(component).toBeVisible();

    // Home & All Services links
    expect(links).toHaveLength(2);

    expect(links[0]).toHaveAttribute('href', props.homeLink);
    expect(links[0]).toHaveAttribute('title', 'Home');

    expect(links[1]).toHaveAttribute('href', `${props.allServicesLink}#all-services`);
    expect(links[1]).not.toHaveAttribute('title');

    expect(search).toBeVisible();
  });

  it('should hide all services link', () => {
    props.allServicesLink = null;

    const { getAllByRole, getByTestId } = renderComponent();

    expect(getByTestId('Header')).not.toHaveTextContent('All services');
    expect(getAllByRole('link')).toHaveLength(1);
  });

  it('should hide the search bar', () => {
    props.hideSearchBar = true;

    const { queryByPlaceholderText } = renderComponent();

    expect(queryByPlaceholderText('Search')).toBeNull();
  });
});
