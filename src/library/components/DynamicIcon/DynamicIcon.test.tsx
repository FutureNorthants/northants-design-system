import React from 'react';
import { render } from '@testing-library/react';
import DynamicIcon from './DynamicIcon';
import { DynamicIconProps } from './DynamicIcon.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Dynamic Icon', () => {
  let props: DynamicIconProps;

  beforeEach(() => {
    props = {
      level: 1,
      icon: 'bus',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <button>Some text</button>
        <DynamicIcon {...props} />
      </ThemeProvider>
    );

  it('should render the service icon', () => {
    const { getByTestId, getByText } = renderComponent();

    const text = getByText('Some text');
    const serviceIcon = getByTestId('Icon');
    const serviceIconHover = getByTestId('IconHover');

    // Move focus away from the icon
    text.focus();

    expect(serviceIcon).toBeInTheDocument();
    expect(serviceIcon).toBeVisible();

    expect(serviceIconHover).toBeInTheDocument();
    expect(serviceIconHover).not.toBeVisible();
  });

  it('should be 45px wide when level 2', () => {
    props.level = 2;

    const { getByTestId } = renderComponent();
    const component = getByTestId('DynamicIcon');

    expect(component).toHaveStyle('width: 45px;');
  });

  it('should be 30px wide when level 3', () => {
    props.level = 3;

    const { getByTestId } = renderComponent();
    const component = getByTestId('DynamicIcon');

    expect(component).toHaveStyle('width: 30px;');
  });

  it('should be 20px wide when level 4', () => {
    props.level = 4;

    const { getByTestId } = renderComponent();
    const component = getByTestId('DynamicIcon');

    expect(component).toHaveStyle('width: 20px;');
  });
});
