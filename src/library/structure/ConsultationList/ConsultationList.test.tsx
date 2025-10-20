import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import ConsultationList from './ConsultationList';
import { ConsultationListProps } from './ConsultationList.types';
import { ExampleConsultationListData } from './ConsultationList.storydata';

describe('Test Component', () => {
  let props: ConsultationListProps;

  beforeEach(() => {
    props = ExampleConsultationListData;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ConsultationList {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ConsultationList');

    expect(component).toHaveTextContent('Example consultation');
  });
});
