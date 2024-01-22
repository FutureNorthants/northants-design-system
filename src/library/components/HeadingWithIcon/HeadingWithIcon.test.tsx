import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import HeadingWithIcon from './HeadingWithIcon';
import { HeadingWithIconProps } from './HeadingWithIcon.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Heading With Icon', () => {
  let props: HeadingWithIconProps;

  beforeEach(() => {
    props = {
      text: 'Council Tax',
      icon: 'counciltax',
      level: 2,
      hasHover: false,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <button>Button text</button>
        <HeadingWithIcon {...props} />
      </ThemeProvider>
    );

  it('displays the text and service icon', () => {
    const { getByTestId, getByText } = renderComponent();

    const component = getByTestId('HeadingWithIcon');
    const text = getByText('Button text');
    const serviceIcon = component.getElementsByClassName('service-icon')[0];
    const serviceIconHover = component.getElementsByClassName('service-icon-hover')[0];

    expect(component).toHaveTextContent('Council Tax');

    // Move focus away from the icon
    text.focus();

    expect(serviceIcon).toBeInTheDocument();
    expect(serviceIconHover).not.toBeVisible();
  });
});
