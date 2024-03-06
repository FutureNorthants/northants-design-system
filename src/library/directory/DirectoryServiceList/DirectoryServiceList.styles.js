import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: block;

  input {
    max-width: 100%;
  }

  input[type='text'] {
    margin-bottom: 0;
  }
`;

export const SearchHeader = styled.div`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.theme_vars.colours.grey_light}50;
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};

  input {
    width: 100%;
    margin-bottom: 0;
    height: 40px;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
`;

export const HintText = styled.div`
  color: ${(props) => props.theme.theme_vars.colours.grey_dark};
`;

export const PostcodeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PostcodeInner = styled.div`
  flex-grow: 1;
  padding-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 0;
  height: 100%;
`;

export const Button = styled.button`
  border: ${(props) => (props.$isWarning ? `3px` : `1px`)} solid
    ${(props) => (props.$isWarning ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.white)};
  background: ${(props) =>
    props.$isWarning ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.action};
  color: ${(props) =>
    props.$isWarning ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  cursor: pointer;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  min-height: 42px;
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  font-weight: bold;

  &:hover {
    background: ${(props) =>
      props.$isWarning ? props.theme.theme_vars.colours.action_light : props.theme.theme_vars.colours.action_dark};
    color: ${(props) =>
      props.$isWarning ? props.theme.theme_vars.colours.action_dark : props.theme.theme_vars.colours.white};
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus}
  }

  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const ButtonText = styled.span`
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const ResultInfo = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  color: ${(props) => props.theme.theme_vars.colours.grey_darkest};
`;

const serviceBackground = (props) => {
  if (props.$resultNumber % 2 === 0) {
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
  background: ${(props) => props.theme.theme_vars.colours.white};
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

export const FilterContainer = styled.div`
  display: ${(props) => (props.$showFilters ? 'flex' : 'none')};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: flex;
  }
`;

export const FilterToggle = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  background: none;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
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

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: none;
  }
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
  position: relative;
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
    top: ${(props) => (props.$isOpen ? `5px` : `0`)};
    left: 6px;
    transform: ${(props) => (props.$isOpen ? `rotate(-45deg)` : `rotate(135deg)`)};
  }
`;

export const Category = styled.div``;

export const ColumnLabels = styled.div`
  font-weight: bold;
  display: none;
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    display: block;
  }
`;

export const Accordion = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
`;

export const AccordionControls = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ClearFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const TextLink = styled.button`
  font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
  position: relative;
  z-index: 1;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  border-width: 0;
  color: ${(props) => props.theme.theme_vars.colours.action};
  background: none;
  cursor: pointer;
  &:hover {
    ${(props) => props.theme.linkStylesHover};
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus};
  }
  &:active {
    ${(props) => props.theme.linkStylesActive};
  }
`;

export const VisuallyHidden = styled.span`
  ${(props) => props.theme.visuallyHidden}
`;

export const FavouritesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const MapToggle = styled.button`
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border: 2px solid ${(props) => props.theme.theme_vars.colours.action};
  background: ${(props) => props.theme.theme_vars.colours.white};
  color: ${(props) => props.theme.theme_vars.colours.action};
  cursor: pointer;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
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
`;

export const Favourites = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
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

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ServiceImageContainer = styled.div`
  width: 100%;
  padding-top: 70%;
  position: relative;
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`;
