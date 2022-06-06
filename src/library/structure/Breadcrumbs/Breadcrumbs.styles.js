import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey}80;
  margin-bottom: ${(props) => (props.hasMargin ? props.theme.theme_vars.spacingSizes.large : 0)};
`;

export const List = styled.ol`
  list-style: none;
  padding-left: 0px;
  margin-left: 0;
  margin-top: 0;
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const Crumb = styled.li`
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  display: none;
  left: 0;
  padding-right: 0;

  &:first-of-type,
  &:last-of-type {
    display: inline-block;
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: inline-block;
  }

  &:last-of-type svg {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  margin-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
  vertical-align: middle;
`;

export const BreadcrumbLink = styled.a`
  ${(props) => props.theme.linkStyles}
  font-weight: 400;
  display: inline-block;

  svg {
    fill: ${(props) => props.theme.theme_vars.colours.action};
  }

  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
    svg {
      fill: ${(props) => props.theme.theme_vars.colours.black};
    }
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;
