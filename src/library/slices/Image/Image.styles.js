import styled, { css } from 'styled-components';

export const Container = styled.figure`
  display: block;
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.white
      : props.theme.theme_vars.colours.grey_light};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  float: none;
  width: 100%;
  margin-right: 0;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    float: ${(props) => (props.wrapText === true ? 'left' : 'none')};
    width: ${(props) => (props.wrapText === true ? '30%' : '100%')};
    margin-right: ${(props) => (props.wrapText === true ? '1.5rem' : '0')};
  }
`;

const imageRatio = (props) => {
  switch (props.ratio) {
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
    default:
      return css`
        padding-top: 56.25%;
      `;
  }
};

export const ImageContainer = styled.div`
  position: relative;
  ${imageRatio}
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Caption = styled.figcaption`
  ${(props) => props.theme.fontStyles};
  font-size: 0.9rem !important;
  color: ${(props) => props.theme.theme_vars.colours.black};
  padding: 15px;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
`;
