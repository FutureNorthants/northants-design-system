import React from 'react';
import { render } from '@testing-library/react';
import { themes, west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';
import PhaseBanner from './PhaseBanner';
import { PhaseBannerProps } from './PhaseBanner.types';
import { HeroImageExampleBoxedData } from '../HeroImage/HeroImage.storydata';

describe('PhaseBanner', () => {
  let props: PhaseBannerProps = {};

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PhaseBanner {...props}>
          <p>Some example content</p>
        </PhaseBanner>
      </ThemeProvider>
    );

  it('should render the content', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('PhaseBanner');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('Some example content');
  });

  it('isHome changes banner colour', () => {
    props.isHome = true;

    const { getByTestId } = renderComponent();
    const component = getByTestId('PhaseBanner');

    expect(component).toHaveStyle(`background: ${west_theme.theme_vars.colours.action}`);
  });

  it('PhaseTitle customises Phase heading', () => {
    props.phaseTitle = 'new feature!';

    const { getByTestId } = renderComponent();
    const component = getByTestId('PhaseBannerHeading');

    expect(component).toHaveTextContent('new feature!');
  });
});
