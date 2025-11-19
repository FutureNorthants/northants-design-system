import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';

export const Container = styled.div`
  li {
    line-height: 1.5;
  }
`;

export const SectionTitle = styled(Heading)`
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.grey
      : props.theme.theme_vars.colours.grey_light};
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 15px;
  max-width: none !important;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 25px;
  }
`;

export const Pagelink = styled.a`
  /* color: ${(props) => props.theme.theme_vars.colours.black}; */
  text-decoration: none !important;
  display: block;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  width: 100%;
  height: 100%;

  &:hover,
  &:focus {
    background: ${(props) =>
      props.theme.cardinal_name === 'north'
        ? props.theme.theme_vars.colours.grey + '7a'
        : props.theme.theme_vars.colours.grey_light};

    p:first-of-type {
      color: ${(props) => props.theme.theme_vars.colours.action_dark};
      text-decoration-style: dotted;
    }
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    transform: translate(3px);
    box-shadow: 0px -2px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset !important;
    -webkit-box-shadow: 0px -2px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset !important;
    -moz-box-shadow: 0px -2px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset !important;
  }
`;

export const Title = styled.p`
  ${(props) => props.theme.linkStyles}
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 600 !important;
  font-size: 20px !important;
  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
`;

export const Summary = styled.p`
  margin: 0;
  color: ${(props) => props.theme.theme_vars.colours.black} !important;
  font-weight: 400;
`;

export const ImageContainer = styled.span`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  /* background: ${(props) => (props.$image ? `url("` + props.$image + `") center center / cover no-repeat` : ``)}; */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: ${(props) => (props.$largeImage ? `url("` + props.$largeImage + `")` : '')};
  background-image: image-set(
    ${(props) => `url("${props.$smallImage}")`} 1x,
    ${(props) => `url("${props.$largeImage}")`} 2x
  );
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
