import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  border-bottom: ${(props) => (props.$hasBorder ? `1px solid ${props.theme.theme_vars.colours.grey}` : 'none')};
  margin-top: ${(props) => (props.$hasMargin ? `${props.theme.theme_vars.spacingSizes.medium}` : 0)};
  margin-bottom: ${(props) => (props.$hasMargin ? `${props.theme.theme_vars.spacingSizes.medium}` : 0)};
`;

export const EventRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const IconContainer = styled.div`
  width: 40px;
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Details = styled.div`
  ${(props) => props.theme.fontStyles}
  display: flex;
  align-items: center;
  font-weight: bold;

  span {
    display: inline;
  }
`;
