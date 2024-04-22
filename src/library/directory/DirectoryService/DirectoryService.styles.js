import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  .striped-column {
    padding: ${(props) => props.theme.theme_vars.spacingSizes.small};

    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
      padding: ${(props) => props.theme.theme_vars.spacingSizes.large};
    }

    &:nth-of-type(even) {
      background-color: ${(props) =>
        props.theme.cardinal_name === 'north'
          ? props.theme.theme_vars.colours.white
          : props.theme.theme_vars.colours.action_light};
    }
  }
`;

export const ShortListLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    flex-wrap: nowrap;
    justify-content: flex-end;
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
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const ShortListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Favourites = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
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

export const PhysicalAddress = styled.div``;

export const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  flex-wrap: wrap;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    flex-wrap: nowrap;
    flex-grow: 0;
  }
`;

export const ServiceImageOuter = styled.div`
  min-width: 200px;
  margin-left: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const ServiceImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 70%;
`;

export const ServiceImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
`;
