import React from 'react';
import { PanelProps } from './Panel.types';
import * as Styles from './Panel.styles';

/**
 * A panel to show success messages
 */
const Panel: React.FunctionComponent<PanelProps> = ({ heading, children }) => (
  <Styles.Container data-testid="Panel">
    <Styles.Heading>{heading}</Styles.Heading>
    {children && <Styles.Content>{children}</Styles.Content>}
  </Styles.Container>
);

export default Panel;
