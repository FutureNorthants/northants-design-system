import React from 'react';
import { RowProps } from './Row.types';
import * as Styles from './Row.styles';

const Row: React.FunctionComponent<RowProps> = ({
  hasBorder = false,
  isList = false,
  hasWrap = true,
  children,
  classes,
}) => (
  <Styles.Container
    data-testid="Row"
    $hasBorder={hasBorder}
    $hasWrap={hasWrap}
    as={isList ? 'ul' : 'div'}
    className={classes}
  >
    {children}
  </Styles.Container>
);

export default Row;
