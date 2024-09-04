import React, { useState } from 'react';
import { DropDownFilterProps } from './DropDownFilter.types';
import * as Styles from './DropDownFilter.styles';
import { NewsArticleFilterFields } from './../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordionText';
import { handleParams } from './../../helpers/url-helpers.js';
import DropDownSelect from '../DropDownSelect/DropDownSelect';

const DropDownFilter: React.FunctionComponent<DropDownFilterProps> = ({
  id,
  label,
  options,
  selected,
  hideLabel = false,
  filterKey = 'services',
  hasMargin = false,
}) => {
  const [value, setValue] = useState(selected);

  const optionPicked = (e) => {
    setValue(e.target.value);
    handleParams('news', [{ key: NewsArticleFilterFields[filterKey].queryParamKey, value: e.target.value }], ['page']);
  };

  return (
    <Styles.Container $hasMargin={hasMargin}>
      <DropDownSelect
        id={id}
        label={label}
        options={options}
        onChange={optionPicked}
        selected={value}
        hideLabel={hideLabel}
      />
    </Styles.Container>
  );
};

export default DropDownFilter;
