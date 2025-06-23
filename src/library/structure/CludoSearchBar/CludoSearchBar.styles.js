import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  .wnc-cludo-input {
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
  }

  .wnc-cludo-input input {
    padding: 10px;
    min-height: 44px;
    border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
    border-radius: 6px 0 0 6px;
    flex-grow: 1;
    font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  }

  .wnc-cludo-input input:focus,
  .wnc-cludo-input input:active {
    outline: none;
    border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
    border-radius: 6px 0 0 6px;
    box-shadow: 0 0 0 2px #e2ca76, 0 0 0 4px #000;
  }

  .wnc-cludo-input button {
    height: 46px;
    width: 46px;
    margin-left: 0;
    border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
    border-radius: 0 6px 6px 0;
    background-color: ${(props) => props.theme.theme_vars.colours.grey_darkest};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.theme_vars.action_dark};
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
