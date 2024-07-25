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
  box-shadow: inset 1px -1px 1px ${(props) => props.theme.theme_vars.colours.grey};
  background-color: ${(props) => props.theme.theme_vars.colours.white};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    flex-direction: row;
    max-width: 100% !important;
    flex-wrap: nowrap;
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
`;

export const TabButton = styled.button`
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  background-color: ${(props) =>
    props.$isActive ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey_light};
  padding: ${(props) => `${props.theme.theme_vars.spacingSizes.medium} ${props.theme.theme_vars.spacingSizes.large}`};
  border-bottom: 1px solid
    ${(props) => (props.$isActive ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey)};
  border: none;
  box-shadow: 1px -3px 3px ${(props) => props.theme.theme_vars.colours.grey};
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
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
  }
`;

export const TabContent = styled.div`
  display: ${(props) => (props.$isActive ? 'block' : 'none')};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  box-shadow: 1px 2px 3px ${(props) => props.theme.theme_vars.colours.grey};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  border-bottom-left-radius: ${(props) => props.theme.theme_vars.border_radius};
  border-bottom-right-radius: ${(props) => props.theme.theme_vars.border_radius};
`;
