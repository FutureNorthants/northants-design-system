import styled from "styled-components";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    ${props => props.theme.fontStyles}
    margin-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey}80;
`
export const Phase = styled.div`
    display: inline-block;
    font-weight: bold;
    padding: 5px 10px;
    margin-right: 5px;
    background: ${props => props.theme.theme_vars.colours.action}1A;
`
