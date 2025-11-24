import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import ConsultationLink from './ConsultationLink';
import { ConsultationLinkProps } from './ConsultationLink.types';
import { ExampleConsultationListData } from '../../structure/ConsultationList/ConsultationList.storydata';

describe('ConsultationLink component', () => {
  let props: ConsultationLinkProps;

  beforeEach(() => {
    props = ExampleConsultationListData.results[0];
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ConsultationLink {...props} />
      </ThemeProvider>
    );

  it('should render title text correctly', () => {
    props.showSummary = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('ConsultationLink');

    expect(component).toBeVisible();
    expect(component).toHaveAttribute('href', '/1');
    expect(component).toHaveTextContent('Example consultation');
    expect(component).toHaveTextContent('This is an example consultation summary text');
  });

  it('should hide the summary text', () => {
    props.showSummary = false;
    const { getByTestId } = renderComponent();
    const component = getByTestId('ConsultationLink');
    expect(component).not.toHaveTextContent('This is an example consultation summary text');
  });
});
