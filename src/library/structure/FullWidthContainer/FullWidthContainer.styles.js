import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => (props.$hasBackground ? props.theme.theme_vars.colours.grey_light : 'transparent')};
  padding: ${(props) => (props.$hasPadding ? '50px 0 20px' : '0')};
`;
