import React from 'react';

import Row from '../Row/Row';
import { RowProps } from '../Row/Row.types';
import Column from '../Column/Column';
import { ColumnProps } from '../Column/Column.types';

export interface TableTestProps {}

export interface StyledTableRowProps extends RowProps {}
export interface StyledTableColumnProps extends ColumnProps {}

export const StyledTableRow = ({ ...args }: StyledTableRowProps) => {
  return (
    <>
      <Row hasBorder={true} classes={'TableTestRowClass'} {...args} />
    </>
  );
};

export const StyledTableColumn = ({ ...args }: StyledTableColumnProps) => {
  return (
    <>
      <Column hasBorder={true} classes={'TableTestColumnClass'} {...args} />
    </>
  );
};
