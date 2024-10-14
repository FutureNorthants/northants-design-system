import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import WebChat from './WebChat';
import { WebChatProps } from './WebChat.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('WebChat Slice', () => {
  window.scrollTo = jest.fn();

  let props: WebChatProps;

  beforeEach(() => {
    props = {
      buttonText: 'Open WebChat',
      action: '',
      queues: [
        {
          title: 'Select an option',
          value: '',
        },
        {
          title: 'Council tax',
          value: 'council_tax',
        },
        {
          title: 'Benefits application',
          value: 'benefits',
        },
        {
          title: 'Road and highways faults',
          value: 'highways',
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <WebChat {...props} />
      </ThemeProvider>
    );

  it('should render button text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('WebChat');

    expect(component).toHaveTextContent('Open WebChat');
  });

  it('should render the unavailable message when unavailable', () => {
    props.forceUnavailable = true;
    props.unavailableMessage = 'Sorry, webchat is currently unavailable.';

    const { getByTestId } = renderComponent();

    const component = getByTestId('WebChat');

    expect(component).toHaveTextContent('Sorry, webchat is currently unavailable.');
  });

  it('should validate the required fields', async () => {
    const { getByTestId, getByRole, getByLabelText } = renderComponent();

    const component = getByTestId('WebChat');
    const startButton = getByRole('button', { name: props.buttonText });

    fireEvent.click(startButton);

    expect(component).toHaveTextContent('Subject');

    const submitButton = getByRole('button', { name: 'Connect to webchat (opens in new window)' });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(component).toHaveTextContent('The name field is required.');
      expect(component).toHaveTextContent('The enquiry type field is required.');
      expect(component).toHaveTextContent('The subject field is required.');
    });
  });

  const testData = 'test';
  const fieldLengthDataSet = [
    {
      label: 'Name',
      value: testData.repeat(13),
      errorMessage: 'The name field must not be greater than 50 characters.',
    },
    {
      label: 'Email (optional)',
      value: testData.repeat(26),
      errorMessage: 'The email field must not be greater than 100 characters.',
    },
    {
      label: 'Telephone (optional)',
      value: testData.repeat(6),
      errorMessage: 'The telephone field must not be greater than 20 characters.',
    },
    {
      label: 'Reference (optional)',
      value: testData.repeat(13),
      errorMessage: 'The reference field must not be greater than 50 characters.',
    },
    {
      label: 'Subject',
      value: testData.repeat(26),
      errorMessage: 'The subject field must not be greater than 100 characters.',
    },
  ];

  it.each(fieldLengthDataSet)('should validate the field length', async ({ label, value, errorMessage }) => {
    const { getByTestId, getByRole, getByLabelText } = renderComponent();

    const component = getByTestId('WebChat');
    const startButton = getByRole('button', { name: props.buttonText });

    fireEvent.click(startButton);

    const submitButton = getByRole('button', { name: 'Connect to webchat (opens in new window)' });
    const field = getByLabelText(label);

    fireEvent.input(field, {
      target: {
        value: value,
      },
    });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(component).toHaveTextContent(errorMessage);
    });
  });

  const emailValidationDataSet = ['test', 'test@', 'test@com', 'test@example.', 'test@example.c'];

  it.each(emailValidationDataSet)('should validate the email address', async (emailToTest) => {
    const { getByTestId, getByRole, getByLabelText } = renderComponent();

    const component = getByTestId('WebChat');
    const startButton = getByRole('button', { name: props.buttonText });

    fireEvent.click(startButton);

    const submitButton = getByRole('button', { name: 'Connect to webchat (opens in new window)' });
    const field = getByLabelText('Email (optional)');

    fireEvent.input(field, {
      target: {
        value: emailToTest,
      },
    });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(component).toHaveTextContent('Invalid email address.');
    });
  });
});
