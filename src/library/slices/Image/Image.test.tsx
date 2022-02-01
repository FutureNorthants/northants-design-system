import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';
import { ImageProps } from './Image.types';
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

describe('Image Component', () => {
  let props: ImageProps;

  beforeEach(() => {
    props = {
      imageSmall: 'bar',
      imageLarge: 'bar',
      imageAltText: 'The image alt text',
      ratio: '4by3',
      caption: 'The caption for the image',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Image {...props} />
      </ThemeProvider>
    );
});
