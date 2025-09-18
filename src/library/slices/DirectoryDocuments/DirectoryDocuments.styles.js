import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  input {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 0;
  height: 100%;
`;

export const DocumentContainer = styled.div`
  background: ${(props) => props.theme.theme_vars.colours.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const DocumentDescription = styled.p`
  margin-bottom: 0 !important;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
