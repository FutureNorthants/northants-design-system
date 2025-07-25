import styled from 'styled-components';
import { StyledTextInput } from '../TextInput/TextInput.styles';
import { VisuallyHidden } from './../../helpers/style-helpers';

/**
 * Just like TextInput bar a tweak
 */
export const AutocompleteTextInput = styled(StyledTextInput)`
  /* right edge squared off if has a button adjacent, and lower corners squared if suggestions visible */
  border-top-right-radius: ${(props) =>
    props.$hasAdjacentButton
      ? '0px'
      : props.$isLarge
      ? props.theme.theme_vars.border_radius_large
      : props.theme.theme_vars.border_radius};
  border-bottom-left-radius: ${(props) =>
    props.isOpen
      ? '0px'
      : props.$isLarge
      ? props.theme.theme_vars.border_radius_large
      : props.theme.theme_vars.border_radius};
  border-bottom-right-radius: ${(props) =>
    props.$hasAdjacentButton || props.$isOpen
      ? '0px'
      : props.$isLarge
      ? props.theme.theme_vars.border_radius_large
      : props.theme.theme_vars.border_radius};
`;

export const AutocompleteLabel = styled.label`
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  ${(props) => (props.$hasHiddenLabel ? VisuallyHidden : 'display: inline-block; padding-bottom: 10px')}
`;

/**
 * The list of suggestion items that displays when the user input turns up in any suggestions
 */
export const AutocompleteSuggestionList = styled.ul`
  position: absolute;
  display: block;
  z-index: 50;
  width: auto;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  border-radius: ${(props) =>
    props.$isLarge ? props.theme.theme_vars.border_radius_large : props.theme.theme_vars.border_radius};
  border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
  margin: -2px 0 0 0 !important; /* override higher level website css */
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;

/**
 * Suggestion items that display within the suggestion list
 */
export const AutocompleteSuggestionItem = styled.li`
  display: block;
  width: auto;
  left: 0;
  padding: calc(
    ${(props) =>
        props.$isLarge ? props.theme.theme_vars.spacingSizes.small : props.theme.theme_vars.spacingSizes.extra_small} +
      0.18rem
  ) !important;
  margin-bottom: 0 !important;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey_dark};
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  text-align: left;
  background: ${(props) =>
    props['aria-selected'] ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.white};
  :nth-child(2) {
    background: ${(props) =>
      props['aria-selected'] ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.grey_light};
  }
  color: ${(props) =>
    props['aria-selected'] ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black};

  &:last-of-type {
    border-bottom: 0px;
    /* round off the bottom corners to match the list itself, works ok for non-rounded theme too */
    border-bottom-left-radius: calc(
      ${(props) => (props.isLarge ? props.theme.theme_vars.border_radius_large : props.theme.theme_vars.border_radius)} -
        2px
    );
    border-bottom-right-radius: calc(
      ${(props) => (props.isLarge ? props.theme.theme_vars.border_radius_large : props.theme.theme_vars.border_radius)} -
        2px
    );
  }

  /* override bullet point styling in website */
  &:before {
    content: '' !important;
    width: 0px !important;
    height: 0px !important;
  }
`;

/**
 * Text of a displayed suggestion that doesn't match the user input
 */
export const AutocompleteSuggestionText = styled.span`
  font-weight: normal;
`;

/**
 * Text of a displayed suggestion that does match the user input
 */
export const AutocompleteSuggestionTextMatch = styled.span`
  font-weight: bold;
`;

export const LightErrorText = styled.p`
  ${(props) => props.theme.fontStyles}
  color: ${(props) => props.theme.theme_vars.colours.white};
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.1;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 18px;
    font-size: 1rem;
    line-height: 1.25;
  }
`;
