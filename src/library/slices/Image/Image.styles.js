import styled, { css } from 'styled-components';

export const Container = styled.figure`
  display: block;
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.white
      : props.theme.theme_vars.colours.grey_light};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  float: none;
  width: 100%;
  margin-right: 0;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    float: ${(props) => (props.$wrapText === true ? 'left' : 'none')};
    width: ${(props) => (props.$wrapText === true ? '30%' : '100%')};
    margin-right: ${(props) => (props.$wrapText === true ? '1.5rem' : '0')};
  }
`;

export const Caption = styled.figcaption`
  ${(props) => props.theme.fontStyles};
  font-size: 0.9rem !important;
  color: ${(props) => props.theme.theme_vars.colours.black};
  padding: 15px;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
`;
