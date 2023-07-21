import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const SearchHeader = styled.div`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.theme_vars.colours.grey_light}75;
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};

  input {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const HintText = styled.div`
  color: ${(props) => props.theme.theme_vars.colours.grey_dark};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 0;
  height: 100%;
`;

export const Button = styled.button`
  border: 1px solid ${(props) => props.theme.theme_vars.colours.white};
  background: ${(props) => props.theme.theme_vars.colours.action};
  color: ${(props) => props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  cursor: pointer;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  min-height: 42px;
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};

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

export const Fieldset = styled.fieldset`
  display: block;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  position: relative;
`;

export const Legend = styled.legend`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 0;
  font-weight: bold;
`;

export const Category = styled.div``;

export const DocumentContainer = styled.div`
  background: ${(props) => props.theme.theme_vars.colours.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const DocumentDescription = styled.p``;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
