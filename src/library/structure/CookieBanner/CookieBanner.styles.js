import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.fontStyles}
  background-color: ${(props) => props.theme.theme_vars.colours.grey_light};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  padding-bottom: 25px;
  width: 100%;
  display: block;
  box-sizing: border-box;
`;

export const CookieHide = styled.button`
  border: 0;
  background: transparent;
  padding: ${(props) => `${props.theme.theme_vars.spacingSizes.medium} ${props.theme.theme_vars.spacingSizes.small}`};
  cursor: pointer;

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

export const CookieMessage = styled.div`
  display: ${(props) => (props.isInline ? 'grid' : 'block')};
  grid-template-columns: 1fr auto;
  align-items: baseline;
  margin-right: 15px;
  margin-left: 15px;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    margin-right: 30px;
    margin-left: 30px;
  }

  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-right: auto;
    margin-left: auto;
    max-width: ${(props) => props.theme.theme_vars.breakpoints.l};
  }
`;

export const CookieHeading = styled.p`
  ${(props) => props.theme.theme_vars.h3}
`;

export const CookieParagraph = styled.div`
  margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;

  a {
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
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  align-items: flex-start;

  .button--primary {
    margin-right: 10px;
    line-height: 1.3;
    width: 50%;

    &:last-of-type {
      margin-right: 0;
      line-height: 1.3;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    display: block;

    .button--primary {
      width: auto;
      &:last-of-type {
        line-height: 1.3;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: block;

    .button--primary {
      width: auto;
      &:last-of-type {
        line-height: 1.3;
      }
    }
  }
`;
