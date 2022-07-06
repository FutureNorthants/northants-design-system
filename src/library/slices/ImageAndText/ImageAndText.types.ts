import React from 'react';
import { ImageProps } from '../Image/Image.types';

export interface ImageAndTextProps {
  /**
   * An optional heading
   */
  heading?: string | null;

  /**
   * The string of html text content
   */
  textContent: string;

  /**
   * The image, containing the paths, alt text and caption
   */
  image?: ImageProps | null;
}
