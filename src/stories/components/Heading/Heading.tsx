import React from 'react';
import { H1, H2, H3, H4 } from './styles';

export interface HeadingProps {
  /**
   * What level of heading is this?
   */
  level?: number;
  /**
   * WThe text of the title
   */
  text: string;
}

/**
 * A heading of different levels
 */
export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  text,
  ...props
}) => {
  if (level === 1) return <H1 {...props}>{text}</H1> 
  if (level === 2) return <H2 {...props}>{text}</H2> 
  if (level === 3) return <H3 {...props}>{text}</H3> 
  if (level === 4) return <H4 {...props}>{text}</H4> 
  return null
};
