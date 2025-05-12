import React from 'react';

import { RecyclingInformationProps } from './RecyclingInformation.types';
import * as Styles from './RecyclingInformation.styles';

const RecyclingInformation: React.FunctionComponent<RecyclingInformationProps> = function () {
  const innerHTML = `
    <c9-recycling-info
        client-id="westnorthants"
        style="--theme-c9- --theme-c9-primary-text-color:#000000; --theme-c9-heading-color: #000000; --theme-c9-link-color: #385889; --theme-c9-input-text-color: #000000; --theme-c9-input-border-color: #000000; --theme-c9-card-color: #ffffff; --theme-c9-card-border-radius: 3px; --theme-c9-disposal-options-card-color: #f5f5f5; --theme-c9-disposal-options-card-border-radius: 3px"/>`;

  return (
    <Styles.Container data-testid="RecyclingInformation">
      <script src="https://static.cloud9technologies.com/modules/js/recycling-info.js"></script>
      <div dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
    </Styles.Container>
  );
};

export default RecyclingInformation;
