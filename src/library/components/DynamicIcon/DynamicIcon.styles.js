import styled from 'styled-components';

export const Icon = styled.span`
  vertical-align: middle;
  width: 100%;
`;

export const IconWrapper = styled.span`
  display: flex;
  flex-shrink: 0;
  width: ${(props) =>
    props.iconSize === 1 ? '65px' : props.iconSize === 2 ? '45px' : props.iconSize === 3 ? '30px' : '20px'};
  height: auto;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    width: ${(props) =>
      props.iconSize === 1 ? '85px' : props.iconSize === 2 ? '70px' : props.iconSize === 3 ? '55px' : '40px'};
    height: auto;
  }

  svg {
    width: 100%;
    height: auto;
  }

  .service-icon-hover {
    display: none;
  }

  &:hover {
    .service-icon {
      display: none;
    }

    .service-icon-hover {
      display: block;
    }
  }
`;
