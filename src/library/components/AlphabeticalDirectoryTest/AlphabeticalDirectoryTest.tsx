import React from 'react';

import {
  AlphabeticalDirectoryTestProps,
  AlphabeticalDirectoryTestItem,
  AlphabeticalDirectoryTestHeader,
  AlphabeticalDirectoryTestListItem,
} from './AlphabeticalDirectoryTest.types';

import * as Styles from './AlphabeticalDirectoryTest.styles';
import './AlphabeticalDirectoryTest.css';

const AlphabeticalDirectoryTest: React.FunctionComponent<AlphabeticalDirectoryTestProps> = (args) => {
  return (
    <Styles.Container>
      <ul>
        <AlphabeticalDirectoryTestListItem>
          <AlphabeticalDirectoryTestHeader>Strong Header Text #1</AlphabeticalDirectoryTestHeader>
        </AlphabeticalDirectoryTestListItem>
        <AlphabeticalDirectoryTestListItem>
          <AlphabeticalDirectoryTestItem>Strong Item Text #1!</AlphabeticalDirectoryTestItem>
        </AlphabeticalDirectoryTestListItem>
        <AlphabeticalDirectoryTestListItem>
          <AlphabeticalDirectoryTestHeader>Strong Header Text #2</AlphabeticalDirectoryTestHeader>
        </AlphabeticalDirectoryTestListItem>
        <AlphabeticalDirectoryTestListItem>
          <AlphabeticalDirectoryTestItem>Strong Item Text #2!</AlphabeticalDirectoryTestItem>
        </AlphabeticalDirectoryTestListItem>
      </ul>
    </Styles.Container>
  );
};

export default AlphabeticalDirectoryTest;
