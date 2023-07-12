import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const MapImage = styled.img`
  max-width: 100%;
`;

export const Message = styled.div`
  background-color: ${(props) => props.theme.theme_vars.colours.focus};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;
