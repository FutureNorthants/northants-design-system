import styled, {css} from "styled-components";

export const Container = styled.div`
  ${props => props.theme.fontStyles}
  background-color: ${props => props.theme.theme_vars.colours.action_light}; 
  border-radius: ${props => props.theme.theme_vars.border_radius};
  
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    background-color: transparent; 
  }
`

export const MobileTitleButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.theme_vars.colours.action};
  padding: ${props => props.theme.theme_vars.spacingSizes.small};
  font-size: 1em;

  &:focus {
    outline: 2px solid ${props => props.theme.theme_vars.colours.focus};
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    display: none;
  }
`

export const Title = styled.div`
  display: none;
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    display: block;
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.action};
    padding: ${props => props.theme.theme_vars.spacingSizes.small};
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small};

    &:focus {
      outline: none;
    }
  }
`


export const Body = styled.div`
  &.closed {
    display: none;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    &.closed {
      display: block;
    }
  }
`

export const SectionTitle = styled.h3`
  margin: ${props => props.theme.theme_vars.spacingSizes.extra_small} 0;
  padding: ${props => props.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
`

export const List = styled.ul`
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
`

const focusListItem = css`
    color: ${props => props.theme.theme_vars.colours.black};
    background-color: ${props => props.theme.theme_vars.colours.focus};
    outline: none;
    border-bottom-color: ${props => props.theme.theme_vars.colours.black};
    transition: background-color 0.3s ease 0s border-bottom-color 0.3s ease 0s;
`


export const ListItem = styled.li`
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;

  &::before {
    display: none;
    position: relative;
  }


  &[aria-current] a {
    display: none;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
      display: block;
      background-color: ${props => props.theme.theme_vars.colours.action_light};
      color: ${props => props.theme.theme_vars.colours.black};
      border-bottom-color: transparent;

      &:focus {
        ${focusListItem}
      }
    }
  }

`

export const ListItemLink = styled.a`
  display: block;
  color: ${props => props.theme.theme_vars.colours.action};
  padding: 5px 10px;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover {
    cursor: pointer;
    transition: background-color 0.3s ease 0s;
    background-color: ${props => props.theme.theme_vars.colours.action_light}80;
  }

  &:focus {
    ${focusListItem}
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
    margin: ${props => props.theme.theme_vars.spacingSizes.extra_small} 0;
  }
`