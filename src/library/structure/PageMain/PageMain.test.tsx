import React from 'react';
import { render } from '@testing-library/react';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';
import PageMain from './PageMain';
import { PageMainProps } from './PageMain.types';

describe('PageMain', () => {
  let props: PageMainProps = {};

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <PageMain {...props}>
          <p>Some example content</p>
          <ul>
            <li>List item</li>
            <li>Another item</li>
          </ul>
        </PageMain>
      </ThemeProvider>
    );

  it('should render the content', () => {
    const { getByTestId, getByText, getByRole } = renderComponent();

    const component = getByTestId('PageMain');
    const sampleText = getByText('Some example content');
    const list = getByRole('list');

    expect(component).toBeVisible();

    expect(sampleText).toBeVisible();
    expect(sampleText).toHaveStyle('max-width: 750px');

    expect(list).toBeVisible();
    expect(list).toHaveStyle('max-width: 750px');
  });

  it('should toggle the width to full width', () => {
    props.fullWidthText = true;

    const { getByText, getByRole } = renderComponent();

    const sampleText = getByText('Some example content');
    const list = getByRole('list');

    expect(sampleText).toBeVisible();
    expect(sampleText).toHaveStyle('max-width: 100%');

    expect(list).toBeVisible();
    expect(list).toHaveStyle('max-width: 100%');
  });

  it('should add the classes', () => {
    props.classes = 'class-one class-two';

    const { getByTestId } = renderComponent();

    const component = getByTestId('PageMain');

    expect(component).toHaveClass('class-one');
    expect(component).toHaveClass('class-two');
  });
});
