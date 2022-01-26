import styled, { css } from 'styled-components';

const summaryStyles = (props) => {
  if (props.theme.is_memorial === true) {
    return css`
      background-color: ${props.theme.theme_vars.colours.grey_darkest};
      color: ${props.theme.theme_vars.colours.white};
    `;
  }

  switch (props.theme.cardinal_name) {
    case 'north':
      return css`
        background-color: ${(props) => (props.hasBackground ? props.theme.theme_vars.colours.white : 'transparent')};
        color: ${(props) => props.theme.theme_vars.colours.action};
      `;
    case 'west':
      return css`
        background-color: ${(props) =>
          props.hasBackground ? props.theme.theme_vars.colours.grey_light : 'transparent'};
        color: ${(props) => props.theme.theme_vars.colours.action};
      `;
  }
};

export const Container = styled.div`
  padding: ${(props) => (props.hasPadding ? '30px 15px' : '0')};
  font-size: 1.2em;
  margin-bottom: 15px;
  ${summaryStyles}

  p {
    max-width: 100%;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;
