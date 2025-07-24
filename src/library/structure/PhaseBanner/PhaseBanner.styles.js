import styled from 'styled-components';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const Wrapper = styled.div`
  background: ${(props) =>
    props.isHome
      ? props.theme.theme_vars.theme_name === 'Memorial theme North' ||
        props.theme.theme_vars.theme_name === 'Memorial theme West'
        ? props.theme.theme_vars.colours.grey_dark
        : props.theme.theme_vars.colours.action
      : 'transparent'};

  &:hover {
    background-color: ${(props) =>
      props.isHome ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.action_light};
  }

  &:hover a {
    ${(props) => props.theme.linkStylesHover}

    color: ${(props) => (props.isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black)};
  }

  &:focus a {
    ${(props) => props.theme.linkStylesFocus}

    color: ${(props) => (props.isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black)};
  }
`;

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
  padding-top: ${(props) => (props.isHome ? '5px' : '10px')};
  padding-bottom: ${(props) => (props.isHome ? '5px' : '10px')};
  border-bottom: ${(props) => (props.isHome ? 'none' : '1px solid ' + props.theme.theme_vars.colours.grey + '80')};
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  align-items: flex-start;
  margin: ${(props) => (props.isHome ? '' : '0 auto !important')};
  color: ${(props) => (props.isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black)};
`;

export const PhaseText = styled.span`
  vertical-align: middle;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  cursor: default;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
  }
`;

export const PhaseHyperlink = styled.a`
  vertical-align: middle;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};

  color: ${(props) => (props.isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black)};
  text-decoration: none;

  &:visited {
    color: ${(props) => (props.isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black)};
    text-decoration: none;
  }
`;

export const PhaseContainer = styled.div`
  padding: 5px 0;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    padding: 0;
  }
`;

export const Phase = styled.div`
  font-weight: bold;
  padding: 2px 7px;
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  background: ${(props) =>
    props.isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.action + '1A'};
  float: left;
  vertical-align: middle;
  text-align: center;
  color: ${(props) => props.theme.theme_vars.colours.black};
  border-radius: 4px;
  cursor: default;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    display: inline-block;
    float: none;
    margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};

    vertical-align: sub;
  }
`;
