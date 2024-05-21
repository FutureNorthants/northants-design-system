import React from 'react';
import { render } from '@testing-library/react';
import Textarea from './Textarea';
import { TextareaProps } from './Textarea.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Textarea Component', () => {
  let props: TextareaProps;

  beforeEach(() => {
    props = {
      id: 'myTextarea',
      name: 'testTextarea',
      placeholder: 'Example placeholder',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Textarea {...props} />
      </ThemeProvider>
    );

  it('should render the input', () => {
    const { getByRole } = renderComponent();

    const component = getByRole('textbox');

    expect(component).toBeVisible();
    expect(component).toHaveAttribute('name', 'testTextarea');
    expect(component).toHaveAttribute('placeholder', 'Example placeholder');
    expect(component).toHaveAttribute('id', 'myTextarea');
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

    const textarea = getByRole('textbox');
    const errorMessage = getByText('An example error message.');

    expect(errorMessage).toBeVisible();
    expect(errorMessage).toHaveStyle(`color: ${west_theme.theme_vars.colours.negative};`);

    expect(textarea).toHaveStyle(`border: solid ${west_theme.theme_vars.colours.negative};`);
  });
});
