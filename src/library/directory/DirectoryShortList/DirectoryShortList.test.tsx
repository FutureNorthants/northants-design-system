import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import DirectoryShortList from './DirectoryShortList';
import { DirectoryShortListProps } from './DirectoryShortList.types';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('DirectoryShortList Component', () => {
  let props: DirectoryShortListProps;
  let shortlistKey: string = 'DirectoryShort';
  const favourites = [
    {
      id: 'abc1234',
      name: 'Easy Read Documents',
      snippet: "'Easy read' refers to the presentation of text in an accessible, easy-to-understand format.",
      email: 'test@example.com',
      website: 'https://www.example.com',
    },
  ];

  beforeEach(() => {
    props = {
      directoryPath: '/directory',
    };
    window.localStorage.setItem('DirectoryShort', JSON.stringify(favourites));
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryShortListProvider shortlistKey={shortlistKey}>
          <DirectoryShortList {...props} />
        </DirectoryShortListProvider>
      </ThemeProvider>
    );

  it('displays a favourite in the shortlist', () => {
    expect(window.localStorage.getItem('DirectoryShort')).toBe(JSON.stringify(favourites));

    const { getByTestId } = renderComponent();
    const component = getByTestId('DirectoryShortList');

    expect(component).toHaveTextContent('Easy Read Documents');
    expect(component).toHaveTextContent('test@example.com');
    expect(component).toHaveTextContent('https://www.example.com');
    expect(component).toHaveTextContent(
      "'Easy read' refers to the presentation of text in an accessible, easy-to-understand format."
    );
    expect(component).not.toHaveTextContent('No items in the shortlist');
  });

  it('should not display another directories favourites in the shortlist', () => {
    shortlistKey = 'FamilyInformationService';

    const { getByTestId } = renderComponent();
    const component = getByTestId('DirectoryShortList');

    expect(component).toHaveTextContent('No items in the shortlist');
    expect(component).not.toHaveTextContent('Easy Read Documents');
  });

  it('should clear the shortlist', async () => {
    // Force confirm 'OK' to be pressed
    window.confirm = jest.fn(() => true);
    shortlistKey = 'DirectoryShort';
    const { getByTestId, getByRole } = renderComponent();
    const component = getByTestId('DirectoryShortList');
    const clearButton = getByRole('button', { name: 'Clear Shortlist' });

    expect(component).toHaveTextContent('Easy Read Documents');

    fireEvent.click(clearButton);

    expect(window.confirm).toHaveBeenCalled();
    expect(component).not.toHaveTextContent('Easy Read Documents');
  });

  it('should not clear the shortlist when pressing cancel', async () => {
    // Force confirm 'Cancel' to be pressed
    window.confirm = jest.fn(() => false);
    shortlistKey = 'DirectoryShort';
    const { getByTestId, getByRole } = renderComponent();
    const component = getByTestId('DirectoryShortList');
    const clearButton = getByRole('button', { name: 'Clear Shortlist' });

    expect(component).toHaveTextContent('Easy Read Documents');

    fireEvent.click(clearButton);

    expect(window.confirm).toHaveBeenCalled();
    expect(component).toHaveTextContent('Easy Read Documents');
  });
});
