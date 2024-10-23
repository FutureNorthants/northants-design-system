import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const Count = styled.div`
  ${(props) => props.theme.fontStyles};
  margin-bottom: 25px;
`;
