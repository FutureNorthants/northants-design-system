import React, { useState } from 'react';

import { DropDownSelectProps } from './DropDownSelect.types';
import * as Styles from './DropDownSelect.styles';

import { handleParams } from '../../helpers/url-helpers.js';

const DropDownSelect: React.FC<DropDownSelectProps> = ({
  id,
  label,
  options,
  onChange,
  selected,
  hideLabel = false,
  isErrored = false,
  errorText,
}) => {
  return (
    <Styles.Container>
      <Styles.Label htmlFor={id} $hideLabel={hideLabel}>
        {label}
      </Styles.Label>
      {errorText && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
      <Styles.Select
        id={id}
        name={id}
        onChange={onChange && onChange}
        defaultValue={selected && selected}
        $isErrored={isErrored}
      >
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
