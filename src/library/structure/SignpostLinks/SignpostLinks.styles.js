import styled from 'styled-components';

export { SignpostLink } from '../../components/SignpostLinksList/SignpostLinksList.styles';

export const Container = styled.div`
  ${(props) => props.theme.fontStyles}
  max-width: 500px;
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  padding: 20px;
  background-color: ${(props) => props.theme.theme_vars.colours.grey_light};

  p:first-of-type {
    margin-top: 0;
    margin-bottom: 15px;
  }
  p:last-of-type {
    margin-bottom: 0 !important;
  }

  width: 100%;
  margin-left: -15px;
  padding: 15px;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    margin-left: 0;
    padding: 20px;
    max-width: calc(100% - 40px);
  }
`;
export const Paragraph = styled.p``;
export const LastParagraph = styled.p`
  margin-top: 25px;
  margin-bottom: 0;
`;

export const SingleButtonContainer = styled.div`
  svg {
    fill: ${(props) => props.theme.theme_vars.colours.white};
    margin-right: 5px;
    vertical-align: bottom;
  }
  &:focus-within {
    svg {
      fill: ${(props) => props.theme.theme_vars.colours.black};
    }
  }
`;

export const RenderingMessage = styled.p`
  color: red;
  margin-top: 0;
  margin-bottom: 12px;
`;
