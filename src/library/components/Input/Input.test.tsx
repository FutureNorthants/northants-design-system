import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';
import { InputProps } from './Input.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Input Component', () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      id: 'myInput',
      name: 'testInput',
      placeholder: 'Example placeholder',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Input {...props} />
      </ThemeProvider>
    );

  it('should render the input', () => {
    const { getByRole } = renderComponent();

    const component = getByRole('textbox');

    expect(component).toBeVisible();
    expect(component).toHaveAttribute('name', 'testInput');
    expect(component).toHaveAttribute('placeholder', 'Example placeholder');
    expect(component).toHaveAttribute('id', 'myInput');
  });

  it('should make the input full width', () => {
    props.isFullWidth = true;

    const { getByRole } = renderComponent();

    const component = getByRole('textbox');

    expect(component).toHaveStyle('width: 100%');
  });

  it('should show the error state and error text', () => {
    props.isErrored = true;
    props.errorText = 'An example error message.';

    const { getByRole, getByText } = renderComponent();

    const input = getByRole('textbox');
    const errorMessage = getByText('An example error message.');

    expect(errorMessage).toBeVisible();
    expect(errorMessage).toHaveStyle(`color: ${west_theme.theme_vars.colours.negative};`);

    expect(input).toHaveStyle(`border: solid ${west_theme.theme_vars.colours.negative};`);
  });
});
