import React, { useId } from 'react';
import { RadioCheckboxInputProps } from './RadioCheckboxInput.types';
import * as Styles from './RadioCheckboxInput.styles';

const RadioCheckboxInput: React.FC<RadioCheckboxInputProps> = ({
  singleSelection,
  value,
  name,
  onChange,
  checked,
  label,
}) => {
  const id = useId();

  return (
    <Styles.Container data-testid="RadioCheckboxInput">
      <Styles.Category>
        <Styles.CategoryInput
          type={singleSelection ? 'radio' : 'checkbox'}
          value={value}
          id={id}
          name={name}
          onChange={onChange}
          defaultChecked={checked}
        />
        <Styles.CategoryInputLabel isChecked={checked} htmlFor={id} singleSelection={singleSelection}>
          {label}
        </Styles.CategoryInputLabel>
      </Styles.Category>
    </Styles.Container>
  );
};

export default RadioCheckboxInput;
