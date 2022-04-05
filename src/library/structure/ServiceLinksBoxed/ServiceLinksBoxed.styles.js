import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ServiceLink = styled.button`
  background: ${(props) =>
    props.show ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.grey_light}50;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.large}
    ${(props) => props.theme.theme_vars.spacingSizes.medium};
  width: 100%;
  position: relative;
  border: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  border-radius: 3px;
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};
  text-decoration-style: ${(props) => (props.show ? `dashed` : `underline`)};

  &:hover {
    background: ${(props) => props.theme.theme_vars.colours.action}50;
    border: 1px solid ${(props) => props.theme.theme_vars.colours.action};
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
  margin-top: 20px;
  z-index: 9;
  left: 0;
  right: 0;

  background: ${(props) => props.theme.theme_vars.colours.white};
`;

export const QuickLinksInnerContainer = styled.div`
  background: ${(props) => props.theme.theme_vars.colours.action}50;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium}
    ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
`;

export const QuickLink = styled.a`
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  background: ${(props) => props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  border-radius: 3px;
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
