import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const SearchHeader = styled.div`
  background-color: ${(props) => props.theme.theme_vars.colours.action};
  color: ${(props) => props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const Label = styled.label`
  color: ${(props) => props.theme.theme_vars.colours.white};
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Button = styled.button`
  border: 1px solid ${(props) => props.theme.theme_vars.colours.white};
  background: ${(props) => props.theme.theme_vars.colours.action};
  color: ${(props) => props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  cursor: pointer;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};

  &:hover {
    background: ${(props) => props.theme.theme_vars.colours.action_dark};
  }

  &:focus {
    outline: none;
    background: ${(props) => props.theme.theme_vars.colours.focus};
  }
`;

export const ButtonText = styled.span`
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const ResultInfo = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  color: ${(props) => props.theme.theme_vars.colours.grey_dark};
`;

const serviceBackground = (props) => {
  if (props.resultNumber % 2 === 0) {
    return css`
      background-color: ${(props) => props.theme.theme_vars.colours.grey_light}75;
    `;
  } else {
    return css`
      background-color: ${(props) => props.theme.theme_vars.colours.white};
    `;
  }
};

export const ServiceContainer = styled.div`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  ${serviceBackground};
`;

export const Address = styled.span`
  word-wrap: break-word;
`;
