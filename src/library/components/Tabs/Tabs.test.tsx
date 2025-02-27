import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import Tabs from './Tabs';
import { TabsProps } from './Tabs.types';

describe('Test Component', () => {
  let props: TabsProps;

  /*
  8beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
*/
  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Tabs {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    // props.foo = 'example content';
    const { getByTestId } = renderComponent();

    const component = getByTestId('Tabs');

    expect(component).toHaveTextContent('example content');
  });
});
