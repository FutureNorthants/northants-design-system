import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background-color: ${(props) => props.theme.theme_vars.colours.grey_light};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding-right: ${(props) => props.theme.theme_vars.spacingSizes.large};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
`;

export const TitleContainer = styled.div`
  padding-left: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const Label = styled.label`
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const Error = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.theme_vars.colours.negative};
  padding-left: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const LoadingContainer = styled.div`
  padding-left: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const StartAgain = styled.button`
  background: transparent;
  border: 0;
  margin-top: 15px;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  ${(props) => props.theme.linkStyles}
  &:hover {
    ${(props) => props.theme.linkStylesHover}
    cursor: pointer;
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const CollectionContainer = styled.div`
  padding-left: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  padding-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;
