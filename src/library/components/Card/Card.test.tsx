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

  it('should render the image', () => {
    props.imageLarge = '/img/example-large.jpg';
    props.imageSmall = '/img/example-small.jpg';
    props.imageAltText = 'The image alt text';
    props.header = undefined;
    props.content = undefined;

    const { getByRole } = renderComponent();
    const image = getByRole('img');

    expect(image).toHaveAttribute('src', '/img/example-large.jpg');
    expect(image).toHaveAttribute('alt', 'The image alt text');
  });

  it('should render the image link', () => {
    props.imageLarge = '/img/example-large.jpg';
    props.imageSmall = '/img/example-small.jpg';
    props.imageAltText = 'The image alt text';
    props.footerLink = {
      url: '/test',
      title: 'Example link',
    };

    const { getAllByRole } = renderComponent();
    const links = getAllByRole('link');

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/test');
    expect(links[1]).toHaveTextContent('Example link');
    expect(links[1]).toHaveAttribute('href', '/test');
  });
});
