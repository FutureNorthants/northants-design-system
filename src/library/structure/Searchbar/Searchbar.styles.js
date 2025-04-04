import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.fontStyles}
  width: calc(100% - ${(props) => (props.$isLarge ? '5rem' : '3rem')});
`;

export const Label = styled.label`
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

export const InputWrapper = styled.div`
  position: relative;
  width: auto;
  max-width: 750px;

  p {
    margin-bottom: 5px !important;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: ${(props) => (props.$isLarge ? '-5rem' : '-3rem')};
  cursor: pointer;
  margin: 0;
  margin-top: ${(props) => (props.$isErrored ? (props.$isLarge ? '20px' : '20px') : 0)};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  background: ${(props) =>
    props.$isLight ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.grey_darkest};
  color: ${(props) => props.theme.theme_vars.colours.white};
  border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
  border-top-right-radius: calc(${(props) => props.theme.theme_vars.border_radius} * 2);
  border-bottom-right-radius: calc(${(props) => props.theme.theme_vars.border_radius} * 2);

  width: ${(props) => (props.$isLarge ? '5rem' : '3rem')};
  text-align: center;
  /* height: ${(props) => (props.$isLarge ? '2.9rem' : '2.28rem')}; */
  height: ${(props) => (props.$isLarge ? '3.22rem' : '2.6rem')};
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    margin-top: ${(props) => (props.$isErrored ? (props.$isLarge ? '26px' : '26px') : 0)};
  }

  &:hover {
    background: ${(props) =>
      props.$isLight ? props.theme.theme_vars.colours.action_dark : props.theme.theme_vars.colours.black};
  }

  &:focus {
    outline: none;
    background: ${(props) => props.theme.theme_vars.colours.focus};
    svg {
      path {
        fill: ${(props) => props.theme.theme_vars.colours.black};
      }
    }
  }

  &:active {
    transform: translateY(1px);
    background-color: ${(props) => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black};
    border-top-color: ${(props) => props.theme.theme_vars.colours.black};
    border-bottom-color: transparent;
  }
`;

export const ButtonText = styled.span`
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
