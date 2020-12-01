import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;

  ${(props) =>
    props.theme === "secondary" &&
    `background-color: black;
     color: white;`}
`;

export const StyledHeading = styled.h1`
  font-size: 32px;
`;

export const StyledDescription = styled.h2``;