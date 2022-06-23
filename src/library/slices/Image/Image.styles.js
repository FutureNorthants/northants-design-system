import styled from 'styled-components';

export const Container = styled.figure`
  display: block;
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.white
      : props.theme.theme_vars.colours.grey_light};
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  float: ${(props) => (props.wrapText === true ? 'left' : 'none')};
  width: ${(props) => (props.wrapText === true ? '30%' : '100%')};
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  margin-right: ${(props) => (props.wrapText === true ? '1.5rem' : '0')};

  @media screen and (max-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    float: none;
    width: 100%;
    margin-right: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  padding-top: ${(props) => (props.ratio === '4by3' ? '75%' : '56.25%')};
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
`;
