import styled from 'styled-components';

export const AddToShortlist = styled.button`
  border: 2px solid ${(props) => props.theme.theme_vars.colours.action};
  background: ${(props) => props.theme.theme_vars.colours.white};
  color: ${(props) => props.theme.theme_vars.colours.action};
  cursor: pointer;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    ${(props) => props.theme.linkStylesHover}
    background: ${(props) => props.theme.theme_vars.colours.action_light}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }

  svg {
    margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }
`;
