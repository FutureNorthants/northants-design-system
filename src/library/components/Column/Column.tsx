import React from 'react';
import { ColumnProps } from './Column.types';
import * as Styles from './Column.styles';

const Column: React.FunctionComponent<ColumnProps> = ({
  small = 'full',
  medium = 'one-half',
  large = 'one-third',
  hasPadding = true,
  hasBorder = false,
  isList = false,
  classes,
  children,
}) => (
  <Styles.Container
    data-testid="Column"
    small={small}
    medium={medium}
    large={large}
    hasPadding={hasPadding}
    hasBorder={hasBorder}
    as={isList ? 'li' : 'div'}
    className={classes}
  >
    {children}
  </Styles.Container>
);

export default Column;
