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
    const { getByTestId } = renderComponent();

    const component = getByTestId('ConsultationLink');

    expect(component).toHaveTextContent('Example consultation');
  });
});
