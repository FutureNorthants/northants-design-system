import React from 'react';
import { render } from '@testing-library/react';
import DirectoryShortList from './DirectoryShortList';
import { DirectoryShortListProps } from './DirectoryShortList.types';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('DirectoryShortList Component', () => {
  let props: DirectoryShortListProps;

  beforeEach(() => {
    props = {
      directoryPath: '/directory',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryShortListProvider>
          <DirectoryShortList {...props} />
        </DirectoryShortListProvider>
      </ThemeProvider>
    );

  it('should render the component correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryShortList');

    expect(component).toHaveTextContent('No items in the shortlist');
  });
});
