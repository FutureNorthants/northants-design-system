
import React from "react";

import { CheckboxListFilterProps } from "./CheckboxListFilter.types";
import * as Styles from "./CheckboxListFilter.styles";

const CheckboxListFilter: React.FC<CheckboxListFilterProps> = ({ options }) => (
    <Styles.Container data-testid="CheckboxListFilter" className="govuk-form-group">

<fieldset className="govuk-fieldset" aria-describedby="waste-hint">
    <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 className="govuk-fieldset__heading">
        Which types of waste do you transport?
      </h1>
    </legend>
    <div id="waste-hint" className="govuk-hint">
      Select all that apply.
    </div>
    <div className="govuk-checkboxes">
    {options.map((option, i) => 
            <div className="govuk-checkboxes__item" key={i}>
                <input className="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value={option.value} />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="waste">
                {option.title}
                </label>
            </div>
        )}
    </div>

  </fieldset>
    
    
    </Styles.Container>
);

export default CheckboxListFilter;

