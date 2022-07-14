import React from 'react';
import { render } from '@testing-library/react';
import { ContentPage, ContentPageProps } from './ContentPage';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { toHaveNoViolations } from 'jest-axe';
import axe from '../../../../util/axe-helper';

expect.extend(toHaveNoViolations);

describe('Content page example', () => {
  let props: ContentPageProps;

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ContentPage {...props} />
      </ThemeProvider>
    );

  it('should have no accessibility issues', async () => {
    const { container } = renderComponent();
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
