import React from 'react';
import { SummaryProps } from './Summary.types';
import * as Styles from './Summary.styles';

const Summary: React.FunctionComponent<SummaryProps> = ({ children, hasBackground = true, hasPadding = true }) => (
  <Styles.Container data-testid="Summary" $hasBackground={hasBackground} $hasPadding={hasPadding}>
    {children}
  </Styles.Container>
);

export default Summary;
