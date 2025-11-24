import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import ConsultationList from './ConsultationList';
import { ConsultationListProps } from './ConsultationList.types';
import { ExampleConsultationListData } from './ConsultationList.storydata';

describe('Consultation List Component', () => {
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

  it('should render the consultations correctly', () => {
    const { getByTestId, getByLabelText } = renderComponent();

    const component = getByTestId('ConsultationList');
    expect(component).toBeVisible();
    expect(component).toHaveTextContent('Example consultation');

    const sortBy = getByLabelText('Sort by');
    expect(sortBy).toBeVisible();
    expect(sortBy).toHaveValue('asc');

    const search = getByLabelText('Search');
    expect(search).toHaveValue('');

    const activityType = getByLabelText('Activity type');
    expect(activityType).toHaveValue('');

    const services = getByLabelText('Services');
    expect(services).toHaveValue('');

    const status = getByLabelText('Open consultations');
    expect(status).not.toBeChecked();
  });

  const filterDataset = [
    {
      field: 'consultationSearch',
      value: 'test',
      label: 'Search',
    },
    {
      field: 'activityType',
      value: 'consultations',
      label: 'Activity type',
    },
    {
      field: 'service',
      value: '1',
      label: 'Services',
    },
    {
      field: 'year',
      value: '2025',
      label: 'Year',
    },
    {
      field: 'month',
      value: '1',
      label: 'Month',
    },
  ];

  it.each(filterDataset)('should set the value $value passed in for field $field', ({ field, value, label }) => {
    props[field] = value;

    const { getByTestId, getByLabelText } = renderComponent();

    const component = getByTestId('ConsultationList');
    expect(component).toBeVisible();

    const input = getByLabelText(label);
    expect(input).toHaveValue(value);
  });

  it('should check the status value passed in', () => {
    props.status = ['open'];

    const { getByTestId, getByLabelText } = renderComponent();

    const component = getByTestId('ConsultationList');
    expect(component).toBeVisible();

    const openCheckbox = getByLabelText('Open consultations');
    expect(openCheckbox).toBeChecked();

    const closedCheckbox = getByLabelText('Closed consultations');
    expect(closedCheckbox).not.toBeChecked();
  });
});
