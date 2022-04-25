import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ServiceLink = styled.button`
  color: ${(props) => props.theme.theme_vars.colours.action};
  background: ${(props) =>
    props.show ? props.theme.theme_vars.colours.action_light : props.theme.theme_vars.colours.grey_light};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.large}
    ${(props) => props.theme.theme_vars.spacingSizes.medium};
  width: 100%;
  position: relative;
  border: ${(props) => props.theme.theme_vars.border_width} solid
    ${(props) => (props.show ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.grey)};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};
  text-decoration-style: ${(props) => (props.show ? `dashed` : `underline`)};

  &:hover {
    background: ${(props) => props.theme.theme_vars.colours.action_light};
    border: ${(props) => props.theme.theme_vars.border_width} solid ${(props) => props.theme.theme_vars.colours.action};
    text-decoration-style: dashed;
    cursor: pointer;
  }

  h3 {
    color: ${(props) => props.theme.theme_vars.colours.action};
  }

  .serviceLinkChevron {
    position: absolute;
    top: calc(50% - 12px);
    right: 10px;
    width: 34px;
    height: 32px;

    &:before {
      border-style: solid;
      border-width: 4px 4px 0 0;
      content: '';
      display: inline-block;
      height: 12px;
      position: relative;
      vertical-align: top;
      width: 12px;
      border-color: ${(props) => props.theme.theme_vars.colours.black};
      top: ${(props) => (props.show ? `0` : `10px`)};
      left: 6px;
      transform: ${(props) => (props.show ? `rotate(135deg)` : `rotate(-45deg)`)};
    }
  }
`;

export const QuickLinksContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  overflow: hidden;
  top: auto;
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  z-index: 9;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.theme_vars.colours.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
`;

export const QuickLinksInnerContainer = styled.div`
  background: ${(props) => props.theme.theme_vars.colours.action_light};
  border-top: ${(props) => props.theme.theme_vars.border_width} solid
    ${(props) => props.theme.theme_vars.colours.action};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  box-shadow: 0px -4px 0px 0px ${(props) => props.theme.theme_vars.colours.action} inset;
  -webkit-box-shadow: 0px -4px 0px 0px ${(props) => props.theme.theme_vars.colours.action} inset;
  -moz-box-shadow: 0px -4px 0px 0px ${(props) => props.theme.theme_vars.colours.action} inset;
`;

export const QuickLink = styled.a`
  display: block;
  background: ${(props) => props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border: ${(props) => props.theme.theme_vars.border_width} solid ${(props) => props.theme.theme_vars.colours.grey};
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

export const Separator = styled.div`
  margin-bottom: ${(props) => props.margin ?? 0}px;
  padding-bottom: ${(props) => (props.margin ? props.theme.theme_vars.spacingSizes.medium : 0)};
`;
