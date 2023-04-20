import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const ServiceLink = styled.a`
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  ${(props) => props.theme.theme_vars.h4}
  ${(props) => props.theme.linkStyles}
  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }

  @media print {
    color: ${(props) => props.theme.theme_vars.colours.black} !important;
    text-decoration: none !important;
  }
`;

export const PrintLink = styled.div`
  p {
    display: none;
  }

  @media print {
    p {
      display: block;
    }
  }
`;

export const QRCodeContainer = styled.div`
  max-width: 80px;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  display: none;
  float: right;

  @media print {
    display: block;
  }
`;

export const FavouriteContainer = styled.div`
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.white
      : props.theme.theme_vars.colours.grey_light};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};

  @media print {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
    background: none;
  }
`;

export const PrintContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media print {
    display: none;
  }
`;

export const PrintButton = styled.button`
  border: 2px solid ${(props) => props.theme.theme_vars.colours.action};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  background: ${(props) => props.theme.theme_vars.colours.action};
  color: ${(props) => props.theme.theme_vars.colours.white};
  cursor: pointer;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    ${(props) => props.theme.linkStylesHover}
    color: ${(props) => props.theme.theme_vars.colours.white};
    background: ${(props) => props.theme.theme_vars.colours.action_dark};
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    justify-content: flex-end;
  }
`;
