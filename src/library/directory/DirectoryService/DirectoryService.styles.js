import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    flex-wrap: nowrap;
  }

  h1 {
    flex-grow: 1;
  }
`;

export const MapContainer = styled.div`
  position: relative;
  padding-top: 50%;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const MapImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MapLink = styled.a`
  display: block;
`;

export const Favourites = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }

  svg {
    margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }
`;
