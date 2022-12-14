import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: block;

  input {
    max-width: 100%;
  }
`;

export const SearchHeader = styled.div`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.theme_vars.colours.grey_light}75;
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};

  input {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const HintText = styled.div`
  color: ${(props) => props.theme.theme_vars.colours.grey_dark};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 0;
  height: 100%;
`;

export const Button = styled.button`
  border: 1px solid ${(props) => props.theme.theme_vars.colours.white};
  background: ${(props) => props.theme.theme_vars.colours.action};
  color: ${(props) => props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  cursor: pointer;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  min-height: 42px;
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};

  &:hover {
    background: ${(props) => props.theme.theme_vars.colours.action_dark};
  }

  &:focus {
    outline: none;
    background: ${(props) => props.theme.theme_vars.colours.focus};
  }
`;

export const ButtonText = styled.span`
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const ResultInfo = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  color: ${(props) => props.theme.theme_vars.colours.grey_dark};
`;

const serviceBackground = (props) => {
  if (props.resultNumber % 2 === 0) {
    return css`
      background-color: ${(props) => props.theme.theme_vars.colours.grey_light}75;
    `;
  } else {
    return css`
      background-color: ${(props) => props.theme.theme_vars.colours.white};
    `;
  }
};

export const ServiceContainer = styled.div`
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.white
      : props.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const Address = styled.span`
  word-wrap: break-word;
`;

export const Fieldset = styled.fieldset`
  display: block;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  position: relative;
`;

export const Legend = styled.legend`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 0;
`;

export const LegendButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.theme_vars.colours.action};
  width: 100%;
  white-space: normal;
  cursor: pointer;
  text-align: left;
  padding-right: 30px;
  ${(props) => props.theme.theme_vars.h4}
  ${(props) => props.theme.linkStyles}
  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const AccordionIcon = styled.span`
  position: absolute;
  top: 5px;
  right: 4px;
  width: 34px;
  height: 32px;

  &:before {
    border-style: solid;
    border-width: 4px 4px 0 0;
    content: '';
    display: inline-block;
    height: 12px;
    position: relative;
    vertical-align: top;
    width: 12px;
    border-color: ${(props) => props.theme.theme_vars.colours.black};
    top: ${(props) => (props.isOpen ? `5px` : `0`)};
    left: 6px;
    transform: ${(props) => (props.isOpen ? `rotate(-45deg)` : `rotate(135deg)`)};
  }
`;

export const Category = styled.div`
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding-left: 40px;
  clear: left;
`;

export const CategoryInput = styled.input`
  cursor: pointer;
  position: absolute;
  z-index: 1;
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
  if (props.singleSelection) {
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
    border-radius: ${(props) => (props.singleSelection ? '100%' : 0)};
  }

  &:after {
    content: '';
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    opacity: ${(props) => (props.isChecked ? 1 : 0)};
    ${checkedMarker}
  }
`;

export const ColumnLabels = styled.div`
  font-weight: bold;
  display: none;
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    display: block;
  }
`;

export const Accordion = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const Favourites = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
  &:hover {
    ${(props) => props.theme.linkStylesHover}
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

export const ServiceLink = styled.a`
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  flex-grow: 1;
  ${(props) => props.theme.theme_vars.h4}
  ${(props) => props.theme.linkStyles}
  &:hover {
    ${(props) => props.theme.linkStylesHover}
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const Age = styled.p`
  font-weight: bold;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
`;

export const ServiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MarkerContainer = styled.div`
  width: 32px;
  height: 58px;
  position: relative;
  svg {
    color: ${(props) => props.theme.theme_vars.colours.action_dark};
  }

  span {
    position: absolute;
    top: 6px;
    left: 11px;
    color: white;
    font-size: 0.9rem;
  }
`;
