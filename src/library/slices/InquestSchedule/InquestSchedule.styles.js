import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  box-sizing: border-box;
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.large};
`;

export const InquestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const InquestTime = styled.div`
  flex-grow: 1;
  flex-shrink: 0;

  strong {
    display: block;
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

export const InquestDetails = styled.div`
  flex-grow: 1;
`;
