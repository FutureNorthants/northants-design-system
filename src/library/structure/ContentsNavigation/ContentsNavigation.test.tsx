import React from 'react';
import { render } from '@testing-library/react';
import ContentsNavigation from './ContentsNavigation';
import { ContentsProps } from '../Contents/Contents.types';
import { ContentsExampleData } from '../Contents/Contents.storydata';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

/**
 * This test uses ContentsArray story data which has 4 contents links
 */

describe('Contents Navigation', () => {
  let props: ContentsProps;

  beforeEach(() => {
    props = {
      contents: ContentsExampleData,
      currentPath: '/second-page',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ContentsNavigation {...props} />
      </ThemeProvider>
    );

  it('should render Next and Previous links on second page', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('ContentsNavigation');
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('Previous');
    expect(component).toHaveTextContent('Next');

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent('First page');
    expect(links[1]).toHaveTextContent('Third page');
  });

  it('should not render Previous link on first page', () => {
    props.currentPath = '/first-page';

    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('ContentsNavigation');
    const links = getAllByRole('link');

    expect(component).not.toHaveTextContent('Previous');
    expect(component).toHaveTextContent('Next');

    expect(links).toHaveLength(1);
    expect(links[0]).toHaveTextContent('Second page');
  });

  it('should not render Next link on last page', () => {
    props.currentPath = '/fourth-page';

    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('ContentsNavigation');
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('Previous');
    expect(component).not.toHaveTextContent('Next');

    expect(links).toHaveLength(1);
    expect(links[0]).toHaveTextContent('Third page');
  });
});
