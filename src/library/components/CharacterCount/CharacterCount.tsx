import React, { useEffect, useState } from 'react';
import { CharacterCountProps } from './CharacterCount.types';
import * as Styles from './CharacterCount.styles';

const CharacterCount: React.FunctionComponent<CharacterCountProps> = ({ maxLength, input }) => {
  const [remaining, setRemaining] = useState(maxLength);

  useEffect(() => {
    const calculatedRemaining = maxLength - input.length;
    setRemaining(calculatedRemaining < 0 ? 0 : calculatedRemaining);
  }, [input]);

  return (
    <Styles.Container data-testid="CharacterCount">
      <Styles.Count aria-live="polite">You have {remaining} characters remaining.</Styles.Count>
    </Styles.Container>
  );
};

export default CharacterCount;
