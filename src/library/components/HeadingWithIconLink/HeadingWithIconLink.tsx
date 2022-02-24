import React, { useContext } from 'react';
import { HeadingWithIconLinkProps } from './HeadingWithIconLink.types';
import { ThemeContext } from 'styled-components';
import serviceIcons from '../icons/services/ServicesIcons';
import * as Styles from './HeadingWithIconLink.styles';

const HeadingWithIconLink: React.FunctionComponent<HeadingWithIconLinkProps> = ({ iconKey, link, title }) => {
  const themeContext = useContext(ThemeContext);

  const DynamicComponent = ({ name, isHover = false }) => {
    let DynamicIcon;
    if (name === 'culture') {
      let newName = name + themeContext.cardinal_name;
      DynamicIcon = serviceIcons[newName + (isHover ? 'Hover' : '')];
    } else {
      DynamicIcon = serviceIcons[name + (isHover ? 'Hover' : '')];
    }
    return (
      <Styles.IconInner
        className={isHover ? 'service-icon-hover' : 'service-icon'}
        data-testid={isHover ? 'IconHover' : 'Icon'}
      >
        <DynamicIcon colourFill={themeContext.theme_vars.colours.action} />
      </Styles.IconInner>
    );
  };

  return (
    <Styles.Link data-testid="HeadingWithIconLink" href={link} title={title}>
      <Styles.IconContainer>
        {iconKey && (
          <>
            <DynamicComponent name={iconKey} isHover={false} />
            <DynamicComponent name={iconKey} isHover={true} />
          </>
        )}
      </Styles.IconContainer>
      <Styles.Title text={title}>{title}</Styles.Title>
    </Styles.Link>
  );
};

export default HeadingWithIconLink;
