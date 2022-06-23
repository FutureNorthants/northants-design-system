import React from 'react';
import { ImageProps } from '../Image/Image.types';

export interface ImageAndTextProps {
  /**
   * An optional heading
   */
  heading?: string;

  /**
   * The html text content
   */
  content: React.ReactNode;

  /**
   * The image, containing the paths, alt text and caption
   */
  image: ImageProps;
}
