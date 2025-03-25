import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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
      title: 'Current roadworks',
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

  it('should display error message when no roadworks passed in', () => {
    props.roadworks = [];

    const { getByTestId } = renderComponent();

    const component = getByTestId('RoadworksList');

    expect(component).toHaveTextContent(
      "Sorry, we're not able to find any results at the moment. Please try again later."
    );
  });

  it('should display no results message when no matches for search', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('RoadworksList');
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'banbury' } });

    expect(component).toHaveTextContent(
      "We couldn't find any results for your search term. Please try a different search."
    );
  });
});
