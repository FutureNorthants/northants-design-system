import styled from "styled-components";

// Accordion

export const Container = styled.div`
  ${props => props.theme.fontStyles}
  margin-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey};

  @media (min-width: 40.0625em) {
        margin-bottom: 30px
  }
`

export const AccordionControls = styled.div`
    text-align: right;
`

export const OpenAllButton = styled.button`
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small};
    position: relative;
    z-index: 1;
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
    border-width: 0;
    color: ${props => props.theme.theme_vars.colours.action};
    background: none;
    cursor: pointer;
    &:hover {
        ${props => props.theme.linkStylesHover};
    }
    &:focus {
        ${props => props.theme.linkStylesFocus};
    }
    &:active {
        ${props => props.theme.linkStylesActive};
    }
`

export const VisuallyHidden = styled.span`
    ${props => props.theme.visuallyHidden}
`

// AccordionSection

export const Section = styled.div`
  padding-top: 15px;
  padding-top: 0;
`

export const SectionHeader = styled.div`
    ${props => props.theme.headingStyles}
    position: relative;
    padding-right: 40px;
    border-top: 1px solid ${props => props.theme.theme_vars.colours.grey};
    color: ${props => props.theme.theme_vars.colours.action};
    cursor: pointer;
    padding-top: 15px;
    padding-bottom: 15px;

    &:hover {
        border-top-color: ${props => props.theme.theme_vars.colours.action};
        -webkit-box-shadow: inset 0 2px 0 0 ${props => props.theme.theme_vars.colours.action};
        box-shadow: inset 0 2px 0 0 ${props => props.theme.theme_vars.colours.action}
    }
`

export const SectionHeading = styled.div`
    margin-top: 10px;
    margin-bottom: 5px;
`

export const SectionButton = styled.button`
    ${props => props.theme.theme_vars.h3}
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    padding: 0;
    border-width: 0;
    color: inherit;
    background: none;
    text-align: left;
    cursor: pointer;
    -webkit-appearance: none;


    &:focus {
        outline: 3px solid transparent;
        color: ${props => props.theme.theme_vars.colours.blacl};
        background-color: ${props => props.theme.theme_vars.colours.focus};
        -webkit-box-shadow: 0 -2px ${props => props.theme.theme_vars.colours.focus}, 0 4px ${props => props.theme.theme_vars.colours.black};
        box-shadow: 0 -2px ${props => props.theme.theme_vars.colours.focus}, 0 4px ${props => props.theme.theme_vars.colours.black};
        text-decoration: none
    }

    &::-moz-focus-inner {
        padding: 0;
        border: 0
    }

    &:after {
    content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0
    }

    &:hover:not(:focus) {
        text-decoration: underline;
    }

    &:hover {
        text-decoration: none;
    }
`

export const AccordionIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 15px;
    width: 16px;
    height: 16px;
    margin-top: -8px;

    &:after,
    &:before {
    content: "";
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 25%;
        height: 25%;
        margin: auto;
        border: 2px solid transparent;
        background-color: ${props => props.theme.theme_vars.colours.black};
    }

    &:before {
        width: 100%;
    }

    &:after {
        height: 100%;

        .accordion__section--expanded & {
            content: " ";
            display: none;
        }
    }
`

export const SectionSummary = styled.div`
    margin-top: 10px;
    margin-bottom: 0;
    color: ${props => props.theme.theme_vars.colours.black};
`

export const SectionContent = styled.div`
    display: none;
    padding-top: 15px;
    padding-bottom: 15px;

    h2, h3, h4, h5 {
        &:first-child {
            margin-top: 0;
        }
    }

    @media (min-width: 40.0625em) {
        padding-top: 15px
    }

    @media (min-width: 40.0625em) {
        padding-bottom: 25px
    }

    >:last-child {
        margin-bottom: 0
    }

    .accordion__section--expanded & {
        display: block;
    }
`