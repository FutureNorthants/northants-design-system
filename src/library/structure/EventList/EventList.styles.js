import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  .event-list__results {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
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
