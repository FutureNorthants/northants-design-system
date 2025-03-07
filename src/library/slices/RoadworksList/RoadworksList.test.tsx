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
  });
});
