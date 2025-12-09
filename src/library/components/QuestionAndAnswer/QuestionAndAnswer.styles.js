import styled from 'styled-components';
import { VisuallyHidden } from '../../helpers/style-helpers';
import { ErrorText } from '../Input/Input.styles';

export const Container = styled.div`
  display: block;
`;

export const CategoryContainer = styled.div`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  background-color: ${(props) => props.theme.theme_vars.colours.action_light};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const Legend = styled.legend`
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const FormErrorText = styled(ErrorText)``;

export const Hidden = styled.span`
  ${VisuallyHidden}
`;

export const Answers = styled.div`
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
`;

export const ResultIcon = styled.div`
  width: ${(props) => props.theme.theme_vars.spacingSizes.x_large};
  color: ${(props) =>
    props.$correct ? props.theme.theme_vars.colours.positive : props.theme.theme_vars.colours.negative};
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;
