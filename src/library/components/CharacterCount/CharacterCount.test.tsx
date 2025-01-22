import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import CharacterCount from './CharacterCount';
import { CharacterCountProps } from './CharacterCount.types';

describe('Character Count Component', () => {
  let props: CharacterCountProps;

  beforeEach(() => {
    props = {
      maxLength: 100,
      input: 'This is a test',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <CharacterCount {...props} />
      </ThemeProvider>
    );

  it('should render the character count correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('CharacterCount');

    expect(component).toHaveTextContent('You have 86 characters remaining.');
  });

  it('should render zero characters remaining when over the limit', () => {
    props.maxLength = 10;
    props.input = 'This is a really long string with too many characters for the limit';

    const { getByTestId } = renderComponent();

    const component = getByTestId('CharacterCount');

    expect(component).toHaveTextContent('You have 0 characters remaining.');
  });
});
