import React, { useContext } from 'react';

import { RecyclingInformationProps } from './RecyclingInformation.types';
import * as Styles from './RecyclingInformation.styles';
import { ThemeContext } from 'styled-components';

const RecyclingInformation: React.FunctionComponent<RecyclingInformationProps> = function () {
  const themeContext = useContext(ThemeContext);

  const innerHTML = `
    <c9-recycling-info
        client-id="westnorthants"
        style="--theme-c9- --theme-c9-primary-text-color:${themeContext.theme_vars.colours.black};
         --theme-c9-heading-color: ${themeContext.theme_vars.colours.black};
         --theme-c9-link-color: ${themeContext.theme_vars.colours.action};
         --theme-c9-input-text-color: ${themeContext.theme_vars.colours.black};
         --theme-c9-input-border-color: ${themeContext.theme_vars.colours.black};
         --theme-c9-card-color: ${themeContext.theme_vars.colours.white};
         --theme-c9-card-border-radius: ${themeContext.theme_vars.border_radius};
         --theme-c9-disposal-options-card-color: ${themeContext.theme_vars.colours.grey_light};
         --theme-c9-disposal-options-card-border-radius: ${themeContext.theme_vars.border_radius}"/>`;

  return (
    <Styles.Container data-testid="RecyclingInformation">
      <script src="https://static.cloud9technologies.com/modules/js/recycling-info.js"></script>
      <div dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
    </Styles.Container>
  );
};

export default RecyclingInformation;
