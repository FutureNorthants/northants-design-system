import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HeadingWithIconProps } from './HeadingWithIcon.types';
import * as Styles from './HeadingWithIcon.styles';
import Heading from '../Heading/Heading';
import serviceIcons from '../../components/icons/services/ServicesIcons';

/**
 * A Heading With an Icon - used for service landing pages
 */
const HeadingWithIcon: React.FunctionComponent<HeadingWithIconProps> = ({
  level = 2,
  text,
  icon,
  hasHover = false,
}) => {
  const themeContext = useContext(ThemeContext);

  const DynamicComponent = ({ name, isHover = false }) => {
    let DynamicIcon;
    if (name === 'culture') {
      let newName = name + themeContext.cardinal_name;
      DynamicIcon = serviceIcons[newName + (isHover ? 'Hover' : '')];
    } else {
      DynamicIcon = serviceIcons[name + (isHover ? 'Hover' : '')];
    }
    return <DynamicIcon colourFill={themeContext.theme_vars.colours.action_dark} />;
  };

  return (
    <Styles.HeadingWrapper data-testid="HeadingWithIcon" hasHover={hasHover}>
      <Styles.IconWrapper iconSize={level}>
        <Styles.Icon className="service-icon" iconSize={level}>
          <DynamicComponent name={icon} isHover={false} />
        </Styles.Icon>
        <Styles.Icon className="service-icon-hover" iconSize={level}>
          <DynamicComponent name={icon} isHover={true} />
        </Styles.Icon>
      </Styles.IconWrapper>
      <Heading text={text} level={level} />
    </Styles.HeadingWrapper>
  );
};

export default HeadingWithIcon;
