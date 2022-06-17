import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small}
    ${(props) => props.theme.theme_vars.spacingSizes.large};
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.large};
  background-color: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.grey + '7a'
      : props.theme.theme_vars.colours.grey_light};
  ${(props) => props.theme.fontStyles}
`;

export const AddressContainer = styled.div``;

export const AddressList = styled.dl`
  color: ${(props) => props.theme.theme_vars.colours.black};
  margin: 0;
  margin-bottom: 20px;

  @media (min-width: 40.0625em) {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
`;
export const AddressListRow = styled.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  }

  @media (min-width: 40.0625em) {
    display: table-row;
  }
`;

export const AddressListKey = styled.dt`
  font-weight: bold;
  margin: 0;
  display: table-cell;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin-bottom: 5px;
  font-weight: 700;

  @media (min-width: 40.0625em) {
    width: 30%;
  }
`;

export const AddressListValue = styled.dd`
  margin: 0;
  display: table-cell;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
  }

  @media (min-width: 40.0625em) {
    width: 50%;
  }

  @media (min-width: 40.0625em) {
    &:last-child {
      width: 70%;
    }
  }

  > p {
    margin-bottom: 10px;
  }

  > :last-child {
    margin-bottom: 0;
  }
`;
