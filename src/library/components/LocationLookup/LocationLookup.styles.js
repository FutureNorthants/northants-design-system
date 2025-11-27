import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const Label = styled.label`
  margin-bottom: 5px;
  display: block;
`;

export const ErrorMessage = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.theme_vars.colours.negative};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: end;

  input[type='text'] {
    min-height: 44px;
  }
`;

export const ButtonContainer = styled.div`
  padding-bottom: 25px;
`;

export const ResetButton = styled.button`
  color: ${(props) => props.theme.theme_vars.colours.action};
  font-weight: bold;
  background: none;
  text-decoration: underline;
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  cursor: pointer;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
`;

export const LocationFound = styled.div`
  background-color: ${(props) => props.theme.theme_vars.colours.positive};
  color: ${(props) => props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  font-weight: bold;
`;
