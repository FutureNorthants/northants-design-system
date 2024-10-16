import styled, { css } from 'styled-components';

const oneColStyles = (props) => {
  if (props.$oneCol) {
    return css`
      width: 100%;
      display: block;
    `;
  }
};

export const PromotedLinks = styled.div`
  ${(props) => props.theme.fontStyles}
  margin-top: ${(props) => (props.$hasTabs ? '0' : '30px')};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    display: flex;
    flex-wrap: wrap;
    margin-top: ${(props) => (props.$hasTabs ? '-10px' : '60px')};
  }
  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-top: ${(props) => (props.$hasTabs ? '-10px' : '90px')};
  }
  flex-direction: ${(prop) => (prop.oneCol ? 'column' : 'inherit')};
`;

export const PromotedLink = styled.a`
  display: block;
  height: 100%;
  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.l} + 60px)) {
    box-sizing: border-box;
  }
  background: ${(props) => props.theme.theme_vars.colours.white};
  background: ${(props) => props.theme.theme_vars.colours.white}F2;
  border-radius: 3px;
  box-shadow:
    0px -4px 0px 0px ${(props) => props.theme.theme_vars.colours.action} inset,
    0px 4px 15px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow:
    0px -4px 0px 0px ${(props) => props.theme.theme_vars.colours.action} inset,
    0px 4px 15px rgba(0, 0, 0, 0.11);
  -moz-box-shadow:
    0px -4px 0px 0px ${(props) => props.theme.theme_vars.colours.action} inset,
    0px 4px 15px rgba(0, 0, 0, 0.11);

  padding: ${(props) => (props.$hasTabs ? '10px' : '20px 15px')};
  width: 100%;
  margin-bottom: 15px;

  span {
    ${(props) => props.theme.linkStyles};
  }

  &:hover {
    background: ${(props) => props.theme.theme_vars.colours.white};
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
    box-shadow:
      0 0 0 2px ${(props) => props.theme.theme_vars.colours.black},
      0 0 0 4px ${(props) => props.theme.theme_vars.colours.focus};
    -webkit-box-shadow:
      0 0 0 2px ${(props) => props.theme.theme_vars.colours.black},
      0 0 0 4px ${(props) => props.theme.theme_vars.colours.focus};
    -moz-box-shadow:
      0 0 0 2px ${(props) => props.theme.theme_vars.colours.black},
      0 0 0 4px ${(props) => props.theme.theme_vars.colours.focus};

    span {
      color: ${(props) => props.theme.theme_vars.colours.black};
    }
  }
  &:active {
    ${(props) => props.theme.linkStylesActive};
    transform: translateY(3px);
    box-shadow:
      0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
    -webkit-box-shadow:
      0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
    -moz-box-shadow:
      0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    width: 100%;
    margin-right: 15px;
    flex: 0 0 calc(50% - 38px);
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: 100%;
    margin-right: 30px;
    margin-bottom: ${(prop) => (prop.oneCol ? '20px' : '0px')};
    padding: ${(props) => (props.$hasTabs ? '10px' : '30px')};
    flex: 1;
    text-align: ${(props) => (props.$hasTabs ? 'center' : 'left')};
    border-radius: ${(props) => (props.$hasTabs ? '0 0 3px 3px' : '3px')};

    &:nth-of-type(2n) {
      margin-right: 30px;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
  ${oneColStyles}
`;
