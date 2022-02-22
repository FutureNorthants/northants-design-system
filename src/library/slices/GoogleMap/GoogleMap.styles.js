import styled from 'styled-components';

/**
 * Description text above map embed/link
 */
export const MapDescription = styled.div`
  ${(props) => props.theme.fontStyles};
  margin-bottom: 15px;

  /* re-style bold and italic elements within the content */
  strong,
  b {
    font-weight: bold;
  }
  em,
  i {
    font-style: italic;
  }

  /* style links within the content correctly though ideally there won't be any */
  a {
    ${(props) => props.theme.linkStyles};
  }
  a:hover {
    ${(props) => props.theme.linkStylesHover};
  }
  a:focus {
    ${(props) => props.theme.linkStylesFocus};
  }
  a:active {
    ${(props) => props.theme.linkStylesActive};
  }
`;

export const MapEmbed = styled.figure`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 75%; /* 4:3 aspect ratio */
  @media screen and (orientation: portrait) {
    padding-top: 133%; /* 3:4 aspect ratio for phones */
  }
  margin-bottom: 15px;
`;

export const MapEmbedIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const MapLink = styled.a`
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};
  margin-bottom: 15px;
  display: block;

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
