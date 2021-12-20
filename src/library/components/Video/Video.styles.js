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
