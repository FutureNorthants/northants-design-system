import React, { useState } from 'react';
import { DropDownSelectProps } from './DropDownSelect.types';
import * as Styles from './DropDownSelect.styles';
import HintText from '../HintText/HintText';

const DropDownSelect: React.FunctionComponent<DropDownSelectProps> = ({
  id,
  label,
  options,
  onChange,
  selected,
  hideLabel = false,
  boldLabel = false,
  hintText,
}) => {
  return (
    <Styles.Container>
      <Styles.Label htmlFor={id} $hideLabel={hideLabel} $boldLabel={boldLabel}>
        {label}
      </Styles.Label>
      {hintText && <HintText text={hintText} />}
      <Styles.Select id={id} name={id} onChange={onChange && onChange} defaultValue={selected && selected}>
        {options.map((option, i) => (
          <Styles.Option key={i} value={option.value}>
            {option.title}
          </Styles.Option>
        ))}
      </Styles.Select>
    </Styles.Container>
  );
};

export default DropDownSelect;
