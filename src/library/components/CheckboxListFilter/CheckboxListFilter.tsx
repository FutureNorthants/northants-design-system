import React, { useState } from 'react';
import { CheckboxListFilterProps } from './CheckboxListFilter.types';
import * as Styles from './CheckboxListFilter.styles';
import { NewsArticleFilterFields } from './../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordionText';
import { handleParams } from './../../helpers/url-helpers';

const CheckboxListFilter: React.FunctionComponent<CheckboxListFilterProps> = ({
  options,
  checked,
  label = null,
  hint = null,
  displayLegend,
  hintId = 'hint',
  onChange,
}) => {
  let labelHidden = label === null || !displayLegend ? true : false;
  let hintHidden = hint === null ? true : false;

  const setupCheckboxes = () => {
    return options.map((option) => ({ ...option, checked: checked.includes(option.value) ? true : false }));
  };

  const [checkboxState, setCheckboxState] = useState(setupCheckboxes());

  const optionChecked = (e) => {
    const checkedVal = e.target.value;
    let newCheckboxState = [...checkboxState];

    // update the state so it looks correct
    newCheckboxState.find((val) => {
      if (val.value === checkedVal) {
        val.checked = !val.checked;
      }
    });
    setCheckboxState(newCheckboxState);

    // take our new state and send a smooshed list to the handleParams method
    let checked = [...checkboxState];
    checked = newCheckboxState.filter((c) => c.checked === true);

    let articleTypes = checked.map((c) => c.value).join(',');
    if (onChange) {
      onChange(articleTypes);
    } else {
      handleParams('news', [{ key: NewsArticleFilterFields.articleType.queryParamKey, value: articleTypes }], ['page']);
    }
  };

  const backupLabel = Math.random().toString(36).substring(7);
  return (
    <Styles.Container data-testid="CheckboxListFilter">
      <Styles.Fieldset aria-describedby={hintId}>
        <Styles.Legend $labelHidden={labelHidden} data-testid="CheckboxListFilterLegend">
          {label}
        </Styles.Legend>
        <Styles.Hint id={hintId} $hintHidden={hintHidden} data-testid="CheckboxListFilterHint">
          {hint}
        </Styles.Hint>
        <Styles.Checkboxes>
          {checkboxState.map((option, i) => (
            <Styles.Checkbox key={i}>
              <Styles.CheckboxInput
                id={option.value}
                name={labelHidden ? backupLabel : label}
                type="checkbox"
                onChange={optionChecked}
                value={option.value}
                checked={option.checked}
              />
              <Styles.CheckboxLabel $isChecked={option.checked} htmlFor={option.value}>
                {option.title}
              </Styles.CheckboxLabel>
            </Styles.Checkbox>
          ))}
        </Styles.Checkboxes>
      </Styles.Fieldset>
    </Styles.Container>
  );
};

export default CheckboxListFilter;
