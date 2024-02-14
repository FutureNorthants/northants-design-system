import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const CollectionType = styled.div`
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  background-color: ${(props) => props.theme.theme_vars.colours.white};
`;

export const CollectionHeader = styled.div`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  display: block;
`;
