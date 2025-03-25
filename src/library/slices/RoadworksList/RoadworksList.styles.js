import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const RoadworkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Roadwork = styled.li`
  display: block;
  margin-left: 0;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium} !important;
  padding: ${(props) => `${props.theme.theme_vars.spacingSizes.small} ${props.theme.theme_vars.spacingSizes.medium}`};
  left: 0;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  background-color: ${(props) =>
    props.theme.cardinal_name === 'west'
      ? props.theme.theme_vars.colours.grey_light + '7a'
      : props.theme.theme_vars.colours.white};

  h3 {
    margin-top: ${(props) => props.theme.theme_vars.spacingSizes.medium} !important;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};

  &:last-of-type {
    margin-bottom: 0;
  }

  & span svg {
    vertical-align: middle;
  }
`;

export const IconText = styled.div`
  padding-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const NoMatches = styled.p`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
`;
