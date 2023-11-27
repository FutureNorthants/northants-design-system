import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const BackToTopButton = styled.button`
  display: ${(props) => (props.visible ? 'inline-block' : 'none')};
  position: fixed;
  bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  z-index: 2;
  background-color: ${(props) => props.theme.theme_vars.colours.action};
  color: ${(props) => props.theme.theme_vars.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  font-weight: 700;
  border: 0;
  cursor: pointer;
  line-height: 1;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  text-decoration: none !important;

  /* When larger than xl position button to be just outside the container */
  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.xl} + ${(props) =>
      props.theme.theme_vars.spacingSizes.medium})) {
    right: calc((100% - ${(props) => props.theme.theme_vars.breakpoints.xl}) / 2);
  }

  &:hover {
    background-color: ${(props) => props.theme.theme_vars.colours.action_dark};
  }
  &:focus {
    outline: none;
    color: ${(props) => props.theme.theme_vars.colours.black} !important;
    background-color: ${(props) => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -3px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
  }
  &:active {
    transform: translateY(2px);
    color: ${(props) => props.theme.theme_vars.colours.black} !important;
    background-color: ${(props) => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
  }
`;
