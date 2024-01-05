import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import RateThisPage from './RateThisPage';
import { RateThisPageProps } from './RateThisPage.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('RateThisPage Component', () => {
  let props: RateThisPageProps;

  const mockSave = jest.fn();

  beforeEach(() => {
    props = {
      onSubmit: mockSave,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <RateThisPage {...props} />
      </ThemeProvider>
    );

  it('should render the first question correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('RateThisPage');

    expect(component).toHaveTextContent('Is this information helpful?');
  });

  it('should show the additional questions when no is selected for IsHelpful', () => {
    const { getByTestId, getByLabelText } = renderComponent();

    const component = getByTestId('RateThisPage');
    const isHelpfulNoRadio = getByLabelText('No');

    expect(component).not.toHaveTextContent('Please tell us why?');

    fireEvent.click(isHelpfulNoRadio);

    expect(component).toHaveTextContent('Please tell us why?');
  });
});
