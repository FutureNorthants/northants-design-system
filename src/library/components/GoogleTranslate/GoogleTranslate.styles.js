import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  .goog-te-combo {
    border: 2px solid black;
    border-radius: ${(props) => props.theme.theme_vars.border_radius};
    padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
    font-size: 19px !important;
  }

  .goog-te-combo:focus {
    box-shadow: ${(props) =>
      `${props.theme.theme_vars.colours.focus} 0 0 0 2px, ${props.theme.theme_vars.colours.black} 0 0 0 4px`};
  }

  .goog-te-gadget {
    color: ${(props) =>
      props.$hasDarkBackground ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black};

    a {
      color: ${(props) =>
        props.$hasDarkBackground ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black};
    }
  }

  #google_translate_element {
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};

    a {
      padding: 14px 0;
      display: inline-block;

      &:hover {
        ${(props) => props.theme.linkStyles};
      }
      &:active {
        ${(props) => props.theme.linkStylesActive};
      }
      &:focus {
        ${(props) => props.theme.linkStylesFocus};
      }
    }

    a::after {
      content: ' (opens in new window)';
      font-weight: normal;
    }
  }
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 21px;
  color: ${(props) =>
    props.$hasDarkBackground ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black};
`;
