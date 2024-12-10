import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import RateThisPage from './RateThisPage';
import { RateThisPageProps } from './RateThisPage.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('RateThisPage Component', () => {
  let props: RateThisPageProps;

  const mockSave = jest.fn();
  window.scrollTo = jest.fn();

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
    const question = getByText('Did you come across any barriers or issues with this webpage?');
    const feedbackMessage = getByText('Your feedback will help us improve our website and the content we include.');

    expect(question).not.toBeVisible();
    expect(feedbackMessage).not.toBeVisible();

    fireEvent.click(isHelpfulNoRadio);

    expect(feedbackMessage).toBeVisible();

    fireEvent.click(getByText('I have feedback about the information on this page'));

    expect(component).toHaveTextContent('Did you come across any barriers or issues with this webpage?');
  });

  it('should not require additional questions when you select yes', async () => {
    const { getByTestId, getByLabelText, getByText } = renderComponent();

    const component = getByTestId('RateThisPage');
    const isHelpfulYesRadio = getByLabelText('Yes');
    const submitButton = getByText('Submit');

    fireEvent.click(isHelpfulYesRadio);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(component).not.toHaveTextContent('There is a problem');
      expect(component).not.toHaveTextContent('The field how easy is it to find what you are looking for is required.');
    });
  });
});
