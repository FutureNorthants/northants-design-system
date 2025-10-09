import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import LinkBlock from './LinkBlock';
import { LinkBlockProps } from './LinkBlock.types';

describe('Test Component', () => {
  let props: LinkBlockProps;

  beforeEach(() => {
    props = {
      title: 'Example title',
      links: [
        {
          title: 'First link',
          url: 'https://example.com',
          summary: 'The summary text for the first link',
        },
        {
          title: 'Second link',
          url: 'https://example.com/second',
          summary: 'The summary text for the second link',
        },
        {
          title: 'Third link',
          url: 'https://example.com/third',
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <LinkBlock {...props} />
      </ThemeProvider>
    );

  it('should render title and links correctly', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('LinkBlock');
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('Example title');

    expect(links.length).toBe(3);
    expect(links[0]).toHaveAttribute('href', 'https://example.com');
    expect(links[0]).toHaveTextContent('First link');
    expect(links[0]).not.toHaveTextContent('The summary text for the first link');
    expect(links[1]).toHaveAttribute('href', 'https://example.com/second');
    expect(links[1]).toHaveTextContent('Second link');
    expect(links[0]).not.toHaveTextContent('The summary text for the second link');
    expect(links[2]).toHaveAttribute('href', 'https://example.com/third');
    expect(links[2]).toHaveTextContent('Third link');

    expect(component).toHaveTextContent('The summary text for the first link');
    expect(component).toHaveTextContent('The summary text for the second link');
  });

  it('should render the image correctly', () => {
    props.imageAltText = 'The alt text for the image';
    props.imageSmall = 'https://picsum.photos/id/1/400/300';
    props.imageLarge = 'https://picsum.photos/id/1/800/600';

    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('LinkBlock');
    const image = getByRole('img');

    expect(component).toBeVisible();

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', 'https://picsum.photos/id/1/800/600');
    expect(image).toHaveAttribute('alt', 'The alt text for the image');
  });
});
