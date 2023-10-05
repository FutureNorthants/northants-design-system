import React from 'react';
import { render } from '@testing-library/react';
import BackLink from './BackLink';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { BackLinkProps } from './BackLink.types';

describe('Back Link', () => {
  let props: BackLinkProps;

  beforeEach(() => {
    props = {
      link: '/back',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <BackLink {...props} />
      </ThemeProvider>
    );

  it('should render the back link as an anchor tag by default', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('BackLink');

    expect(component).toHaveAttribute('href', '/back');
    expect(component).toHaveTextContent('Back');
  });

  it('should render the back link as a button when useHistory', () => {
    props.useHistory = true;

    const { getByTestId } = renderComponent();

    const component = getByTestId('BackLink');

    expect(component).not.toHaveAttribute('href', '/back');
    expect(component).toHaveTextContent('Back');
  });
});
