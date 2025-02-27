import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  z-index: ${(props) => props.$zIndex};
`;

export const TabTop = styled.div`
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => props.$tabColour};
  color: ${(props) => props.$tabTextColour};
  width: 200px;
  height: 100px;
  position: sticky;
  left: ${(props) => props.$tabIndentInPixels + 'px'};
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-color: black;
  border-width: 1px;
  display: flex;
  vertical-align: middle;
  font-size: 35pt;
  z-index: ${(props) => props.$zIndex};
  top: 0;

  &:hover {
    cursor: pointer;

    p {
      color: black;
    }
  }
`;

export const TabSpace = styled.div`
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom-style: solid;
  border-color: lightgray;
  border-width: 1px;
  top: 0;

  z-index: ${(props) => props.$zIndex};
`;

export const TabTopText = styled.p`
  text-align: center;
  display: block;
  width: 100%;
  background-color: transparent;
  color: ${(props) => props.$tabTextColour};

  z-index: ${(props) => props.$zIndex};

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export const TabBody = styled.div`
  background-color: ${(props) => props.$tabColour};
  position: relative;
  width: 100%;
  min-height: 100%;
  border-style: solid;
  border-top-style: none;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: none;
  border-width: 1px;
  padding-left: 15px;
  z-index: ${(props) => props.$zIndex};
  * {
    position: relative;
  }
`;

export const TabRow = styled.div`
  display: inline-block;
  top: 0;
`;

/* 
  background-color: ${({ $isTop }) => {
    $isTop == true ? 'yellow' : 'pink';
  }};
  color: ${({ $isTop }) => {
    $isTop == true ? 'pink' : 'yellow';
  }};
*/
