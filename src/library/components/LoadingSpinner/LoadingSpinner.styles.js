import styled from "styled-components";

export const Spinner = styled.div`  
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${props => props.theme.theme_vars.colours.action};
    border-color: ${props => props.theme.theme_vars.colours.action} transparent ${props => props.theme.theme_vars.colours.action} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`
