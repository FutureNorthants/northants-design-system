import styled from 'styled-components';

export const AddToShortlist = styled.button`
  border: 2px solid
    ${(props) => (props.$favourite ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.action)};
  background: ${(props) => props.theme.theme_vars.colours.white};
  color: ${(props) =>
    props.$favourite ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.action};
  cursor: pointer;
  padding: ${(props) => `14px ${props.theme.theme_vars.spacingSizes.small}`};
  font-weight: 500;
  font-family: ${(props) => `${props.theme.theme_vars.fontstack}`};
  font-size: 15px;
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

  @media print {
    display: none;
  }
`;
