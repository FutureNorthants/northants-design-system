import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

const niceColours = ['red', 'blue', 'green'];

export const StylisedDiv = styled.div`
  width: 100px;
  height: 200px;
  background-color: ${(props) => niceColours[props.$colourNumber % niceColours.length]};
  position: absolute;
  //top: ${(props) => props.$colourNumber * 50}px;
  //left: ${(props) => props.$colourNumber * 50}px;
  top: ${(props) => {
    props.$dragEndCoords.y;
  }}px;
  left: ${(props) => {
    props.$dragEndCoords.x;
  }}px;
`;

/* 



  */
