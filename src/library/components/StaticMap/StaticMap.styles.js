import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const MapImage = styled.img`
  max-width: 100%;
`;

export const Message = styled.div`
  background-color: ${(props) => props.theme.theme_vars.colours.focus};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const Cookies = styled.button`
  outline: none;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  color: ${(props) => props.theme.theme_vars.colours.action};
  text-decoration: underline;
  ${(props) => props.theme.theme_vars.linkStyles}

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
