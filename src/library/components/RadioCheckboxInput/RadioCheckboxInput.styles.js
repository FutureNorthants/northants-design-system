import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: block;
  border-left: ${(props) =>
    props.$isErrored
      ? `${props.theme.theme_vars.border_width_error} solid ${props.theme.theme_vars.colours.negative}`
      : 'none'};
  padding-left: ${(props) => (props.$isErrored ? ` ${props.theme.theme_vars.spacingSizes.extra_small}` : '0')};
  padding-bottom: 10px;
`;

export const Category = styled.div`
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  display: block;
  position: relative;
  min-height: 40px;

  padding-left: 40px;
  clear: left;
`;

export const CategoryInput = styled.input`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;

  &:focus + label:before {
    box-shadow: 0 0 0 3px ${(props) => props.theme.theme_vars.colours.focus};
  }
`;

/**
 * If single selection then use styles for radio button, otherwise checkbox styles
 */
const checkedMarker = (props) => {
  if (props.$singleSelection) {
    return css`
      top: 10px;
      left: 10px;
      width: 0;
      height: 0;
      border: 10px solid currentcolor;
      border-radius: 50%;
      background: currentcolor;
    `;
  } else {
    return css`
      top: 11px;
      left: 9px;
      width: 23px;
      height: 12px;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
      border: solid;
      border-width: 0 0 5px 5px;
      border-top-color: transparent;
      background: transparent;
    `;
  }
};

export const CategoryInputLabel = styled.label`
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;

  &:before {
    content: '';
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 2px solid currentColor;
    background: transparent;
    border-radius: ${(props) => (props.$singleSelection ? '100%' : 0)};
  }

  &:after {
    content: '';
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    opacity: ${(props) => (props.$isChecked ? 1 : 0)};
    ${checkedMarker}
  }
`;
