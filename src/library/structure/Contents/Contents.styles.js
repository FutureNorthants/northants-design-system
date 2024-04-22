import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.large};
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.large};
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey}80;
`;

export const List = styled.ul`
  list-style-type: '-';
`;

export const ListItem = styled.li`
  margin-bottom: 5px !important;

  &::marker {
    font-size: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  }

  &::before {
    display: none;
  }
`;

export const Link = styled.a`
  display: inline-block;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.extra_small} 0;
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};
  margin-left: ${(props) => props.theme.theme_vars.spacingSizes.small};

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
  margin-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;
