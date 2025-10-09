import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const LinkContainer = styled.div`
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const Link = styled.a`
  ${(props) => props.theme.linkStyles};
  min-height: 44px;
  display: block;

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

export const BlockLink = styled.span`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LinkSummary = styled.span`
  display: block;
  line-height: 1.3;
`;
