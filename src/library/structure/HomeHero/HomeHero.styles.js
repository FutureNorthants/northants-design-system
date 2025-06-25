import styled from 'styled-components';
import { VisuallyHidden } from '../../helpers/style-helpers';

export const Outer = styled.div`
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.large};
`;

export const Wrapper = styled.header`
  background: ${(props) =>
    props.noBackground
      ? 'transparent'
      : props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.grey_light + '7a'
      : props.theme.theme_vars.colours.white};
  position: relative;
`;

export const Container = styled.div`
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  overflow: hidden;
  background: ${(props) => props.theme.theme_vars.colours.action}5A;
  padding: ${(props) => (props.$showSearch ? '60px 0' : '0 0 200px 0')};
  position: relative;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    padding: ${(props) => (props.$showSearch ? '60px 0' : '0 0 300px 0')};
  }
  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-right: auto;
    margin-left: auto;
    padding: ${(props) => (props.$showSearch ? '90px 0' : '0 0 360px 0')};
    max-width: 1680px;
  }
`;

export const StyledMaxWidthContainer = styled.div`
  ${(props) => props.theme.fontStyles}
  margin-right: 15px;
  margin-left: 15px;
  z-index: 10;
  position: relative;

  background-color: cyan;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    margin-right: 30px;
    margin-left: 30px;
  }

  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-right: auto;
    margin-left: auto;
    max-width: ${(props) => props.theme.theme_vars.breakpoints.l};
  }
`;
export const HiddenH1 = styled.h1`
  ${(props) => VisuallyHidden};
`;

export const MainBox = styled.div`
  padding: 30px;
  background: ${(props) => props.theme.theme_vars.colours.white};
  background: ${(props) => props.theme.theme_vars.colours.white}F2;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 5px;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    max-width: calc(50% - 60px);
  }
`;

export const Topline = styled.p`
  color: ${(props) => props.theme.theme_vars.colours.grey_dark};
`;

export const LogoColoured = styled.div`
  svg {
    margin-top: -17px;
    max-width: 450px;
    width: 95%;
    height: auto;
  }
  &.black_logo {
    svg {
      fill: black !important;
      path {
        fill: black !important;
      }
    }
  }
`;

export const LogoOverride = styled.div`
  img {
    margin-top: -45px;
    max-width: 520px;
    width: 100%;
    height: auto;
  }
`;

export const Strapline = styled.p`
  margin-bottom: 20px;
  margin-top: -10px;
`;

export const PromotedServicesTabContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
`;
