import React, { ReactNode } from 'react';
import { ImageWithCaption } from '../Image/Image.storydata';
import { ImageAndTextProps } from './ImageAndText.types';

const longContent: string = `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet eleifend ante, ut pretium nibh laoreet ac.
    </p>
    <ul>
      <li>Mauris id dui sit amet turpis iaculis placerat.</li>
      <li>Cras venenatis gravida tortor, sit amet mollis velit congue non.</li>
      <li>Aliquam et tincidunt enim. Praesent elit lorem, sollicitudin a purus ac, dictum varius metus.</li>
      <li> Nullam nunc massa, rutrum et aliquam non, laoreet sed ante.</li>
    </ul>
    <p>
      Vestibulum interdum mi et dolor pharetra maximus. In tristique, neque et semper pretium, erat ante dignissim
      magna, in congue dolor diam sit amet elit. Sed sit amet tortor ut urna finibus fermentum id in libero.
    </p>
    <p>
      Duis non elit placerat mauris vulputate semper. Sed aliquet gravida orci, vel vehicula massa imperdiet elementum.
      Praesent eget faucibus sem. Cras efficitur efficitur lorem, eu eleifend odio iaculis non. Suspendisse potenti.
    </p>`;

export const ImageAndTextWithHeading: ImageAndTextProps = {
  heading: 'An example heading',
  textContent: longContent,
  image: ImageWithCaption,
};
