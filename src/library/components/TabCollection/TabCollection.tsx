import React, { useState } from 'react';

import { TabCollectionContentProps, TabCollectionProps } from './TabCollection.types';
import * as Styles from './TabCollection.styles';
import Tab from '../Tab/Tab';

const TabCollection: React.FunctionComponent<TabCollectionProps> = ({ tabCollectionContents }) => {
  const [zIndices, setZIndices] = useState(tabCollectionContents.map((item, index) => index));

  return (
    <Styles.Container data-testid="TabCollection">
      {tabCollectionContents.map((item, index) => (
        <Tab
          tabName={item.tabName}
          tabIndex={index}
          activeTabIndex={0}
          tabSizeInPixels={200}
          tabColour={item.tabColour}
          tabTextColour={item.tabTextColour}
          zIndex={zIndices[index]}
          onClickFn={() => {
            const newMax: number = Math.max(...zIndices) + 1;
            zIndices[index] = newMax;
            setZIndices(zIndices);
            alert('Setting index to: ' + newMax);
          }}
        >
          {item.tabContents}
        </Tab>
      ))}
    </Styles.Container>
  );
};

export default TabCollection;

/*

const TabCollection: React.FunctionComponent<TabCollectionProps> = ({ tabNames, children }) => (
  <Styles.Container data-testid="TabCollection">
    {Children.map(children, (item: React.ReactElement, index: number) => (
      <Tab
        tabName={tabNames[index]}
        tabIndex={index}
        activeTabIndex={0}
        tabSizeInPixels={30}
        tabColour="yellow"
        tabTextColour="black"
        zIndex={index}
      >
        {item}
      </Tab>
    ))}
  </Styles.Container>
);

export default TabCollection;
*/
