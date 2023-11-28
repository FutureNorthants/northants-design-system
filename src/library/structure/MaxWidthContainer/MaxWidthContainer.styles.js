import styled from 'styled-components';

const handleContainerPadding = (noBackground, noPadding) => {
  if (noPadding || noBackground) {
    return 0;
  } else {
    return '50px';
  }
};

export const Container = styled.div`
  background: ${(props) =>
    props.$noBackground
      ? 'transparent'
      : props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.grey_light + '7a'
      : props.theme.theme_vars.colours.white};
  overflow: ${(props) => (props.$noPadding ? 'hidden' : 'visible')};
  padding-bottom: ${({ noBackground, noPadding }) => handleContainerPadding(noBackground, noPadding)};
`;

export const MaxWidth = styled.div`
  ${(props) => props.theme.fontStyles}
  padding-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  padding-left: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  overflow: ${(props) => (props.$overflowVisible ? 'visible' : 'hidden')};

  pre {
    font-family: monospace;
    white-space: pre;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    margin-right: ${(props) => props.theme.theme_vars.spacingSizes.large};
    margin-left: ${(props) => props.theme.theme_vars.spacingSizes.large};
    padding-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
    padding-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }

  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-right: auto;
    margin-left: auto;
    padding-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
    padding-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
    max-width: ${(props) => props.theme.theme_vars.breakpoints.l};
  }
`;
