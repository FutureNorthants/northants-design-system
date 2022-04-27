import React from 'react';
import { render } from '@testing-library/react';
import Contents from './Contents';
import { ContentsProps } from './Contents.types';
import { ContentsArray } from './Contents.storydata';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('Test Component', () => {
  let props: ContentsProps;

  beforeEach(() => {
    props = {
      contents: ContentsArray,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Contents {...props} />
      </ThemeProvider>
    );

  it('should render contents links correctly', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('Contents');
    const listItems = getAllByRole('listitem');
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('Contents');

    expect(listItems.length).toBe(4);
    expect(listItems[0]).toHaveTextContent('First page');
    expect(listItems[1]).toHaveTextContent('Second page');

    expect(links.length).toBe(4);
    expect(links[0]).toHaveAttribute('href', '/first-page');
    expect(links[1]).toHaveAttribute('href', '/second-page');
  });

  it('should display the custom title', () => {
    props.title = 'The custom contents title';

    const { getByTestId } = renderComponent();

    const component = getByTestId('Contents');

    expect(component).toHaveTextContent('The custom contents title');
  });

  it('should display the current path as a span and not a link', () => {
    props.currentPath = '/second-page';

    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('Contents');
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('Second page');

    expect(links.length).toBe(3);
  });
});
