import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* margin-top: 50px; */
  /* border: 1px solid red; */

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    /* border: 1px solid green; */
  }

  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.l} + 60px)) {
    /* border: 1px solid blue; */
  }
`;

export const ShowFiltersButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  ${(props) => props.theme.linkStyles}
  font-size: 1.2em;
  margin-bottom: 5px;
  display: block;

  &:hover {
    ${(props) => props.theme.linkStylesHover}
    cursor: pointer;
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

const handleFullScreen = (props) => {
  if (props.$isFullScreen) {
    return css`
      background: ${(props) =>
        props.noBackground
          ? 'transparent'
          : props.theme.cardinal_name === 'north'
            ? props.theme.theme_vars.colours.grey_light
            : props.theme.theme_vars.colours.white};
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      padding: 20px;
      box-sizing: border-box;
      overflow: auto;
    `;
  }
};

export const Filters = styled.div`
  display: ${(props) => (props.$isFullScreen ? 'block' : 'none')};

  ${handleFullScreen}

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: block;
    position: relative;
    background: transparent;
  }
`;

export const FilterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 10px;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: block;
    margin-bottom: 0px;
    margin-top: 20px;
    padding: 0;
  }
`;

export const FilterHeading = styled.h2`
  ${(props) => props.theme.theme_vars.h2}

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    ${(props) => props.theme.theme_vars.h3}
  }
`;

// margin: 0;
// padding: 0;
// display: block;
// overflow: hidden;
