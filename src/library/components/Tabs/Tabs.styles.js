import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

const niceColours = ['blue', 'red', 'yellow', 'purple'];

export const TabButton = styled.div`
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => niceColours[props.$niceColourIndex]};
  color: white;
  width: 200px;
  height: 100px;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-color: black;
  border-width: 1px;
  display: inline-block;
  vertical-align: middle;
  font-size: 35pt;
  z-index: ${(props) => props.$zIndex};

  &:hover {
    cursor: pointer;
    color: blue;

    p {
      color: blue;
    }
  }
`;

export const TabButtonText = styled.p`
  color: white;
  text-align: center;
  display: block;
  width: 100%;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

export const TabContent = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => niceColours[props.$niceColourIndex]};
  height: 100%;
  z-index: ${(props) => props.$zIndex};
`;

export const TabRow = styled.div`
  display: inline-block;
`;

export const TabContents = styled.div`
  display: inline-block;
  background-color: red;
  width: 100%;
  height: 100%;
`;
