import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import GoogleTranslate from './GoogleTranslate';
import { GoogleTranslateProps } from './GoogleTranslate.types';

describe('Test Component', () => {
  let props: GoogleTranslateProps;

  beforeEach(() => {
    props = {
      pageLanguage: 'en',
      label: 'Translate this page',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <GoogleTranslate {...props} />
      </ThemeProvider>
    );

  it('should render label text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('GoogleTranslate');

    expect(component).toHaveTextContent('Translate this page');
  });

  it('should remove the label when not set', () => {
    props.label = undefined;
    const { getByTestId } = renderComponent();

    const component = getByTestId('GoogleTranslate');

    expect(component).not.toHaveTextContent('Translate this page');
  });
});
