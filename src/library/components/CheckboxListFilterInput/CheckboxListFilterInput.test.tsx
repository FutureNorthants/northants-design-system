import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import CheckboxListFilterInput from './CheckboxListFilterInput';
import { CheckboxListFilterInputProps } from './CheckboxListFilterInput.types';

describe('Test Component', () => {
  let props: CheckboxListFilterInputProps;

  beforeEach(() => {});

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <CheckboxListFilterInput {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('CheckboxListFilterInput');

    expect(component).toHaveTextContent('example content');
  });
});
