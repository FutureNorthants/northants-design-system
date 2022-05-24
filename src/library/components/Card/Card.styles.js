import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  background-color: ${(props) =>
    props.theme.cardinal_name === 'west'
      ? props.theme.theme_vars.colours.grey_light + '7a'
      : props.theme.theme_vars.colours.white};
`;

export const Header = styled.div`
  h3 {
    margin-top: 0;
  }
`;

export const Footer = styled.div`
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
  border-top: 1px solid
    ${(props) =>
      props.theme.cardinal_name === 'north'
        ? props.theme.theme_vars.colours.grey_light
        : props.theme.theme_vars.colours.white};
`;

export const FooterLink = styled.a`
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
