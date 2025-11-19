import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  border-bottom: ${(props) => (props.$hasBorder ? `1px solid ${props.theme.theme_vars.colours.grey}` : 'none')};
  margin-top: ${(props) => (props.$hasMargin ? `${props.theme.theme_vars.spacingSizes.medium}` : 0)};
  margin-bottom: ${(props) => (props.$hasMargin ? `${props.theme.theme_vars.spacingSizes.medium}` : 0)};
`;

export const EventRow = styled.div`
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};

  /* ensure that the default cursor is used for the icon & headings */
  & > div > div > h4,
  & > div > span {
    cursor: default;
    font-size: 20px;
    font-weight: 600;
  }

  /* when the parent Span containing a 'service icon' is hovered over... */
  & > div > span:hover {
    /* always show the 'regular version' of the icon */
    & > span:nth-child(1) {
      display: block;
    }

    /* always hide the 'hover version' of the icon */
    & > span:nth-child(2) {
      display: none;
    }
  }
`;
