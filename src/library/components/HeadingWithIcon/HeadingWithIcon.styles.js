import styled from 'styled-components';

export const HeadingWrapper = styled.span`
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
