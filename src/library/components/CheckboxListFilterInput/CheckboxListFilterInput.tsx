import React from 'react';

import { CheckboxListFilterInputProps } from './CheckboxListFilterInput.types';
import * as Styles from './CheckboxListFilterInput.styles';

const CheckboxListFilterInput: React.FunctionComponent<CheckboxListFilterInputProps> = ({
  id,
  name = '',
  value = false,
  setCheckboxState,
  title = '',
  label = '',
  hint = '',
  hintId = 'hint',
}) => {
  let titleHidden = title === '';
  let hintHidden = hint === '';

  const backupName = Math.random().toString(36).substring(7);

  return (
    <Styles.Container data-testid="CheckboxListFilter">
      <Styles.Legend $titleHidden={titleHidden} data-testid="CheckboxListFilterLegend">
        {title}
      </Styles.Legend>
      <Styles.Hint id={hintId} $hintHidden={hintHidden} data-testid="CheckboxListFilterHint">
        {hint}
      </Styles.Hint>
      <Styles.Checkboxes>
        <Styles.Checkbox>
          <Styles.CheckboxInput id={id} name={name ? name : backupName} type="checkbox" onChange={setCheckboxState} />
          <Styles.CheckboxLabel $isChecked={value} htmlFor={id}>
            {label}
          </Styles.CheckboxLabel>
        </Styles.Checkbox>
      </Styles.Checkboxes>
    </Styles.Container>
  );
};

export default CheckboxListFilterInput;

/* 

              value={value}
              checked={value}

      <Styles.CheckboxInput id={id} name={name} type="checkbox" onChange={onChange} />



            



      </Styles.Checkbox>



      */
