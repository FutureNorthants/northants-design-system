import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  @media print {
    font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small} !important;
    [data-testid='Column'] {
      padding: ${(props) => props.theme.theme_vars.spacingSizes.extra_small} !important;
    }

    .favourite-outer:nth-of-type(2n + 1) {
      page-break-after: always;
    }

    .favourite-outer:last-of-type {
      page-break-after: avoid !important;
    }
  }
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
    font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
    margin-bottom: 0;
  }
`;

export const PrintLink = styled.div`
  p {
    display: none;
  }

  @media print {
    p {
      display: none;
      margin-bottom: 0 !important;
    }
  }
`;

export const SnippetContainer = styled.div`
  @media print {
    display: flex;
    flex-wrap: nowrap;
  }
`;

export const QRCodeContainer = styled.div`
  max-width: 80px;
  display: none;

  @media print {
    display: block;
    margin-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
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
    padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.small};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media print {
    display: none;
  }
`;

export const ActionButton = styled.button`
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
  margin-left: ${(props) => props.theme.theme_vars.spacingSizes.medium};
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

export const SubTitle = styled.p`
  font-weight: bold;
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const ClearShortlistButton = styled.button`
  border: 1px solid ${(props) => props.theme.theme_vars.colours.negative};
  background: ${(props) => props.theme.theme_vars.colours.white};
  color: ${(props) => props.theme.theme_vars.colours.negative};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  cursor: pointer;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  min-height: 42px;
  font-weight: bold;

  &:hover {
    background: ${(props) => props.theme.theme_vars.colours.action_light};
    color: ${(props) => props.theme.theme_vars.colours.action_dark};
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }

  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const AddressContainer = styled.div`
  display: block;

  @media print {
    display: none;
  }
`;

export const PrintAddress = styled.div`
  display: none;

  @media print {
    display: block;
  }
`;
