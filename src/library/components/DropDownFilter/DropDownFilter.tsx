
import React, {useState} from "react";

import { DropDownFilterProps } from "./DropDownFilter.types";
import * as Styles from "./DropDownFilter.styles";

import { NewsArticleFilterFields } from "./../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordionText"

import {handleParams} from './../../helpers/url-helpers.js';
import DropDownSelect from "../DropDownSelect/DropDownSelect";

const DropDownFilter: React.FC<DropDownFilterProps> = ({ id, label, options, selected, hideLabel=false}) => {

    const [value, setValue] = useState(selected);
    
    const optionPicked = (e) => {
        setValue(e.target.value)
        handleParams('news', [{key: NewsArticleFilterFields.services.queryParamKey, value: e.target.value}]);
    }

    return (
        <DropDownSelect id={id} label={label} options={options} onChange={optionPicked} selected={value} hideLabel={hideLabel} />
)};

export default DropDownFilter;

