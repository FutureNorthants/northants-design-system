import React from 'react';
import { render } from '@testing-library/react';
import DirectoryService from './DirectoryService';
import { DirectoryServiceProps } from './DirectoryService.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { ExampleService } from './DirectoryService.storydata';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';

describe('Test Component', () => {
  let props: DirectoryServiceProps;

  beforeEach(() => {
    props = ExampleService;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryShortListProvider>
          <DirectoryService {...props} />
        </DirectoryShortListProvider>
      </ThemeProvider>
    );

  it('should render Service correctly', () => {
    const { getByTestId, getByRole, getByText } = renderComponent();

    const component = getByTestId('DirectoryService');
    const heading = getByRole('heading', { level: 1 });
    const descriptionHeading = getByText('Description');
    const howToContact = getByText('How to contact this service');

    expect(heading).toHaveTextContent('West Northamptonshire Council');
    expect(component).toHaveTextContent(
      'West Northamptonshire Council is the single unitary council responsible for providing a range of public services to residents and businesses'
    );
    expect(component).toHaveTextContent('Ofsted Grade: Good (4 July 2019)');
    expect(component).toHaveTextContent('Contact provider for cost details');
    expect(descriptionHeading).toBeVisible();
    expect(descriptionHeading.tagName).toEqual('H2');
    expect(howToContact).toBeVisible();
  });

  it('should not show the how to contact section if no contact details set', () => {
    props.email = '';
    props.contacts = [];
    props.url = '';

    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryService');

    expect(component).not.toHaveTextContent('How to contact this service');
  });

  it('should sanitize the accreditations and remove tags', () => {
    props.accreditations =
      '<p>This is an accreditation</p><h4>This is a heading</h4><blockquote>This is a block quote</blockquote>';

    const { getByTestId, queryByText } = renderComponent();

    const component = getByTestId('DirectoryService');

    expect(component).toHaveTextContent('This is a heading');
    expect(component).toHaveTextContent('This is a block quote');

    expect(queryByText('This is a heading', { selector: 'h4' })).toBeNull();
    expect(queryByText('This is a block quote', { selector: 'blockquote' })).toBeNull();
  });

  it('should show the map when is_visitable and latitude and longitude is set', () => {
    const { getByText } = renderComponent();

    const addressTitle = getByText('Main office');
    const mapLink = getByText('View in Google Maps');

    expect(addressTitle).toBeVisible();

    expect(mapLink).toBeVisible();
    expect(mapLink).toHaveAttribute(
      'href',
      'https://www.google.com/maps/search/?api=1&query=52.23555414368587%2C-0.8957390701320571'
    );
  });

  it('should not show the map when is_visitable and latitude and longitude is not set', () => {
    const locationWithoutLatLon = { ...ExampleService.service_at_locations[0], ...{ latitude: '', longitude: '' } };
    props.service_at_locations = [locationWithoutLatLon];

    const { queryByText } = renderComponent();

    expect(queryByText('View in Google Maps')).toBeNull();
  });

  it('should show the service address but not the map when not visitable', () => {
    const nonVisitableLocation = { ...ExampleService.service_at_locations[0], ...{ is_visitable: false } };
    props.service_at_locations = [nonVisitableLocation];

    const { getByText, queryByText } = renderComponent();
    const addressTitle = getByText('Main office');

    expect(addressTitle).toBeVisible();

    expect(queryByText('View in Google Maps')).toBeNull();
  });
});
