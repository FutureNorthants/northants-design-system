import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  border-top: 1px solid ${(props) => props.theme.theme_vars.colours.grey}80;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
`;
export const NavigationLink = styled.a`
  display: flex;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey}80;
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};
  text-decoration: none !important;

  &:hover {
    ${(props) => props.theme.linkStylesHover};
    text-decoration: underline !important;
    text-decoration-style: dashed !important;
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
  }
`;

export const PageTitle = styled.span`
  font-size: 0.9rem;
  text-decoration: underline;
`;

export const Arrow = styled.div`
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  text-decoration: none;
`;

export const LinkText = styled.div`
  flex-grow: 1;
`;
