import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import RecyclingInformation from './RecyclingInformation';
import { RecyclingInformationProps } from './RecyclingInformation.types';

describe('Test Component', () => {
  let props: RecyclingInformationProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <RecyclingInformation {...props} />
      </ThemeProvider>
    );

  /*
  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('RecyclingInformation');

    expect(component).toHaveTextContent('example content');
  });
  */
});
