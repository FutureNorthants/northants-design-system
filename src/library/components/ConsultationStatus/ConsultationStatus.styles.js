import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background-color: ${(props) =>
    props.$isOpen ? props.theme.theme_vars.colours.positive : props.theme.theme_vars.colours.negative}16;
  display: block;
  color: ${(props) => props.theme.theme_vars.colours.black};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
`;
