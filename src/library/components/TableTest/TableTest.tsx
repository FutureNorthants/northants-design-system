import React from 'react';
import './TableTest.css';
import { TableTestProps, StyledTableRow, StyledTableColumn } from './TableTest.types';
import * as Styles from './TableTest.styles';

const TableTest: React.FunctionComponent<TableTestProps> = (args) => {
  return (
    <>
      <StyledTableRow>
        <StyledTableColumn hasBorder={false}>
          <Styles.StyledTableItem>R1C1</Styles.StyledTableItem>
        </StyledTableColumn>
        <StyledTableColumn>
          <Styles.StyledTableItem>R1C2</Styles.StyledTableItem>
        </StyledTableColumn>
        <StyledTableColumn>
          <Styles.StyledTableItem>R1C3</Styles.StyledTableItem>
        </StyledTableColumn>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableColumn>
          <Styles.StyledTableItem>R2C1</Styles.StyledTableItem>
        </StyledTableColumn>
        <StyledTableColumn>
          <Styles.StyledTableItem>R2C2</Styles.StyledTableItem>
        </StyledTableColumn>
        <StyledTableColumn>
          <Styles.StyledTableItem>R2C3</Styles.StyledTableItem>
        </StyledTableColumn>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableColumn>
          <Styles.StyledTableItem>R3C1</Styles.StyledTableItem>
        </StyledTableColumn>
        <StyledTableColumn>
          <Styles.StyledTableItem>R3C2</Styles.StyledTableItem>
        </StyledTableColumn>
        <StyledTableColumn>
          <Styles.StyledTableItem>R3C3</Styles.StyledTableItem>
        </StyledTableColumn>
      </StyledTableRow>
    </>
  );
};

export default TableTest;
