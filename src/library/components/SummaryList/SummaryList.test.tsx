import React from 'react';
import { render } from '@testing-library/react';
import SummaryList from './SummaryList';
import { SummaryListProps } from './SummaryList.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: SummaryListProps;

  beforeEach(() => {
    props = {
      terms: [
        {
          term: 'The term',
          detail: 'The detail',
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <SummaryList {...props} />
      </ThemeProvider>
    );

  it('should render the summary list text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('SummaryList');

    expect(component).toHaveTextContent('The term');
    expect(component).toHaveTextContent('The detail');
  });

  it('should render the heading', () => {
    props.heading = 'Example heading text';

    const { getByRole } = renderComponent();

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent('Example heading text');
  });
});
