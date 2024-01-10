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
      complaintsFormLink:
        'https://northamptonshire-self.achieveservice.com/service/Have_your_say_about_West_Northants_Council',
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

  it('should show the additional question when no is selected for IsHelpful', () => {
    const { getByTestId, getByLabelText, getByText } = renderComponent();

    const component = getByTestId('RateThisPage');
    const isHelpfulNoRadio = getByLabelText('No');

    expect(component).not.toHaveTextContent('Please tell us why?');

    fireEvent.click(isHelpfulNoRadio);

    expect(component).toHaveTextContent('Your feedback will help us improve our website, for example');

    fireEvent.click(getByText('I have feedback about the information on this page'));

    expect(component).toHaveTextContent('Please tell us why?');
  });
});
