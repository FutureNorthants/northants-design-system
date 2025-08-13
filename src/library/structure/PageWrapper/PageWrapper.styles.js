import styled, { css } from 'styled-components';

const backgroundDecider = (props) => {
  const colourString = props.theme.theme_vars.colours[props.$colour];
  if (props.$colour) {
    return css`
      background-color: ${colourString};
    `;
  } else {
    return css`
      background-color: transparent;
    `;
  }
};

export const Container = styled.div`
  ${backgroundDecider};
  padding-top: 1.5em;
`;
