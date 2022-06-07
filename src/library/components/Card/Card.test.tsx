import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { CardProps } from './Card.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      header: 'Example heading',
      content: '<p>Some example content</p>',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Card {...props} />
      </ThemeProvider>
    );

  it('should render header and content text correctly', () => {
    const { getByTestId, getByRole } = renderComponent();

    expect(getByTestId('Card')).toHaveTextContent('Some example content');
    expect(getByRole('heading')).toHaveTextContent('Example heading');
  });

  it('should render without a header', () => {
    props.header = undefined;

    const { getByTestId, queryByRole } = renderComponent();

    expect(getByTestId('Card')).toHaveTextContent('Some example content');
    expect(queryByRole('heading')).toBeNull();
  });

  it('should render the footer link', () => {
    props.footerLink = {
      url: '/test',
      title: 'Example link',
    };

    const { getByRole } = renderComponent();
    const link = getByRole('link');

    expect(link).toHaveTextContent('Example link');
    expect(link).toHaveAttribute('href', '/test');
  });
});
