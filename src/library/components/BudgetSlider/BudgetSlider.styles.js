import styled, { css } from 'styled-components';
import { VisuallyHidden } from '../../helpers/style-helpers';

export const Container = styled.div`
  display: block;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: ${(props) => props.theme.theme_vars.border_radius_large};
`;

export const RangeLabel = styled.label`
  ${VisuallyHidden};
`;

export const RangeInput = styled.input`
  appearance: none;
  background: transparent;
  width: 100%;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background-color: ${(props) => props.theme.theme_vars.colours.grey};
    border-radius: ${(props) => props.theme.theme_vars.border_radius};
    height: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 15px 30px 15px;
    border-color: transparent transparent ${(props) => props.theme.theme_vars.colours.action} transparent;
    transform: rotate(0deg);
    margin-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }

  &:focus::-webkit-slider-thumb {
    outline: none;
  }

  &::-moz-range-track {
    background-color: ${(props) => props.theme.theme_vars.colours.grey};
    border-radius: ${(props) => props.theme.theme_vars.border_radius};
    height: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: ${(props) => `0 15px 30px 15px`};
    border-color: transparent transparent ${(props) => props.theme.theme_vars.colours.action} transparent;
    transform: rotate(0deg);
    margin-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }

  &:focus::-moz-range-thumb {
    outline: none;
  }
`;

export const MinMaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MinMax = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  padding: ${(props) => `0 ${props.theme.theme_vars.spacingSizes.small}`};
`;

export const CurrentValue = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.medium};
  color: ${(props) => props.theme.theme_vars.colours.action_dark};
  width: 100%;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const RangeButton = styled.button`
  background-color: ${(props) => props.theme.theme_vars.colours.action};
  padding: ${(props) => `${props.theme.theme_vars.spacingSizes.small} ${props.theme.theme_vars.spacingSizes.medium}`};
  color: ${(props) => props.theme.theme_vars.colours.white};
  cursor: pointer;
  font-weight: bold;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.medium};
  min-width: 45px;
  outline: none;
  border: none;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};

  svg {
    width: ${(props) => props.theme.theme_vars.spacingSizes.medium};
    height: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  }

  &:disabled {
    background-color: ${(props) => props.theme.theme_vars.colours.grey_dark} !important;
    color: ${(props) => props.theme.theme_vars.colours.white} !important;
    outline: none !important;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) => props.theme.theme_vars.action_dark};
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
  }
`;

const impactContainerHighlight = (props) => {
  switch (props.$title) {
    case 'low':
      return css`
        border-left: 5px solid ${(props) => props.theme.theme_vars.colours.negative};
      `;
    case 'medium':
      return css`
        border-left: 5px solid ${(props) => props.theme.theme_vars.colours.focus};
      `;
    default:
      return css`
        border-left: 5px solid ${(props) => props.theme.theme_vars.colours.positive};
      `;
  }
};

export const ImpactContainer = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  background-color: ${(props) => props.theme.theme_vars.colours.grey_light};
  ${impactContainerHighlight};
`;

export const ImpactTitle = styled.p`
  font-weight: bold;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  margin-bottom: 0 !important;
  text-transform: capitalize;
`;

export const ImpactSummary = styled.p`
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  margin-bottom: 0 !important;
`;
