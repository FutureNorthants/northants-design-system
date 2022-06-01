import styled from 'styled-components';

export const Container = styled.div`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  background: ${(props) =>
    props.alertType === 'alert'
      ? props.theme.theme_vars.colours.negative
      : props.alertType === 'warning'
      ? props.theme.theme_vars.colours.focus
      : props.alertType === 'positive'
      ? props.theme.theme_vars.colours.positive
      : props.alertType === 'london_bridge'
      ? props.theme.theme_vars.colours.black
      : props.theme.theme_vars.colours.negative};
  p,
  button {
    line-height: 1.3;
    color: ${(props) =>
      props.alertType === 'warning'
        ? props.theme.theme_vars.colours.black
        : props.theme.theme_vars.colours.white} !important;
  }

  a {
    ${(props) => props.theme.linkStyles}
    color: ${(props) =>
      props.alertType === 'warning'
        ? props.theme.theme_vars.colours.black
        : props.theme.theme_vars.colours.white} !important;

    &:hover {
      ${(props) => props.theme.linkStylesHover}
    }
    &:focus {
      ${(props) => props.theme.linkStylesFocus}
      color: ${(props) =>
        props.alertType === 'warning'
          ? props.theme.theme_vars.colours.white
          : props.theme.theme_vars.colours.black} !important;
      background: ${(props) =>
        props.alertType === 'warning'
          ? props.theme.theme_vars.colours.action
          : props.theme.theme_vars.colours.focus} !important;
    }
    &:active {
      ${(props) => props.theme.linkStylesActive}
    }
  }

  svg {
    fill: ${(props) =>
      props.alertType === 'warning'
        ? props.theme.theme_vars.colours.black
        : props.theme.theme_vars.colours.white} !important;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

export const BannerContentContainer = styled.div`
  flex-grow: 1;
  padding-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const BannerTitle = styled.p`
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const BannerContent = styled.div`
  p {
    max-width: 100% !important;
  }
`;

export const HideLink = styled.button`
  ${(props) => props.theme.fontStyles}
  border: none;
  background: none;
  cursor: pointer;
  flex-grow: 0;

  &:focus {
    outline: none;
    border-radius: ${(props) => props.theme.theme_vars.border_radius};
    color: ${(props) =>
      props.alertType === 'warning'
        ? props.theme.theme_vars.colours.white
        : props.theme.theme_vars.colours.black} !important;
    background: ${(props) =>
      props.alertType === 'warning'
        ? props.theme.theme_vars.colours.action
        : props.theme.theme_vars.colours.focus} !important;
    border-bottom: 3px solid ${(props) => props.theme.theme_vars.colours.black};

    svg {
      path {
        fill: ${(props) =>
          props.alertType === 'warning'
            ? props.theme.theme_vars.colours.white
            : props.theme.theme_vars.colours.black} !important;
      }
    }
  }
  &:active {
    transform: translateY(2px);
    border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.black};
  }
`;
