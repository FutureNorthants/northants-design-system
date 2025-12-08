import React, { useId } from 'react';
import { RadioCheckboxInputProps } from './RadioCheckboxInput.types';
import * as Styles from './RadioCheckboxInput.styles';

const RadioCheckboxInput: React.FunctionComponent<RadioCheckboxInputProps> = ({
  singleSelection,
  value,
  name,
  onChange,
  checked,
  label,
  isErrored = false,
  isDisabled = false,
}) => {
  const id = useId();

  return (
    <Styles.Container data-testid="RadioCheckboxInput" $isErrored={isErrored}>
      <Styles.Category>
        <Styles.CategoryInput
          type={singleSelection ? 'radio' : 'checkbox'}
          value={value}
          id={id}
          name={name}
          onClick={onChange}
          defaultChecked={checked}
          disabled={isDisabled}
        />
        <Styles.CategoryInputLabel $isChecked={checked} htmlFor={id} $singleSelection={singleSelection}>
          {label}
        </Styles.CategoryInputLabel>
      </Styles.Category>
    </Styles.Container>
  );
};

export default RadioCheckboxInput;
