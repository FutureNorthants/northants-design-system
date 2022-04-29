import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  margin: 0;
  border: ${(props) => (props.hasBorder ? `1px solid ${props.theme.theme_vars.colours.grey}` : 'none')};
`;