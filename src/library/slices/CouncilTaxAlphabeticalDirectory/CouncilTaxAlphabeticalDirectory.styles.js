import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  ${(props) => props.theme.fontStyles}
`;

export const Row = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
`;

export const Letter = styled.div`
  text-transform: uppercase;
  ${(props) => props.theme.theme_vars.h1}
`;

export const Link = styled.a`
  padding: 0.5em 0px;
  width: 100%;
  display: inline-block;
  cursor: pointer;

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

export const BackButton = styled.a`
  display: inline-block;
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 14px;
  cursor: pointer;

  ${(props) => props.theme.fontStyles}

  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 3px;
    width: 7px;
    height: 7px;
    margin: auto 0;
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg);
    border: solid;
    border-width: 1px 1px 0 0;
    border-color: #505a5f;
  }

  &:focus:before {
    border-color: #0b0c0c;
  }

  &:after {
    content: '';
    position: absolute;
    top: -14px;
    right: 0;
    bottom: -14px;
    left: 0;
  }
`;

export const ErrorText = styled.p`
  ${(props) => props.theme.fontStyles}
  color: ${(props) => props.theme.theme_vars.colours.negative};
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.1;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 18px;
    font-size: 1rem;
    line-height: 1.25;
  }
`;
