import React from 'react';
import { render } from '@testing-library/react';
import CheckboxListFilter from './CheckboxListFilter';
import { CheckboxListFilterProps } from './CheckboxListFilter.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('CheckboxListFilter', () => {
  let props: CheckboxListFilterProps;

  beforeEach(() => {
    props = {
      options: [
        {
          title: 'Article',
          value: 'article',
        },
        {
          title: 'Press Release',
          value: 'press-release',
        },
      ],
      checked: [],
      label: null,
      hint: null,
      displayLegend: false,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <CheckboxListFilter {...props} />
      </ThemeProvider>
    );

  it('renders the component', () => {
    const { getByTestId, getAllByRole } = renderComponent();

    const component = getByTestId('CheckboxListFilter');
    const checkboxes = getAllByRole('checkbox');
    const legend = getByTestId('CheckboxListFilterLegend');
    const hint = getByTestId('CheckboxListFilterHint');

    expect(component).toBeVisible();

    expect(checkboxes).toHaveLength(2);
    expect(checkboxes[0]).toHaveAttribute('value', 'article');
    expect(checkboxes[0]).not.toBeChecked();

    expect(checkboxes[1]).toHaveAttribute('value', 'press-release');
    expect(checkboxes[1]).not.toBeChecked();

    // Legend should be Visually Hidden
    expect(legend).toHaveStyle('width: 1px;');
    expect(legend).toHaveStyle('height: 1px;');

    // Hint should be Visually Hidden
    expect(hint).toHaveStyle('width: 1px;');
    expect(hint).toHaveStyle('height: 1px;');
  });

  it('hides the ledgend when label is set', () => {
    props.label = 'The legend label';
    props.displayLegend = false;

    const { getByTestId } = renderComponent();
    const legend = getByTestId('CheckboxListFilterLegend');

    // Legend should be Visually Hidden
    expect(legend).toHaveStyle('width: 1px;');
    expect(legend).toHaveStyle('height: 1px;');
  });

  it('checks the checked checkbox', () => {
    props.checked = ['article'];

    const { getAllByRole } = renderComponent();

    const checkboxes = getAllByRole('checkbox');

    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes[1]).not.toBeChecked();
  });

  it('displays the legend', () => {
    props.label = 'The legend label';
    props.displayLegend = true;

    const { getByText } = renderComponent();

    const legend = getByText('The legend label');

    expect(legend).not.toHaveStyle('width: 1px;');
    expect(legend).not.toHaveStyle('height: 1px;');
    expect(legend).toHaveStyle('display: table;');
  });

  it('displays the hint text', () => {
    props.hint = 'The hint text';
    props.hintId = 'my-custom-hint-id';

    const { getByText } = renderComponent();

    const hintText = getByText('The hint text');

    expect(hintText).toBeVisible();
    expect(hintText).toHaveStyle('display: block;');
    expect(hintText).toHaveAttribute('id', 'my-custom-hint-id');
  });
});
