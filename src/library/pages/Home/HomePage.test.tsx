import React from 'react';
import { render } from '@testing-library/react';
import { HomePage } from './HomePage';
import { HomePageProps } from './HomePage.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { toHaveNoViolations } from 'jest-axe';
import axe from '../../../../util/axe-helper';
import { ExampleHome } from './HomePage.stories';

expect.extend(toHaveNoViolations);

describe('Home page example', () => {
  let props: HomePageProps = ExampleHome.args;

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <HomePage {...props} />
      </ThemeProvider>
    );

  it('should have no accessibility issues', async () => {
    const { container } = renderComponent();
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
