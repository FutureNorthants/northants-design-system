import styled from 'styled-components';

export const SummaryContainer = styled.div`
  border: ${(props) => (props.$hasHeading ? `1px solid ${props.theme.theme_vars.colours.grey}` : `none`)};
  margin: ${(props) => (props.$hasMargin ? props.theme.theme_vars.spacingSizes.medium : 0)} 0;
`;

export const SummaryHeading = styled.div`
  background-color: ${(props) => props.theme.theme_vars.colours.grey_light};
  width: 100%;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};

  h3 {
    margin: 0;
  }
`;

export const SummaryList = styled.dl`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const SummaryRow = styled.div`
  border-bottom: ${(props) => (props.$hasBorders ? `1px solid ${props.theme.theme_vars.colours.grey}` : `none`)};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: table-row;
  }

  @media print {
    display: table-row;
    border-bottom: none;
  }
`;

export const SummaryTerm = styled.dt`
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  font-weight: bold;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: table-cell;
    padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
    width: 30%;
    vertical-align: middle;
  }

  @media print {
    display: table-cell;
    width: 30%;
  }
`;

export const SummaryDetail = styled.dd`
  overflow-wrap: break-word;
  width: 100%;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: table-cell;
    width: 70%;
    padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }

  @media print {
    display: table-cell;
    width: 70%;
  }
`;
