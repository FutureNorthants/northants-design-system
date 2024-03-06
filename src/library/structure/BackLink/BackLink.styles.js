import styled from 'styled-components';

export const Container = styled.a`
  display: inline-block;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 14px;
  border: none;
  background: transparent;

  ${(props) => props.theme.fontStyles}

  &:hover {
    ${(props) => props.theme.linkStylesHover}
    cursor: pointer;
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
