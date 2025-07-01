import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: flex;
  }

  .promoted-services-tab-column {
    padding-bottom: 0;
  }
`;

export const TabContentContainer = styled.div`
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    margin-top: 0;
  }
`;

export const TabContentInner = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};

  &:first-of-type {
    border-top: 1px solid ${(props) => props.theme.theme_vars.colours.grey};

    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
      border: none;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    border: none;
  }
`;

export const TabContainer = styled.div`
  background: transparent;
`;

export const Tab = styled.button`
  display: flex;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  background: ${(props) =>
    props.$isActive ? props.theme.theme_vars.colours.action_light : props.theme.theme_vars.colours.white};
  border-radius: ${(props) => `${props.theme.theme_vars.border_radius} ${props.theme.theme_vars.border_radius} 0 0`};
  cursor: pointer;
  text-align: left;
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};

  &:hover {
    ${(props) => props.theme.linkStylesHover};
    background: ${(props) => props.theme.theme_vars.colours.action_light};
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
    background: ${(props) => props.theme.theme_vars.colours.focus};
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
    background: ${(props) => props.theme.theme_vars.colours.action_light};
  }
`;

export const TabMobile = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  background: ${(props) =>
    props.$isActive ? props.theme.theme_vars.colours.action_light : props.theme.theme_vars.colours.white};
  border-radius: 0;
  cursor: pointer;
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};

  &:hover {
    ${(props) => props.theme.linkStylesHover};
    background: ${(props) => props.theme.theme_vars.colours.action_light};
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
    background: ${(props) => props.theme.theme_vars.colours.focus};
    position: relative;
    z-index: 10;
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
    background: ${(props) => props.theme.theme_vars.colours.action_light};
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: none;
  }
`;

export const TabContent = styled.div`
  padding: ${(props) => `${props.theme.theme_vars.spacingSizes.medium} ${props.theme.theme_vars.spacingSizes.small}`};
  background: ${(props) => props.theme.theme_vars.colours.action_light};
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  border-bottom-left-radius: ${(props) => props.theme.theme_vars.border_radius};
  border-bottom-right-radius: ${(props) => props.theme.theme_vars.border_radius};
`;

export const ServiceLink = styled.a`
  display: block;
  height: 100%;
  background: ${(props) => props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border: ${(props) => `${props.theme.theme_vars.border_width_thin} solid ${props.theme.theme_vars.colours.grey}`};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};

  &:hover {
    ${(props) => props.theme.linkStylesHover};
    background: ${(props) => props.theme.theme_vars.colours.grey_light};
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
    background: ${(props) => props.theme.theme_vars.colours.grey_light};
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
    background: ${(props) => props.theme.theme_vars.colours.grey_light};
  }
`;
