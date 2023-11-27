import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import DirectoryDocumentList from './DirectoryDocumentList';
import { DirectoryDocumentListProps } from './DirectoryDocumentList.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import { ExampleDirectoryDocumentListProps } from './DirectoryDocumentList.storydata';

describe('Directory Document List Component', () => {
  let props: DirectoryDocumentListProps;

  beforeEach(() => {
    props = ExampleDirectoryDocumentListProps;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryDocumentList {...props} />
      </ThemeProvider>
    );

  it('should render the directory document list correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryDocumentList');

    expect(component).toBeVisible();
    expect(component).toHaveTextContent('This is an example document');
    expect(component).toHaveTextContent('This is an example link');
    expect(component).toHaveTextContent('Showing 1 to 2 out of 125');
  });

  it('has a link back to the directory with the search term', () => {
    const { getByText, getByLabelText } = renderComponent();

    const directoryLink = getByText('View directory');
    const search = getByLabelText('What are you looking for?');

    expect(directoryLink).toBeVisible();
    expect(directoryLink).toHaveAttribute('href', '/directory/local-offer?search=Example');

    fireEvent.change(search, { target: { value: 'schools' } });
    expect(directoryLink).toHaveAttribute('href', '/directory/local-offer?search=schools');
  });

  it('should display the error message when error occurs', () => {
    props.isError = true;
    props.documents = [];

    const { getByTestId } = renderComponent();
    const component = getByTestId('DirectoryDocumentList');

    expect(component).toHaveTextContent('Sorry, there was a problem fetching results. Please try again later.');
  });
});
