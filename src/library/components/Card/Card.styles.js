import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  background-color: ${(props) =>
    props.theme.cardinal_name === 'west'
      ? props.theme.theme_vars.colours.grey_light + '7a'
      : props.theme.theme_vars.colours.white};
`;

export const Content = styled.div`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  flex-grow: 1;

  p:last-of-type {
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  vertical-align: bottom;
  height: auto;
`;

export const ImageLink = styled.a`
  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const Header = styled.div`
  h3 {
    margin-top: 0;
  }
`;

export const Footer = styled.div`
  margin-top: 0;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small}
    ${(props) => props.theme.theme_vars.spacingSizes.medium} ${(props) => props.theme.theme_vars.spacingSizes.medium};

  border-top: 1px solid
    ${(props) =>
      props.theme.cardinal_name === 'north'
        ? props.theme.theme_vars.colours.grey_light
        : props.theme.theme_vars.colours.white};
`;

export const FooterLink = styled.a`
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};
  display: flex;

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
