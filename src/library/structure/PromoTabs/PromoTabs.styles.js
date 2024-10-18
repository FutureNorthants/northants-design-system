import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};

  .promo-tab-column {
    padding-top: 0;
    padding-bottom: 0;
  }

  .promo-tab-row {
    height: 100%;
  }

  .promo-tab-column.hideColumn {
    display: none;
  }
`;

export const TitleButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  text-align: left;
  color: ${(props) => props.theme.theme_vars.colours.action};
  background: ${(props) =>
    props.$isActive ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.action_light};
  padding: ${(props) => `${props.theme.theme_vars.spacingSizes.large} ${props.theme.theme_vars.spacingSizes.medium}`};
  width: 100%;
  position: relative;
  border-bottom: ${(props) => props.theme.theme_vars.border_width_thin} solid
    ${(props) => props.theme.theme_vars.colours.grey};
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};
  text-decoration-style: ${(props) => (props.$show ? `dashed` : `solid`)};
  cursor: pointer;

  &:first-of-type {
    border-top-left-radius: ${(props) => props.theme.theme_vars.border_radius};
  }
  &:last-of-type {
    border-bottom-left-radius: ${(props) => props.theme.theme_vars.border_radius};
    border-bottom: none;
  }

  &:hover {
    ${(props) => props.theme.linkStylesHover};
  }
  &:focus {
    background-color: ${(props) => props.theme.linkStylesFocus};
    z-index: 2;
  }
  &:active {
    background-color: ${(props) => props.theme.linkStylesActive};
    z-index: 2;
  }
`;

export const ContentContainer = styled.div`
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 200px;
  position: relative;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    min-height: 360px;
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.small};
    min-height: auto;
  }

  img {
    border-radius: 0 0 3px 3px;

    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
      border-radius: 0 3px 3px 0;
    }
  }
`;

export const PromoText = styled.div`
  ${(props) => props.theme.fontStyles};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const PromoLink = styled.a`
  ${(props) => props.theme.fontStyles};
  ${(props) => props.theme.linkStyles};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  display: block;
`;
