import React from 'react';
import { RowProps } from './Row.types';
import * as Styles from './Row.styles';

const Row: React.FunctionComponent<RowProps> = ({ hasBorder = false, children }) => (
  <Styles.Container data-testid="Row" hasBorder={hasBorder}>
    {children}
  </Styles.Container>
);

export default Row;
