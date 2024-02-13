import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const CollectionType = styled.div`
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  background-color: ${(props) => props.theme.theme_vars.colours.white};
`;

export const CollectionHeader = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.theme_vars.colours.action_light};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.theme_vars.colours.action_light};
  flex-wrap: wrap;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    flex-wrap: nowrap;
  }
`;

export const CollectionHeading = styled.div`
  flex-grow: 1;
`;

export const CollectionDate = styled.p`
  font-weight: bold;
  margin-bottom: 0;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
`;

export const CollectionItems = styled.div`
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border-right: 1px solid
    ${(props) =>
      props.$hasBorder ? props.theme.theme_vars.colours.action_light : props.theme.theme_vars.colours.white};
`;
