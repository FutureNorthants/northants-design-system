import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.fontStyles};
  display: block;
  border-top: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  padding-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

const resetButtonStyles = `
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 15px;
`;

export const Previous = styled.button`
  ${resetButtonStyles}
  ${(props) => props.theme.fontStyles}
  ${(props) => props.theme.linkStyles}

  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const Next = styled.button`
  ${resetButtonStyles}
  ${(props) => props.theme.fontStyles}
  ${(props) => props.theme.linkStyles}

  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const NumbersContainer = styled.ul`
  margin: 0 !important;
  padding: 0;
  display: inline-block;
  list-style: none;
`;

export const NumberContainer = styled.li`
  display: inline-block;
  padding-left: 0 !important;

  &:before {
    display: none;
  }
`;

export const Number = styled.button`
  ${resetButtonStyles}
  padding: 8px 12px;
  ${(props) => props.theme.fontStyles}
  ${(props) => props.theme.linkStyles}

  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }

  text-decoration: ${(props) => (props.$isCurrent ? 'none' : 'underline')};
  font-weight: ${(props) => (props.$isCurrent ? 'normal' : '700')};
`;

export const Ellipsis = styled.span``;

export const VisuallyHidden = styled.span`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`;
