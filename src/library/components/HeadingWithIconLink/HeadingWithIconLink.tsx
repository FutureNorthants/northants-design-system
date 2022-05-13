import React from 'react';
import { HeadingWithIconLinkProps } from './HeadingWithIconLink.types';
import * as Styles from './HeadingWithIconLink.styles';
import DynamicIcon from '../DynamicIcon/DynamicIcon';

const HeadingWithIconLink: React.FunctionComponent<HeadingWithIconLinkProps> = ({ iconKey, link, title }) => (
  <Styles.Link data-testid="HeadingWithIconLink" href={link} title={title}>
    <DynamicIcon icon={iconKey} level={2} />
    <Styles.Title text={title}>{title}</Styles.Title>
  </Styles.Link>
);

export default HeadingWithIconLink;
