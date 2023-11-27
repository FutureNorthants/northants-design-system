import React from 'react';
import { render } from '@testing-library/react';
import ServiceSocialLinks from './ServiceSocialLinks';
import { ServiceSocialLinksProps } from './ServiceSocialLinks.types';
import { ExampleSocialProfiles } from './ServiceSocialLinks.storydata';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Service Social Links Component', () => {
  let props: ServiceSocialLinksProps;

  beforeEach(() => {
    props = ExampleSocialProfiles;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ServiceSocialLinks {...props} />
      </ThemeProvider>
    );

  it('should render social links component correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ServiceSocialLinks');

    expect(component).toHaveTextContent('WestNorthants');
  });
});
