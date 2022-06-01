import React from 'react';
import { render } from '@testing-library/react';
import WarningText from './WarningText';
import { WarningTextProps } from './WarningText.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('WarningText', () => {
  let props: WarningTextProps;

  beforeEach(() => {
    props = {
      title: 'The warning title',
      isWarning: true,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <WarningText {...props}>The warning text body</WarningText>
      </ThemeProvider>
    );

  it('should render the warning text', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('WarningText');

    expect(component).toBeVisible();
    expect(component).toHaveStyle(`background: ${west_theme.theme_vars.colours.focus}80}`);
    expect(component).toHaveTextContent(props.title);
    expect(component).toHaveTextContent('The warning text body');
  });

  it('should not be a warning', () => {
    props.isWarning = false;

    const { getByTestId } = renderComponent();

    expect(getByTestId('WarningText')).toHaveStyle(`background: ${west_theme.theme_vars.colours.secondary}80}`);
  });
});
