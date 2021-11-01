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
    width: 21rem;
    margin-left: 0rem;
    margin-top: -1.3rem;
    font-family: ${props => props.theme.theme_vars.fontstack};
`;

/**
 * Suggestion items that display within the suggestion list
 */
export const AutocompleteSuggestionItem = styled.li`
    padding: 0.5rem;
    cursor: pointer;
    border: 1px solid darkgray;
    font-size: 1rem;
    text-align: left;
    border-radius: 5px; !important
    margin-bottom: 3px;
    background: ${props => props["aria-selected"] ? "black" : "lightgoldenrodyellow"};
    color: ${props => props["aria-selected"] ? "white" : "black"};
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
