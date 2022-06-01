import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';

export const Container = styled.div``;

export const SectionTitle = styled(Heading)`
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.grey
      : props.theme.theme_vars.colours.grey_light};
  padding: 10px 15px;
  width: 100%;
  margin-left: -15px;
  margin-bottom: 15px;
  max-width: none !important;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    width: calc(100% - 30px);
    margin-left: 0;
    margin-bottom: 25px;
  }
`;

export const LinksList = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PagelinkBlank = styled.div`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: block;
    padding: 15px;
    width: calc(33.333% - 61px);
    margin-bottom: 31px;
  }
`;

export const Pagelink = styled.a`
  color: ${(props) => props.theme.theme_vars.colours.black};
  text-decoration: none !important;
  display: block;
  padding: 15px;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    width: calc(50% - 46px);
    margin-bottom: 31px;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: calc(33.333% - 61px);
  }

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
    outline: none;
    box-shadow: 0px -4px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset !important;
    -webkit-box-shadow: 0px -4px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset !important;
    -moz-box-shadow: 0px -4px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset !important;
  }
  &:active {
    transform: translate(3px);
    box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset !important;
    -webkit-box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset !important;
    -moz-box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset !important;
  }
`;

export const Title = styled.p`
  ${(props) => props.theme.linkStyles}
  margin-top: 0;
  margin-bottom: 15px;

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
  background: ${(props) => (props.image ? `url("` + props.image + `") center center / cover no-repeat` : ``)};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
'`;
