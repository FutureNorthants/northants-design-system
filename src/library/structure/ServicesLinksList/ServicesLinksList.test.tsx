import React from 'react';
import { render } from '@testing-library/react';
import ServicesLinksList from './ServicesLinksList';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { ServicesLinksListProps } from './ServicesLinksList.types';

const props: ServicesLinksListProps = {
  hideHeader: false,
  serviceLinksArray: [
    {
      title: 'First Title',
      url: 'first-title',
      iconKey: 'bins',
      quickLinksArray: [
        {
          title: 'First Quick Link',
          url: 'first-quick-link',
        },
      ],
    },
  ],
};

describe('Services Links List', () => {
  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ServicesLinksList {...props} />
      </ThemeProvider>
    );
  const { getAllByRole } = renderComponent();

  it('displays the title', () => {
    const links = getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'first-title');
    expect(links[0]).toHaveAttribute('title', 'First Title');
  });
});
