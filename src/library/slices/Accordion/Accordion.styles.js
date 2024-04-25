import styled, { css } from 'styled-components';

// Accordion

export const Container = styled.div`
  ${(props) => props.theme.fontStyles}
  margin-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};

  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
`;

export const AccordionControls = styled.div`
  text-align: right;
`;

export const OpenAllButton = styled.button`
  font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
  position: relative;
  z-index: 1;
  margin: 0;
  margin-bottom: 5px;
  padding-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
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

// AccordionSection

export const Section = styled.div`
  padding-top: 0;
`;

export const SectionHeader = styled.div`
  ${(props) => props.theme.headingStyles}
  position: relative;
  padding-right: 40px;
  border-top: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  color: ${(props) => props.theme.theme_vars.colours.action};
  cursor: pointer;
  padding-bottom: 10px;

  &:hover {
    border-top-color: ${(props) => props.theme.theme_vars.colours.action};
    -webkit-box-shadow: inset 0 2px 0 0 ${(props) => props.theme.theme_vars.colours.action};
    box-shadow: inset 0 2px 0 0 ${(props) => props.theme.theme_vars.colours.action};
  }
`;

export const SectionHeading = styled.div``;

const SectionButtonIsFilteredStyles = (props) => {
  if (props.$isFilter) {
    return css`
      ${(props) => props.theme.theme_vars.h4}
      padding-top: 15px;
      padding-bottom: 15px;
    `;
  } else {
    return css`
      ${(props) => props.theme.theme_vars.h3}
      padding-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
      padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
    `;
  }
};

export const SectionButton = styled.button`
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
  text-decoration: underline;

  ${SectionButtonIsFilteredStyles}

  &:focus {
    outline: 3px solid transparent;
    color: ${(props) => props.theme.theme_vars.colours.black};
    background-color: ${(props) => props.theme.theme_vars.colours.focus};
    -webkit-box-shadow: 0 -2px ${(props) => props.theme.theme_vars.colours.focus},
      0 4px ${(props) => props.theme.theme_vars.colours.black};
    box-shadow: 0 -2px ${(props) => props.theme.theme_vars.colours.focus},
      0 4px ${(props) => props.theme.theme_vars.colours.black};
    text-decoration: none;
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover:not(:focus) {
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const ReadMore = styled.button`
  ${(props) => props.theme.linkStyles}
  background: none;
  border: none;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 0;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
`;
export const ShowLessButton = styled.button`
  ${(props) => props.theme.linkStyles}
  background: none;
  border: none;
  margin-top: 15px;
  padding: 0;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
  cursor: pointer;

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
  top: 22px;
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
    top: 0;
    left: 6px;
    transform: rotate(135deg);
  }

  &:before {
    .accordion__section--expanded & {
      transform: rotate(-45deg);
      top: 10px;
    }
  }
`;

export const SectionSummary = styled.div`
  margin-top: 10px;
  margin-bottom: 0;
  color: ${(props) => props.theme.theme_vars.colours.black};
`;

export const SectionContent = styled.div`
  display: none;
  padding-top: 5px;
  padding-bottom: 15px;

  h2,
  h3,
  h4,
  h5 {
    &:first-child {
      margin-top: 0;
    }
  }

  @media (min-width: 40.0625em) {
    padding-bottom: 25px;
  }

  > :last-child {
    margin-bottom: 0;
  }

  .accordion__section--expanded & {
    display: block;
  }
`;
