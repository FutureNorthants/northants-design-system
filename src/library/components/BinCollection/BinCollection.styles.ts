import styled from 'styled-components';

interface FormContainerProps {
  isLoading: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
`;

export const BinCollectionButtonStyles = styled.div`
    button {
      margin: 10px 10px 22px 10px;
    }
`;

export const FormContainer = styled.div<FormContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${(props) => 
      props.isLoading && `
          opacity: 0.5; 
          pointer-events: none;
      `
  }
`;

export const DropDownSelectContainer = styled.div`
  padding-bottom: 20px;
`;

export const FormInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const UPRNPageTitleRow = styled.div`
  justify-content: center;
  margin-bottom: 1em;
  margin-top: 2em;
  width: 100%;
`;

export const UPRNPageUPRNRow = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: .5em;
  width: 100%;
`;

export const UPRNPageSectionTitle = styled.div`
  font-size: 2em;
  font-weight: 700;
`;

export const UPRNPageUPRNTitle = styled.div`
  font-size: 1.5em;
`;

export const HomePageResetButton = styled.input``;
