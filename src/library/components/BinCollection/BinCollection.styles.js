import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const DayWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.large};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  background-color: ${(props) => props.theme.theme_vars.colours.white};
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const CollectionHeader = styled.div`
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};
  display: block;
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
`;

export const CollectionDay = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  padding-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const CollectionType = styled.div`
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};
  display: block;
`;
