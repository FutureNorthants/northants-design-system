import React from 'react';
import { render } from '@testing-library/react';
import WebChat from './WebChat';
import { WebChatProps } from './WebChat.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('WebChat Slice', () => {
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

  it('should render foo text correctly', () => {
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
});
