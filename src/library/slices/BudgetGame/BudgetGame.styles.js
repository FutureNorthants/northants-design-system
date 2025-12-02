import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.large};
`;

export const Totalizer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    flex-wrap: nowrap;
  }
`;

export const TotalAmount = styled.span`
  font-weight: bold;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.large};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.extra_small} !important;
  display: block;
  color: ${(props) =>
    props.$current > props.$target ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.positive};
`;

export const TargetAmount = styled.span`
  font-weight: normal;
  font-size: ${(props) => props.theme.theme_vars.fontSizes.medium};
  display: block;
`;

const calculateTotal = (props) => {
  if (props.$current <= props.$target) {
    return css`
      background-color: ${(props) => props.theme.theme_vars.colours.positive};
      width: 100%;
    `;
  }
  const width = props.$current > 0 ? Math.floor((props.$target / props.$current) * 100) : 0;
  return css`
    background-color: ${(props) => props.theme.theme_vars.colours.action};
    width: ${width + '%'};
    border-right: 1px solid black;
  `;
};

export const Target = styled.div`
  height: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  ${calculateTotal}
`;

const calculateOver = (props) => {
  if (props.$current < props.$target) {
    return css`
      display: none;
    `;
  }
  const width = props.$current > 0 ? Math.ceil(((props.$current - props.$target) / props.$current) * 100) : 0;
  return css`
    width: ${width + '%'};
  `;
};
export const OverBudget = styled.div`
  height: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  background-color: ${(props) => props.theme.theme_vars.colours.negative};
  ${calculateOver}
`;
