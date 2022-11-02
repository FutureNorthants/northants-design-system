import styled from 'styled-components';

export const SummaryList = styled.dl`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  margin: ${(props) => (props.hasMargin ? props.theme.theme_vars.spacingSizes.medium : 0)} 0;
`;

export const SummaryRow = styled.div`
  display: table-row;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
`;

export const SummaryTerm = styled.dt`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
`;

export const SummaryDetail = styled.dl`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  display: table-cell;
  overflow-wrap: break-word;
  width: 70%;
`;
