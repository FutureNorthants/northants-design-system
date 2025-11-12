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
  value = undefined,
  hasBottomMargin = false,
  hasBoldLabel = false,
  isFullWidth = false,
}) => {
  return (
    <Styles.Container $isFullWidth={isFullWidth}>
      <Styles.Label htmlFor={id} $hideLabel={hideLabel} $hasBoldLabel={hasBoldLabel}>
        {label}
      </Styles.Label>
      {errorText && <Styles.ErrorText id={`${id}Error`}>{errorText}</Styles.ErrorText>}
      {typeof value !== 'undefined' ? (
        <Styles.Select
          id={id}
          name={id}
          onChange={onChange && onChange}
          value={value}
          $isErrored={isErrored}
          $hasBottomMargin={hasBottomMargin}
          $isFullWidth={isFullWidth}
        >
          {options.map((option, i) => (
            <Styles.Option key={i} value={option.value}>
              {option.title}
            </Styles.Option>
          ))}
        </Styles.Select>
      ) : (
        <Styles.Select
          id={id}
          name={id}
          onChange={onChange && onChange}
          defaultValue={selected && selected}
          $isErrored={isErrored}
          $isFullWidth={isFullWidth}
        >
          {options.map((option, i) => (
            <Styles.Option key={i} value={option.value}>
              {option.title}
            </Styles.Option>
          ))}
        </Styles.Select>
      )}
    </Styles.Container>
  );
};

export default DropDownSelect;
