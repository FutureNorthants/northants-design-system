import React from 'react';
import { render } from '@testing-library/react';
import RadioCheckboxInput from './RadioCheckboxInput';
import { RadioCheckboxInputProps } from './RadioCheckboxInput.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('RadioCheckboxInput Component', () => {
  let props: RadioCheckboxInputProps;

  beforeEach(() => {
    props = {
      checked: true,
      label: 'Example label',
      name: 'input_name',
      onChange: () => {},
      singleSelection: true,
      value: 'example',
      isErrored: false,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <RadioCheckboxInput {...props} />
      </ThemeProvider>
    );

  it('should render a radio input', () => {
    const { getByTestId, getByLabelText } = renderComponent();

    const component = getByTestId('RadioCheckboxInput');
    const input = getByLabelText('Example label');

    expect(component).toBeVisible();
    expect(input).toHaveAttribute('type', 'radio');
    expect(input).toHaveAttribute('name', 'input_name');
    expect(input).toHaveAttribute('value', 'example');
    expect(input).toBeChecked();
  });

  it('should render a checkbox input', () => {
    props.singleSelection = false;

    const { getByTestId, getByLabelText } = renderComponent();

    const component = getByTestId('RadioCheckboxInput');
    const input = getByLabelText('Example label');

    expect(component).toBeVisible();
    expect(input).toHaveAttribute('type', 'checkbox');
    expect(input).toHaveAttribute('name', 'input_name');
    expect(input).toHaveAttribute('value', 'example');
    expect(input).toBeChecked();
  });

  it('should not be checked', () => {
    props.checked = false;

    const { getByLabelText } = renderComponent();

    const input = getByLabelText('Example label');

    expect(input).not.toBeChecked();
  });

  it('should show the error state', () => {
    props.isErrored = true;

    const { getByTestId } = renderComponent();

    const component = getByTestId('RadioCheckboxInput');

    expect(component).toHaveStyle(
      `border-left: ${west_theme.theme_vars.border_width_error} solid ${west_theme.theme_vars.colours.negative};`
    );
  });
});
