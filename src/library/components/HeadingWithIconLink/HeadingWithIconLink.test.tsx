import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import HeadingWithIconLink from './HeadingWithIconLink';
import { HeadingWithIconLinkProps } from './HeadingWithIconLink.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: HeadingWithIconLinkProps;

  beforeEach(() => {
    props = {
      title: 'Council Tax',
      link: '/my-page-link/',
      iconKey: 'counciltax',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <button>Button text</button>
        <HeadingWithIconLink {...props} />
      </ThemeProvider>
    );

  it('should render link, icon and title text correctly', () => {
    const { getByTestId, getByText } = renderComponent();

    const component = getByTestId('HeadingWithIconLink');
    const text = getByText('Button text');
    const icon = getByTestId('Icon');
    const iconHover = getByTestId('IconHover');

    // Move focus away from the icon
    text.focus();

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('Council Tax');
    expect(component).toHaveAttribute('href', '/my-page-link/');
    expect(component).toHaveAttribute('title', 'Council Tax');

    expect(icon).toBeVisible();
    expect(iconHover).not.toBeVisible();
  });

  it('should render without an icon', () => {
    props.iconKey = null;

    const { getByTestId, queryByTestId } = renderComponent();

    const component = getByTestId('HeadingWithIconLink');
    const icon = queryByTestId('Icon');
    const iconHover = queryByTestId('IconHover');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('Council Tax');

    expect(icon).not.toBeInTheDocument();
    expect(iconHover).not.toBeInTheDocument();
  });
});
