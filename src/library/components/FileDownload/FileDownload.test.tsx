import React from 'react';
import { render } from '@testing-library/react';
import FileDownload from './FileDownload';
import { FileDownloadProps } from './FileDownload.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('File Download', () => {
  let props: FileDownloadProps;

  beforeEach(() => {
    props = {
      title: 'The file title',
      url: 'https://www.example.com/download.pdf',
      type: 'Adobe Portable Document Format',
      size: '1.5MB',
      archived: false,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <FileDownload {...props} />
      </ThemeProvider>
    );

  it('should render link, icon and title text correctly', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('FileDownload');
    const link = getByRole('link');

    expect(component).toHaveTextContent('The file title');
    expect(component).toHaveTextContent('1.5MB');
    expect(component).toHaveTextContent('PDF');

    expect(link).toHaveAttribute('href', 'https://www.example.com/download.pdf');
    expect(link).toHaveAttribute('rel', '');
  });

  it('should convert file type to Word', () => {
    props.type = 'Microsoft Office - OOXML - Word Document';

    const { getByTestId } = renderComponent();
    const component = getByTestId('FileDownload');

    expect(component).toHaveTextContent('Word Document');
  });

  it('should mark the link as archived', () => {
    props.archived = true;

    const { getByRole } = renderComponent();
    const link = getByRole('link');

    expect(link).toHaveAttribute('rel', 'archived');
  });
});
