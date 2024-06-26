import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.fontStyles};
  overflow: hidden;
  margin: 40px auto 5px auto;
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.white
      : props.theme.theme_vars.colours.grey_light};
  border-bottom: 3px solid ${(props) => props.theme.theme_vars.colours.action};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: none;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    margin-left: 0;
    width: 100%;
    border-radius: 5px;
  }
`;

export const ImageLink = styled.a`
  min-height: 200px;
  width: 100%;
  display: block;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: 50%;
    min-height: 300px;
  }
`;

export const Wrapper = styled.div`
  width: calc(100% - 30px);
  padding: 15px;

  h2 {
    margin-top: 0;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: calc(50% - 60px);
    padding: 30px;
  }
`;

export const Content = styled.div``;

export const CTA = styled.a`
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  display: inline-block;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small} 7px;
  margin-left: -7px;
  ${(props) => props.theme.linkStyles};
  :hover {
    ${(props) => props.theme.linkStylesHover};
  }
  :focus {
    ${(props) => props.theme.linkStylesFocus};
  }
  :active {
    ${(props) => props.theme.linkStylesActive};
  }
`;
