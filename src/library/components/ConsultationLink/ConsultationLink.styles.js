import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
  background: ${(props) => props.theme.theme_vars.colours.white} !important;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  overflow: hidden;
  text-decoration: none !important;
  font-weight: normal !important;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.grey_light
      : props.theme.theme_vars.colours.white} !important;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    flex-wrap: nowrap;
  }

  &:hover {
    .consultation-list__title {
      ${(props) => props.theme.linkStylesHover};
    }
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};

    .consultation-list__title {
      ${(props) => props.theme.linkStylesFocus};
    }
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};

    .consultation-list__title {
      ${(props) => props.theme.linkStylesActive};
    }
  }

  .consultation-list__image-container {
    position: relative;
    min-height: 200px;
    padding-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
    padding-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    .consultation-list__image-container {
      min-height: 150px;
    }
  }
`;

export const Promoted = styled.div`
  border: 2px solid ${(props) => props.theme.theme_vars.colours.action_light};
  background-color: ${(props) => props.theme.theme_vars.colours.featured};
  color: ${(props) => props.theme.theme_vars.colours.white};
  display: inline-block;
  padding: ${(props) =>
    `${props.theme.theme_vars.spacingSizes.extra_small} ${props.theme.theme_vars.spacingSizes.small}`};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  cursor: default;
`;

export const ConsultationContent = styled.div`
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
  border: 2px solid ${(props) => props.theme.theme_vars.colours.grey};
  background: transparent;
  display: inline-block;
  padding: ${(props) =>
    `${props.theme.theme_vars.spacingSizes.extra_small} ${props.theme.theme_vars.spacingSizes.small}`};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  background-color: ${(props) => props.theme.theme_vars.colours.grey_light};
  cursor: default;
`;

export const Status = styled.div`
  background-color: ${(props) =>
    props.$isOpen ? props.theme.theme_vars.colours.positive : props.theme.theme_vars.colours.negative}16;
  display: block;
  color: ${(props) => props.theme.theme_vars.colours.black};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
`;

export const StatusTitle = styled.span`
  display: block;
`;

export const StatusDate = styled.span`
  display: block;
  font-weight: bold;
`;
