import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: ${(props) => (props.$hasMargin ? props.theme.theme_vars.spacingSizes.small : 0)};
`;
