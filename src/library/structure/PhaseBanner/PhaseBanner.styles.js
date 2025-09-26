import styled from 'styled-components';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const Wrapper = styled.div`
  background: ${(props) =>
    props.$isHome
      ? props.theme.theme_vars.theme_name === 'Memorial theme North' ||
        props.theme.theme_vars.theme_name === 'Memorial theme West'
        ? props.theme.theme_vars.colours.grey_dark
        : props.theme.theme_vars.colours.action
      : 'transparent'};
`;

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
  padding-top: ${(props) =>
    props.$isHome ? props.theme.theme_vars.spacingSizes.extra_small : props.theme.theme_vars.spacingSizes.small};
  padding-bottom: ${(props) =>
    props.$isHome ? props.theme.theme_vars.spacingSizes.extra_small : props.theme.theme_vars.spacingSizes.small};
  padding-left: 0;
  padding-right: 0;
  margin: 0;
  border-bottom: ${(props) => (props.$isHome ? 'none' : '1px solid ' + props.theme.theme_vars.colours.grey + '80')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  color: ${(props) => (props.$isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black)};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    flex-direction: row;
  }
`;

export const PhaseText = styled.span`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  cursor: default;
`;

export const PhaseContentContainer = styled.div`
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    margin: 0 0 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};
  }

  a {
    color: ${(props) =>
      props.$isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black} !important;
    &:hover {
      ${(props) => props.theme.linkStylesHover}

      color: ${(props) =>
        props.$isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black} !important;
    }

    &:focus {
      ${(props) => props.theme.linkStylesFocus}

      color: ${(props) =>
        props.$isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black} !important;
    }

    &:visited {
      color: ${(props) =>
        props.$isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black} !important;
    }
  }

  p {
    margin-top: auto;
    margin-bottom: auto;
    padding-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
    padding-bottom: ${(props) => `calc(${props.theme.theme_vars.spacingSizes.small} - 3px)`};
  }
`;

export const PhaseContainer = styled.div`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.extra_small} 0;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Phase = styled.div`
  font-weight: bold;

  padding: ${(props) =>
    props.$isHome
      ? `${props.theme.theme_vars.spacingSizes.extra_small} ${props.theme.theme_vars.spacingSizes.small}`
      : `calc(${props.theme.theme_vars.spacingSizes.extra_small} + 2px) calc(${props.theme.theme_vars.spacingSizes.small} + 2px)`};

  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  background: ${(props) =>
    props.$isHome ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.action + '1A'};
  float: left;
  text-align: center;
  color: ${(props) => props.theme.theme_vars.colours.black};
  border-radius: ${(props) => props.theme.theme_vars.border_radius_large};
  cursor: default;
`;
