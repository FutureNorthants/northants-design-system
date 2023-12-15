import styled from 'styled-components';
import { VisuallyHidden } from './../../helpers/style-helpers';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 0;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  ${(props) => props.theme.fontStyles}

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    background: url('${(props) => props.$image}') no-repeat center center;
    background-size: cover;
    padding-top: ${(props) => (props.$image ? '8rem' : 0)};
    padding-bottom: ${(props) => (props.$image ? '8rem' : 0)};
    padding-left: ${(props) => (props.$image ? props.theme.theme_vars.spacingSizes.x_large : 0)};
    padding-right: ${(props) => (props.$image ? props.theme.theme_vars.spacingSizes.x_large : 0)};
  }

  h2 {
    text-align: center;
  }
`;

export const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;

  a {
    width: 100%;
    height: 2.28rem;
    padding: 12px !important;
    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
      height: 2.6rem;
    }
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${(props) =>
    props.theme.cardinal_name === 'west'
      ? props.theme.theme_vars.colours.grey_light
      : props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.theme_vars.border_radius};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    padding: ${(props) => props.theme.theme_vars.spacingSizes.large};
    max-width: ${(props) => props.theme.theme_vars.breakpoints.m};
    margin: 0 auto;
  }
`;
