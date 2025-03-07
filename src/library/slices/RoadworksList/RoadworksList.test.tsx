import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import RoadworksList from './RoadworksList';
import { RoadworksListProps } from './RoadworksList.types';
import { ExampleRoadwork } from './RoadworksList.storydata';

describe('Test Component', () => {
  let props: RoadworksListProps;

  beforeEach(() => {
    props = {
      roadworks: [ExampleRoadwork],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <RoadworksList {...props} />
      </ThemeProvider>
    );

  it('should render roadwork location text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('RoadworksList');

    expect(component).toHaveTextContent('Western Avenue');
    expect(component).toHaveTextContent('Off peak closure for carriageway repairs.');
    expect(component).toHaveTextContent('Friday 21 March 2025 - all day');
  });

  it('should only show the start date and hours when ending the same day', () => {
    props.roadworks[0].startTime = '2025-03-20T04:00:00+00:00';
    props.roadworks[0].endTime = '2025-03-20T06:00:00+00:00';

    const { getByTestId } = renderComponent();

    const component = getByTestId('RoadworksList');

    expect(component).toHaveTextContent('Thursday 20 March 2025 at 4am to 6am');
  });
});
