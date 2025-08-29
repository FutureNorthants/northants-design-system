import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import DirectoryDocuments from './DirectoryDocuments';
import { DirectoryDocumentsProps } from './DirectoryDocuments.types';
import {
  ExampleDirectoryDocument,
  ExampleDirectoryLink,
} from '../../directory/DirectoryDocumentList/DirectoryDocumentList.storydata';

describe('DirectoryDocuments slice', () => {
  let props: DirectoryDocumentsProps;

  beforeEach(() => {
    props = {
      documents: [ExampleDirectoryDocument, ExampleDirectoryLink],
      setSearch: () => {},
      setPageNumber: () => {},
      isLoading: false,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <DirectoryDocuments {...props} />
      </ThemeProvider>
    );

  it('should render description text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryDocuments');

    expect(component).toHaveTextContent('Search documents');
    expect(component).toHaveTextContent('This is an example document');
    expect(component).toHaveTextContent('This is an example link');
  });

  it('should render custom search label correctly', () => {
    props.searchLabel = 'The custom search label';
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryDocuments');

    expect(component).toHaveTextContent('The custom search label');
    expect(component).not.toHaveTextContent('Search documents');
  });

  it('should show the error message', () => {
    props.isError = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryDocuments');

    expect(component).toHaveTextContent('Sorry, there was a problem fetching results. Please try again later.');
  });

  it('should show no results message when no results', () => {
    props.documents = [];

    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryDocuments');

    expect(component).toHaveTextContent('No results found.');
  });

  it('should show the loading spinner when loading', () => {
    props.isLoading = true;

    const { getByTestId } = renderComponent();

    const component = getByTestId('DirectoryDocuments');

    expect(component).toHaveTextContent('Loading');
  });
});
