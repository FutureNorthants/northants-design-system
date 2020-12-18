import styled, {css} from "styled-components";

export const Container = styled.div`
  ${props => props.theme.fontStyles}
  /* background-color: ${props => props.theme.theme_vars.colours.action}; */
`

export const Title = styled.div`
  font-size: ${props => props.theme.theme_vars.fontSizes.extra_small};
  border-bottom: 1px solid ${props => props.theme.theme_vars.colours.action};
  padding: ${props => props.theme.theme_vars.spacingSizes.small};
`


export const Body = styled.div`
  /* border: 1px solid blue; */
`

export const SectionTitle = styled.h3`
  font-size: ${props => props.theme.theme_vars.fontSizes.small};
  margin: ${props => props.theme.theme_vars.spacingSizes.extra_small} 0;
  padding: ${props => props.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const focusListItem = css`
    color: ${props => props.theme.theme_vars.colours.black};
    background-color: ${props => props.theme.theme_vars.colours.focus};
    outline: none;
    border-bottom-color: ${props => props.theme.theme_vars.colours.black};
    transition: background-color 0.3s ease 0s border-bottom-color 0.3s ease 0s;
`


export const ListItem = styled.li`
  &[aria-current] a {
    background-color: ${props => props.theme.theme_vars.colours.action_light};
    color: ${props => props.theme.theme_vars.colours.black};
    border-bottom-color: transparent;

    &:focus {
      ${focusListItem}
    }
  }

`

export const ListItemLink = styled.a`
  display: block;
  color: ${props => props.theme.theme_vars.colours.action};
  margin: ${props => props.theme.theme_vars.spacingSizes.extra_small} 0;
  padding: ${props => props.theme.theme_vars.spacingSizes.small};
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:focus {
    ${focusListItem}
  }
`