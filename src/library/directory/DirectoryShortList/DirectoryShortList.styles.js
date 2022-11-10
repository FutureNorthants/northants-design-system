import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const ServiceLink = styled.a`
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  ${(props) => props.theme.theme_vars.h4}
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

export const FavouriteContainer = styled.div`
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.white
      : props.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;
