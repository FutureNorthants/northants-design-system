import React from 'react';

import { TableTest2Props } from './TableTest2.types';
import * as Styles from './TableTest2.styles';

const TableTest2: React.FunctionComponent<TableTest2Props> = ({ foo }) => (
  <Styles.Container data-testid="TableTest2">{foo}</Styles.Container>
);

export default TableTest2;
