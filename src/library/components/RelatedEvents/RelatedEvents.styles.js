import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const Title = styled.h2`
  text-align: left;
  border-bottom: 2px solid ${(props) => props.theme.theme_vars.colours.action};
  padding: ${(props) => `${props.theme.theme_vars.spacingSizes.medium} ${props.theme.theme_vars.spacingSizes.small}`};
  font-size: 1em;
  ${(props) => props.theme.fontStyles};
`;

export const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

export const ListItem = styled.li`
  margin-left: 0;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  padding-left: 0;
  left: 0;
  padding-right: 0;
`;
