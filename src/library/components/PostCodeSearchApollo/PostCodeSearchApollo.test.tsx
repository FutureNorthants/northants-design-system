import React from 'react';
import { render } from '@testing-library/react';
import PostCodeSearchApollo from './PostCodeSearchApollo';
import { PostCodeSearchApolloProps } from './PostCodeSearchApollo.types';
import AddressSearchProvider from '../../contexts/AddressSearchProvider/AddressSearchProvider';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: PostCodeSearchApolloProps;

  beforeEach(() => {
    props = {
      title: 'Enter your postcode to find your area',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <AddressSearchProvider>
          <PostCodeSearchApollo {...props} />
        </AddressSearchProvider>
      </ThemeProvider>
    );

  it('should render title text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('PostCodeSearch');

    expect(component).toHaveTextContent('Enter your postcode to find your area');
  });
});
