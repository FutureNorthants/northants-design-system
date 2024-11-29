import React from 'react';
import { render } from '@testing-library/react';
import InquestSchedule from './InquestSchedule';
import { InquestScheduleProps } from './InquestSchedule.types';
import { ExampleInquestScheduleArray, ExampleInquestScheduleData } from './InquestSchedule.storydata';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: InquestScheduleProps;

  beforeEach(() => {
    props = {
      caseAppointments: [ExampleInquestScheduleData],
      title: 'Upcoming Inquests',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <InquestSchedule {...props} />
      </ThemeProvider>
    );

  it('should render title text correctly', () => {
    props.title = 'Upcoming Inquests';
    const { getByTestId } = renderComponent();

    const component = getByTestId('InquestSchedule');

    expect(component).toHaveTextContent('Upcoming Inquests');
    expect(component).toHaveTextContent('A Name');
    expect(component).toHaveTextContent('100');
    expect(component).toHaveTextContent('A location');
    expect(component).toHaveTextContent('Sunday 1 January 2023');
    expect(component).not.toHaveTextContent('12:08:00');
    expect(component).toHaveTextContent('Coroner Name');
    expect(component).toHaveTextContent('The Guildhall, St. Giles Square, Northampton, NN1 1DE');
    expect(component).toHaveTextContent('Wednesday 1 February 2023');

    expect(component).not.toHaveTextContent('Inquest Openings');
  });

  it('should display the message when no results are returned', () => {
    props.caseAppointments = [];
    const { getByTestId } = renderComponent();

    const component = getByTestId('InquestSchedule');

    expect(component).toHaveTextContent("We can't find any results at the moment.");
  });

  it('should display hearings, openings and in writing when set', () => {
    props.caseAppointments = ExampleInquestScheduleArray;

    const { getByTestId } = renderComponent();

    const component = getByTestId('InquestSchedule');

    expect(component).toHaveTextContent('Upcoming Inquests');
    expect(component).toHaveTextContent('Inquest Openings');
    expect(component).toHaveTextContent('Inquests in Writing');
  });
});
