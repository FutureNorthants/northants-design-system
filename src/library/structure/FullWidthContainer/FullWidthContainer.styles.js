import styled from 'styled-components';

const handleContainerPadding = (noPadding) => {
  if (noPadding) {
    return 0;
  } else {
    return '50px 0';
  }
};

export const Container = styled.div`
  background: ${(props) => (props.noBackground ? 'transparent' : props.theme.theme_vars.colours.grey_light)};
  padding: ${({ noPadding }) => handleContainerPadding(noPadding)};
`;
