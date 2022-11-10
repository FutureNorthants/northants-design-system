import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DirectoryAddToShortList from './DirectoryAddToShortList';
import { DirectoryAddToShortListProps } from './DirectoryAddToShortList.types';
import { ThemeProvider } from 'styled-components';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: DirectoryAddToShortListProps;

  beforeEach(() => {
    props = {
      id: 'abc123',
      name: 'Service Name',
      snippet: 'This is a snippet',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryShortListProvider>
          <DirectoryAddToShortList {...props} />
        </DirectoryShortListProvider>
      </ThemeProvider>
    );

  it('should render the button correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryAddToShortList');

    expect(component).toHaveTextContent('Add to shortlist');
  });

  it('should add to short list', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryAddToShortList');

    fireEvent.click(component);

    expect(component).toHaveTextContent('Remove from shortlist');
  });
});
