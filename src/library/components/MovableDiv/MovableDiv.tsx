import React, { useState } from 'react';

import { MovableDivProps } from './MovableDiv.types';
import * as Styles from './MovableDiv.styles';

const MovableDiv: React.FunctionComponent<MovableDivProps> = ({ foo }) => {
  const [dragStartCoords, setDragStartCoords] = useState({ x: 0, y: 0 });
  const [dragEndCoords, setDragEndCoords] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [colourNumber, setColourNumber] = useState(0);

  const handleDragStart = (e) => {
    e.preventDefault();
    //alert('MouseDown!');
    setDragStartCoords({ x: e.screenX, y: e.screenY });
    console.log('dragging started...');
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    //alert('Mouse Up!');
    //console.log('dragging ended...');
    setDragEndCoords({ x: e.screenX, y: e.screenY });

    const offsetX = dragEndCoords.x - dragStartCoords.x;
    const offsetY = dragEndCoords.y - dragStartCoords.y;

    //alert('dragBegin.x: ' + dragStartCoords.x + '   dragBegin.Y:' + dragStartCoords.y);
    //alert('dragEnd.x: ' + dragEndCoords.x + '   dragEnd.Y:' + dragEndCoords.y);
    //alert('offsetX: ' + offsetX + '   offsetY:' + offsetY);
    //alert('offsetX: ' + offsetX + '   offsetY:' + offsetY);

    //setOffset({ x: offsetX, y: offsetY });
  };

  const handleClick = (e) => {
    setColourNumber(colourNumber + 1);
  };

  return (
    <Styles.Container data-testid="MovableDiv">
      <Styles.StylisedDiv
        draggable="true"
        onClick={(e) => handleClick(e)}
        onMouseUp={(e) => handleDragEnd(e)}
        $colourNumber={colourNumber}
        //$offset={offset}
        $dragEndCoords={dragEndCoords}
        id="draggable-div"
      ></Styles.StylisedDiv>
    </Styles.Container>
  );
};

export default MovableDiv;

/*

        ondragstart={(e) => {
          handleDragStart(e);
        }}
        ondragend={(e) => handleDragEnd(e)}

*/
