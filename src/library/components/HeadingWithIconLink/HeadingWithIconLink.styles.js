import styled from 'styled-components';
import Heading from '../Heading/Heading';

export const Link = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;

  .service-icon-hover {
    display: none;
  }

  &:hover .service-icon-hover,
  &:focus .service-icon-hover {
    display: block;
  }

  &:hover .service-icon,
  &:focus .service-icon {
    display: none;
  }

  &:hover {
    text-decoration: none;

    h2 {
      ${(props) => props.theme.linkStylesHover}
    }
  }

  &:focus {
    outline: none;
    text-decoration: none;
    ${(props) => props.theme.linkStylesFocus}

    h2 {
      text-decoration: none;
    }
  }

  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const Title = styled(Heading)`
  ${(props) => props.theme.linkStyles}

  padding: 15px 0;
  margin: 0;
  font-size: 24px;
  font-size: 1.3rem;
  line-height: 1.4;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 36px;
    font-size: 1.5rem;
    line-height: 1.3;
  }
`;
