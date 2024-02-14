import React from 'react';
import { HeadingWithIconProps } from './HeadingWithIcon.types';
import * as Styles from './HeadingWithIcon.styles';
import Heading from '../Heading/Heading';
import DynamicIcon from '../DynamicIcon/DynamicIcon';

/**
 * A Heading With an Icon - used for service landing pages
 */
const HeadingWithIcon: React.FunctionComponent<HeadingWithIconProps> = ({
  level = 2,
  text,
  icon,
  hasHover = false,
  subHeading,
}) => (
  <Styles.HeadingWrapper data-testid="HeadingWithIcon" $hasHover={hasHover}>
    <DynamicIcon icon={icon} level={level} />
    <Styles.HeadingContainer>
      <Heading text={text} level={level} />
      {subHeading && <Styles.SubHeading>{subHeading}</Styles.SubHeading>}
    </Styles.HeadingContainer>
  </Styles.HeadingWrapper>
);

export default HeadingWithIcon;
