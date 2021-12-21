import styled from 'styled-components';

export const VideoContainer = styled.figure`
  display: block;
  padding-top: 56.25%;
  position: relative;
  margin-bottom: 15px;

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-style: none;
  }
`;

export const VideoLink = styled.a`
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};
  margin-bottom: 15px;

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
