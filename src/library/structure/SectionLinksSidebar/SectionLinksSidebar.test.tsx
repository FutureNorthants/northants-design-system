import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SectionLinksSidebar from './SectionLinksSidebar';
import { SectionLinksSidebarProps } from './SectionLinksSidebar.types';

import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: SectionLinksSidebarProps = {
    Title: 'Pages in this section',
    Sections: [
      {
        SectionTitle: 'The section title',
        SectionLinks: [
          {
            title: 'An example link',
            url: '/an-example-link',
          },
          {
            title: 'Another example link',
            url: '/another-example-link',
          },
        ],
      },
    ],
  };

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <SectionLinksSidebar {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    const { getByTestId, getAllByRole, getByRole, queryAllByRole } = renderComponent();

    const component = getByTestId('SectionLinksSidebar');

    expect(component).toHaveTextContent('Pages in this section');

    // Links hidden by default on mobile
    expect(queryAllByRole('link')).toHaveLength(0);

    fireEvent.click(getByRole('button'));
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('The section title');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent('An example link');
    expect(links[0]).toHaveAttribute('href', '/an-example-link');
    expect(links[1]).toHaveTextContent('Another example link');
    expect(links[1]).toHaveAttribute('href', '/another-example-link');
  });
});
