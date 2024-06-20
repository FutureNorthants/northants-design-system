import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const StartChat = styled.div`
  display: ${(props) => (props.$showForm ? 'none' : 'block')};
  position: fixed;
  bottom: calc(${(props) => props.theme.theme_vars.spacingSizes.medium} + 60px);
  right: ${(props) => props.theme.theme_vars.spacingSizes.medium};

  /* When larger than xl position button to be just outside the container */
  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.xl} + ${(props) =>
      props.theme.theme_vars.spacingSizes.medium})) {
    right: calc((100% - ${(props) => props.theme.theme_vars.breakpoints.xl}) / 2);
  }
`;

export const Modal = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.$showForm ? 'flex' : 'none')};
`;

export const ChatBackground = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  min-height: 100vh;
  background-color: ${(props) => props.theme.theme_vars.colours.black}66;
  display: ${(props) => (props.$showForm ? 'block' : 'none')};
  z-index: 3;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  cursor: pointer;
  background-color: ${(props) => props.theme.theme_vars.colours.action_light};
  outline: none;
  border: 1px solid ${(props) => props.theme.theme_vars.colours.action_light};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};

  &:hover {
    background-color: ${(props) => props.theme.theme_vars.colours.action};
    color: ${(props) => props.theme.theme_vars.colours.white};

    svg {
      fill: ${(props) => props.theme.theme_vars.colours.white};
    }
  }
`;

export const FormContainer = styled.div`
  display: ${(props) => (props.$showForm ? 'block' : 'none')};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  border-radius: ${(props) => props.theme.theme_vars.border_radius_large};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.theme_vars.colours.white};
  position: relative;
  margin: 0 auto;
  z-index: 4;
  overflow: auto;
  max-width: 350px;
  max-height: 100vh;

  p {
    margin-bottom: 0;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormHeading = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
`;
