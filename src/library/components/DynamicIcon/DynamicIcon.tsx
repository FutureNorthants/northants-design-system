import React, { useContext } from 'react';
import { DynamicIconProps } from './DynamicIcon.types';
import * as Styles from './DynamicIcon.styles';
import serviceIcons from '../../components/icons/services/ServicesIcons';
import { ThemeContext } from 'styled-components';

/**
 * Display a dynamic service icon with hover effect
 */
const DynamicIcon: React.FunctionComponent<DynamicIconProps> = ({ level, icon }) => {
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
    <Styles.IconWrapper iconSize={level} data-testid="DynamicIcon">
      {icon && (
        <>
          <Styles.Icon className="service-icon" iconSize={level} data-testid="Icon">
            <DynamicComponent name={icon} isHover={false} />
          </Styles.Icon>
          <Styles.Icon className="service-icon-hover" iconSize={level} data-testid="IconHover">
            <DynamicComponent name={icon} isHover={true} />
          </Styles.Icon>
        </>
      )}
    </Styles.IconWrapper>
  );
};

export default DynamicIcon;
