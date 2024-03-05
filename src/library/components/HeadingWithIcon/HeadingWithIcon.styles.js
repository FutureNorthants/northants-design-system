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
  }

  .service-icon-hover {
    display: none;
  }

  &:hover {
    .service-icon {
      display: ${(props) => (props.$hasHover ? 'none' : 'block')};
    }
    .service-icon-hover {
      display: ${(props) => (props.$hasHover ? 'block' : 'none')};
    }
  }
`;

export const HeadingContainer = styled.div`
  width: ${(props) =>
    props.$level === 1
      ? `calc(100% - 65px)`
      : props.$level === 2
      ? `calc(100% - 45px)`
      : props.$level === 3
      ? `calc(100% - 30px)`
      : `calc(100% - 20px)`};
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    width: calc(100% - 85px);
  }
`;

export const SubHeading = styled.span`
  display: block;
  margin: 0;
`;
