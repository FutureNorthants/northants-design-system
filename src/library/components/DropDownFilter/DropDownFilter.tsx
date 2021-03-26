
import React, {useState} from "react";

import { DropDownFilterProps } from "./DropDownFilter.types";
import * as Styles from "./DropDownFilter.styles";

import { NewsArticleFilterFields } from "./../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordionText"

import {handleParams} from './../../helpers/url-helpers.js';
import DropDownSelect from "../DropDownSelect/DropDownSelect";

const DropDownFilter: React.FC<DropDownFilterProps> = ({ label, options, selected}) => {

    const [value, setValue] = useState(selected);
    
    const optionPicked = (e) => {
        setValue(e.target.value)
        handleParams('news', [{key: NewsArticleFilterFields.services.queryParamKey, value: e.target.value}]);
    }

    let labelHidden = (label === null) ? true : false;
    return (
        <DropDownSelect label={label} options={options} onChange={optionPicked} selected={value} />
)};

export default DropDownFilter;

