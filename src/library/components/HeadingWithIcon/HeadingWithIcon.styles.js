import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    vertical-align: middle;
    display: inline-block;
    width: calc(100% - 65px);
    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
      width: calc(100% - 85px);
    }
  }

  .service-icon-hover {
    display: none;
  }

  &:hover {
    .service-icon {
      display: ${(props) => (props.hasHover ? 'none' : 'block')};
    }
    .service-icon-hover {
      display: ${(props) => (props.hasHover ? 'block' : 'none')};
    }
  }
`;

export const Icon = styled.div`
  vertical-align: middle;
`;
export const IconWrapper = styled.div`
  width: ${(props) =>
    props.iconSize === 1 ? '65px' : props.iconSize === 2 ? '45px' : props.iconSize === 3 ? '30px' : '20px'};
  height: auto;

  svg {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    width: ${(props) =>
      props.iconSize === 1 ? '85px' : props.iconSize === 2 ? '70px' : props.iconSize === 3 ? '55px' : '40px'};
    height: auto;
  }
`;
