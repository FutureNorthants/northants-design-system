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

  /* unless otherwise mandated, hide the 'hover version' of the Service Icon */
  .service-icon-hover {
    display: none;
  }

  /* in the event that this 'heading wrapper' is hovered over.. */
  &:hover {
    /* (a1) hide/show the 'regular version' of the Service Icon, depending on whether 'hasHover' is set to true/false */
    .service-icon {
      display: ${(props) => (props.$hasHover ? 'none' : 'block')};

      /* (a2) ...and hide/show the SVG that makes up the 'regular version' of the Service Icon to match */
      & > svg {
        display: ${(props) => (props.$hasHover ? 'none' : 'auto')};
      }
    }

    /* (b) show/hide the 'hover version' of the service icon, depending on whether 'hasHover' is set to true/false */
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
