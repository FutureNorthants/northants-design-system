import styled from 'styled-components';

export const Container = styled.div`
  border: solid 4px;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  border-color: ${(props) =>
    props.alertType === 'alert'
      ? props.theme.theme_vars.colours.negative
      : props.alertType === 'warning'
      ? props.theme.theme_vars.colours.focus
      : props.alertType === 'positive'
      ? props.theme.theme_vars.colours.positive
      : props.alertType === 'london_bridge'
      ? props.theme.theme_vars.colours.black
      : props.theme.theme_vars.colours.negative};

  padding: 15px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    padding: 20px;
    border-width: 6px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;

  p {
    margin-bottom: 15px;

    &:last-of-type {
      margin-bottom: 0;
    }
    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
      min-width: 100%;
    }
  }

  h2 {
    margin-top: 0;
    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
      min-width: 100%;
    }
  }
`;
