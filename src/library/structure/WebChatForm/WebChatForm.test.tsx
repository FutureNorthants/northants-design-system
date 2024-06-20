import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import WebChatForm from './WebChatForm';
import { WebChatFormProps } from './WebChatForm.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: WebChatFormProps;

  beforeEach(() => {
    props = {
      action: 'https://www.westnorthants.gov.uk',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <WebChatForm {...props} />
      </ThemeProvider>
    );

  it('should render chat text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('WebChatForm');

    expect(component).toHaveTextContent('Chat');
  });

  it('should show the form when chat is clicked', () => {
    const { getByText, getByLabelText } = renderComponent();

    const chatButton = getByText('Chat');
    const formHeading = getByText('Start a chat');
    const name = getByLabelText('Name');
    const subject = getByLabelText('Subject');

    expect(formHeading).not.toBeVisible();
    expect(name).not.toBeVisible();
    expect(subject).not.toBeVisible();

    fireEvent.click(chatButton);

    expect(formHeading).toBeVisible();
    expect(name).toBeVisible();
    expect(subject).toBeVisible();
  });
});
