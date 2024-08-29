import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  .event-list__results {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const ToggleFilters = styled.button`
  display: block;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
  ${(props) => props.theme.fontStyles}
  ${(props) => props.theme.linkStyles}

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    display: none;
  }

  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }

  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const FilterContainer = styled.div`
  display: ${(props) => (props.$showFilters ? 'block' : 'none')};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    display: block;
  }
`;

export const EventListHeader = styled.div`
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
`;

export const ResultsCount = styled.div`
  font-weight: bold;
`;

export const SortCol = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ResultInfo = styled.div`
  font-weight: bold;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.large} 0;
`;

export const ServiceSelect = styled.div`
  margin-bottom: 25px;
`;

export const ClearFilters = styled.button`
  display: block;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
  ${(props) => props.theme.fontStyles}
  ${(props) => props.theme.linkStyles}
  color: ${(props) => props.theme.theme_vars.colours.negative} !important;
  font-weight: normal;

  &:hover {
    ${(props) => props.theme.linkStylesHover}
    color: ${(props) => props.theme.theme_vars.colours.negative} !important;
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus}
    color: ${(props) => props.theme.theme_vars.colours.black} !important;
  }

  &:active {
    ${(props) => props.theme.linkStylesActive}
    color: ${(props) => props.theme.theme_vars.colours.black} !important;
  }
`;
