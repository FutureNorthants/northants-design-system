import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  margin: 0 -${(props) => props.theme.theme_vars.spacingSizes.small};
  border: ${(props) => (props.$hasBorder ? `1px solid ${props.theme.theme_vars.colours.grey}` : 'none')};
  list-style: none;
  max-width: none !important;

  font-family: ${(props) => props.theme.theme_vars.fontstack};

  min-width: calc(
    100% + ${(props) => props.theme.theme_vars.spacingSizes.small} +
      ${(props) => props.theme.theme_vars.spacingSizes.small}
  );

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    flex-wrap: ${(props) => (props.$hasWrap ? `wrap` : `nowrap`)};
  }
`;
