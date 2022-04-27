import React from 'react';
import { render } from '@testing-library/react';
import ContentsNavigation from './ContentsNavigation';
import { ContentsProps } from '../Contents/Contents.types';
import { ContentsArray } from '../Contents/Contents.storydata';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('Test Component', () => {
  let props: ContentsProps;

  beforeEach(() => {
    props = {
      contents: ContentsArray,
      currentPath: '/second-page',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ContentsNavigation {...props} />
      </ThemeProvider>
    );

  it('should render Next and Previous links', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ContentsNavigation');

    expect(component).toHaveTextContent('Previous');
    expect(component).toHaveTextContent('Next');
  });
});
