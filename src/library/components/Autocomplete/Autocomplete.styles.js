import styled from "styled-components";
import { StyledInput } from "../Input/Input.styles";

/**
 * We reuse the normal Input control but just make it wider by default
 */
export const AutocompleteInput = styled(StyledInput)`
    width: 20rem;
`;

/**
 * The list of suggestion items that displays when the user input turns up in any suggestions
 */
export const AutocompleteSuggestionList = styled.ul`
    width: 20.7rem;
    margin-left: 0rem;
    margin-top: -1.6rem;
    font-family: ${props => props.theme.theme_vars.fontstack};
    border-radius: ${props => props.theme.theme_vars.border_radius};
    border: 2px solid ${props => props.theme.theme_vars.colours.black};
`;

/**
 * Suggestion items that display within the suggestion list
 */
export const AutocompleteSuggestionItem = styled.li`
    padding: 0.5rem;
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey_dark};
    font-size: ${props => props.theme.theme_vars.fontSizes.small};
    text-align: left;
    background: ${props => props["aria-selected"] ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.white };
    :nth-child(2) {
        background: ${props => props["aria-selected"] ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.grey_light };    
    }
    color: ${props => props["aria-selected"] ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.black };
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
