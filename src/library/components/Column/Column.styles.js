import styled, { css } from 'styled-components';

const calculateWidth = (size) => {
  switch (size) {
    case 'full':
      return css`
        width: 100%;
      `;
    case 'one-half':
      return css`
        width: 50%;
      `;
    case 'one-third':
      return css`
        width: 33.333%;
      `;
    case 'two-thirds':
      return css`
        width: 66.666%;
      `;
    case 'one-quarter':
      return css`
        width: 25%;
      `;
    case 'three-quarters':
      return css`
        width: 75%;
      `;
  }
};

const widths = (props) => {
  return css`
    ${calculateWidth(props.small)};

    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
      ${calculateWidth(props.medium)};
    }

    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
      ${calculateWidth(props.large)};
    }
  `;
};

export const Container = styled.div`
  box-sizing: border-box;
  display: block;
  padding: ${(props) => (props.hasPadding ? props.theme.theme_vars.spacingSizes.small : `0`)};
  border: ${(props) => (props.hasBorder ? `1px solid ${props.theme.theme_vars.colours.negative}` : 'none')};
  ${widths};
`;
