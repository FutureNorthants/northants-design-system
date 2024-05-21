import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const InquestContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    flex-wrap: nowrap;
  }
`;

export const InquestTime = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

export const InquestDetails = styled.div`
  flex-grow: 1;
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    padding-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }
`;
