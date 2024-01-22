import styled from 'styled-components';

export const Wrapper = styled.section`
  background: ${(props) => props.theme.theme_vars.colours.black};
  overflow: ${(props) => (props.noPadding ? 'hidden' : 'visible')};
  padding-bottom: 0px;
`;

export const Container = styled.div`
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;
  overflow: hidden;
  flex-direction: column;
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    margin-right: 30px;
    margin-left: 30px;
  }
  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-right: auto;
    margin-left: auto;
    max-width: ${(props) => props.theme.theme_vars.breakpoints.l};
  }
`;

export const Left = styled.div`
  order: 1;
  flex-basis: 40%;
  padding-right: 40px;
  @media screen and (max-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    padding-right: 0;
    flex-basis: auto;
    padding-top: 20px;
    order: 2;
    > div {
      padding-bottom: 20px;
      width: 100%;
    }
  }
`;

export const Right = styled.div`
  order: 2;
  flex-grow: 1;
  @media screen and (max-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    order: 1;
    flex-basis: 100%;
    width: 100%;
  }
`;

export const Image = styled.div`
  transition: all 0.25s ease;
  background-image: url('${(props) => props.$image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 760px;
  @media screen and (max-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    background-size: cover;
    height: 350px;
  }
`;

export const Wrapperold = styled.div`
  background-color: ${(props) => props.theme.theme_vars.colours.grey};
`;

export const ContainerOld = styled.div`
  background-color: ${(props) => props.theme.theme_vars.colours.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  flex-wrap: nowrap;
  flex-direction: column-reverse;
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    flex-direction: row;
  }
`;

export const LeftOld = styled.div`
  padding: 30px 0px;
  width: 100%;
  box-sizing: border-box;
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    width: 60%;
    padding: 10px 30px;
  }
`;

export const ImageOld = styled.div`
  transition: all 0.25s ease;
  background-image: url('${(props) => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: blue;
  width: 100%;
  height: 300px;
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    height: 500px;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    height: 700px;
  }
`;

export const StyledMaxWidthContainer = styled.div`
  ${(props) => props.theme.fontStyles}
  margin-right: 15px;
  margin-left: 15px;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    margin-right: 0px;
    margin-left: 0px;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    margin-right: 0px;
    margin-left: 0px;
  }
  @media screen and (min-width: calc(${(props) => props.theme.theme_vars.breakpoints.l} + 60px)) {
  }
`;

export const HiddenH1 = styled.h1`
  visibility: hidden;
  margin: 0;
  padding: 0;
  font-size: 0px;
`;
