import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.large};
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.large};
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey}80;
`;

export const List = styled.ul`
  list-style-type: '-';
  margin: 0 0 0 ${(props) => props.theme.theme_vars.spacingSizes.small} !important;
`;

export const ListItem = styled.li`
  padding-left: ${(props) => props.theme.theme_vars.spacingSizes.small} !important;
  margin-bottom: 0px !important;

  &::marker {
    font-size: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  }

  &::before {
    display: none;
  }
`;

export const Link = styled.a`
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};

  &:hover {
    ${(props) => props.theme.linkStylesHover};
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
  }
`;

export const CurrentPage = styled.span`
  ${(props) => props.theme.fontStyles};
`;
