import React from 'react';
import { render } from '@testing-library/react';
import PromoBlock from './PromoBlock';
import { PromoBlockProps } from './PromoBlock.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { PromoBlocksData } from './PromoBlock.storydata';

describe('Promo Block', () => {
  let props: PromoBlockProps = {
    promos: null,
  };

  beforeEach(() => {
    props.promos = PromoBlocksData.slice(0, 2);
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PromoBlock {...props} />
      </ThemeProvider>
    );

  it('renders the promos', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('PromoBlock');
    const links = getAllByRole('link');
    const images = getAllByRole('img');

    expect(component).toBeVisible();

    // Link inside the storydata content
    expect(links).toHaveLength(3);

    expect(links[0]).toHaveTextContent('Avoid the crowds and follow Go Northamptonshire');
    expect(links[0]).toHaveTextContent('Go Northamptonshire!');

    expect(links[1]).toHaveTextContent('The flu vaccination is available every year');
    expect(links[1]).toHaveTextContent('Flu vaccination');
    expect(links[1]).toHaveTextContent('Jab me man, jab me');

    expect(images).toHaveLength(2);

    expect(images[0]).toHaveAttribute('aria-label', 'Some sort of image');
    expect(images[1]).toHaveAttribute('aria-label', 'A graphical thing');
  });
});
