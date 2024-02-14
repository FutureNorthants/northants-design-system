import styled, { css } from 'styled-components';

const imageRatio = (props) => {
  switch (props.$ratio) {
    case '4by3':
      return css`
        padding-top: 75%;
      `;
    case '4by1':
      return css`
        padding-top: 25%;
      `;
    case '16by9':
      return css`
        padding-top: 56.25%;
      `;
    case 'auto':
      return css`
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      `;
    default:
      return css`
        padding-top: 56.25%;
      `;
  }
};

export const Container = styled.div`
  display: block;
  position: ${(props) => (props.$ratio === 'auto' ? 'absolute' : 'relative')};
  ${imageRatio}
`;

export const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.$objectFit};
  object-position: center;
`;
