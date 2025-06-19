import React, { useContext, useEffect } from 'react';
import { RecyclingInformationProps } from './RecyclingInformation.types';
import * as Styles from './RecyclingInformation.styles';
import { ThemeContext } from 'styled-components';

/**
 *  A 'recycling information' search & combo box
 */
const RecyclingInformation: React.FunctionComponent<RecyclingInformationProps> = ({ clientId = 'westnorthants' }) => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.cloud9technologies.com/modules/js/recycling-info.js';
    document.body.appendChild(script);
  });

  const innerHTML = `
    <c9-recycling-info
        data-testid="RecyclingInfoInner"
        client-id=${clientId}
        style="--theme-c9- --theme-c9-primary-text-color:${themeContext.theme_vars.colours.black};
         --theme-c9-heading-color: ${themeContext.theme_vars.colours.black};
         --theme-c9-link-color: ${themeContext.theme_vars.colours.action};
         --theme-c9-input-text-color: ${themeContext.theme_vars.colours.black};
         --theme-c9-input-border-color: ${themeContext.theme_vars.colours.grey};       
         --theme-c9-card-border-radius: ${themeContext.theme_vars.border_radius};
         --theme-c9-disposal-options-card-color: ${themeContext.theme_vars.colours.action_light};
         --theme-c9-disposal-options-card-border-radius: ${themeContext.theme_vars.border_radius};
         --theme-c9-body-font-family: ${themeContext.theme_vars.fontstack};
         --theme-c9-heading-font-family: ${themeContext.theme_vars.fontstack};
         --theme-c9-card-border: 1px solid ${themeContext.theme_vars.colours.grey_light};        
         --theme-c9-card-box-shadow: 2px 2px 5px ${themeContext.theme_vars.colours.grey};
         --theme-c9-item-highlight-color: ${themeContext.theme_vars.colours.action_light};
         --theme-c9-background-color: ${themeContext.theme_vars.colours.white};
         --theme-c9-card-color: ${themeContext.theme_vars.colours.grey_light};
"/>`;

  return (
    <Styles.Container data-testid="RecyclingInformation">
      <div dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
    </Styles.Container>
  );
};

export default RecyclingInformation;
