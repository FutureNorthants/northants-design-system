import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-top: ${(props) => (props.$hasTopMargin ? props.theme.theme_vars.spacingSizes.large : 0)};
`;

export const TabsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  box-shadow: inset 0 -1px 0 ${(props) => props.theme.theme_vars.colours.grey};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    flex-direction: row;
    max-width: 100% !important;
  }
`;

export const TabItem = styled.li`
  margin: ${(props) => ` 0 ${props.theme.theme_vars.spacingSizes.small} 0 0 !important`};
  padding: 0;
  position: relative;
  width: 100%;
  left: 0;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: auto;
  }

  &:after {
    content: none;
    position: absolute;
    bottom: 0;
    right: -${(props) => props.theme.theme_vars.spacingSizes.small};
    width: ${(props) => props.theme.theme_vars.spacingSizes.small};
    border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};

    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
      content: '';
    }
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: none;
    }
  }
`;

export const TabButton = styled.button`
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  background-color: ${(props) =>
    props.$isActive ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey_light}80;
  padding: ${(props) => `${props.theme.theme_vars.spacingSizes.medium} ${props.theme.theme_vars.spacingSizes.large}`};
  border: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  border-bottom: 1px solid
    ${(props) => (props.$isActive ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey)};
  border-top-left-radius: ${(props) => props.theme.theme_vars.border_radius};
  border-top-right-radius: ${(props) => props.theme.theme_vars.border_radius};
  cursor: pointer;
  ${(props) => props.theme.linkStyles};
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: auto;
  }

  &:hover {
    background-color: ${(props) => props.theme.theme_vars.colours.white};
    ${(props) => props.theme.linkStylesHover};
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
    border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.focus};
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
    border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.focus};
  }
`;
