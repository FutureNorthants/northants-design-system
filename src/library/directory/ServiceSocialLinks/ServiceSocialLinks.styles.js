import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow: hidden;

  .striped-socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
    box-shadow: 0.5px 0.5px 0 0.5px
      ${(props) =>
        props.theme.cardinal_name === 'north'
          ? props.theme.theme_vars.colours.grey
          : props.theme.theme_vars.colours.action_light};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

export const WebLink = styled.a`
  word-break: break-all;
  display: block;
  text-align: center;
`;
