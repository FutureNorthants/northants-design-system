import styled from 'styled-components';
import { ErrorText } from '../../components/Input/Input.styles';
import { VisuallyHidden } from '../../helpers/style-helpers';

export const Container = styled.div`
  display: block;
`;

export const Legend = styled.legend`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const FormErrorText = styled(ErrorText)``;

export const Hidden = styled.span`
  ${VisuallyHidden}
`;
