import styled, { css } from 'styled-components';

const promotedStyles = (props) => {
  if (props.$isPromoted) {
    return css`
      border: 5px solid ${(props) => props.theme.theme_vars.colours.action_light};
      background: ${(props) => props.theme.theme_vars.colours.white} !important;
    `;
  } else {
    return css`
      border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action};
      background: ${(props) =>
        props.theme.cardinal_name === 'north'
          ? props.theme.theme_vars.colours.white
          : props.theme.theme_vars.colours.grey_light} !important;
    `;
  }
};

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  ${promotedStyles};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  overflow: hidden;
  text-decoration: none !important;
  font-weight: normal !important;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    flex-wrap: nowrap;
  }

  &:hover {
    border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;

    .event-list__title {
      ${(props) => props.theme.linkStylesHover};
    }
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;

    .event-list__title {
      ${(props) => props.theme.linkStylesFocus};
    }
  }

  &:active {
    outline: none;
    border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;

    .event-list__title {
      ${(props) => props.theme.linkStylesActive};
    }
  }

  .event-list__image-container {
    position: relative;
    min-height: 200px;
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    .event-list__image-container {
      min-height: 150px;
    }
  }
`;

export const Promoted = styled.div`
  border: 2px solid ${(props) => props.theme.theme_vars.colours.action_light};
  background-color: ${(props) => props.theme.theme_vars.colours.action_light};
  color: ${(props) => props.theme.theme_vars.colours.action_dark};
  display: inline-block;
  padding: ${(props) =>
    `${props.theme.theme_vars.spacingSizes.extra_small} ${props.theme.theme_vars.spacingSizes.small}`};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const EventContent = styled.div`
  padding: ${(props) =>
    props.$hasPadding
      ? props.theme.theme_vars.spacingSizes.medium
      : `${props.theme.theme_vars.spacingSizes.extra_small} ${props.theme.theme_vars.spacingSizes.medium}`};
  ${(props) => props.theme.fontStyles};
`;

export const Title = styled.div`
  ${(props) => props.theme.linkStyles};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  font-size: 1.2rem;
  line-height: 1.2;
  min-width: 100%;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 1.35rem;
    line-height: 1.3;
    max-width: 960px;
  }
`;

export const Description = styled.div`
  ${(props) => props.theme.fontStyles};
`;

export const Parent = styled.div`
  border: 2px solid ${(props) => props.theme.theme_vars.colours.action_light};
  background: transparent;
  display: inline-block;
  padding: ${(props) =>
    `${props.theme.theme_vars.spacingSizes.extra_small} ${props.theme.theme_vars.spacingSizes.small}`};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
`;
