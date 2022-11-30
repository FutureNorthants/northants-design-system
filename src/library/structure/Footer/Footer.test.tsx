import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { FooterProps } from './Footer.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('Footer component', () => {
  let props: FooterProps;

  beforeEach(() => {
    props = {
      footerLinksArray: [
        {
          title: 'Example link',
          url: '/example',
        },
        {
          title: 'Another example',
          url: '/another-example',
        },
      ],
      year: '2022',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Footer {...props} />
      </ThemeProvider>
    );

  it('should render the footer', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('Footer');
    const links = getAllByRole('link');

    expect(component).toHaveTextContent('West Northamptonshire Council 2022');

    expect(links).toHaveLength(7);
    expect(links[0]).toHaveTextContent('Example link');
    expect(links[0]).toHaveAttribute('href', '/example');
    expect(links[1]).toHaveTextContent('Another example');
    expect(links[1]).toHaveAttribute('href', '/another-example');
  });

  it('should overwrite the year', () => {
    props.year = '2023';

    const { getByTestId } = renderComponent();

    const component = getByTestId('Footer');
    expect(component).toHaveTextContent('West Northamptonshire Council 2023');
  });
});
