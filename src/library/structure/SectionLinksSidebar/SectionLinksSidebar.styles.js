import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.fontStyles}
  background-color: ${(props) => props.theme.theme_vars.colours.action_light};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin-bottom: 25px;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    background-color: transparent;
  }
`;

export const MobileTitleButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  border-bottom: 2px solid ${(props) => props.theme.theme_vars.colours.action};
  padding: ${(props) => `${props.theme.theme_vars.spacingSizes.medium} ${props.theme.theme_vars.spacingSizes.small}`};
  font-size: 1em;

  svg {
    fill: ${(props) => props.theme.theme_vars.colours.action};
    vertical-align: middle;
  }

  &:focus {
    outline: none;
    ${(props) => props.theme.linkStylesFocus}
    border-bottom: 2px solid;
    svg {
      fill: ${(props) => props.theme.theme_vars.colours.black};
    }
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: none;
  }
`;
export const IconWrapper = styled.span`
  display: inline-block;
  margin-left: 10px;
  margin-right: 5px;
  float: right;
`;

export const Title = styled.span`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: block;
    border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.action};
    padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
    font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};

    &:focus {
      outline: none;
    }
  }
`;

export const Body = styled.div`
  &.closed {
    display: none;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    &.closed {
      display: block;
    }
  }
`;

export const SectionTitle = styled.p`
  margin: ${(props) => props.theme.theme_vars.spacingSizes.extra_small} 0;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
`;

const focusListItem = css`
  color: ${(props) => props.theme.theme_vars.colours.black};
  background-color: ${(props) => props.theme.theme_vars.colours.focus};
  outline: none;
  box-shadow: ${(props) => props.theme.theme_vars.colours.focus} 0 0 0 2px,
    ${(props) => props.theme.theme_vars.colours.black} 0 0 0 4px;
`;

export const ListItem = styled.li`
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  left: 0;

  &::before {
    display: none;
    position: relative;
  }

  &[aria-current] a {
    display: none;

    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
      display: block;
      background-color: ${(props) => props.theme.theme_vars.colours.action_light};
      color: ${(props) => props.theme.theme_vars.colours.black};
      border-bottom-color: transparent;

      &:focus {
        ${focusListItem}
      }
    }
  }
`;

export const ListItemLink = styled.a`
  display: block;
  color: ${(props) => props.theme.theme_vars.colours.action};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transition: background-color 0.3s ease 0s;
    background-color: ${(props) => props.theme.theme_vars.colours.action_light}80;
  }

  &:focus {
    ${focusListItem}
  }
  &:active {
    transform: translateY(1px);
    box-shadow: ${(props) => props.theme.theme_vars.colours.focus} 0 0 0 2px,
      ${(props) => props.theme.theme_vars.colours.black} 0 0 0 4px;
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    margin: ${(props) => props.theme.theme_vars.spacingSizes.extra_small} 0;
  }
`;
